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
export interface Typo3Style {
    large: TextProps['style'];
    medium: TextProps['style'];
    small: TextProps['style'];
}
export interface Typo6Style {
    XXlarge: TextProps['style'];
    Xlarge: TextProps['style'];
    large: TextProps['style'];
    medium: TextProps['style'];
    small: TextProps['style'];
    Xsmall: TextProps['style'];
    XXsmall: TextProps['style'];
}
export interface TypographyVariants {
    themeFonts?: ThemeFonts;
    display: Typo3Style;
    heading: Typo3Style;
    title: Typo6Style;
    body: Typo6Style;
    detail: Typo3Style;
    label: Typo6Style;
    links: Typo3Style;
};

export interface TypographyVariantsProps extends TypographyVariants {
    themeFonts?: ThemeFonts;
};

export interface TypographyVariantsOptions {
    'display.large'?: React.CSSProperties;
    'display.medium'?: React.CSSProperties;
    'display.small'?: React.CSSProperties;
    'heading.large'?: React.CSSProperties;
    'heading.medium'?: React.CSSProperties;
    'heading.small'?: React.CSSProperties;
    'title.XXlarge'?: React.CSSProperties;
    'title.Xlarge'?: React.CSSProperties;
    'title.large'?: React.CSSProperties;
    'title.medium'?: React.CSSProperties;
    'title.small'?: React.CSSProperties;
    'title.Xsmall'?: React.CSSProperties;
    'body.large'?: React.CSSProperties;
    'body.medium'?: React.CSSProperties;
    'body.small'?: React.CSSProperties;
    'detail.large'?: React.CSSProperties;
    'detail.medium'?: React.CSSProperties;
    'detail.small'?: React.CSSProperties;
    'label.large'?: React.CSSProperties;
    'label.medium'?: React.CSSProperties;
    'label.small'?: React.CSSProperties;
    'label.Xsmall'?: React.CSSProperties;
    'links.large'?: React.CSSProperties;
    'links.medium'?: React.CSSProperties;
    'links.small'?: React.CSSProperties;
};

export type TypoOptions =
    'display.large' |
    'display.medium' |
    'display.small' |
    'heading.large' |
    'heading.medium' |
    'heading.small' |
    'title.XXlarge' |
    'title.Xlarge' |
    'title.large' |
    'title.medium' |
    'title.small' |
    'title.Xsmall' |
    'body.large' |
    'body.medium' |
    'body.small' |
    'detail.large' |
    'detail.medium' |
    'detail.small' |
    'label.large' |
    'label.medium' |
    'label.small' |
    'label.Xsmall' |
    'links.large' |
    'links.medium' |
    'links.small';

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