import React from "react";
import { TouchableOpacityProps } from "react-native";
interface Props {
    loadingComponent?: React.ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    primaryOnPress: () => void;
    primaryLabelComponent: React.ReactNode;
    primaryButtonStyle?: TouchableOpacityProps['style'];
    secondaryOnPress?: () => void;
    secondaryLabelComponent?: React.ReactNode;
    secondaryButtonStyle?: TouchableOpacityProps['style'];
}
declare const BottomButton: ({ loadingComponent, disabled, isLoading, primaryLabelComponent, primaryOnPress, primaryButtonStyle, secondaryOnPress, secondaryLabelComponent, secondaryButtonStyle }: Props) => React.JSX.Element;
export default BottomButton;
//# sourceMappingURL=index.d.ts.map