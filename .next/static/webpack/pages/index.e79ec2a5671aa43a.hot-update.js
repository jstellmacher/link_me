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

/***/ "./components/LinkCard.js":
/*!********************************!*\
  !*** ./components/LinkCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FiFileText,FiGithub,FiInstagram,FiLinkedin,FiReddit,FiStar,FiTwitch,FiTwitter,FiYoutube!=!react-icons/fi */ \"./node_modules/react-icons/fi/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FiFileText,FiGithub,FiInstagram,FiLinkedin,FiReddit,FiStar,FiTwitch,FiTwitter,FiYoutube!=!react-icons/fi */ \"__barrel_optimize__?names=FiFileText,FiGithub,FiInstagram,FiLinkedin,FiReddit,FiStar,FiTwitch,FiTwitter,FiYoutube!=!./node_modules/react-icons/fi/index.mjs\");\n\n\n\n// Example of hardcoded props for testing\nconst testLink = {\n    href: \"https://www.example.com\",\n    title: \"Example\",\n    description: \"This is an example link.\",\n    icon: \"linkedin\" // Change to any other icon name or URL for testing\n};\nfunction LinkCard(param) {\n    let { href, title, description, icon } = param;\n    // Define styles\n    const cardStyle = \"flex flex-col items-center justify-center w-full border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 bg-white mb-4 max-w-md sm:max-w-lg\";\n    const iconContainerStyle = \"flex items-center justify-center h-16 w-16 sm:h-18 sm:w-18 rounded-full\"; // Add rounded-full for consistent appearance\n    const iconStyle = \"h-full w-full object-contain\"; // Ensure the image fits well within its container\n    const titleStyle = \"font-semibold text-lg text-gray-900 text-center mt-2\";\n    const descriptionStyle = \"text-sm text-gray-600 text-center mt-1\";\n    // Determine whether to use an icon from react-icons or an image URL\n    let IconComponent;\n    switch(icon){\n        case \"linkedin\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLinkedin, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 28,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"github\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGithub, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 31,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"youtube\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiYoutube, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 34,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"twitter\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTwitter, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 37,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"reddit\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiReddit, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 40,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"instagram\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiInstagram, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 43,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"twitch\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTwitch, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 46,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"medium\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiFileText, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 49,\n                columnNumber: 23\n            }, this);\n            break;\n        case \"patreon\":\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FiFileText_FiGithub_FiInstagram_FiLinkedin_FiReddit_FiStar_FiTwitch_FiTwitter_FiYoutube_react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiStar, {\n                size: 24\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 52,\n                columnNumber: 23\n            }, this);\n            break;\n        default:\n            IconComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: icon,\n                alt: \"Icon\",\n                className: iconStyle\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 55,\n                columnNumber: 23\n            }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: cardStyle,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: iconContainerStyle,\n                children: IconComponent\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: titleStyle,\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: descriptionStyle,\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_c = LinkCard;\nvar _c;\n$RefreshReg$(_c, \"LinkCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDdUc7QUFFakkseUNBQXlDO0FBQ3pDLE1BQU1VLFdBQVc7SUFDZkMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsTUFBTSxXQUFXLG1EQUFtRDtBQUN0RTtBQUVlLFNBQVNDLFNBQVMsS0FBa0M7UUFBbEMsRUFBRUosSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsSUFBSSxFQUFFLEdBQWxDO0lBQy9CLGdCQUFnQjtJQUNoQixNQUFNRSxZQUNKO0lBQ0YsTUFBTUMscUJBQ0osMkVBQTJFLDZDQUE2QztJQUMxSCxNQUFNQyxZQUNKLGdDQUFnQyxrREFBa0Q7SUFDcEYsTUFBTUMsYUFBYTtJQUNuQixNQUFNQyxtQkFBbUI7SUFFekIsb0VBQW9FO0lBQ3BFLElBQUlDO0lBRUosT0FBUVA7UUFDTixLQUFLO1lBQ0hPLDhCQUFnQiw4REFBQ3BCLHFLQUFVQTtnQkFBQ3FCLE1BQU07Ozs7OztZQUNsQztRQUNGLEtBQUs7WUFDSEQsOEJBQWdCLDhEQUFDbkIsbUtBQVFBO2dCQUFDb0IsTUFBTTs7Ozs7O1lBQ2hDO1FBQ0YsS0FBSztZQUNIRCw4QkFBZ0IsOERBQUNsQixvS0FBU0E7Z0JBQUNtQixNQUFNOzs7Ozs7WUFDakM7UUFDRixLQUFLO1lBQ0hELDhCQUFnQiw4REFBQ2pCLG9LQUFTQTtnQkFBQ2tCLE1BQU07Ozs7OztZQUNqQztRQUNGLEtBQUs7WUFDSEQsOEJBQWdCLDhEQUFDaEIsbUtBQVFBO2dCQUFDaUIsTUFBTTs7Ozs7O1lBQ2hDO1FBQ0YsS0FBSztZQUNIRCw4QkFBZ0IsOERBQUNmLHNLQUFXQTtnQkFBQ2dCLE1BQU07Ozs7OztZQUNuQztRQUNGLEtBQUs7WUFDSEQsOEJBQWdCLDhEQUFDZCxtS0FBUUE7Z0JBQUNlLE1BQU07Ozs7OztZQUNoQztRQUNGLEtBQUs7WUFDSEQsOEJBQWdCLDhEQUFDYixxS0FBVUE7Z0JBQUNjLE1BQU07Ozs7OztZQUNsQztRQUNGLEtBQUs7WUFDSEQsOEJBQWdCLDhEQUFDWixpS0FBTUE7Z0JBQUNhLE1BQU07Ozs7OztZQUM5QjtRQUNGO1lBQ0VELDhCQUFnQiw4REFBQ0U7Z0JBQUlDLEtBQUtWO2dCQUFNVyxLQUFJO2dCQUFPQyxXQUFXUjs7Ozs7O0lBQzFEO0lBRUEscUJBQ0UsOERBQUNTO1FBQUVoQixNQUFNQTtRQUFNZSxXQUFXVjtRQUFXWSxRQUFPO1FBQVNDLEtBQUk7OzBCQUN2RCw4REFBQ0M7Z0JBQUlKLFdBQVdUOzBCQUNiSTs7Ozs7OzBCQUVILDhEQUFDUztnQkFBSUosV0FBV1A7MEJBQ2JQOzs7Ozs7MEJBRUgsOERBQUNtQjtnQkFBRUwsV0FBV047MEJBQ1hQOzs7Ozs7Ozs7Ozs7QUFJVDtLQTNEd0JFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlua0NhcmQuanM/MGM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUxpbmtlZGluLCBGaUdpdGh1YiwgRmlZb3V0dWJlLCBGaVR3aXR0ZXIsIEZpUmVkZGl0LCBGaUluc3RhZ3JhbSwgRmlUd2l0Y2gsIEZpRmlsZVRleHQsIEZpU3RhciB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG4vLyBFeGFtcGxlIG9mIGhhcmRjb2RlZCBwcm9wcyBmb3IgdGVzdGluZ1xuY29uc3QgdGVzdExpbmsgPSB7XG4gIGhyZWY6IFwiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb21cIixcbiAgdGl0bGU6IFwiRXhhbXBsZVwiLFxuICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGFuIGV4YW1wbGUgbGluay5cIixcbiAgaWNvbjogXCJsaW5rZWRpblwiIC8vIENoYW5nZSB0byBhbnkgb3RoZXIgaWNvbiBuYW1lIG9yIFVSTCBmb3IgdGVzdGluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlua0NhcmQoeyBocmVmLCB0aXRsZSwgZGVzY3JpcHRpb24sIGljb24gfSkge1xuICAvLyBEZWZpbmUgc3R5bGVzXG4gIGNvbnN0IGNhcmRTdHlsZSA9XG4gICAgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLTEwNSBiZy13aGl0ZSBtYi00IG1heC13LW1kIHNtOm1heC13LWxnXCI7XG4gIGNvbnN0IGljb25Db250YWluZXJTdHlsZSA9XG4gICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLTE2IHctMTYgc206aC0xOCBzbTp3LTE4IHJvdW5kZWQtZnVsbFwiOyAvLyBBZGQgcm91bmRlZC1mdWxsIGZvciBjb25zaXN0ZW50IGFwcGVhcmFuY2VcbiAgY29uc3QgaWNvblN0eWxlID1cbiAgICBcImgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvbnRhaW5cIjsgLy8gRW5zdXJlIHRoZSBpbWFnZSBmaXRzIHdlbGwgd2l0aGluIGl0cyBjb250YWluZXJcbiAgY29uc3QgdGl0bGVTdHlsZSA9IFwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIHRleHQtZ3JheS05MDAgdGV4dC1jZW50ZXIgbXQtMlwiO1xuICBjb25zdCBkZXNjcmlwdGlvblN0eWxlID0gXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgdGV4dC1jZW50ZXIgbXQtMVwiO1xuXG4gIC8vIERldGVybWluZSB3aGV0aGVyIHRvIHVzZSBhbiBpY29uIGZyb20gcmVhY3QtaWNvbnMgb3IgYW4gaW1hZ2UgVVJMXG4gIGxldCBJY29uQ29tcG9uZW50O1xuXG4gIHN3aXRjaCAoaWNvbikge1xuICAgIGNhc2UgXCJsaW5rZWRpblwiOlxuICAgICAgSWNvbkNvbXBvbmVudCA9IDxGaUxpbmtlZGluIHNpemU9ezI0fSAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJnaXRodWJcIjpcbiAgICAgIEljb25Db21wb25lbnQgPSA8RmlHaXRodWIgc2l6ZT17MjR9IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInlvdXR1YmVcIjpcbiAgICAgIEljb25Db21wb25lbnQgPSA8RmlZb3V0dWJlIHNpemU9ezI0fSAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ0d2l0dGVyXCI6XG4gICAgICBJY29uQ29tcG9uZW50ID0gPEZpVHdpdHRlciBzaXplPXsyNH0gLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicmVkZGl0XCI6XG4gICAgICBJY29uQ29tcG9uZW50ID0gPEZpUmVkZGl0IHNpemU9ezI0fSAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbnN0YWdyYW1cIjpcbiAgICAgIEljb25Db21wb25lbnQgPSA8RmlJbnN0YWdyYW0gc2l6ZT17MjR9IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInR3aXRjaFwiOlxuICAgICAgSWNvbkNvbXBvbmVudCA9IDxGaVR3aXRjaCBzaXplPXsyNH0gLz47XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICBJY29uQ29tcG9uZW50ID0gPEZpRmlsZVRleHQgc2l6ZT17MjR9IC8+O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInBhdHJlb25cIjpcbiAgICAgIEljb25Db21wb25lbnQgPSA8RmlTdGFyIHNpemU9ezI0fSAvPjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBJY29uQ29tcG9uZW50ID0gPGltZyBzcmM9e2ljb259IGFsdD1cIkljb25cIiBjbGFzc05hbWU9e2ljb25TdHlsZX0gLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT17Y2FyZFN0eWxlfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aWNvbkNvbnRhaW5lclN0eWxlfT5cbiAgICAgICAge0ljb25Db21wb25lbnR9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aXRsZVN0eWxlfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzc05hbWU9e2Rlc2NyaXB0aW9uU3R5bGV9PlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgPC9hPlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGaUxpbmtlZGluIiwiRmlHaXRodWIiLCJGaVlvdXR1YmUiLCJGaVR3aXR0ZXIiLCJGaVJlZGRpdCIsIkZpSW5zdGFncmFtIiwiRmlUd2l0Y2giLCJGaUZpbGVUZXh0IiwiRmlTdGFyIiwidGVzdExpbmsiLCJocmVmIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImljb24iLCJMaW5rQ2FyZCIsImNhcmRTdHlsZSIsImljb25Db250YWluZXJTdHlsZSIsImljb25TdHlsZSIsInRpdGxlU3R5bGUiLCJkZXNjcmlwdGlvblN0eWxlIiwiSWNvbkNvbXBvbmVudCIsInNpemUiLCJpbWciLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJhIiwidGFyZ2V0IiwicmVsIiwiZGl2IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LinkCard.js\n"));

/***/ })

});