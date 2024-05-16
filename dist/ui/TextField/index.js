var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, } from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import useTextField from './model/useTextField';
var TextField = function (_a) {
    var _b = _a.status, status = _b === void 0 ? 'default' : _b, value = _a.value, onChangeText = _a.onChangeText, _c = _a.label, label = _c === void 0 ? 'Placeholder' : _c, _d = _a.labelColor, labelColor = _d === void 0 ? '#757575' : _d, _e = _a.placeHolderColor, placeHolderColor = _e === void 0 ? '#B1B1B1' : _e, _f = _a.labelBgColor, labelBgColor = _f === void 0 ? 'white' : _f, _g = _a.fontSize, fontSize = _g === void 0 ? 17 : _g, _h = _a.borderWidth, borderWidth = _h === void 0 ? 1.2 : _h, _j = _a.borderColor, borderColor = _j === void 0 ? '#E7EDF0' : _j, _k = _a.focusColor, focusColor = _k === void 0 ? '#007AFF' : _k, _l = _a.errorColor, errorColor = _l === void 0 ? '#FF3B30' : _l, _m = _a.borderRadius, borderRadius = _m === void 0 ? 10 : _m, _o = _a.paddingHorizontal, paddingHorizontal = _o === void 0 ? 10 : _o, errorMessage = _a.errorMessage, fontFamily = _a.fontFamily, textInputProps = _a.textInputProps, _p = _a.boxStyle, boxStyle = _p === void 0 ? 'outline' : _p;
    var _q = useTextField({
        fontSize: fontSize,
        status: status,
        borderColor: borderColor,
        focusColor: focusColor,
        labelColor: labelColor,
        placeHolderColor: placeHolderColor,
        errorColor: errorColor,
        value: value
    }), focus = _q.focus, setFocus = _q.setFocus, labelSharedValue = _q.labelSharedValue, labelAnimation = _q.labelAnimation, statusColor = _q.statusColor, labelStatusColor = _q.labelStatusColor, onLayout = _q.onLayout;
    return (<Animated.View entering={FadeInDown} exiting={FadeOut}>
      <View style={__assign(__assign({ width: '100%', justifyContent: 'center' }, boxStyle === 'outline' ? { borderWidth: borderWidth } : { borderBottomWidth: borderWidth }), { borderColor: statusColor, borderRadius: borderRadius, paddingHorizontal: paddingHorizontal })} onLayout={onLayout}>
        <TextInput {...textInputProps} style={[
            { paddingVertical: 14 },
            textInputProps === null || textInputProps === void 0 ? void 0 : textInputProps.style,
            { fontSize: fontSize, width: '100%', paddingRight: 25, fontFamily: fontFamily }
        ]} value={value} onFocus={function () {
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
          <Animated.Text style={[
            labelAnimation,
            {
                fontSize: fontSize,
                color: labelStatusColor,
                left: paddingHorizontal,
                backgroundColor: labelBgColor,
                paddingHorizontal: 5,
                paddingVertical: 2,
                textAlignVertical: 'center',
                fontFamily: fontFamily
            }
        ]}>
            {label}
          </Animated.Text>
        </View>

        {value && focus && (<TouchableOpacity style={{ position: 'absolute', padding: 3, right: 15, borderRadius: 30, backgroundColor: '#e6e6e6', justifyContent: 'center', alignItems: 'center' }} hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }} onPress={function () { onChangeText === null || onChangeText === void 0 ? void 0 : onChangeText(''); }}>
              <Image source={require('../../assets/ic_x.png')} style={{ width: 14, height: 14, tintColor: '#5E696E' }}/>
            </TouchableOpacity>)}
      </View>

      {status === 'error' && errorMessage && (<View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 3, marginTop: 5 }}>
            <View style={{ width: 18, height: 18, justifyContent: 'center', alignItems: 'center', borderRadius: 30, backgroundColor: errorColor }}>
              <Text allowFontScaling={false} style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 11, fontFamily: fontFamily }}>
                {"!"}
              </Text>
            </View>

            <Text allowFontScaling={false} style={{ marginLeft: 5, fontSize: 14, color: errorColor, fontFamily: fontFamily }}>
              {errorMessage}
            </Text>
          </View>)}
    </Animated.View>);
};
export default TextField;
//# sourceMappingURL=index.js.map