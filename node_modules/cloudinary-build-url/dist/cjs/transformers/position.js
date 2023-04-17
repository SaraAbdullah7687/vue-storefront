"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.position = void 0;
var expression_1 = require("./expression");
exports.position = function (_a) {
    var x = _a.x, y = _a.y;
    var xAxis = x ? "x_" + expression_1.formatValue(x) : '';
    var yAxis = y ? "y_" + expression_1.formatValue(y) : '';
    return [xAxis, yAxis].filter(Boolean).join();
};
