"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fps = void 0;
var utils_1 = require("../../utils");
exports.fps = function (value) {
    var isObj = typeof value === 'object';
    if (!value || (isObj && !value.min))
        return '';
    var range = isObj ? utils_1.toString([value.min, value.max], '-') : value;
    return "fps_" + range;
};
