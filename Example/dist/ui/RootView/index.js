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
import React, { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Dimensions, View, ActivityIndicator, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
var RootView = function (_a) {
    var _b = _a.isLoader, isLoader = _b === void 0 ? false : _b, statusBarColor = _a.statusBarColor, barStyle = _a.barStyle, _c = _a.edges, edges = _c === void 0 ? ['top', 'bottom'] : _c, _d = _a.isScrollView, isScrollView = _d === void 0 ? true : _d, scrollViewRef = _a.scrollViewRef, bottomComponent = _a.bottomComponent, _e = _a.showsVerticalScrollIndicator, showsVerticalScrollIndicator = _e === void 0 ? true : _e, props = __rest(_a, ["isLoader", "statusBarColor", "barStyle", "edges", "isScrollView", "scrollViewRef", "bottomComponent", "showsVerticalScrollIndicator"]);
    return (<SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]} edges={edges}>
      <StatusBar barStyle={barStyle || 'light-content'} backgroundColor={statusBarColor || 'white'}/>

      <KeyboardAvoidingView style={styles.flex1} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        {isLoader ? (<ActivityIndicator />) : (isScrollView ? (<ScrollView ref={scrollViewRef} style={styles.flex1} contentContainerStyle={[styles.scrollContainerStyle]} showsVerticalScrollIndicator keyboardShouldPersistTaps="handled">
                <View style={[styles.flex1, props.style]}>
                  {props.children}
                </View>
              </ScrollView>) : (<View style={[styles.flex1, props.style]}>
                {props.children}
              </View>))}

        {!isLoader && bottomComponent && bottomComponent}
      </KeyboardAvoidingView>
    </SafeAreaView>);
};
var styles = StyleSheet.create({
    flex1: { flex: 1, width: Dimensions.get('window').width },
    scrollContainerStyle: { flexGrow: 1, alignItems: 'center' },
});
export default RootView;
//# sourceMappingURL=index.js.map