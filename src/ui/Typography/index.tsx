import { TextProps } from "react-native/types";
import { useTheme } from "../../model/useThemeProvider";
import { TypoOptions, TypoStyle, Typo3Size } from "../../theme";
import TextAtom from "../atoms/TextAtom"
import { TextColorOptions } from "../../theme/types";

interface Props extends TextProps {
    typo: TypoOptions;
    color?: TextColorOptions;
}

const Typography = ({
    typo,
    color,
    ...props
}: Props) => {
    const { typography, palette } = useTheme();
    const split = typo.split('.');
    const s01 = split[0] as TypoStyle;
    const s02 = split[1] as Typo3Size;
    return <TextAtom {...props} style={[props.style, typography[s01][s02], color && { color: palette.text[color] }]}>{props.children}</TextAtom>
}

export default Typography;