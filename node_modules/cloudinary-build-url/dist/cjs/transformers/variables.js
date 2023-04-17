"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = exports.computeVariable = exports.convertStringValueType = void 0;
var variable_1 = require("../constants/variable");
var utils_1 = require("@cld-apis/utils");
var utils_2 = require("../utils");
var expression_1 = require("./expression");
exports.convertStringValueType = function (value) {
    if (!value || !value.expression)
        return '';
    var expression = Array.isArray(value.expression) ? utils_2.toString(value.expression) : value.expression;
    var isArithmetic = expression_1.hasArithmeticExpression(expression);
    var convertedExpression = expression_1.convert(expression);
    var format = variable_1.Formats[value.formatAs] || '';
    var mappedExpression = convertedExpression && !isArithmetic ? "!" + convertedExpression + "!" : convertedExpression;
    return utils_2.toString([mappedExpression, format], '_');
};
exports.computeVariable = function (variable) {
    var name = "" + variable_1.Prefix + variable.name;
    var value = variable.value;
    if (isNaN(variable.value)) {
        if (Array.isArray(variable.value)) {
            value = utils_2.toString(variable.value);
        }
        else {
            value = exports.convertStringValueType(variable.value);
        }
    }
    var varValue = utils_2.toString([utils_1.ValueAssignable[variable.assignFrom], value], ':');
    return varValue ? utils_2.toString([name, varValue], '_') : '';
};
exports.variables = function (value) {
    if (!value)
        return '';
    if (!Array.isArray(value))
        return exports.computeVariable(value);
    return utils_2.toString(value.map(function (variable) { return exports.computeVariable(variable); }), ',');
};
