export default function typography(_a) {
    var _b = _a.isMobile, isMobile = _b === void 0 ? true : _b;
    return {
        display: {
            large: {
                fontSize: !isMobile ? 66 : 40,
                fontWeight: '700',
                lineHeight: (!isMobile ? 66 : 40) * 1.5,
                letterSpacing: 1
            },
            medium: {
                fontSize: !isMobile ? 50 : 32,
                fontWeight: '700',
                lineHeight: (!isMobile ? 50 : 32) * 1.5,
                letterSpacing: 1
            },
            small: {
                fontSize: !isMobile ? 40 : 25,
                fontWeight: '700',
                lineHeight: (!isMobile ? 40 : 25) * 1.5,
                letterSpacing: 1
            }
        },
        heading: {
            large: {
                fontSize: !isMobile ? 50 : 40,
                fontWeight: '700',
                lineHeight: (!isMobile ? 50 : 40) * 1.5,
                letterSpacing: 1
            },
            medium: {
                fontSize: !isMobile ? 40 : 32,
                fontWeight: '700',
                lineHeight: (!isMobile ? 40 : 32) * 1.5,
                letterSpacing: 1
            },
            small: {
                fontSize: !isMobile ? 32 : 25,
                fontWeight: '700',
                lineHeight: (!isMobile ? 32 : 25) * 1.5,
                letterSpacing: 1
            }
        },
        title: {
            XXlarge: {
                fontSize: !isMobile ? 32 : 25,
                fontWeight: '700',
                lineHeight: (!isMobile ? 32 : 25) * 1.5,
                letterSpacing: 1
            },
            Xlarge: {
                fontSize: 25,
                fontWeight: '700',
                lineHeight: 25 * 1.5,
                letterSpacing: 1
            },
            large: {
                fontSize: 21,
                fontWeight: '700',
                lineHeight: 21 * 1.5,
                letterSpacing: 1
            },
            medium: {
                fontSize: 19,
                fontWeight: '700',
                lineHeight: 19 * 1.5,
                letterSpacing: 1
            },
            small: {
                fontSize: 17,
                fontWeight: '700',
                lineHeight: 17 * 1.5,
                letterSpacing: 1
            },
            Xsmall: {
                fontSize: 15,
                fontWeight: '700',
                lineHeight: 15 * 1.5,
                letterSpacing: 1
            }
        },
        body: {
            XXlarge: {
                fontSize: 23,
                lineHeight: 23 * 1.5,
            },
            Xlarge: {
                fontSize: 21,
                lineHeight: 21 * 1.5,
            },
            large: {
                fontSize: 19,
                lineHeight: 19 * 1.5,
            },
            medium: {
                fontSize: 17,
                lineHeight: 17 * 1.5,
            },
            small: {
                fontSize: 15,
                lineHeight: 15 * 1.5,
            },
            Xsmall: {
                fontSize: 13,
                lineHeight: 13 * 1.5,
            }
        },
        detail: {
            large: {
                fontSize: 17,
                lineHeight: 17 * 1.5,
            },
            medium: {
                fontSize: 15,
                lineHeight: 15 * 1.5,
            },
            small: {
                fontSize: 13,
                lineHeight: 13 * 1.5,
            },
        },
        label: {
            XXlarge: {
                fontSize: 23,
            },
            Xlarge: {
                fontSize: 21,
            },
            large: {
                fontSize: 19,
            },
            medium: {
                fontSize: 17,
            },
            small: {
                fontSize: 15,
            },
            Xsmall: {
                fontSize: 13,
            }
        },
        links: {
            large: {
                fontSize: 19,
                lineHeight: 1.5,
            },
            medium: {
                fontSize: 17,
                lineHeight: 1.5,
            },
            small: {
                fontSize: 15,
                lineHeight: 1.5,
            },
        }
    };
}
//# sourceMappingURL=typography.js.map