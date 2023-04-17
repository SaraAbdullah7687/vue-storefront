import { formatValue } from './expression';
export var position = function (_a) {
    var x = _a.x, y = _a.y;
    var xAxis = x ? "x_" + formatValue(x) : '';
    var yAxis = y ? "y_" + formatValue(y) : '';
    return [xAxis, yAxis].filter(Boolean).join();
};
