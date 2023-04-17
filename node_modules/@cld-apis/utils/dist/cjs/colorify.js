"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorify = void 0;
var constants_1 = require("./constants");
exports.colorify = function (value, prefix) {
    if (prefix === void 0) { prefix = 'rgb:'; }
    if (!value)
        return '';
    if (Object.values(constants_1.NamedColors).includes(value))
        return value;
    var color = value.startsWith('#') ? value.slice(1) : value;
    if (color.length < 3 || color.length > 8) {
        throw new Error('HEX Color should be 3-4 digits for RGB/RGBA, or 6-8 digits for RGB/RGBA triplet/quadruplet');
    }
    return "" + prefix + color;
};
