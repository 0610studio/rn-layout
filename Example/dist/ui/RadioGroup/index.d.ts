/// <reference types="react" />
import { TextProps, ViewProps } from "react-native";
interface Option {
    value: string;
    index: string;
}
declare const RadioGroup: ({ options, onSelect, containerStyle, valueStyle, normalColor, selectedColor, minWidth }: {
    options: Option[];
    onSelect: (value?: Option) => void;
    containerStyle?: ViewProps | undefined;
    valueStyle?: TextProps | undefined;
    normalColor?: string | undefined;
    selectedColor?: string | undefined;
    minWidth?: number | undefined;
}) => import("react").JSX.Element;
export default RadioGroup;
//# sourceMappingURL=index.d.ts.map