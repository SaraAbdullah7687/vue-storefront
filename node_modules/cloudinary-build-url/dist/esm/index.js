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
import { RESOURCE_TYPES } from '@cld-apis/utils';
import { url, extractPublicId } from './url';
import { transform, toTransformationStr } from './transformers';
var config = {};
export var getConfig = function () { return Object.freeze(config); };
export var setConfig = function (options) { return config = __assign(__assign({}, config), options); };
export var buildUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    var cloudConfig = __assign(__assign({}, config), cloud);
    return url(publicId, cloudConfig, transformations);
};
export var buildImageUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return buildUrl(publicId, {
        cloud: __assign(__assign({}, cloud), { resourceType: RESOURCE_TYPES.IMAGE }),
        transformations: transformations
    });
};
export var buildVideoUrl = function (publicId, _a) {
    var _b = _a.cloud, cloud = _b === void 0 ? {} : _b, _c = _a.transformations, transformations = _c === void 0 ? {} : _c;
    return buildUrl(publicId, {
        cloud: __assign(__assign({}, cloud), { resourceType: RESOURCE_TYPES.VIDEO }),
        transformations: transformations
    });
};
var Transformer = { transform: transform, toString: toTransformationStr };
export { extractPublicId, Transformer };
export default buildUrl;
