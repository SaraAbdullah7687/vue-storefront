"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.effect = void 0;
var utils_1 = require("../utils");
exports.effect = function (obj) {
    var isString = typeof obj === 'string';
    if (!obj || (!isString && !obj.name))
        return '';
    if (isString || !obj.value)
        return "e_" + (obj.name || obj);
    var value = Array.isArray(obj.value) ? obj.value.join(':') : obj.value;
    var effectValue = utils_1.toString([obj.name, value]);
    return "e_" + effectValue;
};
