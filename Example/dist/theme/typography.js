export default function typography(_a) {
    var _b = _a.isMobile, isMobile = _b === void 0 ? true : _b, themeFonts = _a.themeFonts;
    return {
        themeFonts: themeFonts,
        display: {
            large: {
                fontSize: !isMobile ? 66 : 40,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 66 : 40) * 1.5,
                letterSpacing: 1
            },
            medium: {
                fontSize: !isMobile ? 50 : 32,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 50 : 32) * 1.5,
                letterSpacing: 1
            },
            small: {
                fontSize: !isMobile ? 40 : 25,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 40 : 25) * 1.5,
                letterSpacing: 1
            }
        },
        heading: {
            large: {
                fontSize: !isMobile ? 50 : 40,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 50 : 40) * 1.5,
                letterSpacing: 1
            },
            medium: {
                fontSize: !isMobile ? 40 : 32,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 40 : 32) * 1.5,
                letterSpacing: 1
            },
            small: {
                fontSize: !isMobile ? 32 : 25,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 32 : 25) * 1.5,
                letterSpacing: 1
            }
        },
        title: {
            XXlarge: {
                fontSize: !isMobile ? 32 : 25,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: (!isMobile ? 32 : 25) * 1.5,
                letterSpacing: 1
            },
            Xlarge: {
                fontSize: 25,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: 25 * 1.5,
                letterSpacing: 1
            },
            large: {
                fontSize: 21,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: 21 * 1.5,
                letterSpacing: 1
            },
            medium: {
                fontSize: 19,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: 19 * 1.5,
                letterSpacing: 1
            },
            small: {
                fontSize: 17,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: 17 * 1.5,
                letterSpacing: 1
            },
            Xsmall: {
                fontSize: 15,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[700],
                lineHeight: 15 * 1.5,
                letterSpacing: 1
            }
        },
        body: {
            XXlarge: {
                fontSize: 23,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 23 * 1.5,
            },
            Xlarge: {
                fontSize: 21,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 21 * 1.5,
            },
            large: {
                fontSize: 19,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 19 * 1.5,
            },
            medium: {
                fontSize: 17,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 17 * 1.5,
            },
            small: {
                fontSize: 15,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 15 * 1.5,
            },
            Xsmall: {
                fontSize: 13,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 13 * 1.5,
            }
        },
        detail: {
            large: {
                fontSize: 17,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 17 * 1.5,
            },
            medium: {
                fontSize: 15,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 15 * 1.5,
            },
            small: {
                fontSize: 13,
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                lineHeight: 13 * 1.5,
            },
        },
        label: {
            XXlarge: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 23,
            },
            Xlarge: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 21,
            },
            large: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 19,
            },
            medium: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 17,
            },
            small: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 15,
            },
            Xsmall: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 13,
            }
        },
        links: {
            large: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 19,
                lineHeight: 1.5,
            },
            medium: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 17,
                lineHeight: 1.5,
            },
            small: {
                fontFamily: themeFonts === null || themeFonts === void 0 ? void 0 : themeFonts[400],
                fontSize: 15,
                lineHeight: 1.5,
            },
        }
    };
}
//# sourceMappingURL=typography.js.map