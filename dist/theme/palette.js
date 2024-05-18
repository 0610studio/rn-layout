var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PRIMARY = {
    0: '#FFF7E6',
    5: '#FFEDD1',
    10: '#FFE2AD',
    20: '#FFD485',
    30: '#FFC55C',
    40: '#FFB733',
    50: '#FF7F00',
    60: '#E67500',
    70: '#CC6A00',
    80: '#B35F00',
    90: '#995400',
    100: '#663800',
    main: '#FF7F00',
};
var SECONDARY = {
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
var DANGER = {
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
var WARNING = {
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
var SUCCESS = {
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
var INFORMATION = {
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
var GREY = {
    0: '#FFFFFF',
    5: '#F8F8F8',
    10: '#F0F0F0',
    20: '#E4E4E4',
    30: '#D8D8D8',
    40: '#C6C6C6',
    50: '#8E8E8E',
    60: '#717171',
    70: '#555555',
    80: '#2D2D2D',
    90: '#1D1D1D',
    100: '#000000',
};
var BLUE = {
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
var SKY_BLUE = {
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
export var Colors = {
    primary: PRIMARY,
    secondary: SECONDARY,
    danger: DANGER,
    warning: WARNING,
    success: SUCCESS,
    information: INFORMATION,
    grey: GREY,
    blue: BLUE,
    skyBlue: SKY_BLUE,
};
export var TextColors = {
    title: GREY[90],
    body: GREY[90],
    detail: GREY[70],
    disabled: GREY[50],
    danger: DANGER[60],
    warning: WARNING[60],
    success: SUCCESS[60],
    information: INFORMATION[60],
};
export var BorderColors = {
    box: GREY[20],
    active: PRIMARY[50],
    base: GREY[60],
    danger: DANGER[10],
    warning: WARNING[10],
    success: SUCCESS[10],
    information: INFORMATION[10],
};
export var BackgroundColors = {
    paper: GREY[5],
    base: GREY[0],
    layer1: GREY[5],
    layer2: SECONDARY[5],
    danger: DANGER[5],
    warning: WARNING[5],
    success: SUCCESS[5],
    information: INFORMATION[5],
};
export var ActionColors = {
    hover: PRIMARY[60],
    pressed: PRIMARY[70],
    disable: GREY[20]
};
export var DividerColor = (GREY[50] + '40');
export default function palette(_a) {
    var _b = _a.mode, mode = _b === void 0 ? 'light' : _b;
    var light = __assign(__assign({ mode: mode }, Colors), { text: TextColors, border: BorderColors, background: BackgroundColors, action: ActionColors, divider: DividerColor });
    var dark = __assign(__assign({ mode: mode }, Colors), { text: TextColors, border: BorderColors, background: BackgroundColors, action: ActionColors, divider: DividerColor });
    return mode === 'light' ? light : dark;
}
//# sourceMappingURL=palette.js.map