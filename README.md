> ### ⚠️ Project Archived
> 
> 이 프로젝트는 현재 **아카이브** 상태입니다.
> 주요 기능은 **ZS-ui**로 통합되었습니다.
> 
> 👉 [ZS-ui](https://github.com/0610studio/zs-ui)로 이동

https://github.com/0610studio/rn-layout/assets/39161206/722a938f-6298-4149-91bf-2996aeffea4a


## 설치

```bash
"react-native-gesture-handler": "^2.16.0",
"react-native-reanimated": "^3.8.1",
"react-native-safe-area-context": "^4.9.0"

npm i @0610studio/rn-layout
```

## 사용법

- App.tsx

```tsx
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
        ...
    </ThemeProvider>
</SafeAreaProvider>
```

- target component.tsx

```tsx
const { palette, typography } = useTheme();

<ZSContainer
    edges={['bottom']}
    bottomComponent={
        <BottomButton
            buttonStyle={{ paddingVertical: 16, backgroundColor: buttonDisabled ? '#ff0000' : '#0000ff' }}
            disabled={buttonDisabled}
            isLoading={false}
            loadingComponent={
                <ActivityIndicator /> // default
            }
            labelComponent={
                <Text>등록</Text>
            }
            onPress={() => {
                console.log('등록');
            }}
        />
    }
>

    <Text
        style={[{ marginBottom: 15, marginTop: 30, color: palette.primary.main }, typography.display.large]}
    >
        {'회원 가입'}
    </Text>

    <TextField
        label='휴대폰 번호'
        value={phoneNumber}
        keyboardType="number-pad"
        status='error'
        errorMessage="번호가 일치하지 않아요."
        onChangeText={text => {
            console.log('체인지 : ', text);
        }}
    />
</ZSContainer>

```
