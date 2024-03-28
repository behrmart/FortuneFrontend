"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/adminpage/page",{

/***/ "(app-pages-browser)/./app/components/fetchallfortunes/Fortunes.js":
/*!*****************************************************!*\
  !*** ./app/components/fetchallfortunes/Fortunes.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs\");\n/* harmony import */ var _utils_fetchFortunes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/fetchFortunes */ \"(app-pages-browser)/./utils/fetchFortunes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Fortunes = ()=>{\n    _s();\n    const [fortunes, setFortunes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getFortunes = async ()=>{\n            try {\n                const data = await (0,_utils_fetchFortunes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                setFortunes(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error fetching fortunes:\", error);\n                setLoading(false);\n            }\n        };\n        getFortunes();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            justify: \"center\",\n            align: \"center\",\n            h: \"200px\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n                size: \"lg\"\n            }, void 0, false, {\n                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        direction: \"column\",\n        align: \"start\",\n        children: fortunes.map((fortune, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Code, {\n                        mb: 2,\n                        children: fortune.fortune_id\n                    }, index, false, {\n                        fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Code, {\n                        children: fortune.fortune_message\n                    }, void 0, false, {\n                        fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true))\n    }, void 0, false, {\n        fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Fortunes, \"EH31ZMhUAvAlSiac7gQ4HJRjLuE=\");\n_c = Fortunes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fortunes);\nvar _c;\n$RefreshReg$(_c, \"Fortunes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2ZldGNoYWxsZm9ydHVuZXMvRm9ydHVuZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM0QztBQUNXO0FBQ0U7QUFFekQsTUFBTU0sV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLE9BQU8sTUFBTVAsZ0VBQWFBO2dCQUNoQ0csWUFBWUk7Z0JBQ1pGLFdBQVc7WUFDYixFQUFFLE9BQU9HLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO2dCQUMxQ0gsV0FBVztZQUNiO1FBQ0Y7UUFFQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRixTQUFTO1FBQ1gscUJBQ0UsOERBQUNOLGtEQUFJQTtZQUFDWSxTQUFRO1lBQVNDLE9BQU07WUFBU0MsR0FBRTtzQkFDdEMsNEVBQUNiLHFEQUFPQTtnQkFBQ2MsTUFBSzs7Ozs7Ozs7Ozs7SUFHcEI7SUFFQSxxQkFDRSw4REFBQ2Ysa0RBQUlBO1FBQUNnQixXQUFVO1FBQVNILE9BQU07a0JBQzVCVCxTQUFTYSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCOztrQ0FDRSw4REFBQ3BCLGtEQUFJQTt3QkFBYXFCLElBQUk7a0NBQ25CRixRQUFRRyxVQUFVO3VCQURWRjs7Ozs7a0NBR1gsOERBQUNwQixrREFBSUE7a0NBQUVtQixRQUFRSSxlQUFlOzs7Ozs7Ozs7Ozs7O0FBS3hDO0dBdkNNbkI7S0FBQUE7QUF5Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvZmV0Y2hhbGxmb3J0dW5lcy9Gb3J0dW5lcy5qcz80Y2Q4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29kZSwgRmxleCwgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgZmV0Y2hGb3J0dW5lcyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZmV0Y2hGb3J0dW5lc1wiO1xuXG5jb25zdCBGb3J0dW5lcyA9ICgpID0+IHtcbiAgY29uc3QgW2ZvcnR1bmVzLCBzZXRGb3J0dW5lc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ2V0Rm9ydHVuZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hGb3J0dW5lcygpO1xuICAgICAgICBzZXRGb3J0dW5lcyhkYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZm9ydHVuZXM6XCIsIGVycm9yKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldEZvcnR1bmVzKCk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiAoXG4gICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBoPVwiMjAwcHhcIj5cbiAgICAgICAgPFNwaW5uZXIgc2l6ZT1cImxnXCIgLz5cbiAgICAgIDwvRmxleD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj1cInN0YXJ0XCI+XG4gICAgICB7Zm9ydHVuZXMubWFwKChmb3J0dW5lLCBpbmRleCkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDb2RlIGtleT17aW5kZXh9IG1iPXsyfT5cbiAgICAgICAgICAgIHtmb3J0dW5lLmZvcnR1bmVfaWR9XG4gICAgICAgICAgPC9Db2RlPlxuICAgICAgICAgIDxDb2RlPntmb3J0dW5lLmZvcnR1bmVfbWVzc2FnZX08L0NvZGU+XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ydHVuZXM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2RlIiwiRmxleCIsIlNwaW5uZXIiLCJmZXRjaEZvcnR1bmVzIiwiRm9ydHVuZXMiLCJmb3J0dW5lcyIsInNldEZvcnR1bmVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRGb3J0dW5lcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJqdXN0aWZ5IiwiYWxpZ24iLCJoIiwic2l6ZSIsImRpcmVjdGlvbiIsIm1hcCIsImZvcnR1bmUiLCJpbmRleCIsIm1iIiwiZm9ydHVuZV9pZCIsImZvcnR1bmVfbWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/fetchallfortunes/Fortunes.js\n"));

/***/ })

});