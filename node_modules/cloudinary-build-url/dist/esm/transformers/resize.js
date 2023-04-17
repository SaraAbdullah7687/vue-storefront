import { formatValue } from "./expression";
export var resize = function (_a) {
    var type = _a.type, width = _a.width, height = _a.height, aspectRatio = _a.aspectRatio;
    var w = width ? "w_" + formatValue(width) : '';
    var h = height ? "h_" + formatValue(height) : '';
    var crop = type ? "c_" + type : '';
    var ar = aspectRatio ? "ar_" + formatValue(aspectRatio) : '';
    return [crop, w, h, ar].filter(Boolean).join();
};
