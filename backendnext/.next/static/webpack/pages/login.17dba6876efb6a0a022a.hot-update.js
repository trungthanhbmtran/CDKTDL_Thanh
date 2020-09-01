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
                console.log(data.token);

                if (data.token === undefined || data.token === null) {
                  alert('Error');
                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');
                } else {
                  Object(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(this.state.username, data, 1);
                  alert("login success with ".concat(this.state.username, " "));
                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                } //console.log(data)


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

              case 11:
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
          lineNumber: 55,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "container-login100 page-background",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "wrap-login100",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("form", {
        className: "login100-form validate-form",
        onSubmit: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "login100-form-logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx("img", {
        alt: "",
        src: "../assets/img/logo-2.png",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      })), __jsx("span", {
        className: "login100-form-title p-b-34 p-t-27",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, "Log in"), __jsx("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Enter username",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
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
          lineNumber: 66,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "focus-input100",
        "data-placeholder": "\uF207",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "wrap-input100 validate-input",
        "data-validate": "Enter password",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
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
          lineNumber: 71,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "focus-input100",
        "data-placeholder": "\uF191",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "contact100-form-checkbox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
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
          lineNumber: 76,
          columnNumber: 15
        }
      }), __jsx("label", {
        className: "label-checkbox100",
        htmlFor: "ckb1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }
      }, "Remember me")), __jsx("div", {
        className: "container-login100-form-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, __jsx("button", {
        className: "login100-form-btn",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }
      }, "Login")), __jsx("div", {
        className: "text-center p-t-30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "txt1",
        href: "forgot_password.html",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpbkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0UG9zdCIsIlNlbmRfUG9zdF9SZXN0QVBJIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJhbGVydCIsIlJvdXRlciIsInB1c2giLCJzZXRDb29raWUiLCJVc2VyTmFtZSIsIlBhc3MiLCJVc2VyX0lEIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixPQUFwQixDQUFyQjs7SUFFTUMsYzs7Ozs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBUSxFQUFFO0FBQTFCLEtBQWI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLHlHQUFwQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIseUdBQXBCO0FBSmlCO0FBS2xCOzs7O2lDQUNhRSxLLEVBQU87QUFDbkIsV0FBS0MsUUFBTCwrRkFDS0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLElBRGxCLEVBQ3lCSCxLQUFLLENBQUNFLE1BQU4sQ0FBYUUsS0FEdEM7QUFHSDs7Ozs0TkFFb0JKLEs7Ozs7Ozs7QUFDakJBLHFCQUFLLENBQUNLLGNBQU47QUFDSUMseUIsR0FBWTtBQUFDLDhCQUFhLEtBQUtaLEtBQUwsQ0FBV0MsUUFBekI7QUFBb0MsOEJBQWEsS0FBS0QsS0FBTCxDQUFXRTtBQUE1RCxpQjs7dUJBQ0NXLCtFQUFpQixDQUFDLDhCQUFELEVBQWdDRCxTQUFoQyxDOzs7QUFBN0JFLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiQyxvQjtBQUNKQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csS0FBakI7O0FBQ0Esb0JBQUdILElBQUksQ0FBQ0csS0FBTCxLQUFlQyxTQUFmLElBQTRCSixJQUFJLENBQUNHLEtBQUwsS0FBZSxJQUE5QyxFQUFtRDtBQUNoREUsdUJBQUssQ0FBQyxPQUFELENBQUw7QUFDQUMscUVBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRixpQkFIRCxNQUlLO0FBQ0pDLHFGQUFTLENBQUMsS0FBS3hCLEtBQUwsQ0FBV0MsUUFBWixFQUFxQmUsSUFBckIsRUFBMEIsQ0FBMUIsQ0FBVDtBQUNBSyx1QkFBSyw4QkFBdUIsS0FBS3JCLEtBQUwsQ0FBV0MsUUFBbEMsT0FBTDtBQUNFcUIscUVBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRixpQixDQUNEOzs7eUJBQytCUCxJQUFJLENBQUMsQ0FBRCxDLEVBQTdCUyxRLFVBQUFBLFEsRUFBU0MsSSxVQUFBQSxJLEVBQUtDLE8sVUFBQUEsTztBQUNqQjs7Ozs7Ozs7OztBQVNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFPTTtBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssaUJBQVMsRUFBQyxvQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyw2QkFBaEI7QUFBOEMsZ0JBQVEsRUFBRSxLQUFLdEIsWUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssV0FBRyxFQUFDLEVBQVQ7QUFBWSxXQUFHLEVBQUMsMEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBSUU7QUFBTSxpQkFBUyxFQUFDLG1DQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLEVBT0U7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQThDLHlCQUFjLGdCQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTyxpQkFBUyxFQUFDLFVBQWpCO0FBQTRCLFlBQUksRUFBQyxNQUFqQztBQUF3QyxZQUFJLEVBQUMsVUFBN0M7QUFBd0QsbUJBQVcsRUFBQyxVQUFwRTtBQUErRSxhQUFLLEVBQUUsS0FBS0wsS0FBTCxDQUFXQyxRQUFqRztBQUNBLGdCQUFRLEVBQUUsS0FBS0UsWUFEZjtBQUM2QixnQkFBUSxNQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFHRTtBQUFNLGlCQUFTLEVBQUMsZ0JBQWhCO0FBQWlDLDRCQUFpQixRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FQRixFQVlFO0FBQUssaUJBQVMsRUFBQyw4QkFBZjtBQUE4Qyx5QkFBYyxnQkFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8saUJBQVMsRUFBQyxVQUFqQjtBQUE0QixZQUFJLEVBQUMsVUFBakM7QUFBNEMsWUFBSSxFQUFDLFVBQWpEO0FBQTRELG1CQUFXLEVBQUMsVUFBeEU7QUFBbUYsYUFBSyxFQUFFLEtBQUtILEtBQUwsQ0FBV0UsUUFBckc7QUFDQSxnQkFBUSxFQUFFLEtBQUtDLFlBRGY7QUFDNkIsZ0JBQVEsTUFEckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBR0U7QUFBTSxpQkFBUyxFQUFDLGdCQUFoQjtBQUFpQyw0QkFBaUIsUUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhGLENBWkYsRUFpQkU7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFPLGlCQUFTLEVBQUMsbUJBQWpCO0FBQXFDLFVBQUUsRUFBQyxNQUF4QztBQUErQyxZQUFJLEVBQUMsVUFBcEQ7QUFBK0QsWUFBSSxFQUFDLGFBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQU8saUJBQVMsRUFBQyxtQkFBakI7QUFBcUMsZUFBTyxFQUFDLE1BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsQ0FqQkYsRUF1QkU7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFRLGlCQUFTLEVBQUMsbUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0F2QkYsRUE0QkU7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsTUFBYjtBQUFvQixZQUFJLEVBQUMsc0JBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0E1QkYsQ0FERixDQURGLENBREEsQ0FERjtBQTBDRDs7OztFQXpGMEJQLDRDQUFLLENBQUNnQyxTOztBQTJGcEI5Qiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4xN2RiYTY4NzZlZmI2YTBhMDIyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1NlbmRfUG9zdF9SZXN0QVBJfSBmcm9tICcuLi8uLi9SZXF1ZXN0L2ltd19yZXF1ZXN0JztcbmltcG9ydCB7c2V0Q29va2llfSBmcm9tICcuLi8uLi9Db29raWVzL0Nvb2tpZXMnXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCdsaWdodCcpO1xuXG5jbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIn07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xufVxuXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlucHV0UG9zdCA9IHtcInVzZXJuYW1lXCIgOiB0aGlzLnN0YXRlLnVzZXJuYW1lICwgXCJwYXNzd29yZFwiIDogdGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgbGV0IHJlcyA9IGF3YWl0IFNlbmRfUG9zdF9SZXN0QVBJKCdodHRwOi8vMjcuNzkuMC41MjozMDAxL2xvZ2luJyxpbnB1dFBvc3QpXG4gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgY29uc29sZS5sb2coZGF0YS50b2tlbilcbiAgICAgaWYoZGF0YS50b2tlbiA9PT0gdW5kZWZpbmVkIHx8IGRhdGEudG9rZW4gPT09IG51bGwpe1xuICAgICAgICBhbGVydCgnRXJyb3InKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgfVxuICAgICBlbHNlIHtcbiAgICAgIHNldENvb2tpZSh0aGlzLnN0YXRlLnVzZXJuYW1lLGRhdGEsMSlcbiAgICAgIGFsZXJ0KGBsb2dpbiBzdWNjZXNzIHdpdGggJHt0aGlzLnN0YXRlLnVzZXJuYW1lfSBgKVxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgIH1cbiAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgbGV0IHtVc2VyTmFtZSxQYXNzLFVzZXJfSUR9ID0gZGF0YVswXTtcbiAgICAgICAgLypcbiAgICAgICAgY29uc29sZS5sb2coVXNlck5hbWUpIFxuICAgICAgICAgIGNvbnNvbGUubG9nKFBhc3MpXG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuc3RhdGUudXNlcm5hbWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBVc2VyTmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIFBhc3MpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFVzZXJOYW1lLmxlbmd0aClcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lLmxlbmd0aClcbiAgICAgICAgKi9cbiAgICAgLyppZiggdGhpcy5zdGF0ZS51c2VybmFtZSA9PT0gVXNlck5hbWUucmVwbGFjZSgvXFxzL2csJycpICYmIHRoaXMuc3RhdGUucGFzc3dvcmQgPT09IFBhc3MucmVwbGFjZSgvXFxzL2csJycpKXtcbiAgICAgIHNldENvb2tpZShgJHt0aGlzLnN0YXRlLnVzZXJuYW1lfWAsXCJleHBpcmVzPVRodVwiLFwiMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDXCIpXG4gICAgICAgUm91dGVyLnB1c2goJy8nKVxuICAgICB9ZWxzZXtcbiAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgfSovXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbWl0ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWxvZ2luMTAwIHBhZ2UtYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtbG9naW4xMDBcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtIHZhbGlkYXRlLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS1sb2dvXCI+XG4gICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9sb2dvLTIucG5nXCIgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tdGl0bGUgcC1iLTM0IHAtdC0yN1wiPlxuICAgICAgICAgICAgICBMb2cgaW5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1pbnB1dDEwMCB2YWxpZGF0ZS1pbnB1dFwiIGRhdGEtdmFsaWRhdGU9XCJFbnRlciB1c2VybmFtZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQxMDBcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCIgZGF0YS1wbGFjZWhvbGRlcj1cIu+Ih1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1pbnB1dDEwMCB2YWxpZGF0ZS1pbnB1dFwiIGRhdGEtdmFsaWRhdGU9XCJFbnRlciBwYXNzd29yZFwiID5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0MTAwXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIiBkYXRhLXBsYWNlaG9sZGVyPVwi74aRXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0MTAwLWZvcm0tY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94MTAwXCIgaWQ9XCJja2IxXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyLW1lXCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNoZWNrYm94MTAwXCIgaHRtbEZvcj1cImNrYjFcIj5cbiAgICAgICAgICAgICAgICBSZW1lbWJlciBtZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0blwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tYnRuXCIgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHAtdC0zMFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0eHQxXCIgaHJlZj1cImZvcmdvdF9wYXNzd29yZC5odG1sXCI+XG4gICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkP1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9