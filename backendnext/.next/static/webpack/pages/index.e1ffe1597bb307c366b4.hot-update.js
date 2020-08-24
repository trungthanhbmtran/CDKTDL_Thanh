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
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 3
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      }, __jsx(_AddForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL01vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwiY3R4IiwiU2VuZF9HZXRfUmVzdEFQSSIsInJlc19kZXBhcnRtZW50cyIsImpzb24iLCJyZXN1bHRzX2RlcGFydG1lbnRzIiwicmVzX3R5cGVzY29yZXMiLCJyZXN1bHRzX3R5cGVzY29yZXMiLCJoZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwiUHJvbWlzZSIsImFsbCIsImZldGNoUHJvbWlzZWQiLCJ0aGVuIiwiZGF0YSIsImZvbyIsImJhciIsImJheiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsS0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtOQUMrQkMsR0FEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFZ0NDLGdCQUFnQixDQUFDLHlDQUFELENBRmhEOztBQUFBO0FBRVFDLCtCQUZSO0FBQUE7QUFBQSx1QkFHb0NBLGVBQWUsQ0FBQ0MsSUFBaEIsRUFIcEM7O0FBQUE7QUFHUUMsbUNBSFI7QUFBQTtBQUFBLHVCQUlnQ0gsZ0JBQWdCLENBQUMsd0NBQUQsQ0FKaEQ7O0FBQUE7QUFJUUksOEJBSlI7QUFBQTtBQUFBLHVCQUttQ0EsY0FBYyxDQUFDRixJQUFmLEVBTG5DOztBQUFBO0FBS1FHLGtDQUxSO0FBQUEsaURBTVE7QUFBQ0YscUNBQW1CLEVBQUdBLG1CQUF2QjtBQUE2Q0Usb0NBQWtCLEVBQUdBLGtCQUFsRTtBQUF3RkMsd0JBQU0sRUFBRTtBQUFoRyxpQkFOUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVFJLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFXO0FBQ1Qsa0JBQWEsRUFESjtBQUVULHFCQUFlLEVBRk47QUFHVCxnQkFBVyxFQUhGO0FBSVQsZ0JBQVcsRUFKRjtBQUtULGtCQUFXLEVBTEY7QUFNVCxtQkFBYyxFQU5MO0FBT1QsaUJBQVksRUFQSDtBQVFULGtCQUFhLEVBUko7QUFTVCxtQkFBWTtBQVRILEtBQVg7QUFGaUI7QUFhbEI7O0FBckJMO0FBQUE7QUFBQSx3Q0FzQndCO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxDQUNWQywwRUFBYSxDQUFDLHdCQUFELEVBQTJCLEdBQTNCLENBREgsRUFFVkEsMEVBQWEsQ0FBQyx3QkFBRCxFQUEyQixHQUEzQixDQUZILENBQVosRUFHQ0MsSUFIRCxDQUdNLFVBQUNDLElBQUQsRUFBVTtBQUFBLDZHQUNVQSxJQURWO0FBQUEsWUFDUkMsR0FEUTtBQUFBLFlBQ0hDLEdBREc7QUFBQSxZQUNFQyxHQURGOztBQUVkQyxlQUFPLENBQUNDLEdBQVIsd0JBQTRCSixHQUE1QixrQkFBdUNDLEdBQXZDLGtCQUFrREMsR0FBbEQ7QUFDSCxPQU5DLEVBTUMsVUFBQ0csR0FBRCxFQUFTO0FBQ1JGLGVBQU8sQ0FBQ0MsR0FBUixrQkFBc0JDLEdBQXRCO0FBQ0gsT0FSQztBQVNEO0FBaENMO0FBQUE7QUFBQSw2QkFtQ0k7QUFDSSxhQUNJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFVjtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixVQUFFLEVBQUMsU0FBL0I7QUFBeUMsWUFBSSxFQUFDLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUU7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBRkYsQ0FERixDQUZVLENBREo7QUFjSDtBQWxETDs7QUFBQTtBQUFBLEVBQTJCQywrQ0FBM0I7QUFxRGV0QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMWZmZTE1OTdiYjMwN2MzNjZiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge2ZldGNoUHJvbWlzZWR9IGZyb20gJy4uLy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBBZGRGb3JtIGZyb20gJy4vQWRkRm9ybSdcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGxldCByZXNfZGVwYXJ0bWVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2RlcGFydG1lbnRzXCIpO1xyXG4gICAgbGV0IHJlc3VsdHNfZGVwYXJ0bWVudHMgPSBhd2FpdCByZXNfZGVwYXJ0bWVudHMuanNvbigpO1xyXG4gICAgbGV0IHJlc190eXBlc2NvcmVzID0gIGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvdHlwZXNjb3Jlc1wiKTtcclxuICAgIGxldCByZXN1bHRzX3R5cGVzY29yZXMgPSBhd2FpdCByZXNfdHlwZXNjb3Jlcy5qc29uKCk7XHJcbiByZXR1cm4ge3Jlc3VsdHNfZGVwYXJ0bWVudHMgOiByZXN1bHRzX2RlcGFydG1lbnRzICwgcmVzdWx0c190eXBlc2NvcmVzIDogcmVzdWx0c190eXBlc2NvcmVzICAsIGhlYWRlcjogJ0xpc3QgU3RhZmYnIH07XHJcbiAgfVxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgIFwiSURfU1ZfTUhcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJJRF9Mb2FpZGllbVwiOiBcIlwiLFxyXG4gICAgICAgIFwiU29kaWVtXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiR2hpY2h1XCIgOiBcIlwiLFxyXG4gICAgICAgIFwiTmdheW5oYXBcIjpcIlwiLFxyXG4gICAgICAgIFwiTmd1b2luaGFwXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiTmdheXN1YVwiIDogXCJcIixcclxuICAgICAgICBcIk5ndW9pc3VhXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiVHJhbmd0aGFpXCI6XCJcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIGZldGNoUHJvbWlzZWQoXCJodHRwOi8vYmFja2VuZC9mb28udHh0XCIsIDUwMCksXHJcbiAgICAgICAgZmV0Y2hQcm9taXNlZChcImh0dHA6Ly9iYWNrZW5kL2Jhei50eHRcIiwgNTAwKVxyXG4gICAgXSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGxldCBbIGZvbywgYmFyLCBiYXogXSA9IGRhdGFcclxuICAgICAgICBjb25zb2xlLmxvZyhgc3VjY2VzczogZm9vPSR7Zm9vfSBiYXI9JHtiYXJ9IGJhej0ke2Jhen1gKVxyXG4gICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBlcnJvcjogJHtlcnJ9YClcclxuICAgIH0pXHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICByZW5kZXIoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgey8qIE1vZGFsICovfVxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgZmFkZVwiIGlkPVwibXlNb2RhbFwiIHJvbGU9XCJkaWFsb2dcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgIHsvKiBNb2RhbCBjb250ZW50Ki99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIHsvKnRoZW0gaW4gaGVyZSAqL31cclxuICAgICAgICAgIDxBZGRGb3JtLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=