"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasArithmeticExpression = exports.convert = exports.formatValue = void 0;
var arithmetic_1 = require("../constants/arithmetic");
var variable_1 = require("../constants/variable");
var OPERATORS_REGEX = "((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))";
var mapArithmeticExpression = function (orgExpression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return orgExpression.replace(regex, function (match) { return arithmetic_1.ArithmeticExpression[match]; });
};
var mapPredefinedVariables = function (orgExpression) {
    var regex = new RegExp(arithmetic_1.PreDefinedPatterns, 'g');
    return orgExpression.replace(regex, function (match, p, index) { return orgExpression[index - 1] === variable_1.Prefix ? match : arithmetic_1.PredefinedVariables[match]; });
};
exports.formatValue = function (value) { return isNaN(value) ? exports.convert(value) : value; };
exports.convert = function (expression) {
    if (!expression)
        return '';
    var mappedArithmetic = mapArithmeticExpression(expression);
    var converted = mapPredefinedVariables(mappedArithmetic);
    return converted.replace(/[ _]+/g, '_');
};
exports.hasArithmeticExpression = function (expression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return regex.test(expression);
};
