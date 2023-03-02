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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst searchImage = \"/search-icon.png\";\nconst apiKey = \"\";\nconst SearchBar = (param)=>{\n    let { onSearch  } = param;\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const search = async (query)=>{\n        console.log(query);\n        // Do the search operation here and set the search results in the state\n        const completion = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(apiKey)\n            },\n            method: \"POST\",\n            body: JSON.stringify({\n                model: \"gpt-3.5-turbo\",\n                query,\n                temperature: 0.6,\n                stream: true\n            })\n        });\n        console.log(completion);\n        setSearchResults([\n            query\n        ]);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        search(query); // Call the search function with the entered query\n        setQuery(\"\"); // Clear the input field\n    };\n    const handleInputChange = (event)=>{\n        setQuery(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello\"\n            }, void 0, false, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: query,\n                        onChange: handleInputChange,\n                        className: \"w-full bg-gray-200 px-4 py-2 rounded-md\"\n                    }, void 0, false, {\n                        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: searchImage,\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            searchResults.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: searchResults.map((result, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: result\n                    }, index, false, {\n                        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Hello 2\"\n            }, void 0, false, {\n                fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trentconley/Desktop/School/Georgia Tech/Clubs/Klaus Startup Challenge/Gusto/src/components/SearchBar.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchBar, \"8AIeKs1hZc1OdDUMR1vkPVNwFnw=\");\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\nvar _c;\n$RefreshReg$(_c, \"SearchBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsY0FBYztBQUNwQixNQUFNQyxTQUFTO0FBT2YsTUFBTUMsWUFBc0MsU0FBa0I7UUFBakIsRUFBRUMsU0FBUSxFQUFFOztJQUN2RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQVcsRUFBRTtJQUUvRCxNQUFNUyxTQUFTLE9BQU9KLFFBQWtCO1FBQ3RDSyxRQUFRQyxHQUFHLENBQUNOO1FBQ1osdUVBQXVFO1FBQ3ZFLE1BQU1PLGFBQWEsTUFBTUMsTUFDdkIsOENBQ0E7WUFDRUMsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCQyxlQUFlLFVBQWlCLE9BQVBiO1lBQzNCO1lBQ0FjLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsT0FBTztnQkFDUGY7Z0JBQ0FnQixhQUFhO2dCQUNiQyxRQUFRLElBQUk7WUFDZDtRQUNGO1FBRUZaLFFBQVFDLEdBQUcsQ0FBQ0M7UUFDWkosaUJBQWlCO1lBQUNIO1NBQU07SUFDMUI7SUFFQSxNQUFNa0IsZUFBZSxDQUFDQyxRQUE0QztRQUNoRUEsTUFBTUMsY0FBYztRQUNwQmhCLE9BQU9KLFFBQVEsa0RBQWtEO1FBQ2pFQyxTQUFTLEtBQUssd0JBQXdCO0lBQ3hDO0lBRUEsTUFBTW9CLG9CQUFvQixDQUFDRixRQUErQztRQUN4RWxCLFNBQVNrQixNQUFNRyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVVQ7O2tDQUNkLDhEQUFDVTt3QkFDQ0MsTUFBSzt3QkFDTE4sT0FBT3ZCO3dCQUNQOEIsVUFBVVQ7d0JBQ1ZVLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ0M7d0JBQU9ILE1BQUs7a0NBQ1gsNEVBQUNJOzRCQUFJQyxLQUFLdEM7NEJBQWFtQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztZQUdwQzdCLGNBQWNpQyxNQUFNLEdBQUcsbUJBQ3RCLDhEQUFDWDswQkFDRXRCLGNBQWNrQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQzFCLDhEQUFDQztrQ0FBZUY7dUJBQVJDOzs7Ozs7Ozs7OzBCQUlkLDhEQUFDYjswQkFBRzs7Ozs7Ozs7Ozs7O0FBR1Y7R0E3RE0zQjtLQUFBQTtBQStETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIudHN4PzIxN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IHNlYXJjaEltYWdlID0gXCIvc2VhcmNoLWljb24ucG5nXCI7XG5jb25zdCBhcGlLZXkgPSBcIlwiO1xuXG50eXBlIFNlYXJjaEJhclByb3BzID0ge1xuICAvLyBEZWZpbmUgYW4gb25TZWFyY2ggcHJvcCB0eXBlIHRoYXQgYWNjZXB0cyBhIHNlYXJjaCBxdWVyeSBzdHJpbmcgYW5kIHJldHVybnMgdm9pZFxuICBvblNlYXJjaD86IChxdWVyeTogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuY29uc3QgU2VhcmNoQmFyOiBSZWFjdC5GQzxTZWFyY2hCYXJQcm9wcz4gPSAoeyBvblNlYXJjaCB9KSA9PiB7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgY29uc3Qgc2VhcmNoID0gYXN5bmMgKHF1ZXJ5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gICAgLy8gRG8gdGhlIHNlYXJjaCBvcGVyYXRpb24gaGVyZSBhbmQgc2V0IHRoZSBzZWFyY2ggcmVzdWx0cyBpbiB0aGUgc3RhdGVcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgZmV0Y2goXG4gICAgICBcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gICAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGNvbXBsZXRpb24pO1xuICAgIHNldFNlYXJjaFJlc3VsdHMoW3F1ZXJ5XSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2VhcmNoKHF1ZXJ5KTsgLy8gQ2FsbCB0aGUgc2VhcmNoIGZ1bmN0aW9uIHdpdGggdGhlIGVudGVyZWQgcXVlcnlcbiAgICBzZXRRdWVyeShcIlwiKTsgLy8gQ2xlYXIgdGhlIGlucHV0IGZpZWxkXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0UXVlcnkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGVsbG88L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTIwMCBweC00IHB5LTIgcm91bmRlZC1tZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtzZWFyY2hJbWFnZX0gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAge3NlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3NlYXJjaFJlc3VsdHMubWFwKChyZXN1bHQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4fT57cmVzdWx0fTwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGgxPkhlbGxvIDI8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2hJbWFnZSIsImFwaUtleSIsIlNlYXJjaEJhciIsIm9uU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaFJlc3VsdHMiLCJzZXRTZWFyY2hSZXN1bHRzIiwic2VhcmNoIiwiY29uc29sZSIsImxvZyIsImNvbXBsZXRpb24iLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwic3RyZWFtIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUlucHV0Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaW1nIiwic3JjIiwibGVuZ3RoIiwibWFwIiwicmVzdWx0IiwiaW5kZXgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SearchBar.tsx\n"));

/***/ })

});