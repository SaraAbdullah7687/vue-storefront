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
exports.Gravity = exports.Compass = void 0;
exports.Compass = {
    North: "north",
    NorthEast: "north_east",
    NorthWest: "north_west",
    West: "west",
    SouthWest: "south_west",
    South: "south",
    SouthEast: "south_east",
    East: "east",
    Center: "center",
};
exports.Gravity = __assign({ Auto: 'auto', Subject: "auto:subject", Face: "face", Sink: "sink", FaceCenter: "face:center", MultipleFaces: "faces", MultipleFacesCenter: "faces:center" }, exports.Compass);
