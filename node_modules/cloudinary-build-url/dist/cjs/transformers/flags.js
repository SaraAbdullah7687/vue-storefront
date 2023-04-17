"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flags = void 0;
exports.flags = function (value) {
    if (!value || value.length === 0)
        return '';
    var flagValue = typeof value === 'string' ? value : value.join(':');
    return "fl_" + flagValue;
};
