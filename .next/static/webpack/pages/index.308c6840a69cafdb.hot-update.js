"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SearchBar.tsx":
/*!**************************************!*\
  !*** ./src/components/SearchBar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst searchImage = \"/search-icon.png\";\nconst SearchBar = (param)=>{\n    let { onSearch  } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const search = (query)=>{\n        // Do the search operation here and set the search results in the state\n        const results = [\n            \"Result 1\",\n            \"Result 2\",\n            \"Result 3\"\n        ]; // Sample search results\n        setSearchResults(results);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        search(query); // Call the search function with the entered query\n        setQuery(\"\"); // Clear the input field\n    };\n    const handleInputChange = (event)=>{\n        setQuery(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: query,\n                        onChange: handleInputChange,\n                        className: \"w-full bg-gray-200 px-4 py-2 rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: searchImage,\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            searchResults.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: searchResults.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: result\n                    }, index, false, {\n                        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello 2\"\n            }, void 0, false, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"8AIeKs1hZc1OdDUMR1vkPVNwFnw=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsY0FBYztBQU9wQixNQUFNQyxZQUFzQyxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3ZELE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRS9ELE1BQU1RLFNBQVMsQ0FBQ0osUUFBa0I7UUFDaEMsdUVBQXVFO1FBQ3ZFLE1BQU1LLFVBQVU7WUFBQztZQUFZO1lBQVk7U0FBVyxFQUFFLHdCQUF3QjtRQUM5RUYsaUJBQWlCRTtJQUNuQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0MsUUFBNEM7UUFDaEVBLE1BQU1DLGNBQWM7UUFDcEJKLE9BQU9KLFFBQVEsa0RBQWtEO1FBQ2pFQyxTQUFTLEtBQUssd0JBQXdCO0lBQ3hDO0lBRUEsTUFBTVEsb0JBQW9CLENBQUNGLFFBQStDO1FBQ3hFTixTQUFTTSxNQUFNRyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVVQ7O2tDQUNkLDhEQUFDVTt3QkFDQ0MsTUFBSzt3QkFDTE4sT0FBT1g7d0JBQ1BrQixVQUFVVDt3QkFDVlUsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDQzt3QkFBT0gsTUFBSztrQ0FDWCw0RUFBQ0k7NEJBQUlDLEtBQUt6Qjs0QkFBYXNCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR3BDakIsY0FBY3FCLE1BQU0sR0FBRyxtQkFDdEIsOERBQUNYOzBCQUNFVixjQUFjc0IsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUMxQiw4REFBQ0M7a0NBQWVGO3VCQUFSQzs7Ozs7Ozs7OzswQkFJZCw4REFBQ2I7MEJBQUc7Ozs7Ozs7Ozs7OztBQUdWO0dBNUNNZjtLQUFBQTtBQThDTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4PzIxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHNlYXJjaEltYWdlID0gXCIvc2VhcmNoLWljb24ucG5nXCI7XG5cbnR5cGUgU2VhcmNoQmFyUHJvcHMgPSB7XG4gIC8vIERlZmluZSBhbiBvblNlYXJjaCBwcm9wIHR5cGUgdGhhdCBhY2NlcHRzIGEgc2VhcmNoIHF1ZXJ5IHN0cmluZyBhbmQgcmV0dXJucyB2b2lkXG4gIG9uU2VhcmNoPzogKHF1ZXJ5OiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBTZWFyY2hCYXI6IFJlYWN0LkZDPFNlYXJjaEJhclByb3BzPiA9ICh7IG9uU2VhcmNoIH0pID0+IHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlYXJjaFJlc3VsdHMsIHNldFNlYXJjaFJlc3VsdHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICBjb25zdCBzZWFyY2ggPSAocXVlcnk6IHN0cmluZykgPT4ge1xuICAgIC8vIERvIHRoZSBzZWFyY2ggb3BlcmF0aW9uIGhlcmUgYW5kIHNldCB0aGUgc2VhcmNoIHJlc3VsdHMgaW4gdGhlIHN0YXRlXG4gICAgY29uc3QgcmVzdWx0cyA9IFtcIlJlc3VsdCAxXCIsIFwiUmVzdWx0IDJcIiwgXCJSZXN1bHQgM1wiXTsgLy8gU2FtcGxlIHNlYXJjaCByZXN1bHRzXG4gICAgc2V0U2VhcmNoUmVzdWx0cyhyZXN1bHRzKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZWFyY2gocXVlcnkpOyAvLyBDYWxsIHRoZSBzZWFyY2ggZnVuY3Rpb24gd2l0aCB0aGUgZW50ZXJlZCBxdWVyeVxuICAgIHNldFF1ZXJ5KFwiXCIpOyAvLyBDbGVhciB0aGUgaW5wdXQgZmllbGRcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBzZXRRdWVyeShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbzwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktMjAwIHB4LTQgcHktMiByb3VuZGVkLW1kXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgPGltZyBzcmM9e3NlYXJjaEltYWdlfSBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aW5kZXh9PntyZXN1bHR9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8aDE+SGVsbG8gMjwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInNlYXJjaEltYWdlIiwiU2VhcmNoQmFyIiwib25TZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJzZWFyY2giLCJyZXN1bHRzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar.tsx\n"));

/***/ })

});