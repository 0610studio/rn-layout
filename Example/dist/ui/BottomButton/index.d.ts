import React from "react";
import { TouchableOpacityProps } from "react-native";
interface Props {
    buttonStyle?: TouchableOpacityProps['style'];
    labelComponent: React.ReactNode;
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    onPress: () => void;
}
declare const BottomButton: ({ labelComponent, loadingComponent, buttonStyle, disabled, isLoading, onPress, }: Props) => React.JSX.Element;
export default BottomButton;
//# sourceMappingURL=index.d.ts.map