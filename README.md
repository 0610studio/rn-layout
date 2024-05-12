## 사용법

```tsx
<RootView
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
</RootView>

```