"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offset = void 0;
exports.offset = function (obj) {
    if (!obj)
        return '';
    var start = obj.start ? "so_" + obj.start : '';
    var end = obj.end ? "eo_" + obj.end : '';
    var duration = obj.duration ? "du_" + obj.duration : '';
    return [start, end, duration].filter(Boolean).join(',');
};
