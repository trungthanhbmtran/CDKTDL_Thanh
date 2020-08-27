webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Login/LoginComponent.js":
/*!********************************************!*\
  !*** ./components/Login/LoginComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Cookies/Cookies */ "./Cookies/Cookies.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_12__);









var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\Login\\LoginComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ThemeContext = react__WEBPACK_IMPORTED_MODULE_9___default.a.createContext('light');

var LoginComponent = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LoginComponent, _React$Component);

  var _super = _createSuper(LoginComponent);

  function LoginComponent(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LoginComponent);

    _this = _super.call(this, props);
    _this.state = {
      username: "",
      password: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LoginComponent, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var inputPost, res, data, _data$, UserName, Pass, User_ID;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                inputPost = {
                  "username": this.state.username,
                  "password": this.state.password
                };
                _context.next = 4;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_11__["Send_Post_RestAPI"])('http://27.79.0.52:3001/login', inputPost);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                if (data.token) console.log(data); //console.log(data)

                _data$ = data[0], UserName = _data$.UserName, Pass = _data$.Pass, User_ID = _data$.User_ID;
                /*
                console.log(UserName) 
                  console.log(Pass)
                  console.log(typeof this.state.username);
                  console.log(typeof UserName);
                  console.log(typeof Pass);
                  console.log(UserName.length)
                  console.log(this.state.username.length)
                */

                /*if( this.state.username === UserName.replace(/\s/g,'') && this.state.password === Pass.replace(/\s/g,'')){
                 setCookie(`${this.state.username}`,"expires=Thu","01 Jan 1970 00:00:00 UTC")
                  Router.push('/')
                }else{
                  Router.push('/login')
                }*/

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "limiter",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container-login100 page-background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "wrap-login100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("form", {
        className: "login100-form validate-form",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "login100-form-logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("img", {
        alt: "",
        src: "../assets/img/logo-2.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      })), __jsx("span", {
        className: "login100-form-title p-b-34 p-t-27",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 13
        }
      }, "Log in"), __jsx("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Enter username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }, __jsx("input", {
        className: "input100",
        type: "text",
        name: "username",
        placeholder: "Username",
        value: this.state.username,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "focus-input100",
        "data-placeholder": "\uF207",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Enter password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, __jsx("input", {
        className: "input100",
        type: "password",
        name: "password",
        placeholder: "Password",
        value: this.state.password,
        onChange: this.handleChange,
        required: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "focus-input100",
        "data-placeholder": "\uF191",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "contact100-form-checkbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx("input", {
        className: "input-checkbox100",
        id: "ckb1",
        type: "checkbox",
        name: "remember-me",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }), __jsx("label", {
        className: "label-checkbox100",
        htmlFor: "ckb1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }, "Remember me")), __jsx("div", {
        className: "container-login100-form-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "login100-form-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }
      }, "Login")), __jsx("div", {
        className: "text-center p-t-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "txt1",
        href: "forgot_password.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, "Forgot Password?"))))));
    }
  }]);

  return LoginComponent;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpbkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0UG9zdCIsIlNlbmRfUG9zdF9SZXN0QVBJIiwicmVzIiwianNvbiIsImRhdGEiLCJ0b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJVc2VyTmFtZSIsIlBhc3MiLCJVc2VyX0lEIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixPQUFwQixDQUFyQjs7SUFFTUMsYzs7Ozs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBUSxFQUFFO0FBQTFCLEtBQWI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIseUdBQXBCO0FBSmlCO0FBS2xCOzs7O2lDQUNhRSxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCwrRkFDS0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBRGxCLEVBQ3lCSCxLQUFLLENBQUNFLE1BQU4sQ0FBYUUsS0FEdEM7QUFHSDs7Ozs0TkFF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QXhDO0FBQStDLFlBQUksRUFBQyxVQUFwRDtBQUErRCxZQUFJLEVBQUMsYUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBTyxpQkFBUyxFQUFDLG1CQUFqQjtBQUFxQyxlQUFPLEVBQUMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixDQWpCRixFQXVCRTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsaUJBQVMsRUFBQyxtQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQXZCRixFQTRCRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQW9CLFlBQUksRUFBQyxzQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQTVCRixDQURGLENBREYsQ0FEQSxDQURGO0FBMENEOzs7O0VBakYwQlAsNENBQUssQ0FBQzJCLFM7O0FBbUZwQnpCLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjExNmFkOTIwMjNkMDlmOTVhN2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7U2VuZF9Qb3N0X1Jlc3RBUEl9IGZyb20gJy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnO1xuaW1wb3J0IHtzZXRDb29raWV9IGZyb20gJy4uLy4uL0Nvb2tpZXMvQ29va2llcydcbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoJ2xpZ2h0Jyk7XG5cbmNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwifTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG4gICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG59XG5cbiAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW5wdXRQb3N0ID0ge1widXNlcm5hbWVcIiA6IHRoaXMuc3RhdGUudXNlcm5hbWUgLCBcInBhc3N3b3JkXCIgOiB0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICBsZXQgcmVzID0gYXdhaXQgU2VuZF9Qb3N0X1Jlc3RBUEkoJ2h0dHA6Ly8yNy43OS4wLjUyOjMwMDEvbG9naW4nLGlucHV0UG9zdClcbiAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICBpZihkYXRhLnRva2VuKVxuICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXG4gICAgICBsZXQge1VzZXJOYW1lLFBhc3MsVXNlcl9JRH0gPSBkYXRhWzBdO1xuICAgICAgICAvKlxuICAgICAgICBjb25zb2xlLmxvZyhVc2VyTmFtZSkgXG4gICAgICAgICAgY29uc29sZS5sb2coUGFzcylcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5zdGF0ZS51c2VybmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIFVzZXJOYW1lKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgUGFzcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coVXNlck5hbWUubGVuZ3RoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUubGVuZ3RoKVxuICAgICAgICAqL1xuICAgICAvKmlmKCB0aGlzLnN0YXRlLnVzZXJuYW1lID09PSBVc2VyTmFtZS5yZXBsYWNlKC9cXHMvZywnJykgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZCA9PT0gUGFzcy5yZXBsYWNlKC9cXHMvZywnJykpe1xuICAgICAgc2V0Q29va2llKGAke3RoaXMuc3RhdGUudXNlcm5hbWV9YCxcImV4cGlyZXM9VGh1XCIsXCIwMSBKYW4gMTk3MCAwMDowMDowMCBVVENcIilcbiAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgIH1lbHNle1xuICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICB9Ki9cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGltaXRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDAgcGFnZS1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbjEwMFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0gdmFsaWRhdGUtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2xvZ28tMi5wbmdcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS10aXRsZSBwLWItMzQgcC10LTI3XCI+XG4gICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT1cIkVudGVyIHVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dDEwMFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIiBkYXRhLXBsYWNlaG9sZGVyPVwi74iHXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT1cIkVudGVyIHBhc3N3b3JkXCIgPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQxMDBcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2N1cy1pbnB1dDEwMFwiIGRhdGEtcGxhY2Vob2xkZXI9XCLvhpFcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QxMDAtZm9ybS1jaGVja2JveFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY2hlY2tib3gxMDBcIiBpZD1cImNrYjFcIiB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicmVtZW1iZXItbWVcIiAvPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWwtY2hlY2tib3gxMDBcIiBodG1sRm9yPVwiY2tiMVwiPlxuICAgICAgICAgICAgICAgIFJlbWVtYmVyIG1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luMTAwLWZvcm0tYnRuXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS1idG5cIiA+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC10LTMwXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInR4dDFcIiBocmVmPVwiZm9yZ290X3Bhc3N3b3JkLmh0bWxcIj5cbiAgICAgICAgICAgICAgICBGb3Jnb3QgUGFzc3dvcmQ/XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=