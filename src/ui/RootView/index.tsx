import { ReactNode } from 'react';
import React, { ViewProps, KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Dimensions, View, ActivityIndicator, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={[styles.flex1, { backgroundColor: 'white' }]} edges={edges}>
      <StatusBar barStyle={barStyle || 'light-content'} backgroundColor={statusBarColor || 'white'} />

      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        {
          isLoader ? (<ActivityIndicator />) : (
            isScrollView ? (
              <ScrollView ref={scrollViewRef} style={styles.flex1} contentContainerStyle={[styles.scrollContainerStyle]} showsVerticalScrollIndicator keyboardShouldPersistTaps="handled">
                <View style={[styles.flex1, props.style]}>
                  {props.children}
                </View>
              </ScrollView>
            ) : (
              <View style={[styles.flex1, props.style]}>
                {props.children}
              </View>
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
