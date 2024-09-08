import { ViewProps } from "react-native";
import Pressable from "../ZSPressable";
import { RadioOption } from "../types";
import ViewAtom from "../atoms/ViewAtom";
import Typography, { TypographyProps } from "../Typography";

const RadioGroup = ({
    options,
    value,
    onSelect,
    containerStyle,
    valueStyle,
    normalColor = '#E7EDF0',
    selectedColor = '#FFA900',
    minWidth,
    disabled = false
}: {
    options: RadioOption[];
    value?: RadioOption;
    onSelect: (value: RadioOption) => void;
    containerStyle?: ViewProps;
    valueStyle?: TypographyProps;
    normalColor?: string;
    selectedColor?: string;
    minWidth?: number;
    disabled?: boolean;
}) => {
    return (
        <ViewAtom style={{ flexDirection: 'row', gap: 10, flexWrap: 'wrap' }} {...containerStyle}>
            {
                options.map((option, _) => {
                    const isSelected = value?.index === option.index;
                    const setColor = isSelected ? selectedColor : normalColor;
                    return (
                        <Pressable
                            key={option.index}
                            onPress={() => {
                                if (disabled) return;
                                onSelect(option);
                            }}
                            pressedBackgroundColor='transparent'
                            flex={!minWidth ? 1 : undefined}
                            minWidth={minWidth}
                        >
                            <ViewAtom style={{ flexDirection: 'row', alignItems: 'center', height: 50, borderWidth: 1, paddingLeft: 10, paddingRight: 20, borderRadius: 26, borderColor: setColor, flex: 1, backgroundColor: isSelected ? setColor + '10' : undefined }}>
                                <ViewAtom style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 10, borderColor: setColor, justifyContent: 'center', alignItems: 'center' }}>
                                    <ViewAtom style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: setColor }}></ViewAtom>
                                </ViewAtom>
                                <Typography style={{ marginLeft: 10}} {...valueStyle}>
                                    {option.value}
                                </Typography>
                            </ViewAtom>
                        </Pressable>
                    )
                })
            }
        </ViewAtom>
    )
}


export default RadioGroup;