import { TextProps } from "react-native";

export interface BackgroundTheme {
    paper: string;
    base: string;
    layer1: string;
    layer2: string;
    danger: string;
    warning: string;
    success: string;
    information: string;
};
export interface BorderTheme {
    box: string;
    active: string;
    base: string;
    danger: string;
    warning: string;
    success: string;
    information: string;
};
export interface TextTheme {
    title: string;
    body: string;
    detail: string;
    disabled: string;
    danger: string;
    warning: string;
    success: string;
    information: string;
    white: string;
    black: string;
};
export interface ActionTheme {
    hover: string;
    pressed: string;
    disable: string;
};
export interface CommonPalette {
    primary: Record<number | 'main', string>;
    secondary: Record<number | 'main', string>;
    danger: Record<number | 'main', string>;
    warning: Record<number | 'main', string>;
    success: Record<number | 'main', string>;
    information: Record<number | 'main', string>;
    grey: Record<number, string>;
    blue: Record<number, string>;
    skyBlue: Record<number, string>;
};
export interface Theme extends CommonPalette {
    mode: 'light' | 'dark';
    text: TextTheme;
    border: BorderTheme;
    background: BackgroundTheme;
    action: ActionTheme;
    divider: string;
};
export interface TypoNumber {
    1: TextProps['style'];
    2: TextProps['style'];
    3: TextProps['style'];
    4: TextProps['style'];
    5: TextProps['style'];
    6: TextProps['style'];
}
export interface TypographyVariants {
    themeFonts?: ThemeFonts;
    heading: TypoNumber;
    subTitle: TypoNumber;
    body: TypoNumber;
    caption: TypoNumber;
};

export interface TypographyVariantsProps extends TypographyVariants {
    themeFonts?: ThemeFonts;
};

export interface TypographyVariantsOptions {
    'heading.1'?: React.CSSProperties;
    'heading.2'?: React.CSSProperties;
    'heading.3'?: React.CSSProperties;
    'heading.4'?: React.CSSProperties;
    'heading.5'?: React.CSSProperties;
    'heading.6'?: React.CSSProperties;
    'subTitle.1'?: React.CSSProperties;
    'subTitle.2'?: React.CSSProperties;
    'subTitle.3'?: React.CSSProperties;
    'subTitle.4'?: React.CSSProperties;
    'subTitle.5'?: React.CSSProperties;
    'subTitle.6'?: React.CSSProperties;
    'body.1'?:       React.CSSProperties;
    'body.2'?:       React.CSSProperties;
    'body.3'?:       React.CSSProperties;
    'body.4'?:       React.CSSProperties;
    'body.5'?:       React.CSSProperties;
    'body.6'?:       React.CSSProperties;
    'caption.1'?: React.CSSProperties;
    'caption.2'?: React.CSSProperties;
    'caption.3'?: React.CSSProperties;
    'caption.4'?: React.CSSProperties;
    'caption.5'?: React.CSSProperties;
    'caption.6'?: React.CSSProperties;
};

export type TypoOptions =
'heading.1' |
'heading.2' |
'heading.3' |
'heading.4' |
'heading.5' |
'heading.6' |
'subTitle.1'|
'subTitle.2'|
'subTitle.3'|
'subTitle.4'|
'subTitle.5'|
'subTitle.6'|
'body.1'  |
'body.2'   |
'body.3'   |
'body.4'   |
'body.5'   |
'body.6'   |
'caption.1' |
'caption.2' |
'caption.3' |
'caption.4' |
'caption.5' |
'caption.6';

export type TypoStyle = 'display' | 'heading' | 'title' | 'body' | 'detail' | 'label' | 'links';

export type Typo3Size = 'large' | 'medium' | 'small';

export type Typo6Size = 'XXlarge' | 'Xlarge' | 'large' | 'medium' | 'small' | 'Xsmall';

export type TextColorOptions = 'title' | 'body' | 'detail' | 'disabled' | 'danger' | 'warning' | 'success' | 'information' | 'white' | 'black';

export interface ThemeProps {
    palette: Theme;
    typography: TypographyVariants;
};

export interface ThemeFonts {
    100?: string;
    200?: string;
    300?: string;
    400: string;
    500?: string;
    600?: string;
    700: string;
    800?: string;
    900?: string;
};

export interface ThemeProviderProps {
    children: React.ReactNode;
    themeFonts?: ThemeFonts;
    themeColors?: {
        light?: Theme;
        dark?: Theme;
    };
};