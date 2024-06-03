import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LayoutExample from './src';
import { ThemeProvider, Theme } from './dist';

function App(): React.JSX.Element {
  
  // const overrideLightColors: Theme = {
  // }
  // const overrideDarkColors: Theme = {
  // }

  return (
    <SafeAreaProvider>
      <ThemeProvider
        // themeColors={{
        //   light: overrideLightColors,
        //   dark: overrideDarkColors,
        // }}
        // themeFonts={{
        //   100: 'Pretendard-Thin',
        //   200: 'Pretendard-ExtraLight',
        //   300: 'Pretendard-Light',
        //   400: 'Pretendard-Regular',
        //   500: 'Pretendard-Medium',
        //   600: 'Pretendard-SemiBold',
        //   700: 'Pretendard-Bold',
        //   800: 'Pretendard-ExtraBold',
        //   900: 'Pretendard-Black',
        // }}
      >
        <LayoutExample />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
