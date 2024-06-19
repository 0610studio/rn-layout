import { createContext, useContext, useMemo } from 'react';
import palette from '../theme/palette';
import typography from '../theme/typography';
import { ThemeProps, ThemeProviderProps } from '../theme';

const ThemeContext = createContext<ThemeProps | null>(null);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    themeColors,
    themeFonts,
    children
}) => {
    // TODO: dark 모드 추가시 mode를 동적인 context로 관리해야됨.
    // const mode = useColorScheme() ?? 'light';
    const mode = 'light';
    const isMobile = true;

    const paletteCreate = useMemo(() => palette({ mode, themeColors }), [mode]);
    const typographyCreate = useMemo(() => typography({ isMobile, themeFonts }), [isMobile]);

    const themeValue = useMemo(() => ({
        mode: mode,
        palette: paletteCreate,
        typography: typographyCreate,
    }), [paletteCreate, typographyCreate, mode]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
}
