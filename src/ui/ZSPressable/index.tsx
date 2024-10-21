import { Pressable as RnPressable, ViewProps } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import AnimatedWrapper, { ShadowLevel } from "../atoms/AnimatedWrapper";

const DEFAULT_DURATION = { duration: 100 };

interface SleekPressableProps extends ViewProps {
    onPress: (value?: any) => void;
    onLongPress?: (value?: any) => void;
    pressedBackgroundColor?: string;
    pressedBackgroundBorderRadius?: number;
    flex?: number;
    minWidth?: number;
    isAnimation?: boolean;
    elevationLevel?: ShadowLevel;
};

const ZSPressable = ({
    onPress,
    onLongPress,
    isAnimation = true,
    pressedBackgroundColor = 'rgba(180, 180, 180, 0.1)',
    pressedBackgroundBorderRadius = 16,
    flex = undefined,
    minWidth = undefined,
    elevationLevel = 0,
    ...props
}: SleekPressableProps) => {
    const isButtonPress = useSharedValue(0);

    const boxAnimation = useAnimatedStyle(() => {
        const scale = interpolate(
            isButtonPress.value,
            [0, 1],
            [1, 0.96],
            'clamp',
        );

        return {
            transform: [{ scale: withTiming(scale, DEFAULT_DURATION) }],
        };
    });

    return (
        <AnimatedWrapper isAnimation={isAnimation} elevationLevel={elevationLevel} style={{ minWidth: minWidth }}>
            <RnPressable
                onPress={onPress}
                onLongPress={onLongPress}
                style={({ pressed }) => {
                    pressed ? isButtonPress.value = 1 : isButtonPress.value = 0;
                    return {
                        backgroundColor: pressed ? pressedBackgroundColor : 'transparent',
                        borderRadius: pressedBackgroundBorderRadius,
                        flex: flex,
                        minWidth: minWidth
                    };
                }}
            >
                <Animated.View style={[props.style, boxAnimation]}>
                    {props.children}
                </Animated.View>
            </RnPressable>
        </AnimatedWrapper>
    )
}

export default ZSPressable;