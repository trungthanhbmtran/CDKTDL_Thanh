module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Cookies/Cookies.js":
/*!****************************!*\
  !*** ./Cookies/Cookies.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! next/router */ "next/router");

module.exports = {
  setCookie: function (cname, cvalue, exdays) {
    return new Promise((resove, reject) => {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + "; " + expires; //reject('error');

      resove(d);
    });
  },
  getCookie: function (cname) {
    return new Promise((resove, reject) => {
      var name = cname + "=";
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }

      resove(c); //reject('error');
    });
  },
  checkCookie: function () {
    return new Promise((resove, reject) => {
      var username = getCookie("admin");

      if (username != "") {
        alert("Welcome again " + username);
      } else {
        username = prompt("Please enter your name:", "");

        if (username != "" && username != null) {
          setCookie("username", username, 365);
        }
      }

      resove(username); //reject('error');
    });
  }
};

/***/ }),

/***/ "./Request/imw_request.js":
/*!********************************!*\
  !*** ./Request/imw_request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Send_Post_RestAPI: function (url, data) {
    return new Promise((resove, reject) => {
      const res = (0, _isomorphicUnfetch.default)(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      }); //reject('error');

      resove(res);
    });
  },
  Send_Get_RestAPI: function (url) {
    return new Promise((resove, reject) => {
      const res = (0, _isomorphicUnfetch.default)(url, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }); //reject('error');

      resove(res);
    });
  },
  fetchPromised: function (url) {
    return new Promise((resolve, reject) => {
      Send_Get_RestAPI(url, resolve, reject);
    });
  }
};

/***/ }),

/***/ "./components/Login/LoginComponent.js":
/*!********************************************!*\
  !*** ./components/Login/LoginComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Cookies/Cookies */ "./Cookies/Cookies.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ThemeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext('light');

class LoginComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    let input = {
      "username": this.state.username,
      "password": this.state.password
    };
    let res = await Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_2__["Send_Post_RestAPI"])('http://localhost:3002/logintest', input);
    let data = await res.json();
    console.log(data.token);

    if (data.token === undefined || data.token === null) {
      alert('Error');
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    } else {
      document.cookie = `name=${data.token}; path=/`;
      alert(`login success with ${this.state.username} `);
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
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

  }

  render() {
    return __jsx("div", {
      className: "limiter"
    }, __jsx("div", {
      className: "container-login100 page-background"
    }, __jsx("div", {
      className: "wrap-login100"
    }, __jsx("form", {
      name: "submitlogin",
      className: "login100-form validate-form",
      method: "POST",
      action: "/login"
    }, __jsx("span", {
      className: "login100-form-logo"
    }, __jsx("img", {
      alt: "",
      src: "../assets/img/logo-2.png"
    })), __jsx("span", {
      className: "login100-form-title p-b-34 p-t-27"
    }, "Log in"), __jsx("div", {
      className: "wrap-input100 validate-input",
      "data-validate": "Enter username"
    }, __jsx("input", {
      className: "input100",
      type: "text",
      id: "username",
      name: "username",
      placeholder: "Username",
      value: this.state.username,
      onChange: this.handleChange,
      required: true
    }), __jsx("span", {
      className: "focus-input100",
      "data-placeholder": "\uF207"
    })), __jsx("div", {
      className: "wrap-input100 validate-input",
      "data-validate": "Enter password"
    }, __jsx("input", {
      className: "input100",
      type: "password",
      id: "password",
      name: "password",
      placeholder: "Password",
      value: this.state.password,
      onChange: this.handleChange,
      required: true
    }), __jsx("span", {
      className: "focus-input100",
      "data-placeholder": "\uF191"
    })), __jsx("div", {
      className: "contact100-form-checkbox"
    }, __jsx("input", {
      className: "input-checkbox100",
      id: "ckb1",
      type: "checkbox",
      name: "remember-me"
    }), __jsx("label", {
      className: "label-checkbox100",
      htmlFor: "ckb1"
    }, "Remember me")), __jsx("div", {
      className: "container-login100-form-btn"
    }, __jsx("button", {
      className: "login100-form-btn"
    }, "Login"), __jsx("a", {
      className: "login100-form-btn",
      href: "/auth/google"
    }, "Google"), __jsx("a", {
      className: "login100-form-btn",
      href: "/auth/facebook"
    }, "Facebook")), __jsx("div", {
      className: "text-center p-t-30"
    }, __jsx("a", {
      className: "txt1",
      href: "forgot_password.html"
    }, "Forgot Password?"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Login/LoginComponent */ "./components/Login/LoginComponent.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 14
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }), __jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }), __jsx("meta", {
      content: "width=device-width, initial-scale=1",
      name: "viewport",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), __jsx("meta", {
      name: "description",
      content: "Responsive Admin Template",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }), __jsx("meta", {
      name: "author",
      content: "RedstarHospital",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "CDKTDL"), __jsx("link", {
      href: "http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }), __jsx("link", {
      href: "fonts/font-awesome/css/font-awesome.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/plugins/iconic/css/material-design-iconic-font.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }), __jsx("link", {
      href: "../assets/plugins/bootstrap/css/bootstrap.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/css/pages/extra_pages.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "../assets/img/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    })), __jsx(_components_Login_LoginComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }), __jsx("script", {
      src: "../assets/plugins/jquery/jquery.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "../assets/plugins/bootstrap/js/bootstrap.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    }), __jsx("script", {
      src: "../assets/js/pages/extra-pages/pages.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29va2llcy9Db29raWVzLmpzIiwid2VicGFjazovLy8uL1JlcXVlc3QvaW13X3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiUm91dGVyIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZXRDb29raWUiLCJjbmFtZSIsImN2YWx1ZSIsImV4ZGF5cyIsIlByb21pc2UiLCJyZXNvdmUiLCJyZWplY3QiLCJkIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwiZXhwaXJlcyIsInRvVVRDU3RyaW5nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJnZXRDb29raWUiLCJuYW1lIiwiY2EiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImNoZWNrQ29va2llIiwidXNlcm5hbWUiLCJhbGVydCIsInByb21wdCIsIlNlbmRfUG9zdF9SZXN0QVBJIiwidXJsIiwiZGF0YSIsInJlcyIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTZW5kX0dldF9SZXN0QVBJIiwiZmV0Y2hQcm9taXNlZCIsInJlc29sdmUiLCJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpbkNvbXBvbmVudCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInBhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwidW5kZWZpbmVkIiwicHVzaCIsInJlbmRlciIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsTUFBTTtBQUFFQTtBQUFGLElBQWFDLG1CQUFPLENBQUMsZ0NBQUQsQ0FBMUI7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxXQUFTLEVBQUUsVUFBU0MsS0FBVCxFQUFnQkMsTUFBaEIsRUFBd0JDLE1BQXhCLEVBQStCO0FBQ3RDLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE1BQUQsRUFBU0Ms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O0FBQUE7QUFBQTtBQUFBLE1BaEJFLEVBaUJGO0FBQVEsU0FBRyxFQUFDLGlEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFqQkUsRUFrQkY7QUFBUSxTQUFHLEVBQUMseUNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxCRSxDQURKO0FBc0JIOztBQXpCZ0M7QUE0QnRCQyxvRUFBZixFOzs7Ozs7Ozs7OztBQ2pDQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZXRDb29raWU6IGZ1bmN0aW9uKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiOyBcIiArIGV4cGlyZXM7XHJcbiAgICAgICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xyXG4gICAgICAgICAgICByZXNvdmUoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q29va2llOiBmdW5jdGlvbiAoY25hbWUpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gY25hbWUgKyBcIj1cIjtcclxuICAgICAgICAgICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8Y2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCxjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb3ZlKGMpO1xyXG4gICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XHJcbiAgICAgICBcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBjaGVja0Nvb2tpZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICB2YXIgdXNlcm5hbWU9Z2V0Q29va2llKFwiYWRtaW5cIik7XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lIT1cIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiV2VsY29tZSBhZ2FpbiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgIT0gXCJcIiAmJiB1c2VybmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSwgMzY1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvdmUodXNlcm5hbWUpO1xyXG4gICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xyXG4gICAgIFxyXG4gICAgfSk7XHJcbn0sXHJcbn0iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgU2VuZF9Qb3N0X1Jlc3RBUEk6IGZ1bmN0aW9uKHVybCxkYXRhKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoKHVybCx7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL3JlamVjdCgnZXJyb3InKTtcbiAgICAgICAgICAgIHJlc292ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFNlbmRfR2V0X1Jlc3RBUEk6IGZ1bmN0aW9uKHVybCl7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoKHVybCx7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgICAgcmVzb3ZlKHJlcyk7XG4gICAgICB9KTtcbiAgfSxcbiAgZmV0Y2hQcm9taXNlZDogZnVuY3Rpb24gKHVybCkgIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBTZW5kX0dldF9SZXN0QVBJKHVybCwgcmVzb2x2ZSwgcmVqZWN0KVxuICAgIH0pXG59LFxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHtTZW5kX1Bvc3RfUmVzdEFQSX0gZnJvbSAnLi4vLi4vUmVxdWVzdC9pbXdfcmVxdWVzdCc7XG5pbXBvcnQge3NldENvb2tpZX0gZnJvbSAnLi4vLi4vQ29va2llcy9Db29raWVzJ1xuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgnbGlnaHQnKTtcblxuY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyB1c2VybmFtZTogXCJcIiwgcGFzc3dvcmQ6IFwiXCJ9O1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICB9KTtcbn1cblxuICBhc3luYyBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpbnB1dCA9e1widXNlcm5hbWVcIiA6IHRoaXMuc3RhdGUudXNlcm5hbWUsXCJwYXNzd29yZFwiIDogdGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgbGV0IHJlcyA9IGF3YWl0IFNlbmRfUG9zdF9SZXN0QVBJKCdodHRwOi8vbG9jYWxob3N0OjMwMDIvbG9naW50ZXN0JyxpbnB1dClcbiAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICBjb25zb2xlLmxvZyhkYXRhLnRva2VuKVxuICAgICBpZihkYXRhLnRva2VuID09PSB1bmRlZmluZWQgfHwgZGF0YS50b2tlbiA9PT0gbnVsbCl7XG4gICAgICAgIGFsZXJ0KCdFcnJvcicpXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgZG9jdW1lbnQuY29va2llID0gYG5hbWU9JHtkYXRhLnRva2VufTsgcGF0aD0vYDtcbiAgICAgIGFsZXJ0KGBsb2dpbiBzdWNjZXNzIHdpdGggJHt0aGlzLnN0YXRlLnVzZXJuYW1lfSBgKVxuICAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgIH1cbiAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAvLyBsZXQge1VzZXJOYW1lLFBhc3MsVXNlcl9JRH0gPSBkYXRhWzBdO1xuICAgICAgICAvKlxuICAgICAgICBjb25zb2xlLmxvZyhVc2VyTmFtZSkgXG4gICAgICAgICAgY29uc29sZS5sb2coUGFzcylcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5zdGF0ZS51c2VybmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIFVzZXJOYW1lKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgUGFzcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coVXNlck5hbWUubGVuZ3RoKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUubGVuZ3RoKVxuICAgICAgICAqL1xuICAgICAvKmlmKCB0aGlzLnN0YXRlLnVzZXJuYW1lID09PSBVc2VyTmFtZS5yZXBsYWNlKC9cXHMvZywnJykgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZCA9PT0gUGFzcy5yZXBsYWNlKC9cXHMvZywnJykpe1xuICAgICAgc2V0Q29va2llKGAke3RoaXMuc3RhdGUudXNlcm5hbWV9YCxcImV4cGlyZXM9VGh1XCIsXCIwMSBKYW4gMTk3MCAwMDowMDowMCBVVENcIilcbiAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgIH1lbHNle1xuICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICB9Ki9cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGltaXRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDAgcGFnZS1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbjEwMFwiPlxuICAgICAgICAgIDxmb3JtIG5hbWU9XCJzdWJtaXRsb2dpblwiIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0gdmFsaWRhdGUtZm9ybVwiIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tbG9nb1wiPlxuICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvbG9nby0yLnBuZ1wiIC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLXRpdGxlIHAtYi0zNCBwLXQtMjdcIj5cbiAgICAgICAgICAgICAgTG9nIGluXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXAtaW5wdXQxMDAgdmFsaWRhdGUtaW5wdXRcIiBkYXRhLXZhbGlkYXRlPVwiRW50ZXIgdXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0MTAwXCIgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIiBkYXRhLXBsYWNlaG9sZGVyPVwi74iHXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT1cIkVudGVyIHBhc3N3b3JkXCIgPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQxMDBcIiB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkLz5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9jdXMtaW5wdXQxMDBcIiBkYXRhLXBsYWNlaG9sZGVyPVwi74aRXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0MTAwLWZvcm0tY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94MTAwXCIgaWQ9XCJja2IxXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyLW1lXCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsLWNoZWNrYm94MTAwXCIgaHRtbEZvcj1cImNrYjFcIj5cbiAgICAgICAgICAgICAgICBSZW1lbWJlciBtZVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0blwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0tYnRuXCIgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWJ0blwiICBocmVmPVwiL2F1dGgvZ29vZ2xlXCI+R29vZ2xlPC9hPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWJ0blwiICBocmVmPVwiL2F1dGgvZmFjZWJvb2tcIj5GYWNlYm9vazwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLXQtMzBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHh0MVwiIGhyZWY9XCJmb3Jnb3RfcGFzc3dvcmQuaHRtbFwiPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9naW5Db21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIvPlxyXG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmVzcG9uc2l2ZSBBZG1pbiBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiUmVkc3Rhckhvc3BpdGFsXCIgLz5cclxuICAgICAgICAgICAgPHRpdGxlPkNES1RETDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDMwMCw2MDAsNzAwJmFtcDtzdWJzZXQ9YWxsXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJmb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvaWNvbmljL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9hc3NldHMvY3NzL3BhZ2VzL2V4dHJhX3BhZ2VzLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9hc3NldHMvaW1nL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TG9naW5Db21wb25lbnQvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9qcXVlcnkvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvcGFnZXMvZXh0cmEtcGFnZXMvcGFnZXMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9