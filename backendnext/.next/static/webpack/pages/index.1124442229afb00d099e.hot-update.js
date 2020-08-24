webpackHotUpdate_N_E("pages/index",{

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
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  results_departments: results_departments,
                  results_typescores: results_typescores,
                  header: 'List Staff'
                });

              case 1:
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
          lineNumber: 38,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx(_AddForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL01vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwiY3R4IiwicmVzdWx0c19kZXBhcnRtZW50cyIsInJlc3VsdHNfdHlwZXNjb3JlcyIsImhlYWRlciIsInByb3BzIiwic3RhdGUiLCJQcm9taXNlIiwiYWxsIiwiZmV0Y2hQcm9taXNlZCIsInRoZW4iLCJkYXRhIiwiZm9vIiwiYmFyIiwiYmF6IiwiY29uc29sZSIsImxvZyIsImVyciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUEsK05BQytCQyxHQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBRVE7QUFBQ0MscUNBQW1CLEVBQUdBLG1CQUF2QjtBQUE2Q0Msb0NBQWtCLEVBQUdBLGtCQUFsRTtBQUF3RkMsd0JBQU0sRUFBRTtBQUFoRyxpQkFGUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUlJLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1Qsa0JBQWEsRUFESjtBQUVULHFCQUFlLEVBRk47QUFHVCxnQkFBVyxFQUhGO0FBSVQsZ0JBQVcsRUFKRjtBQUtULGtCQUFXLEVBTEY7QUFNVCxtQkFBYyxFQU5MO0FBT1QsaUJBQVksRUFQSDtBQVFULGtCQUFhLEVBUko7QUFTVCxtQkFBWTtBQVRILEtBQVg7QUFGaUI7QUFhbEI7O0FBakJMO0FBQUE7QUFBQSx3Q0FrQndCO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNWQywwRUFBYSxDQUFDLHdCQUFELEVBQTJCLEdBQTNCLENBREgsRUFFVkEsMEVBQWEsQ0FBQyx3QkFBRCxFQUEyQixHQUEzQixDQUZILENBQVosRUFHQ0MsSUFIRCxDQUdNLFVBQUNDLElBQUQsRUFBVTtBQUFBLDZHQUNVQSxJQURWO0FBQUEsWUFDUkMsR0FEUTtBQUFBLFlBQ0hDLEdBREc7QUFBQSxZQUNFQyxHQURGOztBQUVkQyxlQUFPLENBQUNDLEdBQVIsd0JBQTRCSixHQUE1QixrQkFBdUNDLEdBQXZDLGtCQUFrREMsR0FBbEQ7QUFDSCxPQU5DLEVBTUMsVUFBQ0csR0FBRCxFQUFTO0FBQ1JGLGVBQU8sQ0FBQ0MsR0FBUixrQkFBc0JDLEdBQXRCO0FBQ0gsT0FSQztBQVNEO0FBNUJMO0FBQUE7QUFBQSw2QkErQkk7QUFDSSxhQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFVjtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixVQUFFLEVBQUMsU0FBL0I7QUFBeUMsWUFBSSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBRkYsQ0FERixDQUZVLENBREo7QUFjSDtBQTlDTDs7QUFBQTtBQUFBLEVBQTJCQywrQ0FBM0I7QUFpRGVsQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMTI0NDQyMjI5YWZiMDBkMDk5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2ZldGNoUHJvbWlzZWR9IGZyb20gJy4uLy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4vQWRkRm9ybSdcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuIHJldHVybiB7cmVzdWx0c19kZXBhcnRtZW50cyA6IHJlc3VsdHNfZGVwYXJ0bWVudHMgLCByZXN1bHRzX3R5cGVzY29yZXMgOiByZXN1bHRzX3R5cGVzY29yZXMgICwgaGVhZGVyOiAnTGlzdCBTdGFmZicgfTtcclxuICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcylcclxuICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgXCJJRF9TVl9NSFwiIDogXCJcIixcclxuICAgICAgICBcIklEX0xvYWlkaWVtXCI6IFwiXCIsXHJcbiAgICAgICAgXCJTb2RpZW1cIiA6IFwiXCIsXHJcbiAgICAgICAgXCJHaGljaHVcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJOZ2F5bmhhcFwiOlwiXCIsXHJcbiAgICAgICAgXCJOZ3VvaW5oYXBcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJOZ2F5c3VhXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiTmd1b2lzdWFcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJUcmFuZ3RoYWlcIjpcIlwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZmV0Y2hQcm9taXNlZChcImh0dHA6Ly9iYWNrZW5kL2Zvby50eHRcIiwgNTAwKSxcclxuICAgICAgICBmZXRjaFByb21pc2VkKFwiaHR0cDovL2JhY2tlbmQvYmF6LnR4dFwiLCA1MDApXHJcbiAgICBdKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IFsgZm9vLCBiYXIsIGJheiBdID0gZGF0YVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdWNjZXNzOiBmb289JHtmb299IGJhcj0ke2Jhcn0gYmF6PSR7YmF6fWApXHJcbiAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGVycm9yOiAke2Vycn1gKVxyXG4gICAgfSlcclxuICAgIH1cclxuICAgICBcclxuICAgIHJlbmRlcigpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICB7LyogTW9kYWwgKi99XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJteU1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgey8qIE1vZGFsIGNvbnRlbnQqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgey8qdGhlbSBpbiBoZXJlICovfVxyXG4gICAgICAgICAgPEFkZEZvcm0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==