import { useCallback, useEffect, useMemo, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { BoxStyle } from "..";

const useTextField = ({
    value,
    fontSize,
    status,
    borderColor,
    focusColor,
    labelColor,
    placeHolderColor,
    errorColor,
    onChangeText,
    boxStyle,
    isTextArea
}: {
    value: string;
    fontSize: number;
    status: 'default' | 'error';
    borderColor: string;
    focusColor: string;
    labelColor: string;
    placeHolderColor: string;
    errorColor: string;
    onChangeText: any;
    boxStyle: BoxStyle;
    isTextArea: boolean;
}) => {
    const [focus, setFocus] = useState<boolean>(false);
    const labelSharedValue = useSharedValue(0);
    const boxHeight = useSharedValue(0);

    useEffect(() => {
        if (labelSharedValue.value === 0 && value) {
            labelSharedValue.value = 1;
        }
    }, [value]);

    const labelAnimation = useAnimatedStyle(() => {
        const labelSize = interpolate(
            labelSharedValue.value,
            [0, 1],
            [fontSize + ((boxStyle === 'apple') ? 5 : 0), (boxStyle === 'apple') ? 10 : 12],
            "clamp"
        );
        const topMargin = interpolate(
            labelSharedValue.value,
            [0, 1],
            [
                isTextArea ? 12 : 0,
                isTextArea ? -12 : -(boxHeight.value / 2) - 1 + (boxStyle === 'apple' ? 18 : 0)
            ],
            "clamp"
        );

        return {
            top: withTiming(topMargin, { duration: 150 }),
            fontSize: withTiming(labelSize, { duration: 150 }),
        };
    });

    const onLayout = useCallback((event: LayoutChangeEvent) => {
        let { height } = event.nativeEvent.layout;
        boxHeight.value = height;
    }, []);

    const handleFocus = useCallback(() => {
        setFocus(true);
        labelSharedValue.value = 1;
    }, [setFocus, labelSharedValue]);

    const handleBlur = useCallback(() => {
        setFocus(false);
        if (!value) labelSharedValue.value = 0;
    }, [setFocus, value, labelSharedValue]);

    const handleChangeText = useCallback((text: string) => {
        onChangeText?.(text);
    }, [onChangeText]);

    const statusColor = useMemo(() => (
        status === 'error' ? errorColor : focus ? focusColor : borderColor
    ), [status, errorColor, focus, focusColor, borderColor]);

    const labelStatusColor = useMemo(() => (
        status === 'error' ? errorColor : focus ? focusColor : !value ? placeHolderColor : labelColor
    ), [status, errorColor, focus, focusColor, value, placeHolderColor, labelColor]);

    return {
        focus,
        labelAnimation,
        statusColor,
        labelStatusColor,
        handleBlur,
        handleFocus,
        handleChangeText,
        onLayout
    };
}

export default useTextField;