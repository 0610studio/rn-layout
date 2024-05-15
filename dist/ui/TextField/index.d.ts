import React from 'react';
import { TextInputProps } from 'react-native';
interface Props extends TextInputProps {
    status?: 'default' | 'error';
    value: string;
    onChangeText: (text: string) => void;
    labelBgColor?: string;
    label?: string;
    labelColor?: string;
    placeHolderColor?: string;
    fontSize?: number;
    borderColor?: string;
    borderRadius?: number;
    focusColor?: string;
    errorColor?: string;
    paddingHorizontal?: number;
    borderWidth?: number;
    errorMessage?: string;
    fontFamily?: string;
}
declare const TextField: ({ status, value, onChangeText, label, labelColor, placeHolderColor, labelBgColor, fontSize, borderWidth, borderColor, focusColor, errorColor, borderRadius, paddingHorizontal, errorMessage, fontFamily, ...props }: Props) => React.JSX.Element;
export default TextField;
//# sourceMappingURL=index.d.ts.map