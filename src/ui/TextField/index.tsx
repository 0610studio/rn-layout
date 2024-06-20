import React, { useMemo } from 'react';
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Animated from 'react-native-reanimated';
import useTextField from './model/useTextField';
import AnimatedWrapper from '../atoms/AnimatedWrapper';
import { Typo3Size, TypoOptions, TypoStyle } from '../../theme';
import { useTheme } from '../../model/useThemeProvider';
import { extractStyle } from '../../model/utils';

interface Props {
  typo: TypoOptions;
  status?: 'default' | 'error';
  value: string;
  onChangeText?: (text: string) => void;
  inputBgColor?: string;
  labelBgColor?: string;
  label?: string;
  labelColor?: string;
  placeHolderColor?: string;
  fontSize?: number;
  borderColor?: string;
  borderRadius?: number;
  focusColor?: string;
  errorColor?: string;
  paddingHorizontal?: number;
  borderWidth?: number;
  errorMessage?: string;
  textInputProps?: TextInputProps;
  boxStyle?: 'outline' | 'underline'
  disabled?: boolean
}

/**
 * @param {TypoOptions} typo
 * @param {string} value
 * @param {(text: string) => void} onChangeText
 * @param {string} [label='Placeholder']
 * @param {string} [labelColor='#757575']
 * @param {string} [placeHolderColor='#B1B1B1']
 * @param {string} [inputBgColor='white']
 * @param {string} [labelBgColor='white'] label이 input border 위로 올라갈때 border를 가리기 위한 배경색
 * @param {string} [borderColor='#E7EDF0']
 * @param {string} [focusColor='#007AFF']
 * @param {string} [errorColor='#FF3B30']
 * @param {number} [borderRadius=14]
 * @param {number} [borderWidth=1.2]
 * @param {number} [paddingHorizontal=14]
 * @param {TextInputProps} textInputProps
 * @param {'outline' | 'underline'} boxStyle
 * @param {boolean} disabled
 */
const TextField = ({
  typo,
  status = 'default',
  value,
  onChangeText,
  label = 'Placeholder',
  labelColor = '#757575',
  placeHolderColor = '#B1B1B1',
  inputBgColor = 'white',
  labelBgColor = 'white',
  borderWidth = 1.2,
  borderColor = '#E7EDF0',
  focusColor = '#007AFF',
  errorColor = '#FF3B30',
  borderRadius = 14,
  paddingHorizontal = 15,
  errorMessage,
  textInputProps,
  boxStyle = 'outline',
  disabled = false
}: Props) => {
  const { typography } = useTheme();
  const split = typo.split('.');
  const s01 = split[0] as TypoStyle;
  const s02 = split[1] as Typo3Size;
  const fontSize = useMemo(
    () => extractStyle(typography[s01][s02], 'fontSize') as number || 17,
    [typography, s01, s02]
  );
  const fontFamily = useMemo(
    () => extractStyle(typography[s01][s02], 'fontFamily') as string || '',
    [typography, s01, s02]
  );

  const {
    focus,
    labelAnimation,
    statusColor,
    labelStatusColor,
    handleBlur,
    handleFocus,
    handleChangeText,
    onLayout
  } = useTextField({
    fontSize,
    status,
    borderColor,
    focusColor,
    labelColor,
    placeHolderColor,
    errorColor,
    value,
    onChangeText,
  });


  return (
    <AnimatedWrapper>
      <View
        style={{
          width: '100%', justifyContent: 'center',
          ...boxStyle === 'outline' ? { borderWidth: borderWidth } : { borderBottomWidth: borderWidth },
          borderColor: statusColor, borderRadius: borderRadius, paddingHorizontal: paddingHorizontal,
          backgroundColor: inputBgColor
        }}
        onLayout={onLayout}
        pointerEvents={disabled ? 'none' : 'auto'}
      >
        <TextInput
          {...textInputProps}
          style={[
            { paddingVertical: 14 }, // 디폴트
            textInputProps?.style,   // 유저 스타일
            { fontSize: fontSize, width: '100%', paddingRight: 25, fontFamily: fontFamily } // 고정 스타일
          ]}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
        />

        <View pointerEvents="none" style={{ position: 'absolute' }}>
          <Animated.Text
            style={[
              labelAnimation,
              {
                fontSize: fontSize,
                color: labelStatusColor,
                left: paddingHorizontal,
                backgroundColor: labelBgColor,
                paddingHorizontal: boxStyle === 'outline' ? 5 : 0,
                paddingVertical: 2,
                textAlignVertical: 'center',
                fontFamily: fontFamily,
                borderRadius: boxStyle === 'outline' ? 20 : 0,
                overflow: 'hidden'
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
                style={{ width: 14, height: 14, tintColor: '#5E696E' }}
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
    </AnimatedWrapper>
  );
};

export default TextField;
