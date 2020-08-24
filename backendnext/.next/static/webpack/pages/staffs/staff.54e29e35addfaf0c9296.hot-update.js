webpackHotUpdate_N_E("pages/staffs/staff",{

/***/ "./components/ContainerComponents/staff/Modal.js":
/*!*******************************************************!*\
  !*** ./components/ContainerComponents/staff/Modal.js ***!
  \*******************************************************/
/*! exports provided: Modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AddForm */ "./components/ContainerComponents/staff/AddForm.js");
/* harmony import */ var _pages_scores_addscores__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../pages/scores/addscores */ "./pages/scores/addscores.js");








var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Modal = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Modal, _Component);

  var _super = _createSuper(Modal);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(ctx) {
        var res_departments, results_departments, res_typescores, results_typescores;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
                return Send_Get_RestAPI("http://localhost:3001/score/typescores");

              case 8:
                res_typescores = _context.sent;
                _context.next = 11;
                return res_typescores.json();

              case 11:
                results_typescores = _context.sent;
                return _context.abrupt("return", {
                  results_departments: results_departments,
                  results_typescores: results_typescores,
                  header: 'List Staff'
                });

              case 13:
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

  function Modal(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Modal);

    _this = _super.call(this, props);
    _this.state = {
      "ID_SV_MH": "",
      "ID_Loaidiem": "",
      "Sodiem": "",
      "Ghichu": "",
      "Ngaynhap": "",
      "Nguoinhap": "",
      "Ngaysua": "",
      "Nguoisua": "",
      "Trangthai": ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Promise.all([Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_9__["fetchPromised"])("http://backend/foo.txt", 500), Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_9__["fetchPromised"])("http://backend/baz.txt", 500)]).then(function (data) {
        var _data = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 3),
            foo = _data[0],
            bar = _data[1],
            baz = _data[2];

        console.log("success: foo=".concat(foo, " bar=").concat(bar, " baz=").concat(baz));
      }, function (err) {
        console.log("error: ".concat(err));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx(_pages_scores_addscores__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 10
        }
      })))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Modal);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/scores/addscores.js":
/*!***********************************!*\
  !*** ./pages/scores/addscores.js ***!
  \***********************************/
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








var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\scores\\addscores.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL01vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zY29yZXMvYWRkc2NvcmVzLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwiY3R4IiwiU2VuZF9HZXRfUmVzdEFQSSIsInJlc19kZXBhcnRtZW50cyIsImpzb24iLCJyZXN1bHRzX2RlcGFydG1lbnRzIiwicmVzX3R5cGVzY29yZXMiLCJyZXN1bHRzX3R5cGVzY29yZXMiLCJoZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwiUHJvbWlzZSIsImFsbCIsImZldGNoUHJvbWlzZWQiLCJ0aGVuIiwiZGF0YSIsImZvbyIsImJhciIsImJheiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJDb21wb25lbnQiLCJBZGRTdGFmZiIsInJlc19icmVuY2hlcyIsInJlc3VsdHNfYnJlbmNoZXMiLCJyZXNfY2xhc3NlcyIsInJlc3VsdHNfY2xhc3NlcyIsInJlc19zdWJqZWN0cyIsInJlc3VsdHNfc3ViamVjdHMiLCJyZXNfc3R1ZGVudHMiLCJyZXN1bHRzX3N0dWRlbnRzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK05BQytCQyxHQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUVnQ0MsZ0JBQWdCLENBQUMseUNBQUQsQ0FGaEQ7O0FBQUE7QUFFUUMsK0JBRlI7QUFBQTtBQUFBLHVCQUdvQ0EsZUFBZSxDQUFDQyxJQUFoQixFQUhwQzs7QUFBQTtBQUdRQyxtQ0FIUjtBQUFBO0FBQUEsdUJBSWdDSCxnQkFBZ0IsQ0FBQyx3Q0FBRCxDQUpoRDs7QUFBQTtBQUlRSSw4QkFKUjtBQUFBO0FBQUEsdUJBS21DQSxjQUFj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USxNQUFDLHNGQUFELHlGQUFhLEtBQUtBLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FEUixDQURKLENBREo7QUFPSDtBQTVCTDs7QUFBQTtBQUFBLEVBQThCYSwrQ0FBOUI7QUErQmVDLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YWZmcy9zdGFmZi41NGUyOWUzNWFkZGZhZjBjOTI5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2ZldGNoUHJvbWlzZWR9IGZyb20gJy4uLy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4vQWRkRm9ybSdcclxuaW1wb3J0IEFkZFN0YWZmIGZyb20gJy4uLy4uLy4uL3BhZ2VzL3Njb3Jlcy9hZGRzY29yZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgbGV0IHJlc19kZXBhcnRtZW50cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvZGVwYXJ0bWVudHNcIik7XHJcbiAgICBsZXQgcmVzdWx0c19kZXBhcnRtZW50cyA9IGF3YWl0IHJlc19kZXBhcnRtZW50cy5qc29uKCk7XHJcbiAgICBsZXQgcmVzX3R5cGVzY29yZXMgPSAgYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS90eXBlc2NvcmVzXCIpO1xyXG4gICAgbGV0IHJlc3VsdHNfdHlwZXNjb3JlcyA9IGF3YWl0IHJlc190eXBlc2NvcmVzLmpzb24oKTtcclxuIHJldHVybiB7cmVzdWx0c19kZXBhcnRtZW50cyA6IHJlc3VsdHNfZGVwYXJ0bWVudHMgLCByZXN1bHRzX3R5cGVzY29yZXMgOiByZXN1bHRzX3R5cGVzY29yZXMgICwgaGVhZGVyOiAnTGlzdCBTdGFmZicgfTtcclxuICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgXCJJRF9TVl9NSFwiIDogXCJcIixcclxuICAgICAgICBcIklEX0xvYWlkaWVtXCI6IFwiXCIsXHJcbiAgICAgICAgXCJTb2RpZW1cIiA6IFwiXCIsXHJcbiAgICAgICAgXCJHaGljaHVcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJOZ2F5bmhhcFwiOlwiXCIsXHJcbiAgICAgICAgXCJOZ3VvaW5oYXBcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJOZ2F5c3VhXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiTmd1b2lzdWFcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJUcmFuZ3RoYWlcIjpcIlwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2hQcm9taXNlZChcImh0dHA6Ly9iYWNrZW5kL2Zvby50eHRcIiwgNTAwKSxcclxuICAgICAgICBmZXRjaFByb21pc2VkKFwiaHR0cDovL2JhY2tlbmQvYmF6LnR4dFwiLCA1MDApXHJcbiAgICBdKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IFsgZm9vLCBiYXIsIGJheiBdID0gZGF0YVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdWNjZXNzOiBmb289JHtmb299IGJhcj0ke2Jhcn0gYmF6PSR7YmF6fWApXHJcbiAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yOiAke2Vycn1gKVxyXG4gICAgfSlcclxuICAgIH1cclxuICAgICBcclxuICAgIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICB7LyogTW9kYWwgKi99XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJteU1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgey8qIE1vZGFsIGNvbnRlbnQqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgey8qdGhlbSBpbiBoZXJlICovfVxyXG4gICAgICAgICA8QWRkU3RhZmYvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi4vaW5kZXgnXHJcbmltcG9ydCB7U2VuZF9HZXRfUmVzdEFQSX0gZnJvbSAnLi4vLi4vUmVxdWVzdC9pbXdfcmVxdWVzdCdcclxuaW1wb3J0IExheW91dFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL0xheW91dENvbnRlbnRQYWdlL0xheW91dFBhZ2UnXHJcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9BZGRGb3JtJ1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkZFN0YWZmIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICAgICAgIGxldCByZXNfZGVwYXJ0bWVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2RlcGFydG1lbnRzXCIpO1xyXG4gICAgICAgICBsZXQgcmVzdWx0c19kZXBhcnRtZW50cyA9IGF3YWl0IHJlc19kZXBhcnRtZW50cy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfYnJlbmNoZXMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2JyZW5jaGVzXCIpO1xyXG4gICAgICAgICBsZXQgcmVzdWx0c19icmVuY2hlcyA9IGF3YWl0IHJlc19icmVuY2hlcy5qc29uKCk7XHJcbiAgICAgICAgIGxldCByZXNfY2xhc3NlcyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvY2xhc3Nlc1wiKTtcclxuICAgICAgICAgbGV0IHJlc3VsdHNfY2xhc3NlcyA9IGF3YWl0IHJlc19jbGFzc2VzLmpzb24oKTtcclxuICAgICAgICAgbGV0IHJlc19zdWJqZWN0cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvc3ViamVjdHNcIik7XHJcbiAgICAgICAgIGxldCByZXN1bHRzX3N1YmplY3RzID0gYXdhaXQgcmVzX3N1YmplY3RzLmpzb24oKTtcclxuICAgICAgICAgbGV0IHJlc19zdHVkZW50cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvc3R1ZGVudHNcIik7XHJcbiAgICAgICAgIGxldCByZXN1bHRzX3N0dWRlbnRzID0gYXdhaXQgcmVzX3N0dWRlbnRzLmpzb24oKTtcclxuICAgICAgICAgbGV0IHJlc190eXBlc2NvcmVzID0gIGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvdHlwZXNjb3Jlc1wiKTtcclxuICAgICAgICAgbGV0IHJlc3VsdHNfdHlwZXNjb3JlcyA9IGF3YWl0IHJlc190eXBlc2NvcmVzLmpzb24oKTtcclxuICAgICByZXR1cm4ge3Jlc3VsdHNfZGVwYXJ0bWVudHMgOiByZXN1bHRzX2RlcGFydG1lbnRzLHJlc3VsdHNfYnJlbmNoZXM6IHJlc3VsdHNfYnJlbmNoZXMgLHJlc3VsdHNfY2xhc3NlczogcmVzdWx0c19jbGFzc2VzLFxyXG4gICAgICAgcmVzdWx0c19zdWJqZWN0cyA6cmVzdWx0c19zdWJqZWN0cyxyZXN1bHRzX3N0dWRlbnRzIDpyZXN1bHRzX3N0dWRlbnRzLHJlc3VsdHNfdHlwZXNjb3JlczpyZXN1bHRzX3R5cGVzY29yZXMsIGhlYWRlcjogJ0xpc3QgU3RhZmYnLG5hbWU6XCJ0aGFuaFwifTtcclxuICAgICAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJbmRleD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXRQYWdlIHsuLi50aGlzLnByb3BzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFkZEZvcm0gey4uLnRoaXMucHJvcHN9Lz5cclxuICAgICAgICAgICAgICAgICA8L0xheW91dFBhZ2U+XHJcbiAgICAgICAgICAgIDwvSW5kZXg+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRTdGFmZlxyXG4iXSwic291cmNlUm9vdCI6IiJ9