import React from 'react';
import { TextInputProps } from 'react-native';
interface Props extends TextInputProps {
    status?: 'default' | 'error';
    value: string;
    onChangeText: (text: string) => void;
    labelBgColor?: string;
    label?: string;
    labelColor?: string;
    fontSize?: number;
    borderColor?: string;
    borderRadius?: number;
    focusColor?: string;
    errorColor?: string;
    paddingHorizontal?: number;
    borderWidth?: number;
    errorMessage?: string;
}
declare const TextField: ({ status, value, onChangeText, label, labelColor, labelBgColor, fontSize, borderWidth, borderColor, focusColor, errorColor, borderRadius, paddingHorizontal, errorMessage, ...props }: Props) => React.JSX.Element;
export default TextField;
//# sourceMappingURL=index.d.ts.map