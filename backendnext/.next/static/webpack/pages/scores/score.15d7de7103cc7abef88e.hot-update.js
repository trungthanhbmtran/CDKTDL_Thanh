webpackHotUpdate_N_E("pages/scores/score",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_QuickSetting__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/QuickSetting */ "./components/QuickSetting.js");
/* harmony import */ var _components_SidebarMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SidebarMenu */ "./components/SidebarMenu.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_ContainerComponents_staff_ContentStaff__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ContainerComponents/staff/ContentStaff */ "./components/ContainerComponents/staff/ContentStaff.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Cookies/Cookies */ "./Cookies/Cookies.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);







var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var res_departments, results_departments, res_brenches, results_brenches, res_classes, results_classes, res_subjects, results_subjects, res_students, results_students, res_typescores, results_typescores;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Send_Get_RestAPI("http://localhost:3001/score/departments");

              case 2:
                res_departments = _context.sent;
                _context.next = 5;
                return res_departments.json();

              case 5:
                results_departments = _context.sent;
                _context.next = 8;
                return Send_Get_RestAPI("http://localhost:3001/score/brenches");

              case 8:
                res_brenches = _context.sent;
                _context.next = 11;
                return res_brenches.json();

              case 11:
                results_brenches = _context.sent;
                _context.next = 14;
                return Send_Get_RestAPI("http://localhost:3001/score/classes");

              case 14:
                res_classes = _context.sent;
                _context.next = 17;
                return res_classes.json();

              case 17:
                results_classes = _context.sent;
                _context.next = 20;
                return Send_Get_RestAPI("http://localhost:3001/score/subjects");

              case 20:
                res_subjects = _context.sent;
                _context.next = 23;
                return res_subjects.json();

              case 23:
                results_subjects = _context.sent;
                _context.next = 26;
                return Send_Get_RestAPI("http://localhost:3001/score/students");

              case 26:
                res_students = _context.sent;
                _context.next = 29;
                return res_students.json();

              case 29:
                results_students = _context.sent;
                _context.next = 32;
                return Send_Get_RestAPI("http://localhost:3001/score/typescores");

              case 32:
                res_typescores = _context.sent;
                _context.next = 35;
                return res_typescores.json();

              case 35:
                results_typescores = _context.sent;
                return _context.abrupt("return", {
                  results_departments: results_departments,
                  results_brenches: results_brenches,
                  results_classes: results_classes,
                  results_subjects: results_subjects,
                  results_students: results_students,
                  results_typescores: results_typescores,
                  header: 'List Staff',
                  name: "thanh"
                });

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.props.children;
    _this.state = {
      counters: "this is thanh",
      name: "thanh",
      students: _this.props.results
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      console.log(this.props.children);
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      }), __jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }), __jsx("meta", {
        content: "width=device-width, initial-scale=1",
        name: "viewport",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "description",
        content: "Responsive Admin Template",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "author",
        content: "SmartUniversity",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "CDKTDL"), __jsx("link", {
        href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../fonts/simple-line-icons/simple-line-icons.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../fonts/font-awesome/css/font-awesome.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../fonts/material-design-icons/material-icon.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 12
        }
      }), __jsx("link", {
        href: "../assets/plugins/bootstrap/css/bootstrap.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/plugins/summernote/summernote.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 12
        }
      }), __jsx("link", {
        href: "../assets/css/pages/inbox.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../assets/plugins/material/material.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../assets/css/material_style.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/theme/light/theme_style.css",
        rel: "stylesheet",
        id: "rt_style_components",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/theme/light/style.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/plugins.min.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/responsive.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/css/theme/light/theme-color.css",
        rel: "stylesheet",
        type: "text/css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "../assets/plugins/dropzone/dropzone.css",
        rel: "stylesheet",
        media: "screen",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "stylesheet",
        href: "../assets/plugins/flatpicker/css/flatpickr.min.css",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "../assets/img/favicon.ico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      })), __jsx("div", {
        className: "page-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }), __jsx(_components_QuickSetting__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "page-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }
      }, __jsx(_components_SidebarMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }), this.props.children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }
      })), __jsx("script", {
        src: "../assets/plugins/jquery/jquery.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/popper/popper.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/jquery-blockui/jquery.blockui.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/jquery-slimscroll/jquery.slimscroll.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/bootstrap/js/bootstrap.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/datatables/jquery.dataTables.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/pages/table/table_data.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/app.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/layout.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/theme-color.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/material/material.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/pages/material-select/getmdl-select.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/flatpicker/js/flatpicker.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/pages/date-time/date-time.init.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/dropzone/dropzone.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/dropzone/dropzone-call.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/plugins/apexcharts/apexcharts.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 9
        }
      }), __jsx("script", {
        src: "../assets/js/pages/chart/chartjs/home-data.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjdHgiLCJTZW5kX0dldF9SZXN0QVBJIiwicmVzX2RlcGFydG1lbnRzIiwianNvbiIsInJlc3VsdHNfZGVwYXJ0bWVudHMiLCJyZXNfYnJlbmNoZXMiLCJyZXN1bHRzX2JyZW5jaGVzIiwicmVzX2NsYXNzZXMiLCJyZXN1bHRzX2NsYXNzZXMiLCJyZXNfc3ViamVjdHMiLCJyZXN1bHRzX3N1YmplY3RzIiwicmVzX3N0dWRlbnRzIiwicmVzdWx0c19zdHVkZW50cyIsInJlc190eXBlc2NvcmVzIiwicmVzdWx0c190eXBlc2NvcmVzIiwiaGVhZGVyIiwibmFtZSIsInByb3BzIiwiY2hpbGRyZW4iLCJzdGF0ZSIsImNvdW50ZXJzIiwic3R1ZGVudHMiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK05BQytCQyxHQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVnQ0MsZ0JBQWdCLENBQUMseUNBQUQsQ0FGaEQ7O0FBQUE7QUFFUUMsK0JBRlI7QUFBQTtBQUFBLHVCQUdvQ0EsZUFBZSxDQUFDQyxJQUFoQixFQUhwQzs7QUFBQTtBQUdRQyxtQ0FIUjtBQUFBO0FBQUEsdUJBSTZCSCxnQkFBZ0IsQ0FBQyxzQ0FBRCxDQUo3Qzs7QUFBQTtBQUlRSSw0QkFKUjtBQUFBO0FBQUEsdUJBS2lDQSxZQUFZLENBQUNGLElBQWIsRUFMakM7O0FBQUE7QUFLUUcsZ0NBTFI7QUFBQTtBQUFBLHVCQU00QkwsZ0JBQWdCLENBQUMscUNBQUQsQ0FONUM7O0FBQUE7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTdHRixFQThHRTtBQUFRLFdBQUcsRUFBQyw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBOUdGLEVBZ0hFO0FBQVEsV0FBRyxFQUFDLDRDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFoSEYsRUFpSEU7QUFBUSxXQUFHLEVBQUMscURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWpIRixFQWtIRTtBQUFRLFdBQUcsRUFBQyxtREFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbEhGLEVBbUhFO0FBQVEsV0FBRyxFQUFDLGdEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFuSEYsRUFxSEU7QUFBUSxXQUFHLEVBQUMsd0NBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXJIRixFQXNIRTtBQUFRLFdBQUcsRUFBQyw2Q0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdEhGLEVBd0hFO0FBQVEsV0FBRyxFQUFDLGdEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF4SEYsRUF5SEU7QUFBUSxXQUFHLEVBQUMsK0NBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXpIRixDQURGO0FBK0hEO0FBM0pIOztBQUFBO0FBQUEsRUFBMkJPLCtDQUEzQjtBQThKZTFCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Njb3Jlcy9zY29yZS4xNWQ3ZGU3MTAzY2M3YWJlZjg4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBRdWlja1NldHRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVpY2tTZXR0aW5nXCI7XG5pbXBvcnQgU2lkZWJhck1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lkZWJhck1lbnVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgQ29udGVudFN0YWZmIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9Db250ZW50U3RhZmYnXG5pbXBvcnQge3NldGNvb2tpZSxnZXRDb29raWUsY2hlY2tDb29raWV9IGZyb20gJy4uL0Nvb2tpZXMvQ29va2llcydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGxldCByZXNfZGVwYXJ0bWVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2RlcGFydG1lbnRzXCIpO1xuICAgIGxldCByZXN1bHRzX2RlcGFydG1lbnRzID0gYXdhaXQgcmVzX2RlcGFydG1lbnRzLmpzb24oKTtcbiAgICBsZXQgcmVzX2JyZW5jaGVzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9icmVuY2hlc1wiKTtcbiAgICBsZXQgcmVzdWx0c19icmVuY2hlcyA9IGF3YWl0IHJlc19icmVuY2hlcy5qc29uKCk7XG4gICAgbGV0IHJlc19jbGFzc2VzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9jbGFzc2VzXCIpO1xuICAgIGxldCByZXN1bHRzX2NsYXNzZXMgPSBhd2FpdCByZXNfY2xhc3Nlcy5qc29uKCk7XG4gICAgbGV0IHJlc19zdWJqZWN0cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvc3ViamVjdHNcIik7XG4gICAgbGV0IHJlc3VsdHNfc3ViamVjdHMgPSBhd2FpdCByZXNfc3ViamVjdHMuanNvbigpO1xuICAgIGxldCByZXNfc3R1ZGVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL3N0dWRlbnRzXCIpO1xuICAgIGxldCByZXN1bHRzX3N0dWRlbnRzID0gYXdhaXQgcmVzX3N0dWRlbnRzLmpzb24oKTtcbiAgICBsZXQgcmVzX3R5cGVzY29yZXMgPSAgYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS90eXBlc2NvcmVzXCIpO1xuICAgIGxldCByZXN1bHRzX3R5cGVzY29yZXMgPSBhd2FpdCByZXNfdHlwZXNjb3Jlcy5qc29uKCk7XG5yZXR1cm4ge3Jlc3VsdHNfZGVwYXJ0bWVudHMgOiByZXN1bHRzX2RlcGFydG1lbnRzLHJlc3VsdHNfYnJlbmNoZXM6IHJlc3VsdHNfYnJlbmNoZXMgLHJlc3VsdHNfY2xhc3NlczogcmVzdWx0c19jbGFzc2VzLFxuICByZXN1bHRzX3N1YmplY3RzIDpyZXN1bHRzX3N1YmplY3RzLHJlc3VsdHNfc3R1ZGVudHMgOnJlc3VsdHNfc3R1ZGVudHMscmVzdWx0c190eXBlc2NvcmVzOnJlc3VsdHNfdHlwZXNjb3JlcywgaGVhZGVyOiAnTGlzdCBTdGFmZicsbmFtZTpcInRoYW5oXCJ9O1xuIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb3VudGVyczogXCJ0aGlzIGlzIHRoYW5oXCIsXG4gICAgICBuYW1lOiBcInRoYW5oXCIsXG4gICAgICBzdHVkZW50czogdGhpcy5wcm9wcy5yZXN1bHRzXG4gICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICAgIDxtZXRhIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIG5hbWU9XCJ2aWV3cG9ydFwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlJlc3BvbnNpdmUgQWRtaW4gVGVtcGxhdGVcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiU21hcnRVbml2ZXJzaXR5XCIgLz5cbiAgICAgICAgICA8dGl0bGU+Q0RLVERMPC90aXRsZT5cbiAgICAgICAgICB7LyogZ29vZ2xlIGZvbnQgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBpY29ucyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2ZvbnRzL3NpbXBsZS1saW5lLWljb25zL3NpbXBsZS1saW5lLWljb25zLm1pbi5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9mb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vZm9udHMvbWF0ZXJpYWwtZGVzaWduLWljb25zL21hdGVyaWFsLWljb24uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIFx0PGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2RhdGF0YWJsZXMvcGx1Z2lucy9ib290c3RyYXAvZGF0YVRhYmxlcy5ib290c3RyYXA0Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICAgIHsvKmJvb3RzdHJhcCAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgXHQ8bGluayBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvc3VtbWVybm90ZS9zdW1tZXJub3RlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICAgICAgey8qaW5ib3ggc3R5bGUgKi99XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvcGFnZXMvaW5ib3gubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiAvPlxuICAgICAgICAgIHsvKiBNYXRlcmlhbCBEZXNpZ24gTGl0ZSBDU1MgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL21hdGVyaWFsL21hdGVyaWFsLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9hc3NldHMvY3NzL21hdGVyaWFsX3N0eWxlLmNzc1wiIC8+XG4gICAgICAgICAgey8qIFRoZW1lIFN0eWxlcyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvdGhlbWUvbGlnaHQvdGhlbWVfc3R5bGUuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaWQ9XCJydF9zdHlsZV9jb21wb25lbnRzXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvdGhlbWUvbGlnaHQvc3R5bGUuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL2Nzcy9wbHVnaW5zLm1pbi5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvY3NzL3Jlc3BvbnNpdmUuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL2Nzcy90aGVtZS9saWdodC90aGVtZS1jb2xvci5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIGRyb3B6b25lICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvZHJvcHpvbmUvZHJvcHpvbmUuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgbWVkaWE9XCJzY3JlZW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIERhdGUgVGltZSBpdGVtIENTUyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvZmxhdHBpY2tlci9jc3MvZmxhdHBpY2tyLm1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIGZhdmljb24gKi99XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9hc3NldHMvaW1nL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICA8UXVpY2tTZXR0aW5nIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPFNpZGViYXJNZW51IC8+XG4gICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvanF1ZXJ5L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9wb3BwZXIvcG9wcGVyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvanF1ZXJ5LWJsb2NrdWkvanF1ZXJ5LmJsb2NrdWkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvanF1ZXJ5LXNsaW1zY3JvbGwvanF1ZXJ5LnNsaW1zY3JvbGwuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvYm9vdHN0cmFwLXN3aXRjaC9qcy9ib290c3RyYXAtc3dpdGNoLm1pbi5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvZGF0YXRhYmxlcy9qcXVlcnkuZGF0YVRhYmxlcy5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9kYXRhdGFibGVzL3BsdWdpbnMvYm9vdHN0cmFwL2RhdGFUYWJsZXMuYm9vdHN0cmFwNC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvcGFnZXMvdGFibGUvdGFibGVfZGF0YS5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL2FwcC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9sYXlvdXQuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvdGhlbWUtY29sb3IuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL21hdGVyaWFsL21hdGVyaWFsLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9wYWdlcy9tYXRlcmlhbC1zZWxlY3QvZ2V0bWRsLXNlbGVjdC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2ZsYXRwaWNrZXIvanMvZmxhdHBpY2tlci5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvcGFnZXMvZGF0ZS10aW1lL2RhdGUtdGltZS5pbml0LmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9kcm9wem9uZS9kcm9wem9uZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Ryb3B6b25lL2Ryb3B6b25lLWNhbGwuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2FwZXhjaGFydHMvYXBleGNoYXJ0cy5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvcGFnZXMvY2hhcnQvY2hhcnRqcy9ob21lLWRhdGEuanNcIj48L3NjcmlwdD5cblxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==