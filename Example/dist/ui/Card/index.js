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
import React from 'react';
import Animated, { FadeInDown, useSharedValue, withTiming } from 'react-native-reanimated';
import { calculateRadius } from '../../model/utils';
;
var Card = function (_a) {
    var borderRadius = _a.borderRadius, props = __rest(_a, ["borderRadius"]);
    var calcRadius = useSharedValue(0);
    var handleLayout = function (event) {
        var _a = event.nativeEvent.layout, width = _a.width, height = _a.height;
        var calc = calculateRadius(width, height, borderRadius);
        calcRadius.value = withTiming(calc, { duration: 50 });
    };
    return (<Animated.View {...props} style={[props === null || props === void 0 ? void 0 : props.style, { borderRadius: calcRadius }]} onLayout={handleLayout} entering={FadeInDown}>
            {props.children}
        </Animated.View>);
};
export default Card;
//# sourceMappingURL=index.js.map