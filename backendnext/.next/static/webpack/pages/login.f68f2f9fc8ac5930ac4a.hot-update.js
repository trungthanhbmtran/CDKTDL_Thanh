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
        var inputPost, res, data;
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
                  Object(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_12__["setCookie"])(this.state.username, data.token, 1);
                  alert("login success with ".concat(this.state.username, " "));
                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
                } //console.log(data)
                // let {UserName,Pass,User_ID} = data[0];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpbkNvbXBvbmVudCIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0UG9zdCIsIlNlbmRfUG9zdF9SZXN0QVBJIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJhbGVydCIsIlJvdXRlciIsInB1c2giLCJzZXRDb29raWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLE9BQXBCLENBQXJCOztJQUVNQyxjOzs7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQUVDLGNBQVEsRUFBRSxFQUFaO0FBQWdCQyxjQUFRLEVBQUU7QUFBMUIsS0FBYjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIseUdBQXBCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQix5R0FBcEI7QUFKaUI7QUFLbEI7Ozs7aUNBQ2FFLEssRUFBTztBQUNuQixXQUFLQyxRQUFMLCtGQUNLRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsSUFEbEIsRUFDeUJILEtBQUssQ0FBQ0UsTUFBTixDQUFh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ZjtBQUM2QixnQkFBUSxNQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFHRTtBQUFNLGlCQUFTLEVBQUMsZ0JBQWhCO0FBQWlDLDRCQUFpQixRQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FaRixFQWlCRTtBQUFLLGlCQUFTLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8saUJBQVMsRUFBQyxtQkFBakI7QUFBcUMsVUFBRSxFQUFDLE1BQXhDO0FBQStDLFlBQUksRUFBQyxVQUFwRDtBQUErRCxZQUFJLEVBQUMsYUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBTyxpQkFBUyxFQUFDLG1CQUFqQjtBQUFxQyxlQUFPLEVBQUMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixDQWpCRixFQXVCRTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQVEsaUJBQVMsRUFBQyxtQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQXZCRixFQTRCRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxNQUFiO0FBQW9CLFlBQUksRUFBQyxzQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQTVCRixDQURGLENBREYsQ0FEQSxDQURGO0FBMENEOzs7O0VBekYwQlAsNENBQUssQ0FBQzZCLFM7O0FBMkZwQjNCLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmY2OGYyZjlmYzhhYzU5MzBhYzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7U2VuZF9Qb3N0X1Jlc3RBUEl9IGZyb20gJy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnO1xuaW1wb3J0IHtzZXRDb29raWV9IGZyb20gJy4uLy4uL0Nvb2tpZXMvQ29va2llcydcbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoJ2xpZ2h0Jyk7XG5cbmNsYXNzIExvZ2luQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwifTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG4gICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgfSk7XG59XG5cbiAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW5wdXRQb3N0ID0ge1widXNlcm5hbWVcIiA6IHRoaXMuc3RhdGUudXNlcm5hbWUgLCBcInBhc3N3b3JkXCIgOiB0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICBsZXQgcmVzID0gYXdhaXQgU2VuZF9Qb3N0X1Jlc3RBUEkoJ2h0dHA6Ly8yNy43OS4wLjUyOjMwMDEvbG9naW4nLGlucHV0UG9zdClcbiAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICBjb25zb2xlLmxvZyhkYXRhLnRva2VuKVxuICAgICBpZihkYXRhLnRva2VuID09PSB1bmRlZmluZWQgfHwgZGF0YS50b2tlbiA9PT0gbnVsbCl7XG4gICAgICAgIGFsZXJ0KCdFcnJvcicpXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgc2V0Q29va2llKHRoaXMuc3RhdGUudXNlcm5hbWUsZGF0YS50b2tlbiwxKVxuICAgICAgYWxlcnQoYGxvZ2luIHN1Y2Nlc3Mgd2l0aCAke3RoaXMuc3RhdGUudXNlcm5hbWV9IGApXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgfVxuICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXG4gICAgIC8vIGxldCB7VXNlck5hbWUsUGFzcyxVc2VyX0lEfSA9IGRhdGFbMF07XG4gICAgICAgIC8qXG4gICAgICAgIGNvbnNvbGUubG9nKFVzZXJOYW1lKSBcbiAgICAgICAgICBjb25zb2xlLmxvZyhQYXNzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLnN0YXRlLnVzZXJuYW1lKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgVXNlck5hbWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBQYXNzKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhVc2VyTmFtZS5sZW5ndGgpXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZS5sZW5ndGgpXG4gICAgICAgICovXG4gICAgIC8qaWYoIHRoaXMuc3RhdGUudXNlcm5hbWUgPT09IFVzZXJOYW1lLnJlcGxhY2UoL1xccy9nLCcnKSAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkID09PSBQYXNzLnJlcGxhY2UoL1xccy9nLCcnKSl7XG4gICAgICBzZXRDb29raWUoYCR7dGhpcy5zdGF0ZS51c2VybmFtZX1gLFwiZXhwaXJlcz1UaHVcIixcIjAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQ1wiKVxuICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgfWVsc2V7XG4gICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgIH0qL1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW1pdGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbjEwMCBwYWdlLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWxvZ2luMTAwXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybSB2YWxpZGF0ZS1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tbG9nb1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbG9nby0yLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLXRpdGxlIHAtYi0zNCBwLXQtMjdcIj5cbiAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5wdXQxMDAgdmFsaWRhdGUtaW5wdXRcIiBkYXRhLXZhbGlkYXRlPVwiRW50ZXIgdXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0MTAwXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb2N1cy1pbnB1dDEwMFwiIGRhdGEtcGxhY2Vob2xkZXI9XCLviIdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5wdXQxMDAgdmFsaWRhdGUtaW5wdXRcIiBkYXRhLXZhbGlkYXRlPVwiRW50ZXIgcGFzc3dvcmRcIiA+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dDEwMFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCIgZGF0YS1wbGFjZWhvbGRlcj1cIu+GkVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdDEwMC1mb3JtLWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jaGVja2JveDEwMFwiIGlkPVwiY2tiMVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZW1lbWJlci1tZVwiIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jaGVja2JveDEwMFwiIGh0bWxGb3I9XCJja2IxXCI+XG4gICAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDAtZm9ybS1idG5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWJ0blwiID5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLXQtMzBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHh0MVwiIGhyZWY9XCJmb3Jnb3RfcGFzc3dvcmQuaHRtbFwiPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==