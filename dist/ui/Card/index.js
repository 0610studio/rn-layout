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
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
;
var Card = function (_a) {
    var _b = _a.borderRadius, borderRadius = _b === void 0 ? 14 : _b, props = __rest(_a, ["borderRadius"]);
    return (<Animated.View {...props} entering={FadeInDown} exiting={FadeOut} style={[
            { borderRadius: borderRadius },
            props === null || props === void 0 ? void 0 : props.style,
        ]}>
            {props.children}
        </Animated.View>);
};
export default Card;
//# sourceMappingURL=index.js.map