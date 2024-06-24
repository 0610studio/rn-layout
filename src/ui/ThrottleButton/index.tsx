import React, { useCallback, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";

const DEFAULT_BORDER_RADIUS = 14;

interface Props {
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    onPress: () => Promise<any>;
    labelComponent: React.ReactNode;
    style?: TouchableOpacityProps['style'];
}

const ThrottleButton = ({
    loadingComponent = <ActivityIndicator />,
    disabled = false,
    labelComponent,
    onPress,
    style = {},
}: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isThrottle = useRef<boolean>(false);

    const handlePress = useCallback(async () => {
        if (isThrottle.current) return;
        isThrottle.current = true;
        setIsLoading(true);
        try {
            await onPress();
        } finally {
            setIsLoading(false);
            isThrottle.current = false;
        }
    }, [onPress]);

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, style]}
            onPress={handlePress}
            disabled={disabled || isLoading}
        >
            {
                isLoading
                    ? loadingComponent
                    : labelComponent
            }
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DEFAULT_BORDER_RADIUS,
        overflow: 'hidden',
        flexDirection: 'row'
    },
});

export default ThrottleButton;