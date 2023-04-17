import { ArithmeticExpression, PreDefinedPatterns, PredefinedVariables } from '../constants/arithmetic';
import { Prefix } from '../constants/variable';
var OPERATORS_REGEX = "((\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\+|\\*|\\^)(?=[ _]))";
var mapArithmeticExpression = function (orgExpression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return orgExpression.replace(regex, function (match) { return ArithmeticExpression[match]; });
};
var mapPredefinedVariables = function (orgExpression) {
    var regex = new RegExp(PreDefinedPatterns, 'g');
    return orgExpression.replace(regex, function (match, p, index) { return orgExpression[index - 1] === Prefix ? match : PredefinedVariables[match]; });
};
export var formatValue = function (value) { return isNaN(value) ? convert(value) : value; };
export var convert = function (expression) {
    if (!expression)
        return '';
    var mappedArithmetic = mapArithmeticExpression(expression);
    var converted = mapPredefinedVariables(mappedArithmetic);
    return converted.replace(/[ _]+/g, '_');
};
export var hasArithmeticExpression = function (expression) {
    var regex = new RegExp(OPERATORS_REGEX, 'g');
    return regex.test(expression);
};
