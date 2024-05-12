import { useState } from "react";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const useTextField = ({
    fontSize,
    status,
    borderColor,
    focusColor,
    labelColor,
    errorColor
}: {
    fontSize: number;
    status: 'default' | 'error';
    borderColor: string;
    focusColor: string;
    labelColor: string;
    errorColor: string;
}) => {
    const [focus, setFocus] = useState<boolean>(false);
    const labelSharedValue = useSharedValue(0);

    const labelAnimation = useAnimatedStyle(() => {
        const labelSize = interpolate(
            labelSharedValue.value,
            [0, 1],
            [fontSize, 13],
            "clamp"
        );
        const topMargin = interpolate(
            labelSharedValue.value,
            [0, 1],
            [0, -31],
            "clamp"
        );

        return {
            top: withTiming(topMargin, { duration: 150 }),
            fontSize: withTiming(labelSize, { duration: 150 }),
        };
    });

    const statusColor =
        status === 'error' ? errorColor
            : focus ? focusColor
                : borderColor;

    const labelStatusColor =
        status === 'error' ? errorColor
            : focus ? focusColor
                : labelColor;
    return {
        focus,
        setFocus,
        labelSharedValue,
        labelAnimation,
        statusColor,
        labelStatusColor
    };
}

export default useTextField;