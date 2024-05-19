import { ViewProps } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

const AnimatedWrapper = ({ ...props }: ViewProps) => {
    return (
        <Animated.View
            style={props.style}
            entering={FadeInDown}
            exiting={FadeOut}
        >
            {props.children}
        </Animated.View>
    );
}

export default AnimatedWrapper;