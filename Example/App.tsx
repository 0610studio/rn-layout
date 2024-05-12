import React, { useState } from 'react';
import RootView from './dist/ui/RootView';
import { ActivityIndicator, Dimensions, Keyboard, StyleSheet, Text, View } from 'react-native';
import TextField from './dist/ui/TextField';
import BottomButton from './dist/ui/BottomButton';

function App(): React.JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nick, setNick] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <RootView
      bottomComponent={
        <BottomButton
          buttonStyle={{ paddingVertical: 16, backgroundColor: buttonDisabled ? '#ff5555' : '#5555ff' }}
          disabled={buttonDisabled}
          isLoading={isLoading}
          loadingComponent={
            <ActivityIndicator color="white" />
          }
          labelComponent={
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>등록</Text>
          }
          onPress={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              setEmailError('이메일이 중복되었습니다.');
              setButtonDisabled(true);
            }, 2000);
          }}
        />
      }>
      <View style={styles.container}>
        <TextField
          label="닉네임"
          value={nick}
          onChangeText={(text) => {
            setNick(text);
          }}
          multiline={false}
        />

        <TextField
          label="이메일"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          multiline={false}
          status={emailError ? 'error' : 'default'}
          errorMessage={emailError}
        />

        <TextField
          label="휴대폰 번호"
          value={phone}
          onChangeText={(text) => {
            setPhone(text);
          }}
          multiline={false}
        />
      </View>
    </RootView>
  );
}



const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40, marginLeft: 20, marginTop: 22, gap: 100
  },
});


export default App;
