import { Formats, Prefix } from "../constants/variable";
import { ValueAssignable } from '@cld-apis/utils';
import { toString } from "../utils";
import { convert, hasArithmeticExpression } from "./expression";
export var convertStringValueType = function (value) {
    if (!value || !value.expression)
        return '';
    var expression = Array.isArray(value.expression) ? toString(value.expression) : value.expression;
    var isArithmetic = hasArithmeticExpression(expression);
    var convertedExpression = convert(expression);
    var format = Formats[value.formatAs] || '';
    var mappedExpression = convertedExpression && !isArithmetic ? "!" + convertedExpression + "!" : convertedExpression;
    return toString([mappedExpression, format], '_');
};
export var computeVariable = function (variable) {
    var name = "" + Prefix + variable.name;
    var value = variable.value;
    if (isNaN(variable.value)) {
        if (Array.isArray(variable.value)) {
            value = toString(variable.value);
        }
        else {
            value = convertStringValueType(variable.value);
        }
    }
    var varValue = toString([ValueAssignable[variable.assignFrom], value], ':');
    return varValue ? toString([name, varValue], '_') : '';
};
export var variables = function (value) {
    if (!value)
        return '';
    if (!Array.isArray(value))
        return computeVariable(value);
    return toString(value.map(function (variable) { return computeVariable(variable); }), ',');
};
