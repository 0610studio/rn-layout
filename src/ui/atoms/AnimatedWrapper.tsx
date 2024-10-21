import React, { useMemo } from 'react';
import { View, ViewProps, Platform } from 'react-native';
import Animated, {
  FadeInDown,
  FadeOut,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  runOnJS,
} from 'react-native-reanimated';

export type ShadowLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface ShadowStyle {
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
}

const shadowColor = 'rgba(0, 0, 0, 0.25)';

// Pre-calculated shadow styles
const IOS_SHADOW: readonly ShadowStyle[] = [
  { shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 1.00 },
  { shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 1.41 },
  { shadowOffset: { width: 0, height: 1 }, shadowOpacity: 1, shadowRadius: 2.22 },
  { shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 2.62 },
  { shadowOffset: { width: 0, height: 2 }, shadowOpacity: 1, shadowRadius: 3.84 },
  { shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 4.65 },
  { shadowOffset: { width: 0, height: 3 }, shadowOpacity: 1, shadowRadius: 4.65 },
  { shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 4.65 },
  { shadowOffset: { width: 0, height: 4 }, shadowOpacity: 1, shadowRadius: 5.46 },
  { shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1, shadowRadius: 6.27 },
] as const;

interface AnimatedWrapperProps extends ViewProps {
  isAnimation: boolean;
  elevationLevel?: ShadowLevel;
  duration?: number;
}

const DEFAULT_DURATION = 200;
const SHADOW_DURATION = 50;

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = React.memo(({
  isAnimation = true,
  elevationLevel = 0,
  duration = DEFAULT_DURATION,
  style,
  children,
  ...props
}) => {
  const opacity = useSharedValue(0);

  // Pre-calculate styles based on platform and elevation level
  const staticStyle = useMemo(() => {
    if (Platform.OS === 'ios') {
      const { shadowOpacity, ...rest } = IOS_SHADOW[elevationLevel];
      return { shadowColor, ...rest };
    }
    return { shadowColor };
  }, [elevationLevel]);

  // Separate animated styles
  const animatedStyle = useAnimatedStyle(() => {
    if (Platform.OS === 'ios') {
      return { shadowOpacity: opacity.value * IOS_SHADOW[elevationLevel].shadowOpacity };
    }
    return { elevation: opacity.value * elevationLevel };
  }, [elevationLevel]);

  const onEntering = useMemo(() => () => {
    opacity.value = withTiming(1, { duration: SHADOW_DURATION });
  }, [opacity]);

  const animationProps = useMemo(() => ({
    entering: FadeInDown.duration(duration).withCallback((finished) => {
      'worklet';

      if (finished) {
        runOnJS(onEntering)();
      }
    }),
    exiting: FadeOut.duration(50),
  }), [duration, onEntering]);

  if (!isAnimation) {
    return <View style={[style, staticStyle]} {...props}>{children}</View>;
  }

  return (
    <Animated.View
      style={[style, staticStyle, animatedStyle]}
      {...animationProps}
      {...props}
    >
      {children}
    </Animated.View>
  );
});

export default AnimatedWrapper;
