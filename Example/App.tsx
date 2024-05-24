import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LayoutExample from './src';
import { ThemeProvider } from './dist';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <ThemeProvider
        themeFonts={{
          100: 'Pretendard-Thin',
          200: 'Pretendard-ExtraLight',
          300: 'Pretendard-Light',
          400: 'Pretendard-Regular',
          500: 'Pretendard-Medium',
          600: 'Pretendard-SemiBold',
          700: 'Pretendard-Bold',
          800: 'Pretendard-ExtraBold',
          900: 'Pretendard-Black',
        }}>
        <LayoutExample />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
