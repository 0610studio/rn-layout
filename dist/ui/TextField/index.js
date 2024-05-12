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
import { Text, TextInput, TouchableOpacity, View, } from 'react-native';
import Animated from 'react-native-reanimated';
import useTextField from './model/useTextField';
var TextField = function (_a) {
    var _b = _a.status, status = _b === void 0 ? 'default' : _b, value = _a.value, onChangeText = _a.onChangeText, _c = _a.label, label = _c === void 0 ? 'Placeholder' : _c, _d = _a.labelColor, labelColor = _d === void 0 ? '#5E696E' : _d, _e = _a.labelBgColor, labelBgColor = _e === void 0 ? 'white' : _e, _f = _a.fontSize, fontSize = _f === void 0 ? 19 : _f, _g = _a.borderWidth, borderWidth = _g === void 0 ? 1.2 : _g, _h = _a.borderColor, borderColor = _h === void 0 ? '#E7EDF0' : _h, _j = _a.focusColor, focusColor = _j === void 0 ? '#007AFF' : _j, _k = _a.errorColor, errorColor = _k === void 0 ? '#FF3B30' : _k, _l = _a.borderRadius, borderRadius = _l === void 0 ? 10 : _l, _m = _a.paddingHorizontal, paddingHorizontal = _m === void 0 ? 14 : _m, errorMessage = _a.errorMessage, props = __rest(_a, ["status", "value", "onChangeText", "label", "labelColor", "labelBgColor", "fontSize", "borderWidth", "borderColor", "focusColor", "errorColor", "borderRadius", "paddingHorizontal", "errorMessage"]);
    var _o = useTextField({
        fontSize: fontSize,
        status: status,
        borderColor: borderColor,
        focusColor: focusColor,
        labelColor: labelColor,
        errorColor: errorColor
    }), focus = _o.focus, setFocus = _o.setFocus, labelSharedValue = _o.labelSharedValue, labelAnimation = _o.labelAnimation, statusColor = _o.statusColor, labelStatusColor = _o.labelStatusColor;
    return (<View>
      <View style={{ width: '100%', borderWidth: borderWidth, borderColor: statusColor, borderRadius: borderRadius, paddingHorizontal: paddingHorizontal, justifyContent: 'center' }}>
        <TextInput {...props} style={{ fontSize: fontSize, width: '100%', paddingVertical: 14, height: 58, paddingRight: 25 }} allowFontScaling={false} value={value} onFocus={function () {
            setFocus(true);
            labelSharedValue.value = 1;
        }} onBlur={function () {
            setFocus(false);
            if (!value)
                labelSharedValue.value = 0;
        }} onChangeText={function (text) {
            onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(text);
        }}/>

        <View pointerEvents="none" style={{ position: 'absolute' }}>
          <Animated.Text allowFontScaling={false} style={[
            labelAnimation,
            {
                fontSize: fontSize,
                color: labelStatusColor,
                left: paddingHorizontal,
                backgroundColor: labelBgColor,
                paddingHorizontal: 5,
                paddingVertical: 2,
                textAlignVertical: 'center',
            }
        ]}>
            {label}
          </Animated.Text>
        </View>

        {value && focus && (<TouchableOpacity style={{ position: 'absolute', width: 18, height: 18, right: 15, borderRadius: 30, backgroundColor: '#e6e6e6', justifyContent: 'center', alignItems: 'center' }} hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={function () { onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(''); }}>
              <Text allowFontScaling={false} style={{ fontSize: 8, color: '#5E696E', fontWeight: 'bold' }}>
                X
              </Text>
            </TouchableOpacity>)}
      </View>

      {status === 'error' && errorMessage && (<View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 3, marginTop: 5 }}>
            <View style={{ width: 18, height: 18, justifyContent: 'center', alignItems: 'center', borderRadius: 30, backgroundColor: errorColor }}>
              <Text allowFontScaling={false} style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 11 }}>
                {"!"}
              </Text>
            </View>

            <Text allowFontScaling={false} style={{ marginLeft: 5, fontSize: 14, color: errorColor }}>
              {errorMessage}
            </Text>
          </View>)}
    </View>);
};
export default TextField;
//# sourceMappingURL=index.js.map