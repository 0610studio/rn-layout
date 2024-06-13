import React, { useCallback, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

const DEFAULT_MARGIN_X = 0;
const DEFAULT_MARGIN_TOP = 0;
const DEFAULT_MARGIN_BOTTOM = 20;
const DEFAULT_BORDER_RADIUS = 14;

interface Props {
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    // ---
    primaryOnPress: () => Promise<any>;
    primaryLabelComponent: React.ReactNode;
    primaryButtonStyle?: TouchableOpacityProps['style'];
}

const ThrottleButton = ({
    loadingComponent = <ActivityIndicator />,
    disabled = false,
    // ---
    primaryLabelComponent,
    primaryOnPress,
    primaryButtonStyle = {},
}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isThrottle = useRef<boolean>(false);

    const handlePress = useCallback(async () => {
        if (isThrottle.current) return;
        isThrottle.current = true;
        setIsLoading(true);
        try {
            await primaryOnPress();
        } finally {
            setIsLoading(false);
            isThrottle.current = false;
        }
    }, [primaryOnPress]);

    return (
        <View style={[styles.container]}>
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
        </View>
    )
}


const styles = StyleSheet.create({
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
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

export default ThrottleButton;