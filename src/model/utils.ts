/**
 * 사각형의 너비와 높이에 따라 비슷한 비율의 테두리 반지름을 계산합니다.
 * @param width 사각형의 너비입니다.
 * @param height 사각형의 높이입니다.
 * @param borderRadius 기본 테두리 반지름입니다.
 * @returns 계산된 테두리 반지름입니다.
 */
export const calculateRadius = (width: number, height: number, borderRadius: number) => {
    const radiusRatio = Math.max((width / height), (height / width));
    const calc = borderRadius * (radiusRatio > 1 ? radiusRatio / 2 : radiusRatio);
    return calc;
};

export const withPromise = <T extends unknown[]>(fn: (...args: T) => Promise<unknown>): ((...args: T) => void) => {
    return (...args) => { void fn(...args) };
};
