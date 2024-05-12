import { ReactNode } from 'react';
import { ViewProps } from 'react-native';
type RootViewProps = ViewProps & {
    isLoader?: boolean;
    statusBarColor?: string;
    barStyle?: 'light-content' | 'dark-content';
    edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
    isScrollView?: boolean;
    scrollViewRef?: any;
    bottomComponent?: ReactNode | undefined;
    showsVerticalScrollIndicator?: boolean;
};
declare const RootView: ({ isLoader, statusBarColor, barStyle, edges, isScrollView, scrollViewRef, bottomComponent, showsVerticalScrollIndicator, ...props }: RootViewProps) => JSX.Element;
export default RootView;
//# sourceMappingURL=index.d.ts.map