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
import { ScrollView } from 'react-native';
var ScrollViewAtom = function (_a) {
    var scrollViewRef = _a.scrollViewRef, props = __rest(_a, ["scrollViewRef"]);
    return (<ScrollView ref={scrollViewRef} {...props} style={[props.style, {}]}>{props.children}</ScrollView>);
};
export default ScrollViewAtom;
//# sourceMappingURL=ScrollViewAtom.js.map