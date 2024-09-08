import React, { useMemo } from 'react';
import { StyleProp, TextInput, TextInputProps, TextStyle, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import useTextField from './model/useTextField';
import ButtonClose from './ui/ButtonClose';
import ErrorComponent from './ui/ErrorComponent';
import { Colors, Typo3Size, TypoOptions, TypoStyle } from '../../theme';
import { extractStyle } from '../../model/utils';
import { useTheme } from '../../model/useThemeProvider';

export type BoxStyle = 'outline' | 'underline' | 'apple';

interface Props {
  typo?: TypoOptions;
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
  boxStyle?: BoxStyle;
  appleBoxStyle?: 'top' | 'middle' | 'bottom';
  disabled?: boolean;
  allowFontScaling?: boolean;
  isTextArea?: boolean;
}

/**
 * TextField 컴포넌트
 * @param {TypoOptions} typo - 타이포그래피 옵션
 * @param {string} value - 텍스트 입력의 현재 값
 * @param {(text: string) => void} onChangeText - 텍스트 변경을 처리하는 함수
 * @param {string} [label='Placeholder'] - 텍스트 입력의 라벨
 * @param {string} [labelColor='#757575'] - 라벨 텍스트의 색상
 * @param {string} [placeHolderColor='#B1B1B1'] - 플레이스홀더 텍스트의 색상
 * @param {string} [inputBgColor='white'] - 입력 필드의 배경 색상
 * @param {string} [labelBgColor='white'] - 라벨이 입력 테두리 위로 올라갈 때 라벨의 배경 색상
 * @param {string} [borderColor='#E7EDF0'] - 입력 필드의 테두리 색상
 * @param {string} [focusColor='#007AFF'] - 입력 필드가 포커스될 때의 테두리 색상
 * @param {string} [errorColor='#FF3B30'] - 오류가 발생했을 때의 테두리 및 텍스트 색상
 * @param {number} [borderRadius=14] - 입력 필드의 테두리 반경
 * @param {number} [borderWidth=1.2] - 입력 필드의 테두리 너비
 * @param {number} [paddingHorizontal=14] - 입력 필드의 가로 패딩
 * @param {string} [status='default'] - 입력 필드의 상태 (default 또는 error)
 * @param {string} [errorMessage] - 오류가 발생했을 때 표시되는 오류 메시지
 * @param {TextInputProps} [textInputProps] - TextInput 컴포넌트에 대한 추가 속성
 * @param {'outline' | 'underline' | 'apple'} [boxStyle='outline'] - 입력 상자의 스타일
 * @param {'top' | 'middle' | 'bottom'} [appleBoxStyle] - 애플 스타일 상자의 스타일
 * @param {boolean} [disabled=false] - 입력 필드의 비활성화 여부
 * @param {boolean} [allowFontScaling=false] - 폰트 크기 조정 허용 여부
 * @param {boolean} [isTextArea=false]
 * @returns {JSX.Element}
 */
const TextField = ({
  typo = "detail.medium",
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
  appleBoxStyle,
  disabled = false,
  allowFontScaling = false,
  isTextArea = false
}: Props): JSX.Element => {
  const { typography } = useTheme();
  const [s01, s02] = typo.split('.') as [TypoStyle, Typo3Size];
  const fontSize = useMemo(() => extractStyle(typography[s01][s02], 'fontSize') as number || 17, [typography, s01, s02]);
  const fontFamily = useMemo(() => extractStyle(typography[s01][s02], 'fontFamily') as string || '', [typography, s01, s02]);

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
    boxStyle,
    isTextArea
  });

  const containerStyle: StyleProp<ViewStyle> = {
    width: '100%', justifyContent: isTextArea ? 'flex-start' : 'center',
    borderColor: statusColor, borderRadius: borderRadius, paddingHorizontal: paddingHorizontal,
    backgroundColor: inputBgColor,
    paddingTop: boxStyle === 'apple' ? 13 : 0,
    ...(boxStyle === 'outline' || boxStyle === 'apple') ? { borderWidth: borderWidth } :
      boxStyle === 'underline' ? { borderBottomWidth: borderWidth } : {},
    ...(appleBoxStyle === 'top' ? {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderBottomWidth: borderWidth / 2
    } : appleBoxStyle === 'middle' ? {
      borderRadius: 0,
      borderTopWidth: borderWidth / 2,
      borderBottomWidth: borderWidth / 2
    } : appleBoxStyle === 'bottom' ? {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderTopWidth: borderWidth / 2
    } : {})
  };

  const labelStyle: StyleProp<TextStyle> = {
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
  };

  return (
    <>
      <View
        style={containerStyle}
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
          allowFontScaling={allowFontScaling}
          selectionColor={Colors.grey[70]}
        />

        <View pointerEvents="none" style={{ position: 'absolute' }}>
          <Animated.Text
            allowFontScaling={allowFontScaling}
            style={[labelAnimation, labelStyle]}>
            {label}
          </Animated.Text>
        </View>

        {
          (value && focus) && <ButtonClose marginTop={isTextArea ? 13 : undefined} onChangeText={onChangeText} />
        }
      </View>

      {
        (status === 'error' && errorMessage) && <ErrorComponent errorMessage={errorMessage} errorColor={errorColor} fontFamily={fontFamily} />
      }
    </>
  );
};

export default TextField;
