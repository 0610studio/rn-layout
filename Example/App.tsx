import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import { RootView, BottomButton, Pressable, RadioGroup, TextField } from './dist';

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
          buttonStyle={{ height: 55, backgroundColor: buttonDisabled ? '#ff5555' : '#5555ff' }}
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

        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around' }}>
          <Pressable
            style={styles.sleekStyle}
            pressedBackgroundColor='rgba(180, 180, 180, 0.1)'
            onPress={() => {
              console.log('SleekPressable 버튼 클릭');
              setEmail(prev=> prev+'1')
            }}
          >
            <Text>SleekPressable 버튼</Text>
          </Pressable>

          <Pressable
            style={styles.sleekStyle}
            pressedBackgroundColor='rgba(180, 180, 180, 0.1)'
            onPress={() => {
              console.log('SleekPressable 버튼 클릭');
            }}
          >
            <Text>SleekPressable 버튼</Text>
          </Pressable>
        </View>

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

        <RadioGroup
          options={[
            { value: '남자', index: '1' },
            { value: '여자', index: '2' }
          ]}
          onSelect={(value) => {
            console.log(value);
          }}
        />
      </View>
    </RootView>
  );
}



const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40, marginLeft: 20, marginTop: 22, gap: 20
  },
  sleekStyle: {
    width: '100%', paddingVertical: 20, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20
  }
});


export default App;
