import { Text, View } from "react-native";
import Pressable from "../Pressable";
var RadioGroup = function (_a) {
    var options = _a.options, value = _a.value, onSelect = _a.onSelect, containerStyle = _a.containerStyle, valueStyle = _a.valueStyle, _b = _a.normalColor, normalColor = _b === void 0 ? '#E7EDF0' : _b, _c = _a.selectedColor, selectedColor = _c === void 0 ? '#FFA900' : _c, minWidth = _a.minWidth;
    return (<View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }} {...containerStyle}>
            {options.map(function (option, _) {
            var isSelected = (value === null || value === void 0 ? void 0 : value.index) === option.index;
            var setColor = isSelected ? selectedColor : normalColor;
            return (<Pressable key={option.index} onPress={function () {
                    onSelect(option);
                }} pressedBackgroundColor='transparent' flex={!minWidth ? 1 : undefined} minWidth={minWidth}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 52, borderWidth: 1, paddingLeft: 10, paddingRight: 20, borderRadius: 999, borderColor: setColor, flex: 1, backgroundColor: isSelected ? setColor + '10' : undefined }}>
                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 10, borderColor: setColor, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: setColor }}></View>
                                </View>
                                <Text style={{ color: '#5E696E', marginLeft: 10 }} {...valueStyle}>
                                    {option.value}
                                </Text>
                            </View>
                        </Pressable>);
        })}
        </View>);
};
export default RadioGroup;
//# sourceMappingURL=index.js.map