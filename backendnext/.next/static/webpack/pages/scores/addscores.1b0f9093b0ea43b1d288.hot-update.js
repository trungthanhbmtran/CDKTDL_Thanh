webpackHotUpdate_N_E("pages/scores/addscores",{

/***/ "./pages/scores/addscores.js":
/*!***********************************!*\
  !*** ./pages/scores/addscores.js ***!
  \***********************************/
/*! exports provided: addscores, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addscores", function() { return addscores; });
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
/* harmony import */ var _components_ContainerComponents_score_addscore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ContainerComponents/score/addscore */ "./components/ContainerComponents/score/addscore.js");








var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\scores\\addscores.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var addscores = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(addscores, _Component);

  var _super = _createSuper(addscores);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(addscores, null, [{
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

  function addscores(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, addscores);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(addscores, [{
    key: "render",
    value: function render() {
      return __jsx(_index__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, __jsx(_components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }), __jsx(_components_ContainerComponents_score_addscore__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }
      }))));
    }
  }]);

  return addscores;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (addscores);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NvcmVzL2FkZHNjb3Jlcy5qcyJdLCJuYW1lcyI6WyJhZGRzY29yZXMiLCJjdHgiLCJTZW5kX0dldF9SZXN0QVBJIiwicmVzX2RlcGFydG1lbnRzIiwianNvbiIsInJlc3VsdHNfZGVwYXJ0bWVudHMiLCJyZXNfYnJlbmNoZXMiLCJyZXN1bHRzX2JyZW5jaGVzIiwicmVzX2NsYXNzZXMiLCJyZXN1bHRzX2NsYXNzZXMiLCJyZXNfc3ViamVjdHMiLCJyZXN1bHRzX3N1YmplY3RzIiwicmVzX3N0dWRlbnRzIiwicmVzdWx0c19zdHVkZW50cyIsInJlc190eXBlc2NvcmVzIiwicmVzdWx0c190eXBlc2NvcmVzIiwiaGVhZGVyIiwibmFtZSIsInByb3BzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQWI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQSwrTkFDaUNDLEdBRGpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRXVDQyw4RUFBZ0IsQ0FBQyx5Q0FBRCxDQUZ2RDs7QUFBQTtBQUVlQywrQkFGZjtBQUFBO0FBQUEsdUJBRzJDQSxlQUFlLENBQUNDLElBQWhCLEVBSDNDOztBQUFBO0FBR2VDLG1DQUhmO0FBQUE7QUFBQSx1QkFJb0NILDhFQUFnQixDQUFDLHNDQUFELENBSnBEOztBQUFBO0FBSWVJLDRCQUpmO0FBQUE7QUFBQSx1QkFLd0NBLFlBQVksQ0FBQ0YsSUFBYixFQUx4Qzs7QUFBQTtBQUtlRyxnQ0FMZjtBQUFBO0FBQUEsdUJBTW1DTCw4RUFBZ0IsQ0FBQyxxQ0FBRCxDQU5uRDs7QUFBQTtBQU1lTSwyQkFOZjtBQUFBO0FBQUEsdUJBT3VDQSxXQUFXLENBQUNKLElBQVosRUFQdkM7O0FBQUE7QUFPZUssK0JBUGY7QUFBQTtBQUFBLHVCQVFvQ1AsOEVBQWdCLENBQUMsc0NBQUQsQ0FScEQ7O0FBQUE7QUFRZVEsNEJBUmY7QUFBQTtBQUFBLHVCQVN3Q0EsWUFBWSxDQUFDTixJQUFiLEVBVHhDOztBQUFBO0FBU2VPLGdDQVRmO0FBQUE7QUFBQSx1QkFVb0NULDhFQUFnQixDQUFDLHNDQUFELENBVnBEOztBQUFBO0FBVWVVLDRCQVZmO0FBQUE7QUFBQSx1QkFXd0NBLFlBQVksQ0FBQ1IsSUFBYixFQVh4Qzs7QUFBQTtBQVdlUyxnQ0FYZjtBQUFBO0FBQUEsdUJBWXVDWCw4RUFBZ0IsQ0FBQyx3Q0FBRCxDQVp2RDs7QUFBQTtBQVllWSw4QkFaZjtBQUFBO0FBQUEsdUJBYTBDQSxjQUFjLENBQUNWLElBQWYsRUFiMUM7O0FBQUE7QUFhZVcsa0NBYmY7QUFBQSxpREFlWTtBQUFDVixxQ0FBbUIsRUFBR0EsbUJBQXZCO0FBQTJDRSxrQ0FBZ0IsRUFBRUEsZ0JBQTdEO0FBQStFRSxpQ0FBZSxFQUFFQSxlQUFoRztBQUNMRSxrQ0FBZ0IsRUFBRUEsZ0JBRGI7QUFDOEJFLGtDQUFnQixFQUFFQSxnQkFEaEQ7QUFDaUVFLG9DQUFrQixFQUFDQSxrQkFEcEY7QUFDd0dDLHdCQUFNLEVBQUUsWUFEaEg7QUFDNkhDLHNCQUFJLEVBQUM7QUFEbEksaUJBZlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFrQkkscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDVEEsS0FEUztBQUVsQjs7QUFwQkw7QUFBQTtBQUFBLDZCQXFCWTtBQUNKLGFBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxxR0FBRCx5RkFBZ0IsS0FBS0EsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUNRLE1BQUMsdUZBQUQseUZBQWMsS0FBS0EsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURSLENBREosQ0FESjtBQU9IO0FBN0JMOztBQUFBO0FBQUEsRUFBK0JDLCtDQUEvQjtBQWdDZW5CLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Njb3Jlcy9hZGRzY29yZXMuMWIwZjkwOTNiMGVhNDNiMWQyODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluZGV4IGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQge1NlbmRfR2V0X1Jlc3RBUEl9IGZyb20gJy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBMYXlvdXRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9MYXlvdXRDb250ZW50UGFnZS9MYXlvdXRQYWdlJ1xyXG5pbXBvcnQgQWRkU2NvcmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3Njb3JlL2FkZHNjb3JlJ1xyXG5cclxuZXhwb3J0IGNsYXNzIGFkZHNjb3JlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgICAgICBjb25zdCByZXNfZGVwYXJ0bWVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2RlcGFydG1lbnRzXCIpO1xyXG4gICAgICAgICBjb25zdCByZXN1bHRzX2RlcGFydG1lbnRzID0gYXdhaXQgcmVzX2RlcGFydG1lbnRzLmpzb24oKTtcclxuICAgICAgICAgY29uc3QgcmVzX2JyZW5jaGVzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9icmVuY2hlc1wiKTtcclxuICAgICAgICAgY29uc3QgcmVzdWx0c19icmVuY2hlcyA9IGF3YWl0IHJlc19icmVuY2hlcy5qc29uKCk7XHJcbiAgICAgICAgIGNvbnN0IHJlc19jbGFzc2VzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9jbGFzc2VzXCIpO1xyXG4gICAgICAgICBjb25zdCByZXN1bHRzX2NsYXNzZXMgPSBhd2FpdCByZXNfY2xhc3Nlcy5qc29uKCk7XHJcbiAgICAgICAgIGNvbnN0IHJlc19zdWJqZWN0cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvc3ViamVjdHNcIik7XHJcbiAgICAgICAgIGNvbnN0IHJlc3VsdHNfc3ViamVjdHMgPSBhd2FpdCByZXNfc3ViamVjdHMuanNvbigpO1xyXG4gICAgICAgICBjb25zdCByZXNfc3R1ZGVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL3N0dWRlbnRzXCIpO1xyXG4gICAgICAgICBjb25zdCByZXN1bHRzX3N0dWRlbnRzID0gYXdhaXQgcmVzX3N0dWRlbnRzLmpzb24oKTtcclxuICAgICAgICAgY29uc3QgcmVzX3R5cGVzY29yZXMgPSAgYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS90eXBlc2NvcmVzXCIpO1xyXG4gICAgICAgICBjb25zdCByZXN1bHRzX3R5cGVzY29yZXMgPSBhd2FpdCByZXNfdHlwZXNjb3Jlcy5qc29uKCk7XHJcbiAgICAgICAgXHJcbiAgICAgcmV0dXJuIHtyZXN1bHRzX2RlcGFydG1lbnRzIDogcmVzdWx0c19kZXBhcnRtZW50cyxyZXN1bHRzX2JyZW5jaGVzOiByZXN1bHRzX2JyZW5jaGVzICxyZXN1bHRzX2NsYXNzZXM6IHJlc3VsdHNfY2xhc3NlcyxcclxuICAgICAgIHJlc3VsdHNfc3ViamVjdHMgOnJlc3VsdHNfc3ViamVjdHMscmVzdWx0c19zdHVkZW50cyA6cmVzdWx0c19zdHVkZW50cyxyZXN1bHRzX3R5cGVzY29yZXM6cmVzdWx0c190eXBlc2NvcmVzLCBoZWFkZXI6ICdMaXN0IFN0YWZmJyxuYW1lOlwidGhhbmhcIn07XHJcbiAgICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8SW5kZXg+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0UGFnZSB7Li4udGhpcy5wcm9wc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRTY29yZSB7Li4udGhpcy5wcm9wc30vPlxyXG4gICAgICAgICAgICAgICAgIDwvTGF5b3V0UGFnZT5cclxuICAgICAgICAgICAgPC9JbmRleD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZHNjb3Jlc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9