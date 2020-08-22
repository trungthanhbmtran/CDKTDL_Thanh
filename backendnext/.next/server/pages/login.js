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
/***/ (function(module, exports) {

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

      resove(ca); //reject('error');
    });
  },
  checkCookie: function () {
    return new Promise((resove, reject) => {
      var username = getCookie("username");

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
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\Login\\LoginComponent.js";
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
    let inputPost = {
      "username": this.state.username,
      "password": this.state.password
    };
    let res = await Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_2__["Send_Post_RestAPI"])('http://27.79.0.52:3001/login', inputPost);
    let data = await res.json(); //console.log(data)

    let {
      UserName,
      Pass,
      User_ID
    } = data[0];
    /*
    console.log(UserName) 
      console.log(Pass)
      console.log(typeof this.state.username);
      console.log(typeof UserName);
      console.log(typeof Pass);
      console.log(UserName.length)
      console.log(this.state.username.length)
    */

    if (this.state.username === UserName.replace(/\s/g, '') && this.state.password === Pass.replace(/\s/g, '')) {
      Object(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(`${this.state.username}`, "expires=Thu", "01 Jan 1970 00:00:00 UTC");
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    }
  }

  render() {
    return __jsx("div", {
      className: "limiter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "container-login100 page-background",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "wrap-login100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, __jsx("form", {
      className: "login100-form validate-form",
      onSubmit: this.handleSubmit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "login100-form-logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx("img", {
      alt: "",
      src: "../assets/img/logo-2.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    })), __jsx("span", {
      className: "login100-form-title p-b-34 p-t-27",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "Log in"), __jsx("div", {
      className: "wrap-input100 validate-input",
      "data-validate": "Enter username",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx("input", {
      className: "input100",
      type: "text",
      name: "username",
      placeholder: "Username",
      value: this.state.username,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "focus-input100",
      "data-placeholder": "\uF207",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "wrap-input100 validate-input",
      "data-validate": "Enter password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, __jsx("input", {
      className: "input100",
      type: "password",
      name: "password",
      placeholder: "Password",
      value: this.state.password,
      onChange: this.handleChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 15
      }
    }), __jsx("span", {
      className: "focus-input100",
      "data-placeholder": "\uF191",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "contact100-form-checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 66,
        columnNumber: 15
      }
    }), __jsx("label", {
      className: "label-checkbox100",
      htmlFor: "ckb1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, "Remember me")), __jsx("div", {
      className: "container-login100-form-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, __jsx("button", {
      className: "login100-form-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, "Login")), __jsx("div", {
      className: "text-center p-t-30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "txt1",
      href: "forgot_password.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
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
    }, "Smart University | Bootstrap Responsive Admin Template"), __jsx("link", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29va2llcy9Db29raWVzLmpzIiwid2VicGFjazovLy8uL1JlcXVlc3QvaW13X3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNldENvb2tpZSIsImNuYW1lIiwiY3ZhbHVlIiwiZXhkYXlzIiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsImdldENvb2tpZSIsIm5hbWUiLCJjYSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY2hlY2tDb29raWUiLCJ1c2VybmFtZSIsImFsZXJ0IiwicHJvbXB0IiwiU2VuZF9Qb3N0X1Jlc3RBUEkiLCJ1cmwiLCJkYXRhIiwicmVzIiwibWV0aG9kIiwibW9kZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIlNlbmRfR2V0X1Jlc3RBUEkiLCJmZXRjaFByb21pc2VkIiwicmVzb2x2ZSIsIlRoZW1lQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIkxvZ2luQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJpbnB1dFBvc3QiLCJqc29uIiwiVXNlck5hbWUiLCJQYXNzIiwiVXNlcl9JRCIsInJlcGxhY2UiLCJSb3V0ZXIiLCJwdXNoIiwicmVuZGVyIiwibG9naW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLFdBQVMsRUFBRSxVQUFTQyxLQUFULEVBQWdCQyxNQUFoQixFQUF3QkMsTUFBeEIsRUFBK0I7QUFDdEMsV0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEtBQWtCO0FBQ2pDLFVBQUlDLENBQUMsR0FBRyxJQUFJQyxJQUFKLEVBQVI7QUFDQUQs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LEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsa0VBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFUQyxFQVVEO0FBQU0sVUFBSSxFQUFDLG1EQUFYO0FBQStELFNBQUcsRUFBQyxZQUFuRTtBQUFnRixVQUFJLEVBQUMsVUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZDLEVBV0Q7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMscUNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYQyxFQVlEO0FBQU0sU0FBRyxFQUFDLGVBQVY7QUFBMEIsVUFBSSxFQUFDLDJCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkMsQ0FERCxFQWVBLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWZBLEVBZ0JGO0FBQVEsU0FBRyxFQUFDLHdDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoQkUsRUFpQkY7QUFBUSxTQUFHLEVBQUMsaURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpCRSxFQWtCRjtBQUFRLFNBQUcsRUFBQyx5Q0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEJFLENBREo7QUFzQkg7O0FBekJnQztBQTRCdEJDLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDakNBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2V0Q29va2llOiBmdW5jdGlvbihjbmFtZSwgY3ZhbHVlLCBleGRheXMpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb3ZlLCByZWplY3QpPT57XHJcbiAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGV4ZGF5cyoyNCo2MCo2MCoxMDAwKSk7XHJcbiAgICAgICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiKyBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjsgXCIgKyBleHBpcmVzO1xyXG4gICAgICAgICAgICAvL3JlamVjdCgnZXJyb3InKTtcclxuICAgICAgICAgICAgcmVzb3ZlKGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldENvb2tpZTogZnVuY3Rpb24gKGNuYW1lKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb3ZlLCByZWplY3QpPT57XHJcbiAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc292ZShjYSk7XHJcbiAgICAgICAgICAvL3JlamVjdCgnZXJyb3InKTtcclxuICAgICAgIFxyXG4gICAgICB9KTtcclxuICB9LFxyXG4gIGNoZWNrQ29va2llOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgIHZhciB1c2VybmFtZT1nZXRDb29raWUoXCJ1c2VybmFtZVwiKTtcclxuICAgICAgICBpZiAodXNlcm5hbWUhPVwiXCIpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJXZWxjb21lIGFnYWluIFwiICsgdXNlcm5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lID0gcHJvbXB0KFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZTpcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGlmICh1c2VybmFtZSAhPSBcIlwiICYmIHVzZXJuYW1lICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInVzZXJuYW1lXCIsIHVzZXJuYW1lLCAzNjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHJlc292ZSh1c2VybmFtZSk7XHJcbiAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XHJcbiAgICAgXHJcbiAgICB9KTtcclxufSxcclxufSIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBTZW5kX1Bvc3RfUmVzdEFQSTogZnVuY3Rpb24odXJsLGRhdGEpe1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2godXJsLHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICAgICAgcmVzb3ZlKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgU2VuZF9HZXRfUmVzdEFQSTogZnVuY3Rpb24odXJsKXtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb3ZlLCByZWplY3QpPT57XG4gICAgICAgICAgY29uc3QgcmVzID0gZmV0Y2godXJsLHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAvL3JlamVjdCgnZXJyb3InKTtcbiAgICAgICAgICByZXNvdmUocmVzKTtcbiAgICAgIH0pO1xuICB9LFxuICBmZXRjaFByb21pc2VkOiBmdW5jdGlvbiAodXJsKSAge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIFNlbmRfR2V0X1Jlc3RBUEkodXJsLCByZXNvbHZlLCByZWplY3QpXG4gICAgfSlcbn0sXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge1NlbmRfUG9zdF9SZXN0QVBJfSBmcm9tICcuLi8uLi9SZXF1ZXN0L2ltd19yZXF1ZXN0JztcbmltcG9ydCB7c2V0Q29va2llfSBmcm9tICcuLi8uLi9Db29raWVzL0Nvb2tpZXMnXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCdsaWdodCcpO1xuXG5jbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIn07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIH0pO1xufVxuXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlucHV0UG9zdCA9IHtcInVzZXJuYW1lXCIgOiB0aGlzLnN0YXRlLnVzZXJuYW1lICwgXCJwYXNzd29yZFwiIDogdGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgbGV0IHJlcyA9IGF3YWl0IFNlbmRfUG9zdF9SZXN0QVBJKCdodHRwOi8vMjcuNzkuMC41MjozMDAxL2xvZ2luJyxpbnB1dFBvc3QpXG4gICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgbGV0IHtVc2VyTmFtZSxQYXNzLFVzZXJfSUR9ID0gZGF0YVswXTtcbiAgICAgICAgLypcbiAgICAgICAgY29uc29sZS5sb2coVXNlck5hbWUpIFxuICAgICAgICAgIGNvbnNvbGUubG9nKFBhc3MpXG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHRoaXMuc3RhdGUudXNlcm5hbWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBVc2VyTmFtZSk7XG4gICAgICAgICAgY29uc29sZS5sb2codHlwZW9mIFBhc3MpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFVzZXJOYW1lLmxlbmd0aClcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lLmxlbmd0aClcbiAgICAgICAgKi9cbiAgICAgaWYoIHRoaXMuc3RhdGUudXNlcm5hbWUgPT09IFVzZXJOYW1lLnJlcGxhY2UoL1xccy9nLCcnKSAmJiB0aGlzLnN0YXRlLnBhc3N3b3JkID09PSBQYXNzLnJlcGxhY2UoL1xccy9nLCcnKSl7XG4gICAgICBzZXRDb29raWUoYCR7dGhpcy5zdGF0ZS51c2VybmFtZX1gLFwiZXhwaXJlcz1UaHVcIixcIjAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQ1wiKVxuICAgICAgIFJvdXRlci5wdXNoKCcvJylcbiAgICAgfWVsc2V7XG4gICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGltaXRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDAgcGFnZS1iYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1sb2dpbjEwMFwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImxvZ2luMTAwLWZvcm0gdmFsaWRhdGUtZm9ybVwiIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWxvZ29cIj5cbiAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9XCIuLi9hc3NldHMvaW1nL2xvZ28tMi5wbmdcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9naW4xMDAtZm9ybS10aXRsZSBwLWItMzQgcC10LTI3XCI+XG4gICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwLWlucHV0MTAwIHZhbGlkYXRlLWlucHV0XCIgZGF0YS12YWxpZGF0ZT1cIkVudGVyIHVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dDEwMFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCIgZGF0YS1wbGFjZWhvbGRlcj1cIu+Ih1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcC1pbnB1dDEwMCB2YWxpZGF0ZS1pbnB1dFwiIGRhdGEtdmFsaWRhdGU9XCJFbnRlciBwYXNzd29yZFwiID5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0MTAwXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvY3VzLWlucHV0MTAwXCIgZGF0YS1wbGFjZWhvbGRlcj1cIu+GkVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdDEwMC1mb3JtLWNoZWNrYm94XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jaGVja2JveDEwMFwiIGlkPVwiY2tiMVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJyZW1lbWJlci1tZVwiIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbC1jaGVja2JveDEwMFwiIGh0bWxGb3I9XCJja2IxXCI+XG4gICAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9naW4xMDAtZm9ybS1idG5cIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJsb2dpbjEwMC1mb3JtLWJ0blwiID5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLXQtMzBcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidHh0MVwiIGhyZWY9XCJmb3Jnb3RfcGFzc3dvcmQuaHRtbFwiPlxuICAgICAgICAgICAgICAgIEZvcmdvdCBQYXNzd29yZD9cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTG9naW5Db21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkNvbXBvbmVudCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBsb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIvPlxyXG4gICAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmVzcG9uc2l2ZSBBZG1pbiBUZW1wbGF0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiUmVkc3Rhckhvc3BpdGFsXCIgLz5cclxuICAgICAgICAgICAgPHRpdGxlPlNtYXJ0IFVuaXZlcnNpdHkgfCBCb290c3RyYXAgUmVzcG9uc2l2ZSBBZG1pbiBUZW1wbGF0ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDMwMCw2MDAsNzAwJmFtcDtzdWJzZXQ9YWxsXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJmb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvaWNvbmljL2Nzcy9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9hc3NldHMvY3NzL3BhZ2VzL2V4dHJhX3BhZ2VzLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9hc3NldHMvaW1nL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TG9naW5Db21wb25lbnQvPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9qcXVlcnkvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvcGFnZXMvZXh0cmEtcGFnZXMvcGFnZXMuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9