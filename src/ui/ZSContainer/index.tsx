import React, { ReactNode, useState, useEffect } from 'react';
import { ViewProps, KeyboardAvoidingView, StatusBar, StyleSheet, Dimensions, ActivityIndicator, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewAtom from '../atoms/ViewAtom';
import ScrollViewAtom from '../atoms/ScrollViewAtom';
import { useTheme } from '../../model/useThemeProvider';

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
  loadingComponent?: React.ReactNode;
};

const ZSContainer = ({
  isLoader = false,
  statusBarColor,
  barStyle,
  edges = ['top', 'bottom'],
  isScrollView = true,
  scrollViewRef,
  topComponent,
  bottomComponent,
  showsVerticalScrollIndicator = true,
  loadingComponent = <ActivityIndicator />,
  ...props
}: RootViewProps) => {
  const { palette } = useTheme();
  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);


  // ---
  if (isDelayed) return null;

  return (
    <SafeAreaView style={[{ backgroundColor: palette.background.base }, styles.flex1]} edges={edges}>
      <StatusBar barStyle={barStyle || 'dark-content'} backgroundColor={statusBarColor || palette.background.base} />

      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        {topComponent && topComponent}

        {
          isLoader ? (loadingComponent)
            : (
              isScrollView ? (
                <ScrollViewAtom scrollViewRef={scrollViewRef} style={styles.flex1} contentContainerStyle={[styles.scrollContainerStyle]} showsVerticalScrollIndicator={showsVerticalScrollIndicator} keyboardShouldPersistTaps="handled">
                  <ViewAtom style={[styles.flex1, props.style]}>
                    {props.children}
                  </ViewAtom>
                </ScrollViewAtom>
              ) : (
                <ViewAtom style={[styles.flex1, props.style]}>
                  {props.children}
                </ViewAtom>
              )
            )
        }

        {!isLoader && bottomComponent && bottomComponent}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex1: { flex: 1, width: Dimensions.get('window').width },
  scrollContainerStyle: { flexGrow: 1, alignItems: 'center' },
});

export default ZSContainer;
