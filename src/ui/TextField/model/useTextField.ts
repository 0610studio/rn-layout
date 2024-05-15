import { useEffect, useState } from "react";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const useTextField = ({
    value,
    fontSize,
    status,
    borderColor,
    focusColor,
    labelColor,
    errorColor
}: {
    value: string;
    fontSize: number;
    status: 'default' | 'error';
    borderColor: string;
    focusColor: string;
    labelColor: string;
    errorColor: string;
}) => {
    const [focus, setFocus] = useState<boolean>(false);
    const labelSharedValue = useSharedValue(0);

    useEffect(() => {
        if (labelSharedValue.value === 0 && value) {
            labelSharedValue.value = 1;
        }
    }, [value]);

    const labelAnimation = useAnimatedStyle(() => {
        const labelSize = interpolate(
            labelSharedValue.value,
            [0, 1],
            [fontSize, 12],
            "clamp"
        );
        const topMargin = interpolate(
            labelSharedValue.value,
            [0, 1],
            [0, -28],
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