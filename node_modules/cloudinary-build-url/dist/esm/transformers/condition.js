import transform, { toTransformationStr } from ".";
import { ConditionOperators } from "@cld-apis/utils";
import { ConditionalParams } from '../constants/condition';
import { toString } from "../utils";
export var computeCondition = function (conditionObj) {
    var expression = conditionObj.expression ? toString(conditionObj.expression.map(function (exp) { return computeConditionExpression(exp); }), '_and_') : '';
    var transformations = conditionObj.transformations.map(function (transformation) { return toTransformationStr(transform(transformation)); });
    return {
        expression: expression,
        transformations: toString(transformations, '/')
    };
};
export var mapCharacteristic = function (expression) { return ConditionalParams[expression] || expression; };
export var computeConditionExpression = function (expression) {
    var characteristic = Array.isArray(expression.characteristic) ? toString(expression.characteristic.map(mapCharacteristic)) : mapCharacteristic(expression.characteristic);
    var operator = ConditionOperators[expression.operator];
    var value = isNaN(expression.value) ? "!" + expression.value + "!" : expression.value;
    return toString([characteristic, operator, value], '_');
};
export var condition = function (conditionObj) {
    if (!conditionObj || !conditionObj.if || !conditionObj.if.expression)
        return '';
    var ifCondition = computeCondition(conditionObj.if);
    var elseCondition = conditionObj.else ? computeCondition(conditionObj.else) : null;
    var formattedIf = toString(["if_" + ifCondition.expression, ifCondition.transformations], '/');
    var formattedElse = elseCondition ? toString(['if_else', elseCondition.transformations], '/') : '';
    return [toString([formattedIf, formattedElse, 'if_end'], '/')];
};
