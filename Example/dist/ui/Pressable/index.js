var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { Pressable as RnPressable } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import AnimatedWrapper from "../atoms/AnimatedWrapper";
var DEFAULT_DURATION = { duration: 100 };
;
var Pressable = function (_a) {
    var onPress = _a.onPress, onLongPress = _a.onLongPress, _b = _a.pressedBackgroundColor, pressedBackgroundColor = _b === void 0 ? 'rgba(180, 180, 180, 0.1)' : _b, _c = _a.pressedBackgroundBorderRadius, pressedBackgroundBorderRadius = _c === void 0 ? 16 : _c, _d = _a.flex, flex = _d === void 0 ? undefined : _d, _e = _a.minWidth, minWidth = _e === void 0 ? undefined : _e, props = __rest(_a, ["onPress", "onLongPress", "pressedBackgroundColor", "pressedBackgroundBorderRadius", "flex", "minWidth"]);
    var isButtonPress = useSharedValue(0);
    var boxAnimation = useAnimatedStyle(function () {
        var scale = interpolate(isButtonPress.value, [0, 1], [1, 0.95], 'clamp');
        return {
            transform: [{ scale: withTiming(scale, DEFAULT_DURATION) }],
        };
    });
    return (<AnimatedWrapper style={{ minWidth: minWidth }}>
            <RnPressable onPress={onPress} onLongPress={onLongPress} style={function (_a) {
            var pressed = _a.pressed;
            pressed ? isButtonPress.value = 1 : isButtonPress.value = 0;
            return {
                backgroundColor: pressed ? pressedBackgroundColor : 'transparent',
                borderRadius: pressedBackgroundBorderRadius,
                flex: flex,
                minWidth: minWidth
            };
        }}>
                <Animated.View style={[props.style, boxAnimation]}>
                    {props.children}
                </Animated.View>
            </RnPressable>
        </AnimatedWrapper>);
};
export default Pressable;
//# sourceMappingURL=index.js.map