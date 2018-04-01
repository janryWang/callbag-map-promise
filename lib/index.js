"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _callbagFlatMap = _interopRequireDefault(require("callbag-flat-map"));

var _callbagFromPromise = _interopRequireDefault(require("callbag-from-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transfer = function transfer(data) {
  return function (type, d) {
    if (type !== 0) return;
    d(0, function () {});
    d(1, data);
  };
};

var _default = function _default(fn, endpoint) {
  return function (source) {
    return (0, _callbagFlatMap.default)(function (d) {
      d = fn(d);
      return d instanceof Promise ? (0, _callbagFromPromise.default)(d) : transfer(d);
    }, endpoint)(source);
  };
};

exports.default = _default;