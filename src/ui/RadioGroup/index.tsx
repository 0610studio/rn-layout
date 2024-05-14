import { useState } from "react";
import { Text, TextProps, View, ViewProps } from "react-native";
import Pressable from "../Pressable";

interface Option {
    value: string;
    index: string;
}

const RadioGroup = ({
    options,
    onSelect,
    containerStyle,
    valueStyle,
    normalColor = '#E7EDF0',
    selectedColor = '#FFA900',
    minWidth
}: {
    options: Option[];
    onSelect: (value?: Option) => void;
    containerStyle?: ViewProps;
    valueStyle?: TextProps;
    normalColor?: string;
    selectedColor?: string;
    minWidth?: number;
}) => {
    const [selected, setSelected] = useState<Option | null>(null);
    return (
        <View style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }} {...containerStyle}>
            {
                options.map((option, _) => {
                    const isSelected = selected?.index === option.index;
                    const setColor = isSelected ? selectedColor : normalColor;
                    return (
                        <Pressable
                            key={option.index}
                            onPress={() => {
                                setSelected(option);
                                onSelect(option);
                            }}
                            pressedBackgroundColor='transparent'
                            flex={!minWidth ? 1 : undefined}
                            minWidth={minWidth}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 52, borderWidth: 1, paddingLeft: 10, paddingRight: 20, borderRadius: 999, borderColor: setColor, flex: 1, backgroundColor: isSelected ? setColor + '10' : undefined }}>
                                <View style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 10, borderColor: setColor, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: setColor }}></View>
                                </View>
                                <Text
                                    style={{ color: '#5E696E', marginLeft: 10 }}
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