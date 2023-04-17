export var toSnakeCase = function (options) {
    if (!options)
        return {};
    var formatted = {};
    var snakeCase = require('lodash.snakecase');
    for (var key in options) {
        var value = options[key];
        var newKey = snakeCase(key);
        formatted[newKey] = value;
    }
    return formatted;
};
