import React, { useEffect } from "react";
import { ActivityIndicator, Keyboard, Platform, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
var DEFAULT_MARGIN_X = 20;
var DEFAULT_MARGIN_TOP = 0;
var DEFAULT_MARGIN_BOTTOM = 20;
var DEFAULT_BORDER_RADIUS = 14;
var DURATION = { duration: 250 };
var BottomButton = function (_a) {
    var labelComponent = _a.labelComponent, _b = _a.loadingComponent, loadingComponent = _b === void 0 ? <ActivityIndicator /> : _b, _c = _a.buttonStyle, buttonStyle = _c === void 0 ? {} : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, onPress = _a.onPress;
    var isKeyboardVisible = useSharedValue(0);
    var keyboardHeight = useSharedValue(0);
    useEffect(function () {
        var keyboardDidShowListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow', function (event) {
            keyboardHeight.value = event.endCoordinates.height;
            isKeyboardVisible.value = 1;
        });
        var keyboardDidHideListener = Keyboard.addListener(Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide', function () {
            isKeyboardVisible.value = 0;
        });
        return function () {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    var animatedStyle = useAnimatedStyle(function () {
        var getBottom = interpolate(isKeyboardVisible.value, [0, 1], [DEFAULT_MARGIN_BOTTOM, Platform.OS === 'ios' ? (keyboardHeight.value / 3) + 5 : 0], Extrapolation.CLAMP);
        var getMargin = interpolate(isKeyboardVisible.value, [0, 1], [DEFAULT_MARGIN_X, 0], Extrapolation.CLAMP);
        var getRadius = interpolate(isKeyboardVisible.value, [0, 1], [DEFAULT_BORDER_RADIUS, 0], Extrapolation.CLAMP);
        return {
            marginBottom: withTiming(getBottom, DURATION),
            marginLeft: withTiming(getMargin, DURATION),
            marginRight: withTiming(getMargin, DURATION),
            borderRadius: withTiming(getRadius, DURATION),
        };
    });
    return (<Animated.View style={[styles.container, animatedStyle]}>
            <TouchableOpacity activeOpacity={0.7} style={[buttonStyle, styles.touchContainer]} onPress={onPress} disabled={disabled || isLoading}>

                {isLoading
            ? loadingComponent
            : labelComponent}
            </TouchableOpacity>
        </Animated.View>);
};
var styles = StyleSheet.create({
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DEFAULT_BORDER_RADIUS,
        marginTop: DEFAULT_MARGIN_TOP,
        marginBottom: DEFAULT_MARGIN_BOTTOM,
        marginLeft: DEFAULT_MARGIN_X,
        marginRight: DEFAULT_MARGIN_X,
        overflow: 'hidden',
    },
});
export default BottomButton;
//# sourceMappingURL=index.js.map