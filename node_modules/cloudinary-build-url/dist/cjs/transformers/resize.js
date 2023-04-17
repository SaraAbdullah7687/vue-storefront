"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = void 0;
var expression_1 = require("./expression");
exports.resize = function (_a) {
    var type = _a.type, width = _a.width, height = _a.height, aspectRatio = _a.aspectRatio;
    var w = width ? "w_" + expression_1.formatValue(width) : '';
    var h = height ? "h_" + expression_1.formatValue(height) : '';
    var crop = type ? "c_" + type : '';
    var ar = aspectRatio ? "ar_" + expression_1.formatValue(aspectRatio) : '';
    return [crop, w, h, ar].filter(Boolean).join();
};
