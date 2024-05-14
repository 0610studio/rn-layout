import React, { ReactNode } from 'react';
import { ViewProps, KeyboardAvoidingView, StatusBar, StyleSheet, Dimensions, ActivityIndicator, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ViewAtom from '../atoms/ViewAtom';
import ScrollViewAtom from '../atoms/ScrollViewAtom';

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

const RootView = ({ isLoader = false, statusBarColor, barStyle, edges = ['top', 'bottom'], isScrollView = true, scrollViewRef, topComponent, bottomComponent, showsVerticalScrollIndicator = true, ...props }: RootViewProps) => {

  return (
    <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]} edges={edges}>
      <StatusBar barStyle={barStyle || 'dark-content'} backgroundColor={statusBarColor || 'white'} />

      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        {topComponent && topComponent}

        {
          isLoader ? (<ActivityIndicator />) : (
            isScrollView ? (
              <ScrollViewAtom scrollViewRef={scrollViewRef} style={styles.flex1} contentContainerStyle={[styles.scrollContainerStyle]} showsVerticalScrollIndicator keyboardShouldPersistTaps="handled">
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

export default RootView;
