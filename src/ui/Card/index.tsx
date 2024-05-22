import React from 'react';
import { ViewProps } from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';

interface CardProps extends ViewProps {
    borderRadius?: number;
};

const Card = ({
    borderRadius = 14,
    ...props
}: CardProps) => {
    // const calcRadius = useSharedValue(0);

    // const handleLayout = (event: LayoutChangeEvent) => {
    //     const { width, height } = event.nativeEvent.layout;
    //     const calc = calculateRadius(width, height, borderRadius);
    //     calcRadius.value = withTiming(calc, { duration: 50 });
    // };

    return (
        <Animated.View
            {...props}
            entering={FadeInDown}
            exiting={FadeOut}
            style={[
                { borderRadius: borderRadius },
                props?.style,
            ]}
        // onLayout={handleLayout}
        >
            {props.children}
        </Animated.View>
    );
};


export default Card;
