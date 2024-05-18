import { createContext, useContext, useMemo } from 'react';
import palette from '../theme/palette';
import typography from '../theme/typography';
var ThemeContext = createContext(null);
export var useTheme = function () {
    var context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
export var ThemeProvider = function (_a) {
    var children = _a.children;
    var mode = 'light';
    var isMobile = true;
    var paletteCreate = useMemo(function () { return palette({ mode: mode }); }, [mode]);
    var typographyCreate = useMemo(function () { return typography({ isMobile: isMobile }); }, [isMobile]);
    var themeValue = useMemo(function () { return ({
        palette: paletteCreate,
        typography: typographyCreate,
    }); }, [paletteCreate, typographyCreate]);
    return (<ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>);
};
//# sourceMappingURL=useThemeProvider.js.map