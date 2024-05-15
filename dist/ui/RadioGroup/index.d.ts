/// <reference types="react" />
import { TextProps, ViewProps } from "react-native";
import { RadioOption } from "../types";
declare const RadioGroup: ({ options, value, onSelect, containerStyle, valueStyle, normalColor, selectedColor, minWidth }: {
    options: RadioOption[];
    value?: RadioOption | undefined;
    onSelect: (value: RadioOption) => void;
    containerStyle?: ViewProps | undefined;
    valueStyle?: TextProps | undefined;
    normalColor?: string | undefined;
    selectedColor?: string | undefined;
    minWidth?: number | undefined;
}) => import("react").JSX.Element;
export default RadioGroup;
//# sourceMappingURL=index.d.ts.map