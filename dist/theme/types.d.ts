/// <reference types="react" />
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
}
export interface BorderTheme {
    box: string;
    active: string;
    base: string;
    danger: string;
    warning: string;
    success: string;
    information: string;
}
export interface TextTheme {
    title: string;
    body: string;
    detail: string;
    disabled: string;
    danger: string;
    warning: string;
    success: string;
    information: string;
}
export interface ActionTheme {
    hover: string;
    pressed: string;
    disable: string;
}
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
    teal: Record<number, string>;
    purple: Record<number, string>;
}
export interface Theme extends CommonPalette {
    mode: 'light' | 'dark';
    text: TextTheme;
    border: BorderTheme;
    background: BackgroundTheme;
    action: ActionTheme;
    divider: string;
}
interface Typo3Style {
    large: TextProps['style'];
    medium: TextProps['style'];
    small: TextProps['style'];
}
interface Typo6Style {
    XXlarge: TextProps['style'];
    Xlarge: TextProps['style'];
    large: TextProps['style'];
    medium: TextProps['style'];
    small: TextProps['style'];
    Xsmall: TextProps['style'];
}
export interface TypographyVariants {
    display: Typo3Style;
    heading: Typo3Style;
    title: Typo6Style;
    body: Typo6Style;
    detail: Typo3Style;
    label: Typo6Style;
    links: Typo3Style;
}
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
}
export interface TypographyPropsVariantOverrides {
    'display.large': true;
    'display.medium': true;
    'display.small': true;
    'heading.large': true;
    'heading.medium': true;
    'heading.small': true;
    'title.XXlarge': true;
    'title.Xlarge': true;
    'title.large': true;
    'title.medium': true;
    'title.small': true;
    'title.Xsmall': true;
    'body.large': true;
    'body.medium': true;
    'body.small': true;
    'detail.large': true;
    'detail.medium': true;
    'detail.small': true;
    'label.large': true;
    'label.medium': true;
    'label.small': true;
    'label.Xsmall': true;
    'links.large': true;
    'links.medium': true;
    'links.small': true;
}
export interface ThemeProps {
    palette: Theme;
    typography: TypographyVariants;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
}
export {};
//# sourceMappingURL=types.d.ts.map