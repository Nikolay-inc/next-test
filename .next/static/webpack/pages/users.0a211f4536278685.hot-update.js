"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\nvar _s = $RefreshSig$();\nfunction Users() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Nick\"\n        },\n        {\n            id: 2,\n            name: \"Yana\"\n        },\n        {\n            id: 3,\n            name: \"Andrey\"\n        }, \n    ]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://jsonplaceholder.typicode.com/users\").then(function(response) {\n            return response.json();\n        }).then(function(json) {\n            return setUsers(_toConsumableArray(users).concat(_toConsumableArray(json)));\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Users list\"\n            }, void 0, false, {\n                fileName: \"/Users/User/Documents/DrugDiller/next-documentation/pages/users.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/users/\".concat(item.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/User/Documents/DrugDiller/next-documentation/pages/users.js\",\n                                lineNumber: 27,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/User/Documents/DrugDiller/next-documentation/pages/users.js\",\n                            lineNumber: 26,\n                            columnNumber: 29\n                        }, _this)\n                    }, item.id, false, {\n                        fileName: \"/Users/User/Documents/DrugDiller/next-documentation/pages/users.js\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/User/Documents/DrugDiller/next-documentation/pages/users.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/User/Documents/DrugDiller/next-documentation/pages/users.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Users, \"SRh5WHFNJIWXZM6W3T2RPw4jB7o=\");\n_c = Users;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2I7O0FBRTdCLFNBQVNHLEtBQUssR0FBRzs7O0lBRWIsSUFBMEJILEdBSXhCLEdBSndCQSwrQ0FBUSxDQUFDO1FBQy9CO1lBQUNJLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxNQUFNO1NBQUM7UUFDckI7WUFBQ0QsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLE1BQU07U0FBQztRQUNyQjtZQUFDRCxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsUUFBUTtTQUFDO0tBQzFCLENBQUMsRUFUTixLQUtnQixHQUFjTCxHQUl4QixHQUpVLEVBTGhCLFFBSzBCLEdBQUlBLEdBSXhCLEdBSm9CO0lBTXRCQyxnREFBUyxDQUFDLFdBQU07UUFDWk8sS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQ2xEQyxJQUFJLENBQUNDLFNBQUFBLFFBQVE7bUJBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDRSxTQUFBQSxJQUFJO21CQUFJSixRQUFRLENBQUMsbUJBQUlELEtBQUssQ0FBTEEsUUFBTyxtQkFBR0ssSUFBSSxDQUFKQSxDQUFLLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDaEQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVULHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTswQkFBQyxZQUFVOzs7OztvQkFBSzswQkFDbkIsOERBQUNDLElBQUU7MEJBRUdSLEtBQUssQ0FBQ1MsR0FBRyxDQUFDQyxTQUFBQSxJQUFJLEVBQUk7b0JBQ2QscUJBQ00sOERBQUNDLElBQUU7a0NBQ0MsNEVBQUNmLGtEQUFJOzRCQUFDZ0IsSUFBSSxFQUFFLFNBQVEsQ0FBVSxPQUFSRixJQUFJLENBQUNaLEVBQUUsQ0FBRTtzQ0FDM0IsNEVBQUNlLEdBQUM7MENBQ0dILElBQUksQ0FBQ1gsSUFBSTs7Ozs7cUNBQ1Y7Ozs7O2lDQUNEO3VCQUxGVyxJQUFJLENBQUNaLEVBQUU7Ozs7NkJBTVgsQ0FDVjtpQkFDSixDQUFDOzs7OztvQkFFSDs7Ozs7O1lBQ0gsQ0FDUDtDQUNGO0dBbENRRCxLQUFLO0FBQUxBLEtBQUFBLEtBQUs7O0FBb0NkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIFVzZXJzKCkge1xuXG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtpZDogMSwgbmFtZTogJ05pY2snfSxcbiAgICAgICAge2lkOiAyLCBuYW1lOiAnWWFuYSd9LFxuICAgICAgICB7aWQ6IDMsIG5hbWU6ICdBbmRyZXknfSxcbiAgICBdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gc2V0VXNlcnMoWy4uLnVzZXJzLCAuLi5qc29uXSkpO1xuICAgIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT5Vc2VycyBsaXN0PC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2Vycy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2Vycy8ke2l0ZW0uaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICB9XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlVzZXJzIiwiaWQiLCJuYW1lIiwidXNlcnMiLCJzZXRVc2VycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRpdiIsImgxIiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ })

});