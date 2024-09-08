import { ViewProps } from "react-native";
import Animated, { BaseAnimationBuilder, EntryExitAnimationFunction, FadeOut } from "react-native-reanimated";
import ViewAtom from "../atoms/ViewAtom";
import { useTheme } from "../../model/useThemeProvider";

type EntryOrExitLayoutType = BaseAnimationBuilder | typeof BaseAnimationBuilder | EntryExitAnimationFunction;

interface ZSViewProps extends ViewProps {
    animation: EntryOrExitLayoutType
}

const ZSView = ({ animation, ...props }: ZSViewProps) => {
    const { palette } = useTheme();
    return (
        animation ? (
            <Animated.View
                style={[{ backgroundColor: palette.background.base }, props.style]}
                entering={animation}
                exiting={FadeOut}
            >
                {props.children}
            </Animated.View>
        ) : (
            <ViewAtom
                style={[{ backgroundColor: palette.background.base }, props.style]}
            >
                {props.children}
            </ViewAtom>
        )
    );
}

export default ZSView;