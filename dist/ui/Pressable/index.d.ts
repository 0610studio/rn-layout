/// <reference types="react" />
import { ViewProps } from "react-native";
interface SleekPressableProps extends ViewProps {
    onPress: (value?: any) => void;
    onLongPress?: (value?: any) => void;
    pressedBackgroundColor?: string;
    pressedBackgroundBorderRadius?: number;
    flex?: number;
    minWidth?: number;
}
declare const Pressable: ({ onPress, onLongPress, pressedBackgroundColor, pressedBackgroundBorderRadius, flex, minWidth, ...props }: SleekPressableProps) => import("react").JSX.Element;
export default Pressable;
//# sourceMappingURL=index.d.ts.map