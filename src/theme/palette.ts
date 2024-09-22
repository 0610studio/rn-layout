import { Theme } from "./types";

export const transparency = {
  '0%': '00',   // 완전 투명
  '2%': '05',
  '4%': '0A',
  '6%': '0F',
  '8%': '14',
  '10%': '1A',
  '12%': '1F',
  '14%': '24',
  '16%': '29',
  '18%': '2E',
  '20%': '33',
  '22%': '38',
  '24%': '3D',
  '26%': '42',
  '28%': '47',
  '30%': '4D',
  '32%': '52',
  '34%': '57',
  '36%': '5C',
  '38%': '61',
  '40%': '66',
  '42%': '6B',
  '44%': '70',
  '46%': '75',
  '48%': '7A',
  '50%': '80',
  '52%': '85',
  '54%': '8A',
  '56%': '8F',
  '58%': '94',
  '60%': '99',
  '62%': '9E',
  '64%': 'A3',
  '66%': 'A8',
  '68%': 'AD',
  '70%': 'B3',
  '72%': 'B8',
  '74%': 'BD',
  '76%': 'C2',
  '78%': 'C7',
  '80%': 'CC',
  '82%': 'D1',
  '84%': 'D6',
  '86%': 'DB',
  '88%': 'E0',
  '90%': 'E6',
  '92%': 'EB',
  '94%': 'F0',
  '96%': 'F5',
  '98%': 'FA',
  '100%': 'FF'  // 완전 불투명
};


const PRIMARY = {
  0: '#FFF7E6',
  5: '#FCEDD0',  
  10: '#F9DAA3', // p-lighter
  20: '#F5BF64', // p-light
  30: '#fca54c',
  40: '#ff9225',
  50: '#FF9F06', // p-main
  60: '#DD9434', // p-dark
  70: '#AC7326', // p-darker
  80: '#c46500',
  90: '#995400',
  100: '#663800',
  lighter: '#F9DAA3',
  light: '#F5BF64',
  main: '#FF9F06',
  dark: '#DD9434',
  darker: '#AC7326',
};

const SECONDARY = {
  0: '#E6F7FF',
  5: '#D1EDFF',
  10: '#ADE2FF',
  20: '#85D4FF',
  30: '#5CC5FF',
  40: '#33B7FF',
  50: '#007FFF',
  60: '#0075E6',
  70: '#006ACC',
  80: '#005FB3',
  90: '#005499',
  100: '#003866',
  main: '#007FFF',
};

const DANGER = {
  5: '#FEECF0',
  10: '#FCD4DE',
  20: '#F799B1',
  30: '#F36689',
  40: '#EF3E5E',
  50: '#EB003B',
  60: '#D50136',
  70: '#8D0023',
  80: '#5E0018',
  90: '#2F000C',
  main: '#EB003B',
};

const WARNING = {
  5: '#FFF8E9',
  10: '#FFEAC1',
  20: '#FFE2A7',
  30: '#FFD47C',
  40: '#FFC550',
  50: '#FFB724',
  60: '#98690A',
  70: '#66490E',
  80: '#4D370B',
  90: '#332507',
  main: '#FFB724',
};

const SUCCESS = {
  5: '#EEF7F0',
  10: '#CEE9D4',
  20: '#B2DCBB',
  30: '#8CCA99',
  40: '#33A14B',
  50: '#008A1E',
  60: '#006E18',
  70: '#005312',
  80: '#00370C',
  90: '#002207',
  main: '#008A1E',
};

const INFORMATION = {
  5: '#E9F0FF',
  10: '#D4E1FF',
  20: '#A9C3FF',
  30: '#7DA4FF',
  40: '#5286FF',
  50: '#2768FF',
  60: '#1F53CC',
  70: '#173E99',
  80: '#0C1F4D',
  90: '#040A1A',
  main: '#2768FF',
};

const GREY = {
  0: '#FFFFFF',
  5: '#F8F8F8',  // layer1
  10: '#F9FAFB', // layer2
  20: '#F4F6F8', // neutral
  30: '#DFE3E8',
  40: '#C4CDD5',
  50: '#919EAB',
  60: '#637381',
  70: '#454F5B',
  80: '#1C252E',
  90: '#141A21',
  100: '#000000',
};

const BLUE = {
  5: '#F0F3FF',
  10: '#D2DCFE',
  20: '#A4B8FE',
  30: '#7795FD',
  40: '#4971FD',
  50: '#1C4EFC',
  60: '#163ECA',
  70: '#112F97',
  80: '#0B1F65',
  90: '#061032',
};

const SKY_BLUE = {
  5: '#F0FBFF',
  10: '#D4F3FE',
  20: '#A9E6FC',
  30: '#7DDAFB',
  40: '#52CDF9',
  50: '#27C1F8',
  60: '#1F9AC6',
  70: '#1F9AC6',
  80: '#104D63',
  90: '#082732',
};

export const Colors = {
  primary: PRIMARY,
  secondary: SECONDARY,
  danger: DANGER,
  warning: WARNING,
  success: SUCCESS,
  information: INFORMATION,
  // ---
  grey: GREY,
  blue: BLUE,
  skyBlue: SKY_BLUE,
};

export const TextColors = {
  primary: GREY[80],
  secondary: GREY[60],
  disabled: GREY[50],
  danger: DANGER[60],
  warning: WARNING[60],
  success: SUCCESS[60],
  information: INFORMATION[60],
  white: '#fff',
  black: '#000'
};

export const BorderColors = {
  box: GREY[20],
  active: PRIMARY[50],
  base: GREY[60],
  danger: DANGER[10],
  warning: WARNING[10],
  success: SUCCESS[10],
  information: INFORMATION[10],
};

export const BackgroundColors = {
  layer1: GREY[5],
  layer2: GREY[10],
  neutral: GREY[20],
  base: GREY[0],
  danger: DANGER[5],
  warning: WARNING[5],
  success: SUCCESS[5],
  information: INFORMATION[5],
};

export const ActionColors = {
  hover: PRIMARY[60],
  pressed: PRIMARY[70],
  disable: GREY[20]
};

export const DividerColor = (GREY[50] + transparency['20%']);

export default function palette({ mode = 'light', themeColors }: { mode: 'light' | 'dark'; themeColors?: { light?: Theme; dark?: Theme; } }): Theme {
  const light = themeColors?.light || {
    mode: mode,
    ...Colors,
    text: TextColors,
    border: BorderColors,
    background: BackgroundColors,
    action: ActionColors,
    divider: DividerColor
  };

  // TODO: 다크 모드 색상값. 현 light 모드와 동일하게 설정되어 있음.
  const dark = themeColors?.dark || {
    mode: mode,
    ...Colors,
    text: TextColors,
    border: BorderColors,
    background: BackgroundColors,
    action: ActionColors,
    divider: DividerColor
  };

  return mode === 'light' ? light : dark;
}
