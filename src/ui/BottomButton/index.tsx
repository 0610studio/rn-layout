import React, { useEffect } from "react";
import { ActivityIndicator, Keyboard, Platform, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const DEFAULT_MARGIN_X = 20;
const DEFAULT_MARGIN_TOP = 0;
const DEFAULT_MARGIN_BOTTOM = 20;
const DEFAULT_BORDER_RADIUS = 14;
const DURATION = { duration: 250 };

interface Props {
    buttonStyle?: TouchableOpacityProps['style'];
    labelComponent: React.ReactNode;
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    onPress: () => void;
}

const BottomButton = ({
    labelComponent,
    loadingComponent = <ActivityIndicator />,
    buttonStyle = {},
    disabled = false,
    isLoading = false,
    onPress,
}: Props) => {
    const isKeyboardVisible = useSharedValue(0);
    const keyboardHeight = useSharedValue(0);

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
            [DEFAULT_MARGIN_BOTTOM, Platform.OS === 'ios' ? (keyboardHeight.value / 3) + 5 : 0],
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
            <TouchableOpacity
                activeOpacity={0.7}
                style={[buttonStyle, styles.touchContainer]}
                onPress={onPress}
                disabled={disabled || isLoading}
            >

                {
                    isLoading
                        ? loadingComponent
                        : labelComponent
                }
            </TouchableOpacity>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
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
    },
});

export default BottomButton;