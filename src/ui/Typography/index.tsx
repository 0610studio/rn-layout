import { TextProps } from "react-native/types";
import { useTheme } from "../../model/useThemeProvider";
import { TypoOptions, TypoStyle, Typo3Size } from "../../theme";
import TextAtom from "../atoms/TextAtom"
import { TextColorOptions } from "../../theme/types";

export interface TypographyProps extends TextProps {
    typo?: TypoOptions;
    color?: TextColorOptions;
}

const Typography = ({
    typo = 'detail.medium',
    color = 'body',
    ...props
}: TypographyProps) => {
    const { typography, palette } = useTheme();
    const [s01, s02] = typo.split('.') as [TypoStyle, Typo3Size];
    return <TextAtom {...props} style={[typography[s01][s02], { color: palette.text[color] }, props.style]}>{props.children}</TextAtom>
}

export default Typography;