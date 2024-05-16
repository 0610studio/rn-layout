import React from 'react';
import { LayoutChangeEvent, ViewProps } from 'react-native';
import Animated, { FadeInDown, useSharedValue, withTiming } from 'react-native-reanimated';
import { calculateRadius } from '../../model/utils';

interface CardProps extends ViewProps {
    borderRadius: number;
};

const Card = ({
    borderRadius,
    ...props
}: CardProps) => {
    const calcRadius = useSharedValue(0);

    const handleLayout = (event: LayoutChangeEvent) => {
        const { width, height } = event.nativeEvent.layout;
        const calc = calculateRadius(width, height, borderRadius);
        calcRadius.value = withTiming(calc, { duration: 50 });
    };

    return (
        <Animated.View
            {...props}
            style={[props?.style, { borderRadius: calcRadius }]}
            onLayout={handleLayout}
            entering={FadeInDown}
        >
            {props.children}
        </Animated.View>
    );
};


export default Card;
