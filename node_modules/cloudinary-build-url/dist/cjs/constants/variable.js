"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formats = exports.ValueAssignable = exports.StringBound = exports.Prefix = void 0;
exports.Prefix = '$';
exports.StringBound = '!';
exports.ValueAssignable = {
    context: "ctx",
    structureMetadata: "md"
};
exports.Formats = {
    integer: 'to_i',
    float: 'to_f'
};
