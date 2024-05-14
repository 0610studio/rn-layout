import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

type ScrollViewAtomProps = ScrollViewProps & {
  scrollViewRef?: React.RefObject<ScrollView>;
};

const ScrollViewAtom = ({ scrollViewRef, ...props }: ScrollViewAtomProps) => {
  return (
    <ScrollView ref={scrollViewRef} {...props} style={[props.style, {}]}>{props.children}</ScrollView>
  );
};

export default ScrollViewAtom;
