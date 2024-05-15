import { Text, TextProps, View, ViewProps } from "react-native";
import Pressable from "../Pressable";
import { RadioOption } from "../types";


const RadioGroup = ({
    options,
    value,
    onSelect,
    containerStyle,
    valueStyle,
    normalColor = '#E7EDF0',
    selectedColor = '#FFA900',
    minWidth
}: {
    options: RadioOption[];
    value?: RadioOption;
    onSelect: (value: RadioOption) => void;
    containerStyle?: ViewProps;
    valueStyle?: TextProps;
    normalColor?: string;
    selectedColor?: string;
    minWidth?: number;
}) => {
    return (
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }} {...containerStyle}>
            {
                options.map((option, _) => {
                    const isSelected = value?.index === option.index;
                    const setColor = isSelected ? selectedColor : normalColor;
                    return (
                        <Pressable
                            key={option.index}
                            onPress={() => {
                                onSelect(option);
                            }}
                            pressedBackgroundColor='transparent'
                            flex={!minWidth ? 1 : undefined}
                            minWidth={minWidth}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, borderWidth: 1, paddingLeft: 10, paddingRight: 20, borderRadius: 26, borderColor: setColor, flex: 1, backgroundColor: isSelected ? setColor + '10' : undefined }}>
                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 10, borderColor: setColor, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: setColor }}></View>
                                </View>
                                <Text
                                    style={{ color: '#5E696E', marginLeft: 10, fontSize: 17 }}
                                    {...valueStyle}
                                >
                                    {option.value}
                                </Text>
                            </View>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}


export default RadioGroup;