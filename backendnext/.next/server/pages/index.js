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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "page-footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "page-footer-inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, " 2020 \xA9 CDKTDL", __jsx("a", {
      href: "mailto:trungthanhbmt.tran@gmail.com",
      target: "_top",
      className: "makerCss",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, "ThanhTran")), __jsx("div", {
      className: "scroll-to-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("i", {
      className: "icon-arrow-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick(event) {
    event.preventDefault();
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    console.log('test');
  }

  render() {
    return __jsx("div", {
      className: "page-header navbar navbar-fixed-top"
    }, __jsx("div", {
      className: "page-header-inner "
    }, __jsx("div", {
      className: "page-logo"
    }, __jsx("a", {
      href: "index.html"
    }, __jsx("span", {
      className: "logo-icon material-icons fa-rotate-45"
    }, "school"), __jsx("span", {
      className: "logo-default"
    }, "HOME"), " ")), __jsx("ul", {
      className: "nav navbar-nav navbar-left in"
    }, __jsx("li", null, __jsx("a", {
      href: "#",
      className: "menu-toggler sidebar-toggler"
    }, __jsx("i", {
      className: "icon-menu"
    })))), __jsx("form", {
      className: "search-form-opened",
      action: "#",
      method: "GET"
    }, __jsx("div", {
      className: "input-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Search...",
      name: "query"
    }), __jsx("span", {
      className: "input-group-btn"
    }, __jsx("a", {
      href: "javascript:;",
      className: "btn submit"
    }, __jsx("i", {
      className: "icon-magnifier"
    }))))), __jsx("a", {
      href: "javascript:;",
      className: "menu-toggler responsive-toggler",
      "data-toggle": "collapse",
      "data-target": ".navbar-collapse"
    }, __jsx("span", null)), __jsx("div", {
      className: "top-menu"
    }, __jsx("ul", {
      className: "nav navbar-nav pull-right"
    }, __jsx("li", null, __jsx("a", {
      href: "javascript:;",
      className: "fullscreen-btn"
    }, __jsx("i", {
      className: "fa fa-arrows-alt"
    }))), __jsx("li", {
      className: "dropdown language-switch"
    }, __jsx("a", {
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-expanded": "false"
    }, " ", __jsx("img", {
      src: "../assets/img/flags/gb.png",
      className: "position-left",
      alt: ""
    }), " English ", __jsx("span", {
      className: "fa fa-angle-down"
    })), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", null, __jsx("a", {
      className: "deutsch"
    }, __jsx("img", {
      src: "../assets/img/flags/de.png",
      alt: ""
    }), " Deutsch")), __jsx("li", null, __jsx("a", {
      className: "ukrainian"
    }, __jsx("img", {
      src: "../assets/img/flags/ua.png",
      alt: ""
    }), " \u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430")), __jsx("li", null, __jsx("a", {
      className: "english"
    }, __jsx("img", {
      src: "../assets/img/flags/gb.png",
      alt: ""
    }), " English")), __jsx("li", null, __jsx("a", {
      className: "espana"
    }, __jsx("img", {
      src: "../assets/img/flags/es.png",
      alt: ""
    }), " Espa\xF1a")), __jsx("li", null, __jsx("a", {
      className: "russian"
    }, __jsx("img", {
      src: "../assets/img/flags/ru.png",
      alt: ""
    }), " \u0420\u0443\u0441\u0441\u043A\u0438\u0439")))), __jsx("li", {
      className: "dropdown dropdown-extended dropdown-notification",
      id: "header_notification_bar"
    }, __jsx("a", {
      href: "javascript:;",
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "data-hover": "dropdown",
      "data-close-others": "true"
    }, __jsx("i", {
      className: "fa fa-bell-o"
    }), __jsx("span", {
      className: "badge headerBadgeColor1"
    }, " 6 ")), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "external"
    }, __jsx("h3", null, __jsx("span", {
      className: "bold"
    }, "Notifications")), __jsx("span", {
      className: "notification-label purple-bgcolor"
    }, "New 6")), __jsx("li", null, __jsx("ul", {
      className: "dropdown-menu-list small-slimscroll-style",
      "data-handle-color": "#637283"
    }, __jsx("li", null, __jsx("a", {
      href: "javascript:;"
    }, __jsx("span", {
      className: "time"
    }, "just now"), __jsx("span", {
      className: "details"
    }, __jsx("span", {
      className: "notification-icon circle deepPink-bgcolor"
    }, __jsx("i", {
      className: "fa fa-check"
    })), "Congratulations!. "))), __jsx("li", null, __jsx("a", {
      href: "javascript:;"
    }, __jsx("span", {
      className: "time"
    }, "3 mins"), __jsx("span", {
      className: "details"
    }, __jsx("span", {
      className: "notification-icon circle purple-bgcolor"
    }, __jsx("i", {
      className: "fa fa-user o"
    })), __jsx("b", null, "John Micle "), "is now following you. "))), __jsx("li", null, __jsx("a", {
      href: "javascript:;"
    }, __jsx("span", {
      className: "time"
    }, "7 mins"), __jsx("span", {
      className: "details"
    }, __jsx("span", {
      className: "notification-icon circle blue-bgcolor"
    }, __jsx("i", {
      className: "fa fa-comments-o"
    })), __jsx("b", null, "Sneha Jogi "), "sent you a message. "))), __jsx("li", null, __jsx("a", {
      href: "javascript:;"
    }, __jsx("span", {
      className: "time"
    }, "12 mins"), __jsx("span", {
      className: "details"
    }, __jsx("span", {
      className: "notification-icon circle pink"
    }, __jsx("i", {
      className: "fa fa-heart"
    })), __jsx("b", null, "Ravi Patel "), "like your photo. "))), __jsx("li", null, __jsx("a", {
      href: "javascript:;"
    }, __jsx("span", {
      className: "time"
    }, "15 mins"), __jsx("span", {
      className: "details"
    }, __jsx("span", {
      className: "notification-icon circle yellow"
    }, __jsx("i", {
      className: "fa fa-warning"
    })), " Warning! "))), __jsx("li", null, __jsx("a", {
      href: "javascript:;"
    }, __jsx("span", {
      className: "time"
    }, "10 hrs"), __jsx("span", {
      className: "details"
    }, __jsx("span", {
      className: "notification-icon circle red"
    }, __jsx("i", {
      className: "fa fa-times"
    })), " Application error. ")))), __jsx("div", {
      className: "dropdown-menu-footer"
    }, __jsx("a", {
      href: "javascript:void(0)"
    }, " All notifications "))))), __jsx("li", {
      className: "dropdown dropdown-extended dropdown-inbox",
      id: "header_inbox_bar"
    }, __jsx("a", {
      href: "javascript:;",
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "data-hover": "dropdown",
      "data-close-others": "true"
    }, __jsx("i", {
      className: "fa fa-envelope-o"
    }), __jsx("span", {
      className: "badge headerBadgeColor2"
    }, " 2 ")), __jsx("ul", {
      className: "dropdown-menu"
    }, __jsx("li", {
      className: "external"
    }, __jsx("h3", null, __jsx("span", {
      className: "bold"
    }, "Messages")), __jsx("span", {
      className: "notification-label cyan-bgcolor"
    }, "New 2")), __jsx("li", null, __jsx("ul", {
      className: "dropdown-menu-list small-slimscroll-style",
      "data-handle-color": "#637283"
    }, __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "photo"
    }, __jsx("img", {
      src: "../assets/img/prof/prof2.jpg",
      className: "img-circle",
      alt: ""
    })), __jsx("span", {
      className: "subject"
    }, __jsx("span", {
      className: "from"
    }, " Sarah Smith "), __jsx("span", {
      className: "time"
    }, "Just Now ")), __jsx("span", {
      className: "message"
    }, " Jatin I found you on LinkedIn... "))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "photo"
    }, __jsx("img", {
      src: "../assets/img/prof/prof3.jpg",
      className: "img-circle",
      alt: ""
    })), __jsx("span", {
      className: "subject"
    }, __jsx("span", {
      className: "from"
    }, " John Deo "), __jsx("span", {
      className: "time"
    }, "16 mins ")), __jsx("span", {
      className: "message"
    }, " Fwd: Important Notice Regarding Your Domain Name... "))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "photo"
    }, __jsx("img", {
      src: "../assets/img/prof/prof1.jpg",
      className: "img-circle",
      alt: ""
    })), __jsx("span", {
      className: "subject"
    }, __jsx("span", {
      className: "from"
    }, " Rajesh "), __jsx("span", {
      className: "time"
    }, "2 hrs ")), __jsx("span", {
      className: "message"
    }, " pls take a print of attachments. "))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "photo"
    }, __jsx("img", {
      src: "../assets/img/prof/prof8.jpg",
      className: "img-circle",
      alt: ""
    })), __jsx("span", {
      className: "subject"
    }, __jsx("span", {
      className: "from"
    }, " Lina Smith "), __jsx("span", {
      className: "time"
    }, "40 mins ")), __jsx("span", {
      className: "message"
    }, " Apply for Ortho Surgeon "))), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("span", {
      className: "photo"
    }, __jsx("img", {
      src: "../assets/img/prof/prof5.jpg",
      className: "img-circle",
      alt: ""
    })), __jsx("span", {
      className: "subject"
    }, __jsx("span", {
      className: "from"
    }, " Jacob Ryan "), __jsx("span", {
      className: "time"
    }, "46 mins ")), __jsx("span", {
      className: "message"
    }, " Request for leave application. ")))), __jsx("div", {
      className: "dropdown-menu-footer"
    }, __jsx("a", {
      href: "#"
    }, " All Messages "))))), __jsx("li", {
      className: "dropdown dropdown-user"
    }, __jsx("a", {
      href: "javascript:;",
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "data-hover": "dropdown",
      "data-close-others": "true"
    }, __jsx("img", {
      alt: "",
      className: "img-circle ",
      src: "../assets/img/dp.jpg"
    }), __jsx("span", {
      className: "username username-hide-on-mobile"
    }, " ", this.props.name, " "), __jsx("i", {
      className: "fa fa-angle-down"
    })), __jsx("ul", {
      className: "dropdown-menu dropdown-menu-default"
    }, __jsx("li", null, __jsx("a", {
      href: "user_profile.html"
    }, __jsx("i", {
      className: "icon-user"
    }), " Profile ")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icon-settings"
    }), " Settings")), __jsx("li", null, __jsx("a", {
      href: "#"
    }, __jsx("i", {
      className: "icon-directions"
    }), " Help")), __jsx("li", {
      className: "divider"
    }, " "), __jsx("li", null, __jsx("a", {
      href: "lock_screen.html"
    }, __jsx("i", {
      className: "icon-lock"
    }), " Lock")), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/login"
    }, __jsx("a", {
      onClick: this.handleClick
    }, __jsx("i", {
      className: "icon-logout"
    }), " Log Out "))))), __jsx("li", {
      className: "dropdown dropdown-quick-sidebar-toggler"
    }, __jsx("a", {
      id: "headerSettingButton",
      className: "mdl-button mdl-js-button mdl-button--icon pull-right",
      "data-upgraded": ",MaterialButton"
    }, __jsx("i", {
      className: "material-icons"
    }, "more_vert")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/QuickSetting.js":
/*!************************************!*\
  !*** ./components/QuickSetting.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\QuickSetting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class QuickSetting extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "settingSidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx("a", {
      href: "javascript:void(0)",
      className: "settingPanelToggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 3
      }
    }, " ", __jsx("i", {
      className: "fa fa-spin fa-cog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 64
      }
    })), __jsx("div", {
      className: "settingSidebar-body ps-container ps-theme-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: " fade show active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "setting-panel-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, "Setting Panel"), __jsx("div", {
      className: "quick-setting slimscroll-style",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx("ul", {
      id: "themecolors",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "sidebarSettingTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, "Sidebar Color")), __jsx("li", {
      className: "complete",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "theme-color sidebar-theme",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: " ",
      "data-theme": "white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 46
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 71
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 45
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 70
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 45
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 70
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "indigo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 47
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 72
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "cyan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 45
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 70
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 46
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 71
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 44
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 69
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "sidebarSettingTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, "Header Brand color")), __jsx("li", {
      className: "theme-option",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "theme-color logo-theme",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: " ",
      "data-theme": "logo-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 51
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 76
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "logo-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 50
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 75
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "logo-blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 50
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 75
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "logo-indigo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 52
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 77
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "logo-cyan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 50
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 75
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "logo-green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 51
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 76
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "logo-red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 49
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 74
      }
    })))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx("p", {
      className: "sidebarSettingTitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, "Header color")), __jsx("li", {
      className: "theme-option",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "theme-color header-theme",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: " ",
      "data-theme": "header-white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 53
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 78
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "header-dark",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 52
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 77
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "header-blue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 52
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 77
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "header-indigo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 54
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 79
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "header-cyan",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 52
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 77
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "header-green",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 53
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 78
      }
    })), __jsx("a", {
      href: " ",
      "data-theme": "header-red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 51
      }
    }), __jsx("span", {
      className: "cont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 76
      }
    })))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuickSetting);

/***/ }),

/***/ "./components/SidebarMenu.js":
/*!***********************************!*\
  !*** ./components/SidebarMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class SidebarMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "sidebar-container"
    }, __jsx("div", {
      className: "sidemenu-container navbar-collapse collapse fixed-menu"
    }, __jsx("div", {
      id: "remove-scroll",
      className: "left-sidemenu"
    }, __jsx("ul", {
      className: "sidemenu  page-header-fixed slimscroll-style",
      "data-keep-expanded": "false",
      "data-auto-scroll": "true",
      "data-slide-speed": 200,
      style: {
        paddingTop: '20px'
      }
    }, __jsx("li", {
      className: "sidebar-toggler-wrapper hide"
    }, __jsx("div", {
      className: "sidebar-toggler"
    }, __jsx("span", null))), __jsx("li", {
      className: "sidebar-user-panel"
    }, __jsx("div", {
      className: "user-panel"
    }, __jsx("div", {
      className: "pull-left image"
    }, __jsx("img", {
      src: "../assets/img/dp.jpg",
      className: "img-circle user-img-circle",
      alt: "User Image"
    })), __jsx("div", {
      className: "pull-left info"
    }, __jsx("p", null, " Hello Thanh"), __jsx("a", {
      href: ""
    }, __jsx("i", {
      className: "fa fa-circle user-online"
    }), __jsx("span", {
      className: "txtOnline"
    }, "Online"))))), __jsx("li", {
      className: "nav-item start ",
      className: "nav-item active open"
    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/scores/addscores"
    }, __jsx("a", {
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "dashboard"), __jsx("span", {
      className: "title"
    }, "Scores"), __jsx("span", {
      className: "arrow"
    }))), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: true,
      href: "/scores/score"
    }, __jsx("a", {
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "MainScores"))), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: true,
      href: "/scores/addscores"
    }, __jsx("a", {
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "AddScores")))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "event.html",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "event"), __jsx("span", {
      className: "title"
    }, "Event Management"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "person"), __jsx("span", {
      className: "title"
    }, "Professors"), " ", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "all_professors.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Professors"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_professor.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Professor"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_professor_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Professor Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Professor"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "About Professor"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "group"), __jsx("span", {
      className: "title"
    }, "Students"), __jsx("span", {
      className: "selected"
    }), __jsx("span", {
      className: "arrow open"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item active"
    }, __jsx("a", {
      href: "all_students.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Students"), __jsx("span", {
      className: "selected"
    }))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_student.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Student"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_student_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Student Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_student.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Student"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "student_profile.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "About Student"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "school"), __jsx("span", {
      className: "title"
    }, "Courses"), " ", __jsx("span", {
      className: "arrow"
    }), __jsx("span", {
      className: "label label-rouded label-menu label-success"
    }, "new")), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "all_courses.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Courses"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_course.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Course"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_course_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Course Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_course.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Course"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "course_details.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "About Course"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "local_library"), __jsx("span", {
      className: "title"
    }, "Library"), " ", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "all_assets.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Library Assets"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_library.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Library Asset"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_library_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Asset Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_library.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Asset"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "business"), __jsx("span", {
      className: "title"
    }, "Departments"), " ", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "all_department.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Departments"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_department.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Department"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_department_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Department Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_department.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Department"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "face"), __jsx("span", {
      className: "title"
    }, "Staff"), " ", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/staffs/staff"
    }, __jsx("a", {
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Staff")))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_staff.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Staff"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_staff_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Staff Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_staff.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Staff"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "staff_profile.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Staff Profile"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "airline_seat_individual_suite"), __jsx("span", {
      className: "title"
    }, "Holiday"), " ", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "all_holidays.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "All Holiday"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_holiday.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Holiday"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_holiday_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Holiday Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "edit_holiday.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Edit Holiday"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "holiday_calendar.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Holiday Calendar"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "email"), __jsx("span", {
      className: "title"
    }, "Email"), __jsx("span", {
      className: "arrow"
    }), __jsx("span", {
      className: "label label-rouded label-menu label-danger"
    }, "new")), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "email_inbox.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Inbox"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "email_view.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "View Mail"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "email_compose.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Compose Mail"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "monetization_on"), __jsx("span", {
      className: "title"
    }, "Fees"), " ", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "fees_collection.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Fees Collection"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_fees.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Fees "))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "add_fees_bootstrap.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Add Fees Bootstrap"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "fees_receipt.html",
      className: "nav-link "
    }, " ", __jsx("span", {
      className: "title"
    }, "Fee Receipt"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "widget.html",
      className: "nav-link nav-toggle"
    }, " ", __jsx("i", {
      className: "material-icons"
    }, "widgets"), __jsx("span", {
      className: "title"
    }, "Widget"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "dvr"), __jsx("span", {
      className: "title"
    }, "UI Elements"), __jsx("span", {
      className: "label label-rouded label-menu label-warning"
    }, "new"), __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_buttons.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Buttons"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_sweet_alert.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Sweet Alert"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_tabs_accordions_navs.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Tabs & Accordions"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_typography.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Typography"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "notification.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Notification"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_icons.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Icons"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_panels.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Panels"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_grid.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Grids"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "calendar.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Calender"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_tree.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Tree View"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "ui_carousel.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Carousel"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "store"), __jsx("span", {
      className: "title"
    }, "Material Elements"), __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_button.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Buttons"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_tab.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Tabs"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_chips.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Chips"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_grid.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Grid"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_icons.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Icon"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_form.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Form"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_datepicker.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "DatePicker"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_select.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Select Item"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_loading.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Loading"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_menu.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Menu"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_slider.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Slider"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_tables.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Tables"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_toggle.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Toggle"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "material_badges.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Badges"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "subtitles"), __jsx("span", {
      className: "title"
    }, "Forms "), __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "layouts_form.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Form Layout"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "advance_form.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Advance Component"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "wizard.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Form Wizard"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "validation_form.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Form Validation"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "editable_form.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Editor"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "list"), __jsx("span", {
      className: "title"
    }, "Data Tables"), __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "basic_table.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Basic Tables"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "advanced_table.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Advance Tables"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "export_table.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Export Tables"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "child_row_table.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Child Row Tables"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "group_table.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Grouping"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "tableData.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Tables With Sourced Data"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "timeline"), __jsx("span", {
      className: "title"
    }, "Charts"), __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "charts_apexchart.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Apex chart"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "charts_amchart.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "amChart"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "charts_echarts.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "eCharts"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "charts_morris.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Morris Charts"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "charts_chartjs.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Chartjs"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "map"), __jsx("span", {
      className: "title"
    }, "Maps"), __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "google_maps.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Google Maps"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "vector_maps.html",
      className: "nav-link "
    }, __jsx("span", {
      className: "title"
    }, "Vector Maps"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "material-icons"
    }, "slideshow"), __jsx("span", {
      className: "title"
    }, "Multi Level Menu"), __jsx("span", {
      className: "arrow "
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "fa fa-university"
    }), " Item 1", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "fa fa-bell-o"
    }), " Arrow Toggle", __jsx("span", {
      className: "arrow "
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-calculator"
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-clone"
    }), " Sample Link 2")), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-cogs"
    }), " Sample Link 3")))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-file-pdf-o"
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-rss"
    }), " Sample Link 2")), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-hdd-o"
    }), " Sample Link 3")))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle"
    }, __jsx("i", {
      className: "fa fa-gavel"
    }), " Arrow Toggle", __jsx("span", {
      className: "arrow"
    })), __jsx("ul", {
      className: "sub-menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-paper-plane"
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-power-off"
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-recycle"
    }), " Sample Link 1")))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "",
      className: "nav-link"
    }, __jsx("i", {
      className: "fa fa-volume-up"
    }), " Item 3 "))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SidebarMenu);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_QuickSetting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/QuickSetting */ "./components/QuickSetting.js");
/* harmony import */ var _components_SidebarMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SidebarMenu */ "./components/SidebarMenu.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Cookies/Cookies */ "./Cookies/Cookies.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps(ctx) {
    return {
      cookies: next_cookies__WEBPACK_IMPORTED_MODULE_7___default()(ctx).name || ''
    };
  }

  constructor(props) {
    super(props);
    this.props.children;
    this.state = {
      counters: "this is thanh",
      name: "thanh",
      students: this.props.results,
      check: props.cookies || ''
    };
  }

  render() {
    console.log(next_cookies__WEBPACK_IMPORTED_MODULE_7___default.a);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("meta", {
      charSet: "utf-8"
    }), __jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge"
    }), __jsx("meta", {
      content: "width=device-width, initial-scale=1",
      name: "viewport"
    }), __jsx("meta", {
      name: "description",
      content: "Responsive Admin Template"
    }), __jsx("meta", {
      name: "author",
      content: "SmartUniversity"
    }), __jsx("title", null, "CDKTDL"), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../fonts/simple-line-icons/simple-line-icons.min.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../fonts/font-awesome/css/font-awesome.min.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../fonts/material-design-icons/material-icon.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "../assets/plugins/bootstrap/css/bootstrap.min.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/plugins/summernote/summernote.css",
      rel: "stylesheet"
    }), __jsx("link", {
      href: "../assets/css/pages/inbox.min.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/plugins/material/material.min.css"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/css/material_style.css"
    }), __jsx("link", {
      href: "../assets/css/theme/light/theme_style.css",
      rel: "stylesheet",
      id: "rt_style_components",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/css/theme/light/style.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/css/plugins.min.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/css/responsive.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/css/theme/light/theme-color.css",
      rel: "stylesheet",
      type: "text/css"
    }), __jsx("link", {
      href: "../assets/plugins/dropzone/dropzone.css",
      rel: "stylesheet",
      media: "screen"
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/plugins/flatpicker/css/flatpickr.min.css"
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "../assets/img/favicon.ico"
    })), __jsx("div", {
      className: "page-wrapper"
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_components_QuickSetting__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
      className: "page-container"
    }, __jsx(_components_SidebarMenu__WEBPACK_IMPORTED_MODULE_4__["default"], this.props), this.props.children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx("script", {
      src: "../assets/plugins/jquery/jquery.min.js"
    }), __jsx("script", {
      src: "../assets/plugins/popper/popper.js"
    }), __jsx("script", {
      src: "../assets/plugins/jquery-blockui/jquery.blockui.min.js"
    }), __jsx("script", {
      src: "../assets/plugins/jquery-slimscroll/jquery.slimscroll.js"
    }), __jsx("script", {
      src: "../assets/plugins/bootstrap/js/bootstrap.min.js"
    }), __jsx("script", {
      src: "../assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js"
    }), __jsx("script", {
      src: "../assets/plugins/datatables/jquery.dataTables.min.js"
    }), __jsx("script", {
      src: "../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js"
    }), __jsx("script", {
      src: "../assets/js/pages/table/table_data.js"
    }), __jsx("script", {
      src: "../assets/js/app.js"
    }), __jsx("script", {
      src: "../assets/js/layout.js"
    }), __jsx("script", {
      src: "../assets/js/theme-color.js"
    }), __jsx("script", {
      src: "../assets/plugins/material/material.min.js"
    }), __jsx("script", {
      src: "../assets/js/pages/material-select/getmdl-select.js"
    }), __jsx("script", {
      src: "../assets/plugins/flatpicker/js/flatpicker.min.js"
    }), __jsx("script", {
      src: "../assets/js/pages/date-time/date-time.init.js"
    }), __jsx("script", {
      src: "../assets/plugins/dropzone/dropzone.js"
    }), __jsx("script", {
      src: "../assets/plugins/dropzone/dropzone-call.js"
    }), __jsx("script", {
      src: "../assets/plugins/apexcharts/apexcharts.min.js"
    }), __jsx("script", {
      src: "../assets/js/pages/chart/chartjs/home-data.js"
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9Db29raWVzL0Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWlja1NldHRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlYmFyTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInNldENvb2tpZSIsImNuYW1lIiwiY3ZhbHVlIiwiZXhkYXlzIiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsImdldENvb2tpZSIsIm5hbWUiLCJjYSIsInNwbGl0IiwiaSIsImxlbmd0aCIsImMiLCJjaGFyQXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiY2hlY2tDb29raWUiLCJ1c2VybmFtZSIsImFsZXJ0IiwicHJvbXB0IiwiRm9vdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiSGVhZGVyIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiUXVpY2tTZXR0aW5nIiwiU2lkZWJhck1lbnUiLCJwYWRkaW5nVG9wIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJoYXNXYXJuZWQiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEhyZWYiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIndhcm4iLCJQcm9wVHlwZXMiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZ2V0IiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsInN0YXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwib3B0aW9ucyIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJzZWFyY2hQYXJhbXMiLCJBcnJheSIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0Iiwia2V5IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwib3B0aW9uYWwiLCJyZXBlYXQiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50IiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleCIsImNvb2tpZXMiLCJDb29raWVzIiwiY291bnRlcnMiLCJzdHVkZW50cyIsInJlc3VsdHMiLCJjaGVjayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7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LHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBzZXRDb29raWU6IGZ1bmN0aW9uKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuICAgICAgICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiOyBcIiArIGV4cGlyZXM7XHJcbiAgICAgICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xyXG4gICAgICAgICAgICByZXNvdmUoZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q29va2llOiBmdW5jdGlvbiAoY25hbWUpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gY25hbWUgKyBcIj1cIjtcclxuICAgICAgICAgICAgICAgIHZhciBjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8Y2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKT09JyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCxjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb3ZlKGMpO1xyXG4gICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XHJcbiAgICAgICBcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBjaGVja0Nvb2tpZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICB2YXIgdXNlcm5hbWU9Z2V0Q29va2llKFwiYWRtaW5cIik7XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lIT1cIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiV2VsY29tZSBhZ2FpbiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgIT0gXCJcIiAmJiB1c2VybmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSwgMzY1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvdmUodXNlcm5hbWUpO1xyXG4gICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xyXG4gICAgIFxyXG4gICAgfSk7XHJcbn0sXHJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyAgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZvb3Rlci1pbm5lclwiPiAyMDIwIMKpIENES1RETFxuICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86dHJ1bmd0aGFuaGJtdC50cmFuQGdtYWlsLmNvbVwiIHRhcmdldD1cIl90b3BcIiBjbGFzc05hbWU9XCJtYWtlckNzc1wiPlRoYW5oVHJhbjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYXJyb3ctdXBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuICBcbiAgYXN5bmMgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZG9jdW1lbnQuY29va2llID0gXCJ1c2VybmFtZT07IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEM7IHBhdGg9LztcIjtcbiAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXIgbmF2YmFyIG5hdmJhci1maXhlZC10b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXItaW5uZXIgXCI+XG4gICAgICAgICAgICAgICAgey8qIGxvZ28gc3RhcnQgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1pY29uIG1hdGVyaWFsLWljb25zIGZhLXJvdGF0ZS00NVwiPnNjaG9vbDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby1kZWZhdWx0XCI+SE9NRTwvc3Bhbj4gPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiBsb2dvIGVuZCAqL31cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLWxlZnQgaW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWVudS10b2dnbGVyIHNpZGViYXItdG9nZ2xlclwiPjxpIGNsYXNzTmFtZT1cImljb24tbWVudVwiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1vcGVuZWRcIiBhY3Rpb249XCIjXCIgbWV0aG9kPVwiR0VUXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiBuYW1lPVwicXVlcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJidG4gc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLW1hZ25pZmllclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIHsvKiBzdGFydCBtb2JpbGUgbWVudSAqL31cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwibWVudS10b2dnbGVyIHJlc3BvbnNpdmUtdG9nZ2xlclwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgey8qIGVuZCBtb2JpbGUgbWVudSAqL31cbiAgICAgICAgICAgICAgICB7Lyogc3RhcnQgaGVhZGVyIG1lbnUgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IHB1bGwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJmdWxsc2NyZWVuLWJ0blwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93cy1hbHRcIiAvPjwvYT48L2xpPlxuICAgICAgICAgICAgICB7Lyogc3RhcnQgbGFuZ3VhZ2UgbWVudSAqL31cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGxhbmd1YWdlLXN3aXRjaFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4gPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2ZsYWdzL2diLnBuZ1wiIGNsYXNzTmFtZT1cInBvc2l0aW9uLWxlZnRcIiBhbHQ9XCJcIiAvPiBFbmdsaXNoIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkZXV0c2NoXCI+PGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2ZsYWdzL2RlLnBuZ1wiIGFsdD1cIlwiIC8+IERldXRzY2g8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1a3JhaW5pYW5cIj48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZmxhZ3MvdWEucG5nXCIgYWx0PVwiXCIgLz4g0KPQutGA0LDRl9C90YHRjNC60LA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJlbmdsaXNoXCI+PGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL2ZsYWdzL2diLnBuZ1wiIGFsdD1cIlwiIC8+IEVuZ2xpc2g8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJlc3BhbmFcIj48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZmxhZ3MvZXMucG5nXCIgYWx0PVwiXCIgLz4gRXNwYcOxYTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJ1c3NpYW5cIj48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZmxhZ3MvcnUucG5nXCIgYWx0PVwiXCIgLz4g0KDRg9GB0YHQutC40Lk8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIHsvKiBlbmQgbGFuZ3VhZ2UgbWVudSAqL31cbiAgICAgICAgICAgICAgey8qIHN0YXJ0IG5vdGlmaWNhdGlvbiBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLWV4dGVuZGVkIGRyb3Bkb3duLW5vdGlmaWNhdGlvblwiIGlkPVwiaGVhZGVyX25vdGlmaWNhdGlvbl9iYXJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGRhdGEtaG92ZXI9XCJkcm9wZG93blwiIGRhdGEtY2xvc2Utb3RoZXJzPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmVsbC1vXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGhlYWRlckJhZGdlQ29sb3IxXCI+IDYgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImV4dGVybmFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+Tm90aWZpY2F0aW9uczwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tbGFiZWwgcHVycGxlLWJnY29sb3JcIj5OZXcgNjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWxpc3Qgc21hbGwtc2xpbXNjcm9sbC1zdHlsZVwiIGRhdGEtaGFuZGxlLWNvbG9yPVwiIzYzNzI4M1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPmp1c3Qgbm93PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWljb24gY2lyY2xlIGRlZXBQaW5rLWJnY29sb3JcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmdyYXR1bGF0aW9ucyEuIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPjMgbWluczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pY29uIGNpcmNsZSBwdXJwbGUtYmdjb2xvclwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXIgb1wiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPkpvaG4gTWljbGUgPC9iPmlzIG5vdyBmb2xsb3dpbmcgeW91LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj43IG1pbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taWNvbiBjaXJjbGUgYmx1ZS1iZ2NvbG9yXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY29tbWVudHMtb1wiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlNuZWhhIEpvZ2kgPC9iPnNlbnQgeW91IGEgbWVzc2FnZS4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+MTIgbWluczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pY29uIGNpcmNsZSBwaW5rXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaGVhcnRcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5SYXZpIFBhdGVsIDwvYj5saWtlIHlvdXIgcGhvdG8uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPjE1IG1pbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taWNvbiBjaXJjbGUgeWVsbG93XCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtd2FybmluZ1wiIC8+PC9zcGFuPiBXYXJuaW5nISA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj4xMCBocnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taWNvbiBjaXJjbGUgcmVkXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAvPjwvc3Bhbj4gQXBwbGljYXRpb24gZXJyb3IuIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPiBBbGwgbm90aWZpY2F0aW9ucyA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB7LyogZW5kIG5vdGlmaWNhdGlvbiBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgey8qIHN0YXJ0IG1lc3NhZ2UgZHJvcGRvd24gKi99XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93biBkcm9wZG93bi1leHRlbmRlZCBkcm9wZG93bi1pbmJveFwiIGlkPVwiaGVhZGVyX2luYm94X2JhclwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgZGF0YS1ob3Zlcj1cImRyb3Bkb3duXCIgZGF0YS1jbG9zZS1vdGhlcnM9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZS1vXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGhlYWRlckJhZGdlQ29sb3IyXCI+IDIgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImV4dGVybmFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz48c3BhbiBjbGFzc05hbWU9XCJib2xkXCI+TWVzc2FnZXM8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWxhYmVsIGN5YW4tYmdjb2xvclwiPk5ldyAyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtbGlzdCBzbWFsbC1zbGltc2Nyb2xsLXN0eWxlXCIgZGF0YS1oYW5kbGUtY29sb3I9XCIjNjM3MjgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMi5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJqZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnJvbVwiPiBTYXJhaCBTbWl0aCA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPkp1c3QgTm93IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+IEphdGluIEkgZm91bmQgeW91IG9uIExpbmtlZEluLi4uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjMuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZyb21cIj4gSm9obiBEZW8gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj4xNiBtaW5zIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+IEZ3ZDogSW1wb3J0YW50IE5vdGljZSBSZWdhcmRpbmcgWW91ciBEb21haW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lLi4uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjEuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZyb21cIj4gUmFqZXNoIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+MiBocnMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj4gcGxzIHRha2UgYSBwcmludCBvZiBhdHRhY2htZW50cy4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mOC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJqZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnJvbVwiPiBMaW5hIFNtaXRoIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+NDAgbWlucyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPiBBcHBseSBmb3IgT3J0aG8gU3VyZ2VvbiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y1LmpwZ1wiIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmplY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmcm9tXCI+IEphY29iIFJ5YW4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj40NiBtaW5zIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+IFJlcXVlc3QgZm9yIGxlYXZlIGFwcGxpY2F0aW9uLiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IEFsbCBNZXNzYWdlcyA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB7LyogZW5kIG1lc3NhZ2UgZHJvcGRvd24gKi99XG4gICAgICAgICAgICAgIHsvKiBzdGFydCBtYW5hZ2UgdXNlciBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLXVzZXJcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGRhdGEtaG92ZXI9XCJkcm9wZG93blwiIGRhdGEtY2xvc2Utb3RoZXJzPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlIFwiIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZHAuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJuYW1lIHVzZXJuYW1lLWhpZGUtb24tbW9iaWxlXCI+IHt0aGlzLnByb3BzLm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVzZXJfcHJvZmlsZS5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCIgLz4gUHJvZmlsZSA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tc2V0dGluZ3NcIiAvPiBTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZGlyZWN0aW9uc1wiIC8+IEhlbHBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXZpZGVyXCI+IDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJsb2NrX3NjcmVlbi5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb2NrXCIgLz4gTG9ja1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvbG9naW4nID5cbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb2dvdXRcIiAvPiBMb2cgT3V0IDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB7LyogZW5kIG1hbmFnZSB1c2VyIGRyb3Bkb3duICovfVxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tcXVpY2stc2lkZWJhci10b2dnbGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgaWQ9XCJoZWFkZXJTZXR0aW5nQnV0dG9uXCIgY2xhc3NOYW1lPVwibWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uIG1kbC1idXR0b24tLWljb24gcHVsbC1yaWdodFwiIGRhdGEtdXBncmFkZWQ9XCIsTWF0ZXJpYWxCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNsYXNzIFF1aWNrU2V0dGluZyBleHRlbmRzICBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nU2lkZWJhclwiPlxuICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwic2V0dGluZ1BhbmVsVG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXNwaW4gZmEtY29nXCIgLz5cbiAgPC9hPlxuICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdTaWRlYmFyLWJvZHkgcHMtY29udGFpbmVyIHBzLXRoZW1lLWRlZmF1bHRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmYWRlIHNob3cgYWN0aXZlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctcGFuZWwtaGVhZGVyXCI+U2V0dGluZyBQYW5lbFxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1aWNrLXNldHRpbmcgc2xpbXNjcm9sbC1zdHlsZVwiPlxuICAgICAgICA8dWwgaWQ9XCJ0aGVtZWNvbG9yc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGViYXJTZXR0aW5nVGl0bGVcIj5TaWRlYmFyIENvbG9yPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbXBsZXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNvbG9yIHNpZGViYXItdGhlbWVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwid2hpdGVcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImRhcmtcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImJsdWVcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImluZGlnb1wiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiY3lhblwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiZ3JlZW5cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cInJlZFwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2lkZWJhclNldHRpbmdUaXRsZVwiPkhlYWRlciBCcmFuZCBjb2xvcjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aGVtZS1vcHRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGhlbWUtY29sb3IgbG9nby10aGVtZVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJsb2dvLXdoaXRlXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJsb2dvLWRhcmtcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImxvZ28tYmx1ZVwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwibG9nby1pbmRpZ29cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImxvZ28tY3lhblwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwibG9nby1ncmVlblwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwibG9nby1yZWRcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGViYXJTZXR0aW5nVGl0bGVcIj5IZWFkZXIgY29sb3I8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGhlbWUtb3B0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNvbG9yIGhlYWRlci10aGVtZVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJoZWFkZXItd2hpdGVcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImhlYWRlci1kYXJrXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJoZWFkZXItYmx1ZVwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiaGVhZGVyLWluZGlnb1wiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiaGVhZGVyLWN5YW5cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImhlYWRlci1ncmVlblwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiaGVhZGVyLXJlZFwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFF1aWNrU2V0dGluZztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcblxuXG5jbGFzcyBTaWRlYmFyTWVudSBleHRlbmRzICBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW1lbnUtY29udGFpbmVyIG5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBmaXhlZC1tZW51XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJyZW1vdmUtc2Nyb2xsXCIgY2xhc3NOYW1lPVwibGVmdC1zaWRlbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlbWVudSAgcGFnZS1oZWFkZXItZml4ZWQgc2xpbXNjcm9sbC1zdHlsZVwiIGRhdGEta2VlcC1leHBhbmRlZD1cImZhbHNlXCIgZGF0YS1hdXRvLXNjcm9sbD1cInRydWVcIiBkYXRhLXNsaWRlLXNwZWVkPXsyMDB9IHN0eWxlPXt7cGFkZGluZ1RvcDogJzIwcHgnfX0+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci10b2dnbGVyLXdyYXBwZXIgaGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItdG9nZ2xlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLXVzZXItcGFuZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9kcC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlIHVzZXItaW1nLWNpcmNsZVwiIGFsdD1cIlVzZXIgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IGluZm9cIj5cbiAgICA8cD4gSGVsbG8gVGhhbmg8L3A+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHVzZXItb25saW5lXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0eHRPbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBPbmxpbmU8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gc3RhcnQgXCIgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlIG9wZW5cIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3Njb3Jlcy9hZGRzY29yZXMnPlxuICAgICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGFzaGJvYXJkPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2NvcmVzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2g9e3RydWV9IGhyZWY9Jy9zY29yZXMvc2NvcmUnPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TWFpblNjb3Jlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoPXt0cnVlfSBocmVmPScvc2NvcmVzL2FkZHNjb3Jlcyc+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRTY29yZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImV2ZW50Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5FdmVudCBNYW5hZ2VtZW50PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UHJvZmVzc29yczwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9wcm9mZXNzb3JzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BbGxcbiAgICAgICAgICAgICAgICAgICAgICBQcm9mZXNzb3JzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZmVzc29yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3Byb2Zlc3Nvcl9ib290c3RyYXAuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZCBQcm9mZXNzb3IgQm9vdHN0cmFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBQcm9mZXNzb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9mZXNzb3JfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICBQcm9mZXNzb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmdyb3VwPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U3R1ZGVudHM8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0ZWRcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93IG9wZW5cIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhbGxfc3R1ZGVudHMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFsbFxuICAgICAgICAgICAgICAgICAgICAgIFN0dWRlbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RlZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfc3R1ZGVudC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgU3R1ZGVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9zdHVkZW50X2Jvb3RzdHJhcC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgU3R1ZGVudCBCb290c3RyYXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3N0dWRlbnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBTdHVkZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwic3R1ZGVudF9wcm9maWxlLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BYm91dFxuICAgICAgICAgICAgICAgICAgICAgIFN0dWRlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zY2hvb2w8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Db3Vyc2VzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtcm91ZGVkIGxhYmVsLW1lbnUgbGFiZWwtc3VjY2Vzc1wiPm5ldzwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhbGxfY291cnNlcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWxsXG4gICAgICAgICAgICAgICAgICAgICAgQ291cnNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9jb3Vyc2UuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZFxuICAgICAgICAgICAgICAgICAgICAgIENvdXJzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9jb3Vyc2VfYm9vdHN0cmFwLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRcbiAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2UgQm9vdHN0cmFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9jb3Vyc2UuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjb3Vyc2VfZGV0YWlscy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhbF9saWJyYXJ5PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TGlicmFyeTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9hc3NldHMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFsbCBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgQXNzZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2xpYnJhcnkuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZCBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgQXNzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfbGlicmFyeV9ib290c3RyYXAuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZFxuICAgICAgICAgICAgICAgICAgICAgIEFzc2V0IEJvb3RzdHJhcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfbGlicmFyeS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdFxuICAgICAgICAgICAgICAgICAgICAgIEFzc2V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YnVzaW5lc3M8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5EZXBhcnRtZW50czwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9kZXBhcnRtZW50Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BbGxcbiAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9kZXBhcnRtZW50Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRcbiAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2RlcGFydG1lbnRfYm9vdHN0cmFwLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGQgRGVwYXJ0bWVudCBCb290c3RyYXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X2RlcGFydG1lbnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRtZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmFjZTwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0YWZmPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3N0YWZmcy9zdGFmZlwiPlxuICAgICAgICAgICAgICAgICAgPGEgIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFsbFxuICAgICAgICAgICAgICAgICAgICAgIFN0YWZmPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3N0YWZmLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGQgU3RhZmY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfc3RhZmZfYm9vdHN0cmFwLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRcbiAgICAgICAgICAgICAgICAgICAgICBTdGFmZiBCb290c3RyYXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3N0YWZmLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5FZGl0XG4gICAgICAgICAgICAgICAgICAgICAgU3RhZmY8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJzdGFmZl9wcm9maWxlLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5TdGFmZlxuICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5haXJsaW5lX3NlYXRfaW5kaXZpZHVhbF9zdWl0ZTwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkhvbGlkYXk8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhbGxfaG9saWRheXMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFsbFxuICAgICAgICAgICAgICAgICAgICAgIEhvbGlkYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfaG9saWRheS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgSG9saWRheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9ob2xpZGF5X2Jvb3RzdHJhcC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgSG9saWRheSBCb290c3RyYXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X2hvbGlkYXkuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBIb2xpZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaG9saWRheV9jYWxlbmRhci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+SG9saWRheVxuICAgICAgICAgICAgICAgICAgICAgIENhbGVuZGFyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbWFpbDwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1yb3VkZWQgbGFiZWwtbWVudSBsYWJlbC1kYW5nZXJcIj5uZXc8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWxfaW5ib3guaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkluYm94PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWxfdmlldy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VmlldyBNYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWxfY29tcG9zZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9zZSBNYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bW9uZXRpemF0aW9uX29uPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RmVlczwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImZlZXNfY29sbGVjdGlvbi5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RmVlc1xuICAgICAgICAgICAgICAgICAgICAgIENvbGxlY3Rpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfZmVlcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkIEZlZXMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2ZlZXNfYm9vdHN0cmFwLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRcbiAgICAgICAgICAgICAgICAgICAgICBGZWVzIEJvb3RzdHJhcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImZlZXNfcmVjZWlwdC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RmVlXG4gICAgICAgICAgICAgICAgICAgICAgUmVjZWlwdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwid2lkZ2V0Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+d2lkZ2V0czwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPldpZGdldDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZHZyPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VUkgRWxlbWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtcm91ZGVkIGxhYmVsLW1lbnUgbGFiZWwtd2FybmluZ1wiPm5ldzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidWlfYnV0dG9ucy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QnV0dG9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVpX3N3ZWV0X2FsZXJ0Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Td2VldCBBbGVydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVpX3RhYnNfYWNjb3JkaW9uc19uYXZzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UYWJzICZhbXA7IEFjY29yZGlvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ1aV90eXBvZ3JhcGh5Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UeXBvZ3JhcGh5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibm90aWZpY2F0aW9uLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Ob3RpZmljYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ1aV9pY29ucy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+SWNvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ1aV9wYW5lbHMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlBhbmVsczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVpX2dyaWQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkdyaWRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2FsZW5kYXIuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNhbGVuZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidWlfdHJlZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VHJlZSBWaWV3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidWlfY2Fyb3VzZWwuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNhcm91c2VsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdG9yZTwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hdGVyaWFsIEVsZW1lbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9idXR0b24uaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkJ1dHRvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF90YWIuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRhYnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9jaGlwcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q2hpcHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9ncmlkLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5HcmlkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfaWNvbnMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkljb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9mb3JtLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfZGF0ZXBpY2tlci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGF0ZVBpY2tlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hdGVyaWFsX3NlbGVjdC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VsZWN0IEl0ZW08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9sb2FkaW5nLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Mb2FkaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfbWVudS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hdGVyaWFsX3NsaWRlci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2xpZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfdGFibGVzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF90b2dnbGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRvZ2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hdGVyaWFsX2JhZGdlcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QmFkZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdWJ0aXRsZXM8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtcyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImxheW91dHNfZm9ybS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Rm9ybSBMYXlvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZHZhbmNlX2Zvcm0uaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkdmFuY2UgQ29tcG9uZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwid2l6YXJkLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtIFdpemFyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInZhbGlkYXRpb25fZm9ybS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Rm9ybSBWYWxpZGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdGFibGVfZm9ybS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5saXN0PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGF0YSBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImJhc2ljX3RhYmxlLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5CYXNpYyBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZHZhbmNlZF90YWJsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWR2YW5jZSBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJleHBvcnRfdGFibGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV4cG9ydCBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaGlsZF9yb3dfdGFibGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNoaWxkIFJvdyBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJncm91cF90YWJsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+R3JvdXBpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0YWJsZURhdGEuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRhYmxlcyBXaXRoIFNvdXJjZWQgRGF0YTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dGltZWxpbmU8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DaGFydHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNoYXJ0c19hcGV4Y2hhcnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFwZXggY2hhcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaGFydHNfYW1jaGFydC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+YW1DaGFydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNoYXJ0c19lY2hhcnRzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5lQ2hhcnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2hhcnRzX21vcnJpcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TW9ycmlzIENoYXJ0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNoYXJ0c19jaGFydGpzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DaGFydGpzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tYXA8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5NYXBzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJnb29nbGVfbWFwcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+R29vZ2xlIE1hcHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ2ZWN0b3JfbWFwcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VmVjdG9yIE1hcHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNsaWRlc2hvdzwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk11bHRpIExldmVsIE1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3cgXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVuaXZlcnNpdHlcIiAvPiBJdGVtIDFcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZWxsLW9cIiAvPiBBcnJvdyBUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93IFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNhbGN1bGF0b3JcIiAvPiBTYW1wbGUgTGluayAxPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9uZVwiIC8+IFNhbXBsZSBMaW5rIDI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZ3NcIiAvPiBTYW1wbGUgTGluayAzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtcGRmLW9cIiAvPiBTYW1wbGUgTGluayAxPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJzc1wiIC8+IFNhbXBsZSBMaW5rIDI8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtaGRkLW9cIiAvPiBTYW1wbGUgTGluayAzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2F2ZWxcIiAvPiBBcnJvdyBUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGFwZXItcGxhbmVcIiAvPiBTYW1wbGUgTGluayAxPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBvd2VyLW9mZlwiIC8+IFNhbXBsZSBMaW5rIDE8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcmVjeWNsZVwiIC8+IFNhbXBsZSBMaW5rIDFcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdm9sdW1lLXVwXCIgLz4gSXRlbSAzIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJNZW51OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICBOZXh0Um91dGVyLFxuICBpc0xvY2FsVVJMLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGV4ZWNPbmNlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyBhZGRCYXNlUGF0aCwgcmVzb2x2ZUhyZWYgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7XG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGJhc2VQYXRoICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihjdXJyZW50UGF0aDogc3RyaW5nLCBocmVmOiBVcmwpOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgOiBmaW5hbFVybC5ocmVmXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gdXJsQXNTdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgKVxuICAgICAgfSwgMClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICB1cGRhdGUocm91dGU6IHN0cmluZywgbW9kOiBhbnkpIHtcbiAgICBjb25zdCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUgPSBtb2QuZGVmYXVsdCB8fCBtb2RcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgdXBkYXRlIHVuYXZhaWxhYmxlIHJvdXRlOiAke3JvdXRlfWApXG4gICAgfVxuXG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIF9fTl9TU0c6IG1vZC5fX05fU1NHLFxuICAgICAgX19OX1NTUDogbW9kLl9fTl9TU1AsXG4gICAgfSlcbiAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gbmV3RGF0YVxuXG4gICAgLy8gcGFnZXMvX2FwcC5qcyB1cGRhdGVkXG4gICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGUgPT09IHRoaXMucm91dGUpIHtcbiAgICAgIHRoaXMubm90aWZ5KG5ld0RhdGEpXG4gICAgfVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xlYW5lZEFzID0gaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXNcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyLCBlcnJvcjogZXJyIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICAgICAgKHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgICAgIH0gYXMgUm91dGVJbmZvKVxuICAgICAgICAgIClcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgYXNQYXRoKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFF1aWNrU2V0dGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWlja1NldHRpbmdcIjtcbmltcG9ydCBTaWRlYmFyTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyTWVudVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICduZXh0LWNvb2tpZXMnOyBcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHtnZXRDb29raWUsY2hlY2tDb29raWV9IGZyb20gJy4uL0Nvb2tpZXMvQ29va2llcydcbmltcG9ydCBjb29raWVzIGZyb20gXCJuZXh0LWNvb2tpZXNcIjtcblxuXG5cblxuZXhwb3J0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29va2llczogQ29va2llcyhjdHgpLm5hbWUgfHwgJydcbiAgICB9XG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb3VudGVyczogXCJ0aGlzIGlzIHRoYW5oXCIsXG4gICAgICBuYW1lOiBcInRoYW5oXCIsXG4gICAgICBzdHVkZW50czogdGhpcy5wcm9wcy5yZXN1bHRzLFxuICAgICAgY2hlY2s6IHByb3BzLmNvb2tpZXMgfHwgJydcbiAgICB9O1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coY29va2llcylcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgICAgPG1ldGEgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgbmFtZT1cInZpZXdwb3J0XCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiUmVzcG9uc2l2ZSBBZG1pbiBUZW1wbGF0ZVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJTbWFydFVuaXZlcnNpdHlcIiAvPlxuICAgICAgICAgIDx0aXRsZT5DREtUREw8L3RpdGxlPlxuICAgICAgICAgIHsvKiBnb29nbGUgZm9udCAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIGljb25zICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vZm9udHMvc2ltcGxlLWxpbmUtaWNvbnMvc2ltcGxlLWxpbmUtaWNvbnMubWluLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2ZvbnRzL2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9mb250cy9tYXRlcmlhbC1kZXNpZ24taWNvbnMvbWF0ZXJpYWwtaWNvbi5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgXHQ8bGluayBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvZGF0YXRhYmxlcy9wbHVnaW5zL2Jvb3RzdHJhcC9kYXRhVGFibGVzLmJvb3RzdHJhcDQubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgICAgey8qYm9vdHN0cmFwICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvYm9vdHN0cmFwL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICBcdDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9zdW1tZXJub3RlL3N1bW1lcm5vdGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgICAgICB7LyppbmJveCBzdHlsZSAqL31cbiAgICAgICAgICA8bGluayBocmVmPVwiLi4vYXNzZXRzL2Nzcy9wYWdlcy9pbmJveC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIC8+XG4gICAgICAgICAgey8qIE1hdGVyaWFsIERlc2lnbiBMaXRlIENTUyAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL3BsdWdpbnMvbWF0ZXJpYWwvbWF0ZXJpYWwubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvbWF0ZXJpYWxfc3R5bGUuY3NzXCIgLz5cbiAgICAgICAgICB7LyogVGhlbWUgU3R5bGVzICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL2Nzcy90aGVtZS9saWdodC90aGVtZV9zdHlsZS5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBpZD1cInJ0X3N0eWxlX2NvbXBvbmVudHNcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL2Nzcy90aGVtZS9saWdodC9zdHlsZS5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvY3NzL3BsdWdpbnMubWluLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvcmVzcG9uc2l2ZS5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvY3NzL3RoZW1lL2xpZ2h0L3RoZW1lLWNvbG9yLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogZHJvcHpvbmUgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9kcm9wem9uZS9kcm9wem9uZS5jc3NcIlxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBtZWRpYT1cInNjcmVlblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogRGF0ZSBUaW1lIGl0ZW0gQ1NTICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9mbGF0cGlja2VyL2Nzcy9mbGF0cGlja3IubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogZmF2aWNvbiAqL31cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi4uL2Fzc2V0cy9pbWcvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDxRdWlja1NldHRpbmcgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8U2lkZWJhck1lbnUgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9qcXVlcnkvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL3BvcHBlci9wb3BwZXIuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9qcXVlcnktYmxvY2t1aS9qcXVlcnkuYmxvY2t1aS5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9qcXVlcnktc2xpbXNjcm9sbC9qcXVlcnkuc2xpbXNjcm9sbC5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9ib290c3RyYXAtc3dpdGNoL2pzL2Jvb3RzdHJhcC1zd2l0Y2gubWluLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9kYXRhdGFibGVzL2pxdWVyeS5kYXRhVGFibGVzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2RhdGF0YWJsZXMvcGx1Z2lucy9ib290c3RyYXAvZGF0YVRhYmxlcy5ib290c3RyYXA0Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9wYWdlcy90YWJsZS90YWJsZV9kYXRhLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvYXBwLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL2xheW91dC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy90aGVtZS1jb2xvci5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvbWF0ZXJpYWwvbWF0ZXJpYWwubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL3BhZ2VzL21hdGVyaWFsLXNlbGVjdC9nZXRtZGwtc2VsZWN0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvZmxhdHBpY2tlci9qcy9mbGF0cGlja2VyLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9wYWdlcy9kYXRlLXRpbWUvZGF0ZS10aW1lLmluaXQuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Ryb3B6b25lL2Ryb3B6b25lLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvZHJvcHpvbmUvZHJvcHpvbmUtY2FsbC5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvYXBleGNoYXJ0cy9hcGV4Y2hhcnRzLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9wYWdlcy9jaGFydC9jaGFydGpzL2hvbWUtZGF0YS5qc1wiPjwvc2NyaXB0PlxuICAgICAgXG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29va2llc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9