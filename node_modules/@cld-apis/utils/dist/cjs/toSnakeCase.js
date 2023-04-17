"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = void 0;
exports.toSnakeCase = function (options) {
    if (!options)
        return {};
    var formatted = {};
    var snakeCase = require('lodash.snakecase');
    for (var key in options) {
        var value = options[key];
        var newKey = snakeCase(key);
        formatted[newKey] = value;
    }
    return formatted;
};
