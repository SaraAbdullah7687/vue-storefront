import { toString } from '../utils';
export var effect = function (obj) {
    var isString = typeof obj === 'string';
    if (!obj || (!isString && !obj.name))
        return '';
    if (isString || !obj.value)
        return "e_" + (obj.name || obj);
    var value = Array.isArray(obj.value) ? obj.value.join(':') : obj.value;
    var effectValue = toString([obj.name, value]);
    return "e_" + effectValue;
};
