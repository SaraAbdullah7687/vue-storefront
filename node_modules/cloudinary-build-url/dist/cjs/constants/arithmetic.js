"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcceptNumbericVars = exports.PreDefinedPatterns = exports.Prefix = exports.PredefinedVariables = exports.ArithmeticExpression = void 0;
exports.ArithmeticExpression = {
    "=": 'eq',
    "!=": 'ne',
    "<": 'lt',
    ">": 'gt',
    "<=": 'lte',
    ">=": 'gte',
    "&&": 'and',
    "||": 'or',
    "*": "mul",
    "/": "div",
    "+": "add",
    "-": "sub",
    "^": "pow",
};
exports.PredefinedVariables = {
    width: 'w',
    height: 'h',
    x: 'x',
    y: 'y',
    quality: 'q',
    if: 'if',
    aspectRatio: 'ar',
    rotate: 'a',
    opacity: 'o',
    radius: 'r',
    dpr: 'dpr',
    effect: 'e',
    border: 'bo',
    currentPage: 'cp',
    preview: 'preview:duration',
    duration: 'du',
    faceCount: 'fc',
    initialAspectRatio: 'iar',
    initialDuration: 'idu',
    initialHeight: 'ih',
    initialWidth: 'iw',
    pageCount: 'pc',
    pageX: 'px',
    pageY: 'py',
    tags: 'tags',
};
exports.Prefix = '$';
exports.PreDefinedPatterns = "(" + Object.keys(exports.PredefinedVariables).join('|') + ")";
exports.AcceptNumbericVars = ['quality', 'if', 'rotate', 'zoom', 'opacity', 'radius', 'effect', 'dpr'];
