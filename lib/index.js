"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _callbagPipe = _interopRequireDefault(require("callbag-pipe"));

var _callbagMap = _interopRequireDefault(require("callbag-map"));

var _callbagFlatten = _interopRequireDefault(require("callbag-flatten"));

var _callbagFromPromise = _interopRequireDefault(require("callbag-from-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(fn) {
  return function (source) {
    return (0, _callbagPipe.default)(source, (0, _callbagMap.default)(function (d) {
      d = fn(d);
      return d instanceof Promise ? (0, _callbagFromPromise.default)(d) : d;
    }), _callbagFlatten.default);
  };
};

exports.default = _default;