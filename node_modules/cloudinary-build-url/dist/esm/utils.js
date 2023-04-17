export var toString = function (arr, separation) {
    if (separation === void 0) { separation = ':'; }
    return arr.filter(Boolean).join(separation);
};
export var cleanText = function (text) { return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1'); };
