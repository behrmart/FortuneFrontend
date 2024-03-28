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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-KRPLQIP4.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-7OLJDQMT.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-ZHMYA64R.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"(app-pages-browser)/./node_modules/@chakra-ui/layout/dist/chunk-LZZHVJFG.mjs\");\n/* harmony import */ var _utils_fetchFortunes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/fetchFortunes */ \"(app-pages-browser)/./utils/fetchFortunes.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Fortunes = ()=>{\n    _s();\n    const [fortunes, setFortunes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getFortunes = async ()=>{\n            try {\n                const data = await (0,_utils_fetchFortunes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                setFortunes(data);\n                setLoading(false);\n            } catch (error) {\n                console.error(\"Error fetching fortunes:\", error);\n                setLoading(false);\n            }\n        };\n        getFortunes();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            justify: \"center\",\n            align: \"center\",\n            h: \"200px\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n                size: \"lg\"\n            }, void 0, false, {\n                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        direction: \"column\",\n        align: \"start\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                children: \"All Fortunes in MongoDB\"\n            }, void 0, false, {\n                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            fortunes.map((fortune, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                        direction: \"row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Code, {\n                                mb: 2,\n                                colorScheme: \"purple\",\n                                children: fortune.fortune_id\n                            }, index, false, {\n                                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Code, {\n                                colorScheme: \"green\",\n                                children: fortune.fortune_message\n                            }, void 0, false, {\n                                fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/bernardo/HTMLserver/FortuneFrontend/app/components/fetchallfortunes/Fortunes.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Fortunes, \"EH31ZMhUAvAlSiac7gQ4HJRjLuE=\");\n_c = Fortunes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Fortunes);\nvar _c;\n$RefreshReg$(_c, \"Fortunes\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2ZldGNoYWxsZm9ydHVuZXMvRm9ydHVuZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQzJCO0FBQ2Q7QUFFekQsTUFBTVEsV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWEsY0FBYztZQUNsQixJQUFJO2dCQUNGLE1BQU1DLE9BQU8sTUFBTVAsZ0VBQWFBO2dCQUNoQ0csWUFBWUk7Z0JBQ1pGLFdBQVc7WUFDYixFQUFFLE9BQU9HLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO2dCQUMxQ0gsV0FBVztZQUNiO1FBQ0Y7UUFFQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxJQUFJRixTQUFTO1FBQ1gscUJBQ0UsOERBQUNSLGtEQUFJQTtZQUFDYyxTQUFRO1lBQVNDLE9BQU07WUFBU0MsR0FBRTtzQkFDdEMsNEVBQUNmLHFEQUFPQTtnQkFBQ2dCLE1BQUs7Ozs7Ozs7Ozs7O0lBR3BCO0lBRUEscUJBQ0UsOERBQUNqQixrREFBSUE7UUFBQ2tCLFdBQVU7UUFBU0gsT0FBTTs7MEJBQzdCLDhEQUFDWixxREFBT0E7MEJBQUM7Ozs7OztZQUNSRyxTQUFTYSxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCOzhCQUNFLDRFQUFDbkIsbURBQUtBO3dCQUFDZ0IsV0FBVTs7MENBQ2YsOERBQUNuQixrREFBSUE7Z0NBQWF1QixJQUFJO2dDQUFHQyxhQUFZOzBDQUNsQ0gsUUFBUUksVUFBVTsrQkFEVkg7Ozs7OzBDQUdYLDhEQUFDdEIsa0RBQUlBO2dDQUFDd0IsYUFBWTswQ0FBU0gsUUFBUUssZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RDtHQTFDTXBCO0tBQUFBO0FBNENOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2ZldGNoYWxsZm9ydHVuZXMvRm9ydHVuZXMuanM/NGNkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvZGUsIEZsZXgsIFNwaW5uZXIsIFN0YWNrLCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBmZXRjaEZvcnR1bmVzIGZyb20gXCIuLi8uLi8uLi91dGlscy9mZXRjaEZvcnR1bmVzXCI7XG5cbmNvbnN0IEZvcnR1bmVzID0gKCkgPT4ge1xuICBjb25zdCBbZm9ydHVuZXMsIHNldEZvcnR1bmVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRGb3J0dW5lcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEZvcnR1bmVzKCk7XG4gICAgICAgIHNldEZvcnR1bmVzKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBmb3J0dW5lczpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0Rm9ydHVuZXMoKTtcbiAgfSwgW10pO1xuXG4gIGlmIChsb2FkaW5nKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGg9XCIyMDBweFwiPlxuICAgICAgICA8U3Bpbm5lciBzaXplPVwibGdcIiAvPlxuICAgICAgPC9GbGV4PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduPVwic3RhcnRcIj5cbiAgICAgIDxIZWFkaW5nPkFsbCBGb3J0dW5lcyBpbiBNb25nb0RCPC9IZWFkaW5nPlxuICAgICAge2ZvcnR1bmVzLm1hcCgoZm9ydHVuZSwgaW5kZXgpID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8U3RhY2sgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgICA8Q29kZSBrZXk9e2luZGV4fSBtYj17Mn0gY29sb3JTY2hlbWU9XCJwdXJwbGVcIj5cbiAgICAgICAgICAgICAge2ZvcnR1bmUuZm9ydHVuZV9pZH1cbiAgICAgICAgICAgIDwvQ29kZT5cbiAgICAgICAgICAgIDxDb2RlIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIj57Zm9ydHVuZS5mb3J0dW5lX21lc3NhZ2V9PC9Db2RlPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ydHVuZXM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb2RlIiwiRmxleCIsIlNwaW5uZXIiLCJTdGFjayIsIkhlYWRpbmciLCJmZXRjaEZvcnR1bmVzIiwiRm9ydHVuZXMiLCJmb3J0dW5lcyIsInNldEZvcnR1bmVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRGb3J0dW5lcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJqdXN0aWZ5IiwiYWxpZ24iLCJoIiwic2l6ZSIsImRpcmVjdGlvbiIsIm1hcCIsImZvcnR1bmUiLCJpbmRleCIsIm1iIiwiY29sb3JTY2hlbWUiLCJmb3J0dW5lX2lkIiwiZm9ydHVuZV9tZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/fetchallfortunes/Fortunes.js\n"));

/***/ })

});