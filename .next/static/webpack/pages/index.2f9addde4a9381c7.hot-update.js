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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LinkCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FaGithub,FaInstagram,FaLinkedin,FaMedium,FaPatreon,FaReddit,FaTwitch,FaTwitter,FaYoutube!=!react-icons/fa */ \"./node_modules/react-icons/fa/index.mjs\");\n\n\n\n// Define colors for each icon using SVG props\nconst iconMapping = {\n    linkedin: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaLinkedin, {\n        size: 64,\n        color: \"#0A66C2\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 16,\n        columnNumber: 13\n    }, undefined),\n    github: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaGithub, {\n        size: 64,\n        color: \"#181717\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 17,\n        columnNumber: 11\n    }, undefined),\n    youtube: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaYoutube, {\n        size: 64,\n        color: \"#FF0000\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 18,\n        columnNumber: 12\n    }, undefined),\n    twitter: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTwitter, {\n        size: 64,\n        color: \"#1DA1F2\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 19,\n        columnNumber: 12\n    }, undefined),\n    reddit: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaReddit, {\n        size: 64,\n        color: \"#FF4500\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 20,\n        columnNumber: 11\n    }, undefined),\n    instagram: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaInstagram, {\n        size: 64,\n        color: \"#C13584\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 21,\n        columnNumber: 14\n    }, undefined),\n    twitch: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaTwitch, {\n        size: 64,\n        color: \"#9146FF\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 22,\n        columnNumber: 11\n    }, undefined),\n    medium: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaMedium, {\n        size: 64,\n        color: \"#00AB6C\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 23,\n        columnNumber: 11\n    }, undefined),\n    patreon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaGithub_FaInstagram_FaLinkedin_FaMedium_FaPatreon_FaReddit_FaTwitch_FaTwitter_FaYoutube_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaPatreon, {\n        size: 64,\n        color: \"#F96854\"\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, undefined)\n};\nfunction LinkCard(param) {\n    let { href, title, description, icon } = param;\n    // Do not render card if href is empty\n    if (!href) return null;\n    const cardStyle = \"flex flex-col items-center justify-center w-full border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 bg-white mb-2 max-w-md sm:max-w-lg\";\n    const iconContainerStyle = \"flex items-center justify-center h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32\"; // Reduced container size\n    const iconStyle = \"h-4/5 w-4/5\"; // Adjusted icon size\n    const titleStyle = \"font-semibold text-lg text-gray-900 text-center mt-2 mb-1\"; // Reduced bottom margin\n    const descriptionStyle = \"text-sm text-gray-600 text-center mb-2\"; // Adjusted bottom margin\n    const IconComponent = iconMapping[icon] || /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: icon,\n        alt: \"Icon\",\n        className: iconStyle\n    }, void 0, false, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: href,\n        className: cardStyle,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: iconContainerStyle,\n                children: IconComponent\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: titleStyle,\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: descriptionStyle,\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jaistell/Development/code/link_me/components/LinkCard.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_c = LinkCard;\nvar _c;\n$RefreshReg$(_c, \"LinkCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpbmtDYXJkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQVdGO0FBRXhCLDhDQUE4QztBQUM5QyxNQUFNVSxjQUFjO0lBQ2xCQyx3QkFBVSw4REFBQ1Ysc0tBQVVBO1FBQUNXLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ3RDQyxzQkFBUSw4REFBQ1osb0tBQVFBO1FBQUNVLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ2xDRSx1QkFBUyw4REFBQ1oscUtBQVNBO1FBQUNTLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ3BDRyx1QkFBUyw4REFBQ1oscUtBQVNBO1FBQUNRLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ3BDSSxzQkFBUSw4REFBQ1osb0tBQVFBO1FBQUNPLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ2xDSyx5QkFBVyw4REFBQ1osdUtBQVdBO1FBQUNNLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ3hDTSxzQkFBUSw4REFBQ1osb0tBQVFBO1FBQUNLLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ2xDTyxzQkFBUSw4REFBQ1osb0tBQVFBO1FBQUNJLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0lBQ2xDUSx1QkFBUyw4REFBQ1oscUtBQVNBO1FBQUNHLE1BQU07UUFBSUMsT0FBTTs7Ozs7O0FBQ3RDO0FBRWUsU0FBU1MsU0FBUyxLQUFrQztRQUFsQyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxJQUFJLEVBQUUsR0FBbEM7SUFDL0Isc0NBQXNDO0lBQ3RDLElBQUksQ0FBQ0gsTUFBTSxPQUFPO0lBRWxCLE1BQU1JLFlBQ0o7SUFDRixNQUFNQyxxQkFDSiw4RUFBOEUseUJBQXlCO0lBQ3pHLE1BQU1DLFlBQVksZUFBZSxxQkFBcUI7SUFDdEQsTUFBTUMsYUFDSiw2REFBNkQsd0JBQXdCO0lBQ3ZGLE1BQU1DLG1CQUFtQiwwQ0FBMEMseUJBQXlCO0lBRTVGLE1BQU1DLGdCQUFnQnRCLFdBQVcsQ0FBQ2dCLEtBQUssa0JBQ3JDLDhEQUFDTztRQUFJQyxLQUFLUjtRQUFNUyxLQUFJO1FBQU9DLFdBQVdQOzs7Ozs7SUFHeEMscUJBQ0UsOERBQUNRO1FBQ0NkLE1BQU1BO1FBQ05hLFdBQVdUO1FBQ1hXLFFBQU87UUFDUEMsS0FBSTs7MEJBRUosOERBQUNDO2dCQUFJSixXQUFXUjswQkFBcUJJOzs7Ozs7MEJBQ3JDLDhEQUFDUTtnQkFBSUosV0FBV047MEJBQWFOOzs7Ozs7MEJBQzdCLDhEQUFDaUI7Z0JBQUVMLFdBQVdMOzBCQUFtQk47Ozs7Ozs7Ozs7OztBQUd2QztLQTdCd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGlua0NhcmQuanM/MGM3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBGYUxpbmtlZGluLFxuICBGYUdpdGh1YixcbiAgRmFZb3V0dWJlLFxuICBGYVR3aXR0ZXIsXG4gIEZhUmVkZGl0LFxuICBGYUluc3RhZ3JhbSxcbiAgRmFUd2l0Y2gsXG4gIEZhTWVkaXVtLFxuICBGYVBhdHJlb24sXG59IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuXG4vLyBEZWZpbmUgY29sb3JzIGZvciBlYWNoIGljb24gdXNpbmcgU1ZHIHByb3BzXG5jb25zdCBpY29uTWFwcGluZyA9IHtcbiAgbGlua2VkaW46IDxGYUxpbmtlZGluIHNpemU9ezY0fSBjb2xvcj1cIiMwQTY2QzJcIiAvPixcbiAgZ2l0aHViOiA8RmFHaXRodWIgc2l6ZT17NjR9IGNvbG9yPVwiIzE4MTcxN1wiIC8+LFxuICB5b3V0dWJlOiA8RmFZb3V0dWJlIHNpemU9ezY0fSBjb2xvcj1cIiNGRjAwMDBcIiAvPixcbiAgdHdpdHRlcjogPEZhVHdpdHRlciBzaXplPXs2NH0gY29sb3I9XCIjMURBMUYyXCIgLz4sXG4gIHJlZGRpdDogPEZhUmVkZGl0IHNpemU9ezY0fSBjb2xvcj1cIiNGRjQ1MDBcIiAvPixcbiAgaW5zdGFncmFtOiA8RmFJbnN0YWdyYW0gc2l6ZT17NjR9IGNvbG9yPVwiI0MxMzU4NFwiIC8+LFxuICB0d2l0Y2g6IDxGYVR3aXRjaCBzaXplPXs2NH0gY29sb3I9XCIjOTE0NkZGXCIgLz4sXG4gIG1lZGl1bTogPEZhTWVkaXVtIHNpemU9ezY0fSBjb2xvcj1cIiMwMEFCNkNcIiAvPixcbiAgcGF0cmVvbjogPEZhUGF0cmVvbiBzaXplPXs2NH0gY29sb3I9XCIjRjk2ODU0XCIgLz4sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaW5rQ2FyZCh7IGhyZWYsIHRpdGxlLCBkZXNjcmlwdGlvbiwgaWNvbiB9KSB7XG4gIC8vIERvIG5vdCByZW5kZXIgY2FyZCBpZiBocmVmIGlzIGVtcHR5XG4gIGlmICghaHJlZikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgY2FyZFN0eWxlID1cbiAgICBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy14bCB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1IGJnLXdoaXRlIG1iLTIgbWF4LXctbWQgc206bWF4LXctbGdcIjtcbiAgY29uc3QgaWNvbkNvbnRhaW5lclN0eWxlID1cbiAgICBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtMjQgdy0yNCBzbTpoLTI4IHNtOnctMjggbWQ6aC0zMiBtZDp3LTMyXCI7IC8vIFJlZHVjZWQgY29udGFpbmVyIHNpemVcbiAgY29uc3QgaWNvblN0eWxlID0gXCJoLTQvNSB3LTQvNVwiOyAvLyBBZGp1c3RlZCBpY29uIHNpemVcbiAgY29uc3QgdGl0bGVTdHlsZSA9XG4gICAgXCJmb250LXNlbWlib2xkIHRleHQtbGcgdGV4dC1ncmF5LTkwMCB0ZXh0LWNlbnRlciBtdC0yIG1iLTFcIjsgLy8gUmVkdWNlZCBib3R0b20gbWFyZ2luXG4gIGNvbnN0IGRlc2NyaXB0aW9uU3R5bGUgPSBcInRleHQtc20gdGV4dC1ncmF5LTYwMCB0ZXh0LWNlbnRlciBtYi0yXCI7IC8vIEFkanVzdGVkIGJvdHRvbSBtYXJnaW5cblxuICBjb25zdCBJY29uQ29tcG9uZW50ID0gaWNvbk1hcHBpbmdbaWNvbl0gfHwgKFxuICAgIDxpbWcgc3JjPXtpY29ufSBhbHQ9XCJJY29uXCIgY2xhc3NOYW1lPXtpY29uU3R5bGV9IC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGNsYXNzTmFtZT17Y2FyZFN0eWxlfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtpY29uQ29udGFpbmVyU3R5bGV9PntJY29uQ29tcG9uZW50fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RpdGxlU3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgIDxwIGNsYXNzTmFtZT17ZGVzY3JpcHRpb25TdHlsZX0+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICA8L2E+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGYUxpbmtlZGluIiwiRmFHaXRodWIiLCJGYVlvdXR1YmUiLCJGYVR3aXR0ZXIiLCJGYVJlZGRpdCIsIkZhSW5zdGFncmFtIiwiRmFUd2l0Y2giLCJGYU1lZGl1bSIsIkZhUGF0cmVvbiIsImljb25NYXBwaW5nIiwibGlua2VkaW4iLCJzaXplIiwiY29sb3IiLCJnaXRodWIiLCJ5b3V0dWJlIiwidHdpdHRlciIsInJlZGRpdCIsImluc3RhZ3JhbSIsInR3aXRjaCIsIm1lZGl1bSIsInBhdHJlb24iLCJMaW5rQ2FyZCIsImhyZWYiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNhcmRTdHlsZSIsImljb25Db250YWluZXJTdHlsZSIsImljb25TdHlsZSIsInRpdGxlU3R5bGUiLCJkZXNjcmlwdGlvblN0eWxlIiwiSWNvbkNvbXBvbmVudCIsImltZyIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsImEiLCJ0YXJnZXQiLCJyZWwiLCJkaXYiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LinkCard.js\n"));

/***/ })

});