webpackHotUpdate_N_E("pages/staffs/staff",{

/***/ "./pages/staffs/staff.js":
/*!*******************************!*\
  !*** ./pages/staffs/staff.js ***!
  \*******************************/
/*! exports provided: Staff, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Staff", function() { return Staff; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var _components_ContainerComponents_staff_ContentStaff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ContainerComponents/staff/ContentStaff */ "./components/ContainerComponents/staff/ContentStaff.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ContainerComponents/LayoutContentPage/LayoutPage */ "./components/ContainerComponents/LayoutContentPage/LayoutPage.js");
/* harmony import */ var _components_ContainerComponents_staff_AddForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ContainerComponents/staff/AddForm */ "./components/ContainerComponents/staff/AddForm.js");








var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\staffs\\staff.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Staff = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Staff, _Component);

  var _super = _createSuper(Staff);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Staff, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        var res_departments, results_departments, res_typescores, results_typescores, res, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_11__["Send_Get_RestAPI"])("http://localhost:3001/score/departments");

              case 2:
                res_departments = _context.sent;
                _context.next = 5;
                return res_departments.json();

              case 5:
                results_departments = _context.sent;
                _context.next = 8;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_11__["Send_Get_RestAPI"])("http://localhost:3001/score/typescores");

              case 8:
                res_typescores = _context.sent;
                _context.next = 11;
                return res_typescores.json();

              case 11:
                results_typescores = _context.sent;
                _context.next = 14;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_11__["Send_Get_RestAPI"])('http://localhost:3001/staff');

              case 14:
                res = _context.sent;
                _context.next = 17;
                return res.json();

              case 17:
                json = _context.sent;
                return _context.abrupt("return", {
                  results: json,
                  header: 'List Staff'
                });

              case 19:
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

  function Staff(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Staff);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Staff, [{
    key: "render",
    value: function render() {
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, __jsx(_components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }), __jsx(_components_ContainerComponents_staff_ContentStaff__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return Staff;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Staff);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RhZmZzL3N0YWZmLmpzIl0sIm5hbWVzIjpbIlN0YWZmIiwiY3R4IiwiU2VuZF9HZXRfUmVzdEFQSSIsInJlc19kZXBhcnRtZW50cyIsImpzb24iLCJyZXN1bHRzX2RlcGFydG1lbnRzIiwicmVzX3R5cGVzY29yZXMiLCJyZXN1bHRzX3R5cGVzY29yZXMiLCJyZXMiLCJyZXN1bHRzIiwiaGVhZGVyIiwicHJvcHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtOQUNpQ0MsR0FEakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFb0NDLDhFQUFnQixDQUFDLHlDQUFELENBRnBEOztBQUFBO0FBRVlDLCtCQUZaO0FBQUE7QUFBQSx1QkFHd0NBLGVBQWUsQ0FBQ0MsSUFBaEIsRUFIeEM7O0FBQUE7QUFHWUMsbUNBSFo7QUFBQTtBQUFBLHVCQUlvQ0gsOEVBQWdCLENBQUMsd0NBQUQsQ0FKcEQ7O0FBQUE7QUFJWUksOEJBSlo7QUFBQTtBQUFBLHVCQUt1Q0EsY0FBYyxDQUFDRixJQUFmLEVBTHZDOztBQUFBO0FBS1lHLGtDQUxaO0FBQUE7QUFBQSx1QkFNMEJMLDhFQUFnQixDQUFDLDZCQUFELENBTjFDOztBQUFBO0FBTWNNLG1CQU5kO0FBQUE7QUFBQSx1QkFPMkJBLEdBQUcsQ0FBQ0osSUFBSixFQVAzQjs7QUFBQTtBQU9jQSxvQkFQZDtBQUFBLGlEQVFZO0FBQUNLLHlCQUFPLEVBQUdMLElBQVg7QUFBa0JNLHdCQUFNLEVBQUU7QUFBMUIsaUJBUlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFZSSxpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNUQSxLQURTO0FBRWxCOztBQWRMO0FBQUE7QUFBQSw2QkFlWTtBQUNKLGFBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxxR0FBRCx5RkFBZ0IsS0FBS0EsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNRLE1BQUMsMkZBQUQseUZBQWtCLEtBQUtBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEUixDQURKLENBREo7QUFPSDtBQXZCTDs7QUFBQTtBQUFBLEVBQTJCQywrQ0FBM0I7QUEwQmVaLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YWZmcy9zdGFmZi4zZThkMTU0MWJhZGQ0MDczZGY4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCBDb250ZW50U3RhZmYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0NvbnRlbnRTdGFmZidcclxuaW1wb3J0IHtTZW5kX0dldF9SZXN0QVBJfSBmcm9tICcuLi8uLi9SZXF1ZXN0L2ltd19yZXF1ZXN0J1xyXG5pbXBvcnQgTGF5b3V0UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lckNvbXBvbmVudHMvTGF5b3V0Q29udGVudFBhZ2UvTGF5b3V0UGFnZSdcclxuaW1wb3J0IEFkZEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0FkZEZvcm0nXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhZmYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgICAgICBsZXQgcmVzX2RlcGFydG1lbnRzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9kZXBhcnRtZW50c1wiKTtcclxuICAgICAgICBsZXQgcmVzdWx0c19kZXBhcnRtZW50cyA9IGF3YWl0IHJlc19kZXBhcnRtZW50cy5qc29uKCk7XHJcbiAgICAgICAgbGV0IHJlc190eXBlc2NvcmVzID0gIGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvdHlwZXNjb3Jlc1wiKTtcclxuICAgICAgICBsZXQgcmVzdWx0c190eXBlc2NvcmVzID0gYXdhaXQgcmVzX3R5cGVzY29yZXMuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGFmZicpXHJcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgcmV0dXJuIHtyZXN1bHRzIDoganNvbiAsIGhlYWRlcjogJ0xpc3QgU3RhZmYnIH07XHJcblxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbmRleD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXRQYWdlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRTdGFmZiB7Li4udGhpcy5wcm9wc30vPlxyXG4gICAgICAgICAgICAgICAgIDwvTGF5b3V0UGFnZT5cclxuICAgICAgICAgICAgPC9JbmRleD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YWZmXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=