"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/getfortune/page.js":
/*!*******************************************!*\
  !*** ./app/components/getfortune/page.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// pages/Fortune.js\n\nvar _s = $RefreshSig$();\n\nconst Fortune = ()=>{\n    _s();\n    const [fortune, setFortune] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"http://192.168.100.23:3001/fortune/random\", {\n                    next: {\n                        revalidate: 3600\n                    }\n                });\n                const data = await response.json();\n                console.log(data);\n                setFortune(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Fortune\"\n            }, void 0, false, {\n                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/getfortune/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            fortune && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: fortune.fortune_message\n            }, void 0, false, {\n                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/getfortune/page.js\",\n                lineNumber: 30,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Fortune, \"mtUpBoTGpMh+qd++4KEcUSyEnlQ=\");\n_c = Fortune;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fortune);\nvar _c;\n$RefreshReg$(_c, \"Fortune\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2dldGZvcnR1bmUvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUJBQW1COzs7QUFFZ0M7QUFFbkQsTUFBTUcsVUFBVTs7SUFDZCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUksWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsNkNBQ0E7b0JBQUVDLE1BQU07d0JBQUVDLFlBQVk7b0JBQUs7Z0JBQUU7Z0JBRS9CLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFDaENDLFFBQVFDLEdBQUcsQ0FBQ0g7Z0JBQ1pOLFdBQVdNO1lBQ2IsRUFBRSxPQUFPSSxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFUO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDVTswQkFBRzs7Ozs7O1lBRUhaLHlCQUFXLDhEQUFDYTswQkFBR2IsUUFBUWMsZUFBZTs7Ozs7Ozs7QUFHN0M7R0E1Qk1mO0tBQUFBO0FBOEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2dldGZvcnR1bmUvcGFnZS5qcz84NDkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL0ZvcnR1bmUuanNcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRm9ydHVuZSA9ICgpID0+IHtcbiAgY29uc3QgW2ZvcnR1bmUsIHNldEZvcnR1bmVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgIFwiaHR0cDovLzE5Mi4xNjguMTAwLjIzOjMwMDEvZm9ydHVuZS9yYW5kb21cIixcbiAgICAgICAgICB7IG5leHQ6IHsgcmV2YWxpZGF0ZTogMzYwMCB9IH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHNldEZvcnR1bmUoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5Gb3J0dW5lPC9oMT5cblxuICAgICAge2ZvcnR1bmUgJiYgPHA+e2ZvcnR1bmUuZm9ydHVuZV9tZXNzYWdlfTwvcD59XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3J0dW5lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb3J0dW5lIiwiZm9ydHVuZSIsInNldEZvcnR1bmUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibmV4dCIsInJldmFsaWRhdGUiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImgxIiwicCIsImZvcnR1bmVfbWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/getfortune/page.js\n"));

/***/ })

});