"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFunction = void 0;
exports.customFunction = function (_a) {
    var type = _a.type, source = _a.source;
    if (!type || !source)
        return '';
    var functionType = "fn_" + type;
    return functionType + ":" + source;
};
