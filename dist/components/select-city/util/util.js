(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["w567675"] = factory();
	else
		root["w567675"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 302);
/******/ })
/************************************************************************/
/******/ ({

/***/ 207:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var util = {
    /**
     * [parseAddress 分解json地址]
     * @param  {} data [description]
     * @return {[type]}      [description]
     */
    parseAddress: function parseAddress(data) {
        var maps = [];
        var index = 0;

        function fn(data, value) {

            data.forEach(function (v, i) {
                var area = v.area;
                var list = v.list;
                var parentId = -1;

                if (value !== undefined) {
                    parentId = value;
                }
                if (list) {
                    list.forEach(function (v, i) {

                        var name = v.name;
                        var value = v.value;

                        /* 创建对应的哈希表 */
                        if (maps[index] === undefined) {
                            maps.push(new Map());
                        }

                        /* 如果是第一级 */
                        if (index === 0) {

                            /**
                             * 设置Map对象，格式如下
                             * {
                             * 'A-D':
                             *    {
                             *     'A-D': {
                             *        1: "浙江"
                             *        }
                             *     }
                             *  }
                             */

                            var obj = maps[index].get(area) || {};

                            if (obj[area]) {
                                obj[area][value] = name;
                            } else {
                                obj[area] = {};
                                obj[area][value] = name;
                            }

                            maps[index].set(area, obj);
                        }

                        /* 如果是不是第一级 */
                        else {

                                /**
                                 * 设置Map对象，格式如下
                                 * 1对象上一级的id，类似parentId
                                 * {
                                 *   1: {
                                 *    'A-D': {
                                 *        2: "杭州"
                                 *     }
                                 *   }
                                 * }
                                 */
                                var _obj = maps[index].get(parentId) || {};

                                if (_obj[area]) {
                                    _obj[area][value] = name;
                                } else {
                                    _obj[area] = {};
                                    _obj[area][value] = name;
                                }

                                maps[index].set(parentId, _obj);
                            }

                        /* 递归children */
                        var children = v.children;
                        if (children && children.length > 0) {
                            index++;
                            fn(children, value);
                        }
                    });
                }
            });
            index--;
        }

        fn(data);

        return maps;
    },

    /**
     * parseAddressName 按照id解析中文地址
     * @param  {Array} data 对应的id
     * @param  {Map} map  对照的Map
     * @return {Array}      中文地址
     */
    parseAddressName: function parseAddressName(data, map) {
        if (data.length <= 0) return [];

        var arr = data.map(function (v, i) {
            if (i === 0) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = map[i].values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var val = _step.value;

                        for (var key in val) {
                            var obj = val[key];
                            if (obj[v]) {
                                return obj[v];
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            } else {
                var id = data[i - 1];
                var _obj2 = map[i].get(id);
                for (var _key in _obj2) {
                    var obj2 = _obj2[_key];
                    if (obj2[v]) {
                        return obj2[v];
                    }
                }
            }
        });

        return arr;
    }
};

module.exports = util;

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(207);


/***/ }

/******/ });
});
//# sourceMappingURL=util.js.map