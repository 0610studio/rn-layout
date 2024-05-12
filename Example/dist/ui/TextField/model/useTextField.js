import { useState } from "react";
import { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
var useTextField = function (_a) {
    var fontSize = _a.fontSize, status = _a.status, borderColor = _a.borderColor, focusColor = _a.focusColor, labelColor = _a.labelColor, errorColor = _a.errorColor;
    var _b = useState(false), focus = _b[0], setFocus = _b[1];
    var labelSharedValue = useSharedValue(0);
    var labelAnimation = useAnimatedStyle(function () {
        var labelSize = interpolate(labelSharedValue.value, [0, 1], [fontSize, 13], Extrapolate.CLAMP);
        var topMargin = interpolate(labelSharedValue.value, [0, 1], [0, -31], Extrapolate.CLAMP);
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