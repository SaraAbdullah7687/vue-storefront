"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanText = exports.toString = void 0;
exports.toString = function (arr, separation) {
    if (separation === void 0) { separation = ':'; }
    return arr.filter(Boolean).join(separation);
};
exports.cleanText = function (text) { return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, '%25$1'); };
