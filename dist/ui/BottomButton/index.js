import React, { useEffect } from "react";
import { ActivityIndicator, Keyboard, Platform, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
var DEFAULT_MARGIN_X = 20;
var DEFAULT_MARGIN_TOP = 0;
var DEFAULT_MARGIN_BOTTOM = 20;
var DEFAULT_BORDER_RADIUS = 14;
var DURATION = { duration: 250 };
var BottomButton = function (_a) {
    var _b = _a.loadingComponent, loadingComponent = _b === void 0 ? <ActivityIndicator /> : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.isLoading, isLoading = _d === void 0 ? false : _d, primaryLabelComponent = _a.primaryLabelComponent, primaryOnPress = _a.primaryOnPress, _e = _a.primaryButtonStyle, primaryButtonStyle = _e === void 0 ? {} : _e, secondaryOnPress = _a.secondaryOnPress, secondaryLabelComponent = _a.secondaryLabelComponent, _f = _a.secondaryButtonStyle, secondaryButtonStyle = _f === void 0 ? {} : _f;
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
        var getBottom = interpolate(isKeyboardVisible.value, [0, 1], [DEFAULT_MARGIN_BOTTOM, 0], 'clamp');
        var getMargin = interpolate(isKeyboardVisible.value, [0, 1], [DEFAULT_MARGIN_X, 0], 'clamp');
        var getRadius = interpolate(isKeyboardVisible.value, [0, 1], [DEFAULT_BORDER_RADIUS, 0], 'clamp');
        return {
            marginBottom: withTiming(getBottom, DURATION),
            marginLeft: withTiming(getMargin, DURATION),
            marginRight: withTiming(getMargin, DURATION),
            borderRadius: withTiming(getRadius, DURATION),
        };
    });
    return (<Animated.View style={[styles.container, animatedStyle]}>
            {secondaryLabelComponent && (<TouchableOpacity activeOpacity={0.7} style={[secondaryButtonStyle, styles.touchSecondaryContainer]} onPress={secondaryOnPress}>
                        {secondaryLabelComponent}
                    </TouchableOpacity>)}

            <TouchableOpacity activeOpacity={0.7} style={[primaryButtonStyle, styles.touchContainer]} onPress={primaryOnPress} disabled={disabled || isLoading}>

                {isLoading
            ? loadingComponent
            : primaryLabelComponent}
            </TouchableOpacity>
        </Animated.View>);
};
var styles = StyleSheet.create({
    touchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    touchSecondaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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
        flexDirection: 'row'
    },
});
export default BottomButton;
//# sourceMappingURL=index.js.map