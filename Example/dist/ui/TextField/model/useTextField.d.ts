/// <reference types="react" />
import { LayoutChangeEvent } from "react-native";
declare const useTextField: ({ value, fontSize, status, borderColor, focusColor, labelColor, placeHolderColor, errorColor }: {
    value: string;
    fontSize: number;
    status: 'default' | 'error';
    borderColor: string;
    focusColor: string;
    labelColor: string;
    placeHolderColor: string;
    errorColor: string;
}) => {
    focus: boolean;
    setFocus: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    labelSharedValue: import("react-native-reanimated").SharedValue<number>;
    labelAnimation: {
        top: number;
        fontSize: number;
    };
    statusColor: string;
    labelStatusColor: string;
    onLayout: (event: LayoutChangeEvent) => void;
};
export default useTextField;
//# sourceMappingURL=useTextField.d.ts.map