import React from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import useTextField from './model/useTextField';

interface Props extends TextInputProps {
  status?: 'default' | 'error';
  value: string;
  onChangeText: (text: string) => void;
  labelBgColor?: string;
  label?: string;
  labelColor?: string;
  fontSize?: number;
  borderColor?: string;
  borderRadius?: number;
  focusColor?: string;
  errorColor?: string;
  paddingHorizontal?: number;
  borderWidth?: number;
  errorMessage?: string;
  fontFamily?: string;
}

/**
 * 높이는 고정 58 입니다. 그에 맞춰 아래 파라미터를 조정해주세요.
 * @param {string} value
 * @param {(text: string) => void} onChangeText
 * @param {string} [label='Placeholder']
 * @param {string} [labelColor='#5E696E']
 * @param {string} [labelBgColor='white'] label이 input border 위로 올라갈때 border를 가리기 위한 배경색
 * @param {number} [fontSize=19]
 * @param {string} [borderColor='#E7EDF0']
 * @param {string} [focusColor='#007AFF']
 * @param {string} [errorColor='#FF3B30']
 * @param {number} [borderRadius=10]
 * @param {number} [borderWidth=1.2]
 * @param {number} [paddingHorizontal=14]
 * @param {string} fontFamily
 */
const TextField = ({
  status = 'default',
  value,
  onChangeText,
  label = 'Placeholder',
  labelColor = '#5E696E',
  labelBgColor = 'white',
  fontSize = 19,
  borderWidth = 1.2,
  borderColor = '#E7EDF0',
  focusColor = '#007AFF',
  errorColor = '#FF3B30',
  borderRadius = 10,
  paddingHorizontal = 14,
  errorMessage,
  fontFamily,
  ...props
}: Props) => {
  const {
    focus,
    setFocus,
    labelSharedValue,
    labelAnimation,
    statusColor,
    labelStatusColor
  } = useTextField({
    fontSize,
    status,
    borderColor,
    focusColor,
    labelColor,
    errorColor,
    value
  });

  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeOut}
    >
      <View style={{ width: '100%', borderWidth: borderWidth, borderColor: statusColor, borderRadius: borderRadius, paddingHorizontal: paddingHorizontal, justifyContent: 'center' }}>
        <TextInput
          {...props}
          style={{ fontSize: fontSize, width: '100%', paddingVertical: 14, height: 58, paddingRight: 25, fontFamily: fontFamily }}
          allowFontScaling={false}
          value={value}
          onFocus={() => {
            setFocus(true);
            labelSharedValue.value = 1;
          }}
          onBlur={() => {
            setFocus(false);
            if (!value) labelSharedValue.value = 0;
          }}
          onChangeText={text => {
            onChangeText?.(text);
          }}
        />

        <View pointerEvents="none" style={{ position: 'absolute' }}>
          <Animated.Text
            allowFontScaling={false}
            style={[
              labelAnimation,
              {
                fontSize: fontSize,
                color: labelStatusColor,
                left: paddingHorizontal,
                backgroundColor: labelBgColor,
                paddingHorizontal: 5,
                paddingVertical: 2,
                textAlignVertical: 'center',
                fontFamily: fontFamily
              }
            ]}>
            {label}
          </Animated.Text>
        </View>

        {
          value && focus && (
            <TouchableOpacity style={{ position: 'absolute', padding: 3, right: 15, borderRadius: 30, backgroundColor: '#e6e6e6', justifyContent: 'center', alignItems: 'center' }}
              hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
              onPress={() => { onChangeText?.(''); }}>
              <Image
                source={require('../../assets/ic_x.png')}
                style={{ width: 16, height: 16, tintColor: '#5E696E' }}
              />
            </TouchableOpacity>
          )
        }
      </View>

      {
        status === 'error' && errorMessage && (
          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 3, marginTop: 5 }}>
            <View style={{ width: 18, height: 18, justifyContent: 'center', alignItems: 'center', borderRadius: 30, backgroundColor: errorColor }}>
              <Text allowFontScaling={false} style={{ fontWeight: 'bold', color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: 11, fontFamily: fontFamily }}>
                {`!`}
              </Text>
            </View>

            <Text allowFontScaling={false} style={{ marginLeft: 5, fontSize: 14, color: errorColor, fontFamily: fontFamily }}>
              {errorMessage}
            </Text>
          </View>
        )
      }
    </Animated.View>
  );
};

export default TextField;
