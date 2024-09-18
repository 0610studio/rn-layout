import { RadioOption } from "../types";
import ViewAtom from "../atoms/ViewAtom";
import Typography, { TypographyProps } from "../Typography";
import ZSPressable from "../ZSPressable";
import { ViewProps } from "react-native/types";

const RadioGroup = ({
    options,
    value,
    onSelect,
    containerStyle,
    valueStyle,
    normalColor = '#E7EDF0',
    selectedColor = '#FFA900',
    minWidth,
    disabled = false,
    fullWidth = false,
    selectStyle
}: {
    options: RadioOption[];
    value?: RadioOption;
    onSelect: (value: RadioOption) => void;
    containerStyle?: ViewProps;
    valueStyle?: TypographyProps;
    selectStyle?: TypographyProps;
    normalColor?: string;
    selectedColor?: string;
    minWidth?: number;
    disabled?: boolean;
    fullWidth?: boolean;
}) => {
    return (
        <ViewAtom style={{ flexDirection: fullWidth ? 'column' : 'row', gap: 10, flexWrap: fullWidth ? 'nowrap' : 'wrap', width: '100%' }} {...containerStyle}>
            {
                options.map((option, _) => {
                    const isSelected = value?.index === option.index;
                    const setColor = isSelected ? selectedColor : normalColor;
                    return (
                        <ZSPressable
                            key={option.index}
                            onPress={() => {
                                if (disabled) return;
                                onSelect(option);
                            }}
                            pressedBackgroundColor='transparent'
                            flex={!minWidth ? 1 : undefined}
                            minWidth={minWidth}
                        >
                            <ViewAtom style={{ flexDirection: 'row', alignItems: 'center', height: 50, borderWidth: 1, paddingLeft: 10, paddingRight: 15, borderRadius: 26, borderColor: setColor, flex: 1, backgroundColor: isSelected ? setColor + '10' : undefined }}>
                                {
                                    !fullWidth && (
                                        <ViewAtom style={{ width: 20, height: 20, borderWidth: 1, borderRadius: 10, borderColor: setColor, justifyContent: 'center', alignItems: 'center' }}>
                                            <ViewAtom style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: setColor }}></ViewAtom>
                                        </ViewAtom>
                                    )
                                }
                                <Typography style={{ marginLeft: 10 }} {...valueStyle}>
                                    {option.value}
                                </Typography>

                                {
                                    fullWidth && (
                                        <ViewAtom style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                            <ViewAtom style={{ backgroundColor: '#EFEFEF', paddingVertical: 4, paddingHorizontal: 10, borderRadius: 50 }}>
                                                <Typography {...selectStyle}>
                                                    선택
                                                </Typography>
                                            </ViewAtom>
                                        </ViewAtom>
                                    )
                                }
                            </ViewAtom>
                        </ZSPressable>
                    )
                })
            }
        </ViewAtom>
    )
}


export default RadioGroup;