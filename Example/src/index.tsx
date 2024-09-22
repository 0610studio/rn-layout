import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ZSContainer,
  ZSPressable,
  BottomButton,
  RadioGroup,
  TextField,
  useTheme,
} from '../dist';
import {RadioOption} from '../dist/ui/types';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Typography from '../dist/ui/Typography';
import ThrottleButton from '../dist/ui/ThrottleButton';
const RADIO_GROUP_WIDTH = (Dimensions.get('window').width - 40) / 2 - 5;

function LayoutExample(): React.JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [nick, setNick] = useState<string>('');
  const [phone, setPhone] = useState<string>('00-0000-0000');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [radioValue, setRadioValue] = useState<RadioOption>();
  const {palette} = useTheme();

  const handleSubmit = async () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('완료');
      }, 5000);
    });
  };

  return (
    <SafeAreaProvider>
      <ZSContainer
        edges={['top', 'bottom']}
        bottomComponent={
          <BottomButton
            disabled={buttonDisabled}
            loadingComponent={<ActivityIndicator color="white" />}
            // ---
            primaryButtonStyle={{
              height: 55,
              backgroundColor: buttonDisabled ? '#ff5555' : '#5555ff',
            }}
            primaryLabelComponent={
              <Text style={{fontWeight: 'bold', fontSize: 18, color: 'white'}}>
                등록
              </Text>
            }
            primaryOnPress={async () => {
              setEmailError('이메일이 중복되었습니다.');
              setButtonDisabled(true);
            }}
            // ---
            secondaryButtonStyle={{height: 55, backgroundColor: '#F3F3F3'}}
            secondaryLabelComponent={
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#878787',
                  textDecorationLine: 'underline',
                }}>
                건너뛰기
              </Text>
            }
            secondaryOnPress={() => {
              console.log('건너뛰기 버튼 클릭');
            }}
          />
        }>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-around',
            }}>
            <ZSPressable
              style={styles.sleekStyle}
              pressedBackgroundColor="rgba(180, 180, 180, 0.1)"
              onPress={() => {
                console.log('SleekPressable 버튼 클릭');
                setEmail(prev => prev + '1');
              }}>
              <Typography typo="body.1" style={{color: 'black'}}>
                title.small
              </Typography>
            </ZSPressable>

            <ZSPressable
              style={styles.sleekStyle}
              pressedBackgroundColor="rgba(180, 180, 180, 0.1)"
              onPress={() => {
                console.log('SleekPressable 버튼 클릭');
              }}>
              <Typography typo="body.2" style={{color: 'red'}}>
                body.2
              </Typography>
            </ZSPressable>
          </View>

          <Typography typo="heading.1">heading.1</Typography>
          <Typography typo="body.1">body.1</Typography>
          <Typography typo="body.2">body.2</Typography>
          <Typography typo="body.3">body.3</Typography>
          <Typography typo="body.4">body.4</Typography>
          <Typography typo="body.5">body.5</Typography>
          <Typography typo="body.6">body.6</Typography>

          <TextField
            boxStyle="underline"
            label="닉네임"
            value={nick}
            onChangeText={text => {
              setNick(text);
            }}
            labelColor="blue"
            textInputProps={{
              multiline: false,
              style: {color: 'red'},
            }}
          />

          <TextField
            label="이메일"
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            status={emailError ? 'error' : 'default'}
            errorMessage={emailError}
            textInputProps={{
              multiline: false,
            }}
          />

          <TextField
            label="휴대폰 번호"
            value={phone}
            onChangeText={text => {
              setPhone(text);
            }}
            textInputProps={{
              multiline: false,
            }}
            disabled={true}
            inputBgColor="rgba(0, 0, 0, 0.03)"
          />

          <RadioGroup
            options={[
              {value: '남자', index: '1'},
              {value: '여자', index: '2'},
            ]}
            value={radioValue}
            minWidth={RADIO_GROUP_WIDTH}
            onSelect={value => {
              setRadioValue(value);
            }}
          />

          <ThrottleButton
            style={{
              backgroundColor: palette.primary.main,
              height: 55,
              overflow: 'hidden',
            }}
            onPress={async () => {
              await handleSubmit();
            }}
            labelComponent={
              <Typography typo="body.3" style={{color: 'black'}}>
                title.small
              </Typography>
            }
          />
        </View>
      </ZSContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    marginLeft: 20,
    marginTop: 22,
    gap: 20,
  },
  sleekStyle: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default LayoutExample;
