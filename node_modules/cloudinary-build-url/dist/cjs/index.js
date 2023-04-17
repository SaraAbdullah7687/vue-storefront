"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transformer = exports.extractPublicId = exports.buildVideoUrl = exports.buildImageUrl = exports.buildUrl = exports.setConfig = exports.getConfig = void 0;
var utils_1 = require("@cld-apis/utils");
var url_1 = require("./url");
Object.defineProperty(exports, "extractPublicId", { enumerable: true, get: function () { return url_1.extractPublicId; } });
var transformers_1 = require("./transformers");
var config = {};
exports.getConfig = function () { return Object.freeze(config); };
exports.setConfig = function (options) { return config = __assign(__assign({}, config), options); };
exports.buildUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    var cloudConfig = __assign(__assign({}, config), cloud);
    return url_1.url(publicId, cloudConfig, transformations);
};
exports.buildImageUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return exports.buildUrl(publicId, {
        cloud: __assign(__assign({}, cloud), { resourceType: utils_1.RESOURCE_TYPES.IMAGE }),
        transformations: transformations
    });
};
exports.buildVideoUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return exports.buildUrl(publicId, {
        cloud: __assign(__assign({}, cloud), { resourceType: utils_1.RESOURCE_TYPES.VIDEO }),
        transformations: transformations
    });
};
var Transformer = { transform: transformers_1.transform, toString: transformers_1.toTransformationStr };
exports.Transformer = Transformer;
exports.default = exports.buildUrl;
