"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar VoxelDog = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize;\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive-deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setPixelRatio(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.ambientLight(13421772, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, '/dog.glb', {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"voxel-dog\",\n        m: \"auto\",\n        at: [\n            '-20px',\n            '-60px',\n            '-120px'\n        ],\n        mb: [\n            '-40px',\n            '-140px',\n            '-200px'\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        __source: {\n            fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n            lineNumber: 109,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xl\",\n                position: \"absolute\",\n                left: \"50%\",\n                top: \"50%\",\n                ml: \"calc(0px - var(--spinner-size)/2)\",\n                mt: \"calc(0px - var(--spinner-size))\",\n                __source: {\n                    fileName: \"/Users/saifrahman/Downloads/pdf/portfolio2/components/voxel-dog.js\",\n                    lineNumber: 119,\n                    columnNumber: 22\n                },\n                __self: _this\n            }),\n            \"DOG!!\"\n        ]\n    }));\n};\n_s(VoxelDog, \"N8DVFy8FF9IwG72iErpAiB7VFOE=\");\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\nvar _c;\n$RefreshReg$(_c, \"VoxelDog\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZCLEdBRDZCLENBQUM7Z0JBQ1ZxQixvQkFBb0IsQ0FBQ1QsR0FBRztnQkFDeEI3QyxTQUFRLENBQUN1RCxPQUFPO1lBQ3BCLENBQUM7UUFFVCxDQUFDO0lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0R0RSxpREFBRztRQUFDdUUsR0FBRyxFQUFFM0QsWUFBWTtRQUNqQjRELFNBQVMsRUFBQyxDQUFXO1FBQ3JCQyxDQUFDLEVBQUMsQ0FBTTtRQUNSQyxFQUFFLEVBQUUsQ0FBQztZQUFBLENBQU87WUFBQyxDQUFPO1lBQUMsQ0FBUTtRQUFBLENBQUM7UUFDOUJDLEVBQUUsRUFBRSxDQUFDO1lBQUEsQ0FBTztZQUFFLENBQVE7WUFBQyxDQUFRO1FBQUEsQ0FBQztRQUNoQ0MsQ0FBQyxFQUFFLENBQUM7WUFBQSxHQUFHO1lBQUMsR0FBRztZQUFDLEdBQUc7UUFBQSxDQUFDO1FBQ2hCQyxDQUFDLEVBQUUsQ0FBQztZQUFBLEdBQUc7WUFBQyxHQUFHO1lBQUMsR0FBRztRQUFBLENBQUM7UUFDaEIzQixRQUFRLEVBQUMsQ0FBVTs7Ozs7Ozs7WUFFZHJDLE9BQU8seUVBQ0haLHFEQUFPO2dCQUNMNkUsSUFBSSxFQUFDLENBQUk7Z0JBQ1Q1QixRQUFRLEVBQUMsQ0FBVTtnQkFDbkI2QixJQUFJLEVBQUMsQ0FBSztnQkFDVkMsR0FBRyxFQUFDLENBQUs7Z0JBQ1RDLEVBQUUsRUFBQyxDQUFtQztnQkFDdENDLEVBQUUsRUFBQyxDQUFpQzs7Ozs7Ozs7WUFDekMsQ0FFWDs7O0FBRVIsQ0FBQztHQXRIS3ZFLFFBQVE7S0FBUkEsUUFBUTtBQXVIZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz9jZjRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiAgLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9sc30gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYnMvbW9kZWxcIjtcbmltcG9ydCB7IGFuaW1hdGUgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KXtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4LTEsNCkpXG59XG5cbmNvbnN0IFZveGVsRG9nICA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbX2NhbWVyYSwgc2V0Q2FtZXJhXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwwKSlcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwKiBNYXRoLnNpbigwLjIqIE1hdGguUEkpLFxuICAgICAgICAgICAgMTAsXG4gICAgICAgICAgICAyMCAqIE1hdGguY29zKDAuMipNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuICAgIGNvbnN0IFtzY2VuZV0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT57XG4gICAgICAgIGNvbnN0eyBjdXJyZW50OiBjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplXG4gICAgICAgIH1cblxuICAgIH0sIFtyZW5kZXJlcl0pXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuICAgICAgICBjb25zdCB7Y3VycmVudDpjb250YWluZXJ9ID0gcmVmQ29udGFpbmVyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKXtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyhzY1csc2NIKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHNjSCowLjAwNSs0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLmNvcHkoaW5pdGlhbENhbWVyYVBvc2l0aW9uKVxuICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuYW1iaWVudExpZ2h0KDB4Y2NjY2NjLDEpXG4gICAgICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy9kb2cuZ2xiJywge1xuICAgICAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzdFNoYWRvdzpmYWxzZVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGxldCByZXEgPSBudWxsXG4gICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lKzEgOiBmcmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZS8gMTIwKSogTWF0aC5QSSAqMjAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkrIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlci5kaXNwb3NlKClcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPEJveCByZWY9e3JlZkNvbnRhaW5lcn1cbiAgICAgICAgICAgICBjbGFzc05hbWU9J3ZveGVsLWRvZycgXG4gICAgICAgICAgICAgbT1cImF1dG9cIiBcbiAgICAgICAgICAgICBhdD17WyctMjBweCcsJy02MHB4JywnLTEyMHB4J119IFxuICAgICAgICAgICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsJy0yMDBweCddfSBcbiAgICAgICAgICAgICB3PXtbMjgwLDQ4MCw2NDBdfVxuICAgICAgICAgICAgIGg9e1syODAsNDgwLDY0MF19XG4gICAgICAgICAgICAgcG9zaXRpb249J3JlbGF0aXZlJ1xuICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwieGxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkvMilcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiIC8+XG4gICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICBET0chIVxuICAgICAgICA8L0JveD5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJhbmltYXRlIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbERvZyIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0Iiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});