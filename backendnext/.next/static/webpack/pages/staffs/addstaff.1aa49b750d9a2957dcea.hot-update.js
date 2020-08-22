webpackHotUpdate_N_E("pages/staffs/addstaff",{

/***/ "./pages/staffs/addstaff.js":
/*!**********************************!*\
  !*** ./pages/staffs/addstaff.js ***!
  \**********************************/
/*! exports provided: AddStaff, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaff", function() { return AddStaff; });
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








var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\staffs\\addstaff.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var AddStaff = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddStaff, _Component);

  var _super = _createSuper(AddStaff);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddStaff, null, [{
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

  function AddStaff(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AddStaff);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddStaff, [{
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

  return AddStaff;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RhZmZzL2FkZHN0YWZmLmpzIl0sIm5hbWVzIjpbIkFkZFN0YWZmIiwiY3R4IiwiU2VuZF9HZXRfUmVzdEFQSSIsInJlc19kZXBhcnRtZW50cyIsImpzb24iLCJyZXN1bHRzX2RlcGFydG1lbnRzIiwicmVzX2JyZW5jaGVzIiwicmVzdWx0c19icmVuY2hlcyIsInJlc19jbGFzc2VzIiwicmVzdWx0c19jbGFzc2VzIiwicmVzX3N1YmplY3RzIiwicmVzdWx0c19zdWJqZWN0cyIsInJlc19zdHVkZW50cyIsInJlc3VsdHNfc3R1ZGVudHMiLCJyZXNfdHlwZXNjb3JlcyIsInJlc3VsdHNfdHlwZXNjb3JlcyIsImhlYWRlciIsIm5hbWUiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxRQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK05BQ2lDQyxHQURqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVxQ0MsOEVBQWdCLENBQUMseUNBQUQsQ0FGckQ7O0FBQUE7QUFFYUMsK0JBRmI7QUFBQTtBQUFBLHVCQUd5Q0EsZUFBZSxDQUFDQyxJQUFoQixFQUh6Qzs7QUFBQTtBQUdhQyxtQ0FIYjtBQUFBO0FBQUEsdUJBSWtDSCw4RUFBZ0IsQ0FBQyxzQ0FBRCxDQUpsRDs7QUFBQTtBQUlhSSw0QkFKYjtBQUFBO0FBQUEsdUJBS3NDQSxZQUFZLENBQUNGLElBQWIsRUFMdEM7O0FBQUE7QUFLYUcsZ0NBTGI7QUFBQTtBQUFBLHVCQU1pQ0wsOEVBQWdCLENBQUMscUNBQUQsQ0FOakQ7O0FBQUE7QUFNYU0sMkJBTmI7QUFBQTtBQUFBLHVCQU9xQ0EsV0FBVyxDQUFDSixJQUFaLEVBUHJDOztBQUFBO0FBT2FLLCtCQVBiO0FBQUE7QUFBQSx1QkFRa0NQLDhFQUFnQixDQUFDLHNDQUFELENBUmxEOztBQUFBO0FBUWFRLDRCQVJiO0FBQUE7QUFBQSx1QkFTc0NBLFlBQVksQ0FBQ04sSUFBYixFQVR0Qzs7QUFBQTtBQVNhTyxnQ0FUYjtBQUFBO0FBQUEsdUJBVWtDVCw4RUFBZ0IsQ0FBQyxzQ0FBRCxDQVZsRDs7QUFBQTtBQVVhVSw0QkFWYjtBQUFBO0FBQUEsdUJBV3NDQSxZQUFZLENBQUNSLElBQWIsRUFYdEM7O0FBQUE7QUFXYVMsZ0NBWGI7QUFBQTtBQUFBLHVCQVlxQ1gsOEVBQWdCLENBQUMsd0NBQUQsQ0FackQ7O0FBQUE7QUFZYVksOEJBWmI7QUFBQTtBQUFBLHVCQWF3Q0EsY0FBYyxDQUFDVixJQUFmLEVBYnhDOztBQUFBO0FBYWFXLGtDQWJiO0FBQUEsaURBY1k7QUFBQ1YscUNBQW1CLEVBQUdBLG1CQUF2QjtBQUEyQ0Usa0NBQWdCLEVBQUVBLGdCQUE3RDtBQUErRUUsaUNBQWUsRUFBRUEsZUFBaEc7QUFDTEUsa0NBQWdCLEVBQUVBLGdCQURiO0FBQzhCRSxrQ0FBZ0IsRUFBRUEsZ0JBRGhEO0FBQ2lFRSxvQ0FBa0IsRUFBQ0Esa0JBRHBGO0FBQ3dHQyx3QkFBTSxFQUFFLFlBRGhIO0FBQzZIQyxzQkFBSSxFQUFDO0FBRGxJLGlCQWRaOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBaUJJLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNkJBQ1RBLEtBRFM7QUFFbEI7O0FBbkJMO0FBQUE7QUFBQSw2QkFvQlk7QUFDSixhQUNJLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMscUdBQUQseUZBQWdCLEtBQUtBLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFDUSxNQUFDLHNGQUFELHlGQUFhLEtBQUtBLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEUixDQURKLENBREo7QUFPSDtBQTVCTDs7QUFBQTtBQUFBLEVBQThCQywrQ0FBOUI7QUErQmVuQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGFmZnMvYWRkc3RhZmYuMWFhNDliNzUwZDlhMjk1N2RjZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluZGV4IGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQge1NlbmRfR2V0X1Jlc3RBUEl9IGZyb20gJy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBMYXlvdXRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9MYXlvdXRDb250ZW50UGFnZS9MYXlvdXRQYWdlJ1xyXG5pbXBvcnQgQWRkRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lckNvbXBvbmVudHMvc3RhZmYvQWRkRm9ybSdcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRTdGFmZiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgICAgICBsZXQgcmVzX2RlcGFydG1lbnRzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9kZXBhcnRtZW50c1wiKTtcclxuICAgICAgICAgbGV0IHJlc3VsdHNfZGVwYXJ0bWVudHMgPSBhd2FpdCByZXNfZGVwYXJ0bWVudHMuanNvbigpO1xyXG4gICAgICAgICBsZXQgcmVzX2JyZW5jaGVzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9icmVuY2hlc1wiKTtcclxuICAgICAgICAgbGV0IHJlc3VsdHNfYnJlbmNoZXMgPSBhd2FpdCByZXNfYnJlbmNoZXMuanNvbigpO1xyXG4gICAgICAgICBsZXQgcmVzX2NsYXNzZXMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2NsYXNzZXNcIik7XHJcbiAgICAgICAgIGxldCByZXN1bHRzX2NsYXNzZXMgPSBhd2FpdCByZXNfY2xhc3Nlcy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfc3ViamVjdHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL3N1YmplY3RzXCIpO1xyXG4gICAgICAgICBsZXQgcmVzdWx0c19zdWJqZWN0cyA9IGF3YWl0IHJlc19zdWJqZWN0cy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfc3R1ZGVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL3N0dWRlbnRzXCIpO1xyXG4gICAgICAgICBsZXQgcmVzdWx0c19zdHVkZW50cyA9IGF3YWl0IHJlc19zdHVkZW50cy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfdHlwZXNjb3JlcyA9ICBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL3R5cGVzY29yZXNcIik7XHJcbiAgICAgICAgIGxldCByZXN1bHRzX3R5cGVzY29yZXMgPSBhd2FpdCByZXNfdHlwZXNjb3Jlcy5qc29uKCk7XHJcbiAgICAgcmV0dXJuIHtyZXN1bHRzX2RlcGFydG1lbnRzIDogcmVzdWx0c19kZXBhcnRtZW50cyxyZXN1bHRzX2JyZW5jaGVzOiByZXN1bHRzX2JyZW5jaGVzICxyZXN1bHRzX2NsYXNzZXM6IHJlc3VsdHNfY2xhc3NlcyxcclxuICAgICAgIHJlc3VsdHNfc3ViamVjdHMgOnJlc3VsdHNfc3ViamVjdHMscmVzdWx0c19zdHVkZW50cyA6cmVzdWx0c19zdHVkZW50cyxyZXN1bHRzX3R5cGVzY29yZXM6cmVzdWx0c190eXBlc2NvcmVzLCBoZWFkZXI6ICdMaXN0IFN0YWZmJyxuYW1lOlwidGhhbmhcIn07XHJcbiAgICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5kZXg+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0UGFnZSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRGb3JtIHsuLi50aGlzLnByb3BzfS8+XHJcbiAgICAgICAgICAgICAgICAgPC9MYXlvdXRQYWdlPlxyXG4gICAgICAgICAgICA8L0luZGV4PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkU3RhZmZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==