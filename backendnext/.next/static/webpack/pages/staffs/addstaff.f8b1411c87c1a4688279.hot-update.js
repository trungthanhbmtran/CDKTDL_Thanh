webpackHotUpdate_N_E("pages/staffs/addstaff",{

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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AddForm */ "./components/ContainerComponents/staff/AddForm.js");
/* harmony import */ var _pages_scores_addscores__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../pages/scores/addscores */ "./pages/scores/addscores.js");






var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Modal = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Modal);

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

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Promise.all([Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_7__["fetchPromised"])("http://backend/foo.txt", 500), Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_7__["fetchPromised"])("http://backend/baz.txt", 500)]).then(function (data) {
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
          lineNumber: 36,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, __jsx(_pages_scores_addscores__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 10
        }
      })))));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL01vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwicHJvcHMiLCJzdGF0ZSIsIlByb21pc2UiLCJhbGwiLCJmZXRjaFByb21pc2VkIiwidGhlbiIsImRhdGEiLCJmb28iLCJiYXIiLCJiYXoiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBQ0ksaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVc7QUFDVCxrQkFBYSxFQURKO0FBRVQscUJBQWUsRUFGTjtBQUdULGdCQUFXLEVBSEY7QUFJVCxnQkFBVyxFQUpGO0FBS1Qsa0JBQVcsRUFMRjtBQU1ULG1CQUFjLEVBTkw7QUFPVCxpQkFBWSxFQVBIO0FBUVQsa0JBQWEsRUFSSjtBQVNULG1CQUFZO0FBVEgsS0FBWDtBQUZpQjtBQWFsQjs7QUFkTDtBQUFBO0FBQUEsd0NBZXdCO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNWQywwRUFBYSxDQUFDLHdCQUFELEVBQTJCLEdBQTNCLENBREgsRUFFVkEsMEVBQWEsQ0FBQyx3QkFBRCxFQUEyQixHQUEzQixDQUZILENBQVosRUFHQ0MsSUFIRCxDQUdNLFVBQUNDLElBQUQsRUFBVTtBQUFBLDZHQUNVQSxJQURWO0FBQUEsWUFDUkMsR0FEUTtBQUFBLFlBQ0hDLEdBREc7QUFBQSxZQUNFQyxHQURGOztBQUVkQyxlQUFPLENBQUNDLEdBQVIsd0JBQTRCSixHQUE1QixrQkFBdUNDLEdBQXZDLGtCQUFrREMsR0FBbEQ7QUFDSCxPQU5DLEVBTUMsVUFBQ0csR0FBRCxFQUFTO0FBQ1JGLGVBQU8sQ0FBQ0MsR0FBUixrQkFBc0JDLEdBQXRCO0FBQ0gsT0FSQztBQVNEO0FBekJMO0FBQUE7QUFBQSw2QkE0Qkk7QUFDSSxhQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFVjtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixVQUFFLEVBQUMsU0FBL0I7QUFBeUMsWUFBSSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVHLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZILENBRkYsQ0FERixDQUZVLENBREo7QUFjSDtBQTNDTDs7QUFBQTtBQUFBLEVBQTJCQywrQ0FBM0I7QUE4Q2VkLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YWZmcy9hZGRzdGFmZi5mOGIxNDExYzg3YzFhNDY4ODI3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2ZldGNoUHJvbWlzZWR9IGZyb20gJy4uLy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4vQWRkRm9ybSdcclxuaW1wb3J0IEFkZFN0YWZmIGZyb20gJy4uLy4uLy4uL3BhZ2VzL3Njb3Jlcy9hZGRzY29yZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICBcIklEX1NWX01IXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiSURfTG9haWRpZW1cIjogXCJcIixcclxuICAgICAgICBcIlNvZGllbVwiIDogXCJcIixcclxuICAgICAgICBcIkdoaWNodVwiIDogXCJcIixcclxuICAgICAgICBcIk5nYXluaGFwXCI6XCJcIixcclxuICAgICAgICBcIk5ndW9pbmhhcFwiIDogXCJcIixcclxuICAgICAgICBcIk5nYXlzdWFcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJOZ3VvaXN1YVwiIDogXCJcIixcclxuICAgICAgICBcIlRyYW5ndGhhaVwiOlwiXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaFByb21pc2VkKFwiaHR0cDovL2JhY2tlbmQvZm9vLnR4dFwiLCA1MDApLFxyXG4gICAgICAgIGZldGNoUHJvbWlzZWQoXCJodHRwOi8vYmFja2VuZC9iYXoudHh0XCIsIDUwMClcclxuICAgIF0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgWyBmb28sIGJhciwgYmF6IF0gPSBkYXRhXHJcbiAgICAgICAgY29uc29sZS5sb2coYHN1Y2Nlc3M6IGZvbz0ke2Zvb30gYmFyPSR7YmFyfSBiYXo9JHtiYXp9YClcclxuICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3I6ICR7ZXJyfWApXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gIHsvKiBNb2RhbCAqL31cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm15TW9kYWxcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICB7LyogTW9kYWwgY29udGVudCovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICB7Lyp0aGVtIGluIGhlcmUgKi99XHJcbiAgICAgICAgIDxBZGRTdGFmZi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxyXG4iXSwic291cmNlUm9vdCI6IiJ9