export var calculateRadius = function (width, height, borderRadius) {
    var radiusRatio = Math.max((width / height), (height / width));
    var calc = borderRadius * (radiusRatio > 1 ? radiusRatio / 2 : radiusRatio);
    return calc;
};
//# sourceMappingURL=utils.js.map