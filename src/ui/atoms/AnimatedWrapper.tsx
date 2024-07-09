import { ViewProps } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import ViewAtom from "./ViewAtom";

interface AnimatedWrapperProps extends ViewProps {
    isAnimation: boolean;
}

const AnimatedWrapper = ({ isAnimation = true, ...props }: AnimatedWrapperProps) => {
    return isAnimation ? (
        <Animated.View
            style={props.style}
            entering={FadeInDown}
            exiting={FadeOut}
        >
            {props.children}
        </Animated.View>
    ) : (
        <ViewAtom style={props.style}>
            {props.children}
        </ViewAtom>
    )

}

export default AnimatedWrapper;