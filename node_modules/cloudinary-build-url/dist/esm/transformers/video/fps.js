import { toString } from "../../utils";
export var fps = function (value) {
    var isObj = typeof value === 'object';
    if (!value || (isObj && !value.min))
        return '';
    var range = isObj ? toString([value.min, value.max], '-') : value;
    return "fps_" + range;
};
