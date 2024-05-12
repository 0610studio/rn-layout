import { ReactNode } from 'react';
import React, { ViewProps, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@src/constants/colors';
import GlobalLoading from '@src/components/molecules/GlobalLoading';
import { ViewAtom } from '@src/components/atoms';


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

const RootView = ({ isLoader = false, statusBarColor, barStyle, edges = ['top', 'bottom'], isScrollView = true, scrollViewRef, bottomComponent, showsVerticalScrollIndicator = true, ...props }: RootViewProps) => {

  return (
    <SafeAreaView style={[styles.flex1, { backgroundColor: colors.WHITE }]} edges={edges}>
      <StatusBar barStyle={barStyle || 'light-content'} backgroundColor={statusBarColor || colors.WHITE} />

      <KeyboardAvoidingView style={[styles.flex1]} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>
        {
          isLoader ? (<GlobalLoading />) : (
            isScrollView ? (
              <ScrollView ref={scrollViewRef} style={styles.flex1} contentContainerStyle={[styles.scrollContainerStyle]} showsVerticalScrollIndicator keyboardShouldPersistTaps="handled">
                <ViewAtom style={[styles.flex1, props.style]}>
                  {props.children}
                </ViewAtom>
              </ScrollView>
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
