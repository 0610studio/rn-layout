import React, { useEffect, useState } from "react";
import { ActivityIndicator, Keyboard, Platform, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { withPromise } from "../../model/utils";

const DEFAULT_MARGIN_X = 20;
const DEFAULT_MARGIN_TOP = 0;
const DEFAULT_MARGIN_BOTTOM = 20;
const DEFAULT_BORDER_RADIUS = 14;
const DURATION = { duration: 250 };

interface Props {
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    // ---
    primaryOnPress: () => Promise<any>;
    primaryLabelComponent: React.ReactNode;
    primaryButtonStyle?: TouchableOpacityProps['style'];
    // ---
    secondaryOnPress?: () => void;
    secondaryLabelComponent?: React.ReactNode;
    secondaryButtonStyle?: TouchableOpacityProps['style'];
}

const BottomButton = ({
    loadingComponent = <ActivityIndicator />,
    disabled = false,
    // ---
    primaryLabelComponent,
    primaryOnPress,
    primaryButtonStyle = {},
    // ---
    secondaryOnPress,
    secondaryLabelComponent,
    secondaryButtonStyle= {}
}: Props) => {
    const isKeyboardVisible = useSharedValue(0);
    const keyboardHeight = useSharedValue(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handlePress = withPromise(async () => {
        setIsLoading(true);
        try {
            await primaryOnPress();
        } finally {
            setIsLoading(false);
        }
    });

    // ** 소프트 키보드 핸들링
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', (event) => {
            keyboardHeight.value = event.endCoordinates.height; // 키보드 높이
            isKeyboardVisible.value = 1;
        });

        const keyboardDidHideListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', () => {
            isKeyboardVisible.value = 0;
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        const getBottom = interpolate(
            isKeyboardVisible.value,
            [0, 1],
            [DEFAULT_MARGIN_BOTTOM,  0],
            // [DEFAULT_MARGIN_BOTTOM, Platform.OS === 'ios' ? (keyboardHeight.value / 3) + 5 : 0],
            'clamp',
        );

        const getMargin = interpolate(
            isKeyboardVisible.value,
            [0, 1],
            [DEFAULT_MARGIN_X, 0],
            'clamp',
        );

        const getRadius = interpolate(
            isKeyboardVisible.value,
            [0, 1],
            [DEFAULT_BORDER_RADIUS, 0],
            'clamp',
        );

        return {
            marginBottom: withTiming(getBottom, DURATION),
            marginLeft: withTiming(getMargin, DURATION),
            marginRight: withTiming(getMargin, DURATION),
            borderRadius: withTiming(getRadius, DURATION),
        };
    });


    return (
        <Animated.View
            style={[styles.container, animatedStyle]}
        >
            {
                secondaryLabelComponent && (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={[secondaryButtonStyle, styles.touchSecondaryContainer]}
                        onPress={secondaryOnPress}
                    >
                        {secondaryLabelComponent}
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity
                activeOpacity={0.7}
                style={[primaryButtonStyle, styles.touchContainer]}
                onPress={handlePress}
                disabled={disabled || isLoading}
            >

                {
                    isLoading
                        ? loadingComponent
                        : primaryLabelComponent
                }
            </TouchableOpacity>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    touchSecondaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DEFAULT_BORDER_RADIUS,
        marginTop: DEFAULT_MARGIN_TOP,
        marginBottom: DEFAULT_MARGIN_BOTTOM,
        marginLeft: DEFAULT_MARGIN_X,
        marginRight: DEFAULT_MARGIN_X,
        overflow: 'hidden',
        flexDirection: 'row'
    },
});

export default BottomButton;