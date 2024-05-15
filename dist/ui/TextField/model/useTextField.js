import { useEffect, useState } from "react";
import { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
var useTextField = function (_a) {
    var value = _a.value, fontSize = _a.fontSize, status = _a.status, borderColor = _a.borderColor, focusColor = _a.focusColor, labelColor = _a.labelColor, errorColor = _a.errorColor;
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    var labelSharedValue = useSharedValue(0);
    useEffect(function () {
        if (labelSharedValue.value === 0 && value) {
            labelSharedValue.value = 1;
        }
    }, [value]);
    var labelAnimation = useAnimatedStyle(function () {
        var labelSize = interpolate(labelSharedValue.value, [0, 1], [fontSize, 12], "clamp");
        var topMargin = interpolate(labelSharedValue.value, [0, 1], [0, -28], "clamp");
        return {
            top: withTiming(topMargin, { duration: 150 }),
            fontSize: withTiming(labelSize, { duration: 150 }),
        };
    });
    var statusColor = status === 'error' ? errorColor
        : focus ? focusColor
            : borderColor;
    var labelStatusColor = status === 'error' ? errorColor
        : focus ? focusColor
            : labelColor;
    return {
        focus: focus,
        setFocus: setFocus,
        labelSharedValue: labelSharedValue,
        labelAnimation: labelAnimation,
        statusColor: statusColor,
        labelStatusColor: labelStatusColor
    };
};
export default useTextField;
//# sourceMappingURL=useTextField.js.map