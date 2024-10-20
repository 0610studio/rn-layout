import { ViewProps } from "react-native";
import Animated, { FadeInDown, FadeOut, useAnimatedStyle, withTiming } from "react-native-reanimated";
import ViewAtom from "./ViewAtom";

const duration = 300;

interface AnimatedWrapperProps extends ViewProps {
    isAnimation: boolean;
}

const AnimatedWrapper = ({ isAnimation = true, ...props }: AnimatedWrapperProps) => {

    const animatedStyle = useAnimatedStyle(() => ({
        shadowOpacity: withTiming(1, { duration }),
    }));

    return isAnimation ? (
        <Animated.View
            style={[props.style, animatedStyle]}
            entering={FadeInDown.duration(duration)}
            exiting={FadeOut.duration(duration)}
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