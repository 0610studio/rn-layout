import { TextProps } from "react-native/types";
import { useTheme } from "../../model/useThemeProvider";
import { TypoOptions, TypoStyle } from "../../theme";
import TextAtom from "../atoms/TextAtom"
import { TextColorOptions, TypoSubStyle } from "../../theme/types";

export interface TypographyProps extends TextProps {
    typo?: TypoOptions;
    color?: TextColorOptions;
}

const Typography = ({
    typo = 'body.2',
    color = 'primary',
    ...props
}: TypographyProps) => {
    const { typography, palette } = useTheme();
    const [s01, s02] = typo.split('.') as [TypoStyle, TypoSubStyle];
    return <TextAtom {...props} style={[typography[s01][s02], { color: palette.text[color] }, props.style]}>{props.children}</TextAtom>
}

export default Typography;