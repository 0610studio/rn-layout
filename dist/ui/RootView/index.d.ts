import React, { ReactNode } from 'react';
import { ViewProps, ScrollView } from 'react-native';
type RootViewProps = ViewProps & {
    isLoader?: boolean;
    statusBarColor?: string;
    barStyle?: 'light-content' | 'dark-content';
    edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
    isScrollView?: boolean;
    scrollViewRef?: React.RefObject<ScrollView>;
    topComponent?: ReactNode;
    bottomComponent?: ReactNode;
    showsVerticalScrollIndicator?: boolean;
};
declare const RootView: ({ isLoader, statusBarColor, barStyle, edges, isScrollView, scrollViewRef, topComponent, bottomComponent, showsVerticalScrollIndicator, ...props }: RootViewProps) => React.JSX.Element;
export default RootView;
//# sourceMappingURL=index.d.ts.map