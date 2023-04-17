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
export var ColorSpace = {
    sRGB: 'srgb',
    noCMYK: 'no_cmyk',
    keepCMYK: 'keep_cmyk'
};
export var VColorSpace = __assign(__assign({}, ColorSpace), { tinySRGB: 'tinysrgb', copy: 'copy' });
