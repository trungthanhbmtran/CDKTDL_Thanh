webpackHotUpdate_N_E("pages/staffs/addstaff",{

/***/ "./pages/scores/addscores.js":
/*!***********************************!*\
  !*** ./pages/scores/addscores.js ***!
  \***********************************/
/*! exports provided: AddScore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScore", function() { return AddScore; });
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
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ContainerComponents/LayoutContentPage/LayoutPage */ "./components/ContainerComponents/LayoutContentPage/LayoutPage.js");
/* harmony import */ var _components_ContainerComponents_staff_AddForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ContainerComponents/staff/AddForm */ "./components/ContainerComponents/staff/AddForm.js");








var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\scores\\addscores.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AddScore = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddScore, _Component);

  var _super = _createSuper(AddScore);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddScore, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        var res_departments, results_departments, res_brenches, results_brenches, res_classes, results_classes, res_subjects, results_subjects, res_students, results_students, res_typescores, results_typescores;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/score/departments");

              case 2:
                res_departments = _context.sent;
                _context.next = 5;
                return res_departments.json();

              case 5:
                results_departments = _context.sent;
                _context.next = 8;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/score/brenches");

              case 8:
                res_brenches = _context.sent;
                _context.next = 11;
                return res_brenches.json();

              case 11:
                results_brenches = _context.sent;
                _context.next = 14;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/score/classes");

              case 14:
                res_classes = _context.sent;
                _context.next = 17;
                return res_classes.json();

              case 17:
                results_classes = _context.sent;
                _context.next = 20;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/score/subjects");

              case 20:
                res_subjects = _context.sent;
                _context.next = 23;
                return res_subjects.json();

              case 23:
                results_subjects = _context.sent;
                _context.next = 26;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/score/students");

              case 26:
                res_students = _context.sent;
                _context.next = 29;
                return res_students.json();

              case 29:
                results_students = _context.sent;
                _context.next = 32;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/score/typescores");

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

  function AddScore(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AddScore);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddScore, [{
    key: "render",
    value: function render() {
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, __jsx(_components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 17
        }
      }), __jsx(_components_ContainerComponents_staff_AddForm__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return AddScore;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AddStaff);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NvcmVzL2FkZHNjb3Jlcy5qcyJdLCJuYW1lcyI6WyJBZGRTY29yZSIsImN0eCIsIlNlbmRfR2V0X1Jlc3RBUEkiLCJyZXNfZGVwYXJ0bWVudHMiLCJqc29uIiwicmVzdWx0c19kZXBhcnRtZW50cyIsInJlc19icmVuY2hlcyIsInJlc3VsdHNfYnJlbmNoZXMiLCJyZXNfY2xhc3NlcyIsInJlc3VsdHNfY2xhc3NlcyIsInJlc19zdWJqZWN0cyIsInJlc3VsdHNfc3ViamVjdHMiLCJyZXNfc3R1ZGVudHMiLCJyZXN1bHRzX3N0dWRlbnRzIiwicmVzX3R5cGVzY29yZXMiLCJyZXN1bHRzX3R5cGVzY29yZXMiLCJoZWFkZXIiLCJuYW1lIiwicHJvcHMiLCJDb21wb25lbnQiLCJBZGRTdGFmZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK05BQ2lDQyxHQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVxQ0MsOEVBQWdCLENBQUMseUNBQUQsQ0FGckQ7O0FBQUE7QUFFYUMsK0JBRmI7QUFBQTtBQUFBLHVCQUd5Q0EsZUFBZSxDQUFDQyxJQUFoQixFQUh6Qzs7QUFBQTtBQUdhQyxtQ0FIYjtBQUFBO0FBQUEsdUJBSWtDSCw4RUFBZ0IsQ0FBQyxzQ0FBRCxDQUpsRDs7QUFBQTtBQUlhSSw0QkFKYjtBQUFBO0FBQUEsdUJBS3NDQSxZQUFZLENBQUNGLElBQWIsRUFMdEM7O0FBQUE7QUFLYUcsZ0NBTGI7QUFBQTtBQUFBLHVCQU1pQ0wsOEVBQWdCLENBQUMscUNBQUQsQ0FOakQ7O0FBQUE7QUFNYU0sMkJBTmI7QUFBQTtBQUFBLHVCQU9xQ0EsV0FBVyxDQUFDSixJQUFaLEVBUHJDOztBQUFBO0FBT2FLLCtCQVBiO0FBQUE7QUFBQSx1QkFRa0NQLDhFQUFnQixDQUFDLHNDQUFELENBUmxEOztBQUFBO0FBUWFRLDRCQVJiO0FBQUE7QUFBQSx1QkFTc0NBLFlBQVksQ0FBQ04sSUFBYixFQVR0Qzs7QUFBQTtBQVNhTyxnQ0FUYjtBQUFBO0FBQUEsdUJBVWtDVCw4RUFBZ0IsQ0FBQyxzQ0FBRCxDQVZsRDs7QUFBQTtBQVVhVSw0QkFWYjtBQUFBO0FBQUEsdUJBV3NDQSxZQUFZLENBQUNSLElBQWIsRUFYdEM7O0FBQUE7QUFXYVMsZ0NBWGI7QUFBQTtBQUFBLHVCQVlxQ1gsOEVBQWdCLENBQUMsd0NBQUQsQ0FackQ7O0FBQUE7QUFZYVksOEJBWmI7QUFBQTtBQUFBLHVCQWF3Q0EsY0FBYyxDQUFDVixJQUFmLEVBYnhDOztBQUFBO0FBYWFXLGtDQWJiO0FBQUEsaURBY1k7QUFBQ1YscUNBQW1CLEVBQUdBLG1CQUF2QjtBQUEyQ0Usa0NBQWdCLEVBQUVBLGdCQUE3RDtBQUErRUUsaUNBQWUsRUFBRUEsZUFBaEc7QUFDTEUsa0NBQWdCLEVBQUVBLGdCQURiO0FBQzhCRSxrQ0FBZ0IsRUFBRUEsZ0JBRGhEO0FBQ2lFRSxvQ0FBa0IsRUFBQ0Esa0JBRHBGO0FBQ3dHQyx3QkFBTSxFQUFFLFlBRGhIO0FBQzZIQyxzQkFBSSxFQUFDO0FBRGxJLGlCQWRaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBaUJJLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7O0FBbkJMO0FBQUE7QUFBQSw2QkFvQlk7QUFDSixhQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscUdBQUQseUZBQWdCLEtBQUtBLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDUSxNQUFDLHNGQUFELHlGQUFhLEtBQUtBLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEUixDQURKLENBREo7QUFPSDtBQTVCTDs7QUFBQTtBQUFBLEVBQThCQywrQ0FBOUI7QUErQmVDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YWZmcy9hZGRzdGFmZi4zZjIyZDI2MDA2YmQ1NjY4ZTI3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCB7U2VuZF9HZXRfUmVzdEFQSX0gZnJvbSAnLi4vLi4vUmVxdWVzdC9pbXdfcmVxdWVzdCdcclxuaW1wb3J0IExheW91dFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL0xheW91dENvbnRlbnRQYWdlL0xheW91dFBhZ2UnXHJcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9BZGRGb3JtJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFNjb3JlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICAgICAgIGxldCByZXNfZGVwYXJ0bWVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2RlcGFydG1lbnRzXCIpO1xyXG4gICAgICAgICBsZXQgcmVzdWx0c19kZXBhcnRtZW50cyA9IGF3YWl0IHJlc19kZXBhcnRtZW50cy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfYnJlbmNoZXMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2JyZW5jaGVzXCIpO1xyXG4gICAgICAgICBsZXQgcmVzdWx0c19icmVuY2hlcyA9IGF3YWl0IHJlc19icmVuY2hlcy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfY2xhc3NlcyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvY2xhc3Nlc1wiKTtcclxuICAgICAgICAgbGV0IHJlc3VsdHNfY2xhc3NlcyA9IGF3YWl0IHJlc19jbGFzc2VzLmpzb24oKTtcclxuICAgICAgICAgbGV0IHJlc19zdWJqZWN0cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvc3ViamVjdHNcIik7XHJcbiAgICAgICAgIGxldCByZXN1bHRzX3N1YmplY3RzID0gYXdhaXQgcmVzX3N1YmplY3RzLmpzb24oKTtcclxuICAgICAgICAgbGV0IHJlc19zdHVkZW50cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvc3R1ZGVudHNcIik7XHJcbiAgICAgICAgIGxldCByZXN1bHRzX3N0dWRlbnRzID0gYXdhaXQgcmVzX3N0dWRlbnRzLmpzb24oKTtcclxuICAgICAgICAgbGV0IHJlc190eXBlc2NvcmVzID0gIGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvdHlwZXNjb3Jlc1wiKTtcclxuICAgICAgICAgbGV0IHJlc3VsdHNfdHlwZXNjb3JlcyA9IGF3YWl0IHJlc190eXBlc2NvcmVzLmpzb24oKTtcclxuICAgICByZXR1cm4ge3Jlc3VsdHNfZGVwYXJ0bWVudHMgOiByZXN1bHRzX2RlcGFydG1lbnRzLHJlc3VsdHNfYnJlbmNoZXM6IHJlc3VsdHNfYnJlbmNoZXMgLHJlc3VsdHNfY2xhc3NlczogcmVzdWx0c19jbGFzc2VzLFxyXG4gICAgICAgcmVzdWx0c19zdWJqZWN0cyA6cmVzdWx0c19zdWJqZWN0cyxyZXN1bHRzX3N0dWRlbnRzIDpyZXN1bHRzX3N0dWRlbnRzLHJlc3VsdHNfdHlwZXNjb3JlczpyZXN1bHRzX3R5cGVzY29yZXMsIGhlYWRlcjogJ0xpc3QgU3RhZmYnLG5hbWU6XCJ0aGFuaFwifTtcclxuICAgICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbmRleD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXRQYWdlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEZvcm0gey4uLnRoaXMucHJvcHN9Lz5cclxuICAgICAgICAgICAgICAgICA8L0xheW91dFBhZ2U+XHJcbiAgICAgICAgICAgIDwvSW5kZXg+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRTdGFmZlxyXG4iXSwic291cmNlUm9vdCI6IiJ9