import { convert } from './expression';
export var border = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'solid' : _b, _c = _a.color, color = _c === void 0 ? 'black' : _c, width = _a.width;
    if (!width)
        return '';
    var formattedValue = isNaN(width) ? convert(width) : width + "px";
    return "bo_" + formattedValue + "_" + type + "_" + color;
};
