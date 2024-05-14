import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';
type ScrollViewAtomProps = ScrollViewProps & {
    scrollViewRef?: React.RefObject<ScrollView>;
};
declare const ScrollViewAtom: ({ scrollViewRef, ...props }: ScrollViewAtomProps) => React.JSX.Element;
export default ScrollViewAtom;
//# sourceMappingURL=ScrollViewAtom.d.ts.map