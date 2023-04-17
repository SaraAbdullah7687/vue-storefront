"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.condition = exports.computeConditionExpression = exports.mapCharacteristic = exports.computeCondition = void 0;
var _1 = __importStar(require("."));
var utils_1 = require("@cld-apis/utils");
var condition_1 = require("../constants/condition");
var utils_2 = require("../utils");
exports.computeCondition = function (conditionObj) {
    var expression = conditionObj.expression ? utils_2.toString(conditionObj.expression.map(function (exp) { return exports.computeConditionExpression(exp); }), '_and_') : '';
    var transformations = conditionObj.transformations.map(function (transformation) { return _1.toTransformationStr(_1.default(transformation)); });
    return {
        expression: expression,
        transformations: utils_2.toString(transformations, '/')
    };
};
exports.mapCharacteristic = function (expression) { return condition_1.ConditionalParams[expression] || expression; };
exports.computeConditionExpression = function (expression) {
    var characteristic = Array.isArray(expression.characteristic) ? utils_2.toString(expression.characteristic.map(exports.mapCharacteristic)) : exports.mapCharacteristic(expression.characteristic);
    var operator = utils_1.ConditionOperators[expression.operator];
    var value = isNaN(expression.value) ? "!" + expression.value + "!" : expression.value;
    return utils_2.toString([characteristic, operator, value], '_');
};
exports.condition = function (conditionObj) {
    if (!conditionObj || !conditionObj.if || !conditionObj.if.expression)
        return '';
    var ifCondition = exports.computeCondition(conditionObj.if);
    var elseCondition = conditionObj.else ? exports.computeCondition(conditionObj.else) : null;
    var formattedIf = utils_2.toString(["if_" + ifCondition.expression, ifCondition.transformations], '/');
    var formattedElse = elseCondition ? utils_2.toString(['if_else', elseCondition.transformations], '/') : '';
    return [utils_2.toString([formattedIf, formattedElse, 'if_end'], '/')];
};
