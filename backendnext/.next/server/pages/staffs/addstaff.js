module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/staffs/addstaff.js");
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

/***/ "./Export/Excel.js":
/*!*************************!*\
  !*** ./Export/Excel.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  fnExcelReport: function (cname, cvalue, exdays) {
    return new Promise((resove, reject) => {
      var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
      var textRange;
      var j = 0;
      tab = document.getElementById('example4'); // id of table

      for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>"; //tab_text=tab_text+"</tr>";
      }

      tab_text = tab_text + "</table>";
      tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table

      tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table

      tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer
        {
          txtArea1.document.open("txt/html", "replace");
          txtArea1.document.write(tab_text);
          txtArea1.document.close();
          txtArea1.focus();
          sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
        } else //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

      resove(sa);
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
          'Content-Type': 'application/json; charset=utf-8',
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

/***/ "./components/ContainerComponents/LayoutContentPage/LayoutPage.js":
/*!************************************************************************!*\
  !*** ./components/ContainerComponents/LayoutContentPage/LayoutPage.js ***!
  \************************************************************************/
/*! exports provided: LayoutPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPage", function() { return LayoutPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _staff_HeaderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../staff/HeaderPage */ "./components/ContainerComponents/staff/HeaderPage.js");
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\LayoutContentPage\\LayoutPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class LayoutPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "page-content-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "page-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }, __jsx(_staff_HeaderPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }), this.props.children)));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (LayoutPage);

/***/ }),

/***/ "./components/ContainerComponents/staff/AddForm.js":
/*!*********************************************************!*\
  !*** ./components/ContainerComponents/staff/AddForm.js ***!
  \*********************************************************/
/*! exports provided: AddForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForm", function() { return AddForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\AddForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class AddForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getStaticProps(ctx) {
    let res_listsv = Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_1__["Send_Get_RestAPI"])("http://localhost:3001/student/list");
    let result_listsv = res_listsv.json();
    let res_typescore = Send_Get_Rest("http://localhost:3001/score/typescore");
    let result_typescore = res_typescore.json();
  }

  constructor(props) {
    super(props);
    this.GetlistDepartments = this.GetlistDepartments.bind(this);
  }

  async GetlistDepartments(event) {
    event.preventDefault();
    let res = await Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_1__["Send_Get_RestAPI"])('http://localhost:3001/scrore/1');
    let data = await res.json();
    console.log(data);
  }

  async GetListBranches() {
    console.log("this is nganh");
  }

  async GetListClasses() {
    console.log("this is classs");
  }

  async GetListSubjects() {
    console.log("this is subject");
  }

  async GetListStudents() {
    console.log("this is students");
  }

  async GetListTypeScore() {
    console.log("this is typescore");
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 18
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-sm-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "card-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 23
      }
    }, "Form Score"), __jsx("button", {
      id: "panel-button",
      className: "mdl-button mdl-js-button mdl-button--icon pull-right",
      "data-upgraded": ",MaterialButton",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, "more_vert")), __jsx("ul", {
      className: "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",
      "data-mdl-for": "panel-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "mdl-menu__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 27
      }
    }, "assistant_photo"), "Action"), __jsx("li", {
      className: "mdl-menu__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 27
      }
    }, "print"), "Another action"), __jsx("li", {
      className: "mdl-menu__item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 27
      }
    }, "favorite"), "Something else here"))), __jsx("div", {
      className: "card-body row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-lg-6 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "mdl-textfield__input",
      type: "text",
      id: "list2",
      defaultValue: true,
      readOnly: true,
      tabIndex: -1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 27
      }
    }), __jsx("label", {
      htmlFor: "list2",
      className: "pull-right margin-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "mdl-icon-toggle__label material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, "keyboard_arrow_down")), __jsx("label", {
      htmlFor: "list2",
      className: "mdl-textfield__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 27
      }
    }, "Department"), __jsx("ul", {
      "data-mdl-for": "list2",
      className: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
      onClick: this.GetlistDepartments,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 27
      }
    }, __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "DE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    }, "Library"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 29
      }
    }, "Administration"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, "Transport"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    }, "Laboratory")))), __jsx("div", {
      className: "col-lg-6 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "mdl-textfield__input",
      type: "text",
      id: "list10",
      defaultValue: true,
      readOnly: true,
      tabIndex: -1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 27
      }
    }), __jsx("label", {
      htmlFor: "list2",
      className: "pull-right margin-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "mdl-icon-toggle__label material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, "keyboard_arrow_down")), __jsx("label", {
      htmlFor: "list10",
      className: "mdl-textfield__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 27
      }
    }, "Brench"), __jsx("ul", {
      "data-mdl-for": "list10",
      className: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
      onClick: this.GetListBranches,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 27
      }
    }, __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "DE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 29
      }
    }, "Library"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 29
      }
    }, "Administration"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 29
      }
    }, "Transport"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    }, "Laboratory")))), __jsx("div", {
      className: "col-lg-6 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "mdl-textfield__input",
      type: "text",
      id: "list9",
      defaultValue: true,
      readOnly: true,
      tabIndex: -1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 27
      }
    }), __jsx("label", {
      htmlFor: "list2",
      className: "pull-right margin-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "mdl-icon-toggle__label material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 29
      }
    }, "keyboard_arrow_down")), __jsx("label", {
      htmlFor: "list9",
      className: "mdl-textfield__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 27
      }
    }, "Class"), __jsx("ul", {
      "data-mdl-for": "list9",
      className: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
      onClick: this.GetListClasses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 27
      }
    }, __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "DE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 29
      }
    }, "Library"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 29
      }
    }, "Administration"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 29
      }
    }, "Transport"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 29
      }
    }, "Laboratory")))), __jsx("div", {
      className: "col-lg-6 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "mdl-textfield__input",
      type: "text",
      id: "SelectBox5",
      defaultValue: true,
      readOnly: true,
      tabIndex: -1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 27
      }
    }), __jsx("label", {
      htmlFor: "SelectBox5",
      className: "pull-right margin-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "mdl-icon-toggle__label material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 29
      }
    }, "keyboard_arrow_down")), __jsx("label", {
      htmlFor: "SelectBox5",
      className: "mdl-textfield__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 27
      }
    }, "Subjects"), __jsx("ul", {
      "data-mdl-for": "SelectBox5",
      className: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
      onClick: this.GetListSubjects,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 27
      }
    }, __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "DE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 29
      }
    }, "Male"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 29
      }
    }, "Female")))), __jsx("div", {
      className: "col-lg-6 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "mdl-textfield__input",
      type: "text",
      id: "sample2",
      defaultValue: true,
      readOnly: true,
      tabIndex: -1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 27
      }
    }), __jsx("label", {
      htmlFor: "sample2",
      className: "pull-right margin-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "mdl-icon-toggle__label material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 29
      }
    }, "keyboard_arrow_down")), __jsx("label", {
      htmlFor: "sample2",
      className: "mdl-textfield__label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 27
      }
    }, "TypeScore"), __jsx("ul", {
      "data-mdl-for": "sample2",
      className: "mdl-menu mdl-menu--bottom-left mdl-js-menu",
      onClick: this.GetListTypeScore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 27
      }
    }, __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "DE",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 29
      }
    }, "Male"), __jsx("li", {
      className: "mdl-menu__item",
      "data-val": "BY",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 29
      }
    }, "Female")))), __jsx("div", {
      className: "col-lg-6 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "mdl-textfield__input",
      type: "text",
      pattern: "-?[0-9]*(\\.[0-9]+)?",
      id: "text5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 27
      }
    }), __jsx("label", {
      className: "mdl-textfield__label",
      htmlFor: "text5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 27
      }
    }, "Score:"), __jsx("span", {
      className: "mdl-textfield__error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 27
      }
    }, "Number required!"))), __jsx("div", {
      className: "col-lg-12 p-t-20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "mdl-textfield mdl-js-textfield txt-full-width",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 25
      }
    }, __jsx("textarea", {
      className: "mdl-textfield__input",
      rows: 4,
      id: "education",
      defaultValue: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 27
      }
    }), __jsx("label", {
      className: "mdl-textfield__label",
      htmlFor: "text7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 27
      }
    }, "Education"))), __jsx("div", {
      className: "col-lg-12 p-t-20 text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 23
      }
    }, __jsx("button", {
      type: "button",
      className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 25
      }
    }, "Submit"), __jsx("button", {
      type: "button",
      className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 25
      }
    }, "Cancel"))))))), __jsx("div", {
      className: "chat-sidebar-container",
      "data-close-on-body-click": "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "chat-sidebar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 15
      }
    }, __jsx("ul", {
      className: "nav nav-tabs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "#quick_sidebar_tab_1",
      className: "nav-link active tab-icon",
      "data-toggle": "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 21
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 23
      }
    }, "chat"), "Chat", __jsx("span", {
      className: "badge badge-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 23
      }
    }, "4"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "#quick_sidebar_tab_3",
      className: "nav-link tab-icon",
      "data-toggle": "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 21
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 23
      }
    }, "settings"), "Settings"))), __jsx("div", {
      className: "tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "tab-pane active chat-sidebar-chat in active show",
      role: "tabpanel",
      id: "quick_sidebar_tab_1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "chat-sidebar-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "chat-sidebar-chat-users slimscroll-style",
      "data-rail-color": "#ddd",
      "data-wrapper-class": "chat-sidebar-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "chat-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "list-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 27
      }
    }, "Online")), __jsx("ul", {
      className: "media-list list-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 25
      }
    }, __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 27
      }
    }, __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof3.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "online dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 389,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 31
      }
    }, "John Deo"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 31
      }
    }, "Spine Surgeon"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "media-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "badge badge-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 31
      }
    }, "5")), " ", __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof1.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "busy dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 31
      }
    }, "Rajesh"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 31
      }
    }, "Director"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 27
      }
    }, __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof5.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "away dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 31
      }
    }, "Jacob Ryan"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 31
      }
    }, "Ortho Surgeon"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "media-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "badge badge-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 31
      }
    }, "8")), " ", __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof4.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "online dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 31
      }
    }, "Kehn Anderson"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 443,
        columnNumber: 31
      }
    }, "CEO"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 27
      }
    }, __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof2.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "busy dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 31
      }
    }, "Sarah Smith"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 457,
        columnNumber: 31
      }
    }, "Anaesthetics"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 27
      }
    }, __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof7.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "online dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 472,
        columnNumber: 31
      }
    }, "Vlad Cardella"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 31
      }
    }, "Cardiologist")))), __jsx("div", {
      className: "chat-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "list-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 27
      }
    }, "Offline")), __jsx("ul", {
      className: "media-list list-items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 25
      }
    }, __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "media-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "badge badge-warning",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 31
      }
    }, "4")), " ", __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof6.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 487,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "offline dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 31
      }
    }, "Jennifer Maklen"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 31
      }
    }, "Nurse"), __jsx("div", {
      className: "media-heading-small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 31
      }
    }, "Last seen 01:20 AM"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 27
      }
    }, __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof8.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "offline dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 31
      }
    }, "Lina Smith"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 31
      }
    }, "Ortho Surgeon"), __jsx("div", {
      className: "media-heading-small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 31
      }
    }, "Last seen 11:14 PM"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "media-status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "badge badge-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 31
      }
    }, "9")), " ", __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof9.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "offline dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 31
      }
    }, "Jeff Adam"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 31
      }
    }, "Compounder"), __jsx("div", {
      className: "media-heading-small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 31
      }
    }, "Last seen 3:31 PM"))), __jsx("li", {
      className: "media",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 27
      }
    }, __jsx("img", {
      className: "media-object",
      src: "../assets/img/prof/prof10.jpg",
      width: 35,
      height: 35,
      alt: "...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "offline dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 29
      }
    }), __jsx("div", {
      className: "media-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 29
      }
    }, __jsx("h5", {
      className: "media-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 31
      }
    }, "Anjelina Cardella"), __jsx("div", {
      className: "media-heading-sub",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 31
      }
    }, "Physiotherapist"), __jsx("div", {
      className: "media-heading-small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 31
      }
    }, "Last seen 7:45 PM"))))))), __jsx("div", {
      className: "tab-pane chat-sidebar-settings",
      role: "tabpanel",
      id: "quick_sidebar_tab_3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "chat-sidebar-settings-list slimscroll-style",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "chat-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 23
      }
    }, __jsx("h5", {
      className: "list-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 25
      }
    }, "Layout Settings")), __jsx("div", {
      className: "chatpane inner-content ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "settings-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 29
      }
    }, "Sidebar Position"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 29
      }
    }, __jsx("select", {
      className: "sidebar-pos-option form-control input-inline input-sm input-small ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 31
      }
    }, __jsx("option", {
      value: "left",
      selected: "selected",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 33
      }
    }, "Left"), __jsx("option", {
      value: "right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 33
      }
    }, "Right")))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 29
      }
    }, "Header"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 29
      }
    }, __jsx("select", {
      className: "page-header-option form-control input-inline input-sm input-small ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 31
      }
    }, __jsx("option", {
      value: "fixed",
      selected: "selected",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 33
      }
    }, "Fixed"), __jsx("option", {
      value: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 33
      }
    }, "Default")))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 29
      }
    }, "Footer"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 29
      }
    }, __jsx("select", {
      className: "page-footer-option form-control input-inline input-sm input-small ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 31
      }
    }, __jsx("option", {
      value: "fixed",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 33
      }
    }, "Fixed"), __jsx("option", {
      value: "default",
      selected: "selected",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 33
      }
    }, "Default"))))), __jsx("div", {
      className: "chat-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "list-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 27
      }
    }, "Account Settings")), __jsx("div", {
      className: "settings-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 29
      }
    }, "Notifications"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-1",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 35
      }
    }))))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 29
      }
    }, "Show Online"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 640,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-7",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 646,
        columnNumber: 35
      }
    }))))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 29
      }
    }, "Status"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-2",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 35
      }
    }))))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 29
      }
    }, "2 Steps Verification"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 680,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-3",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 35
      }
    })))))), __jsx("div", {
      className: "chat-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 25
      }
    }, __jsx("h5", {
      className: "list-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 27
      }
    }, "General Settings")), __jsx("div", {
      className: "settings-list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 29
      }
    }, "Location"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-4",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 35
      }
    }))))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 29
      }
    }, "Save Histry"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-5",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 35
      }
    }))))), __jsx("div", {
      className: "setting-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "setting-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 29
      }
    }, "Auto Updates"), __jsx("div", {
      className: "setting-set",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 31
      }
    }, __jsx("label", {
      className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
      htmlFor: "switch-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 739,
        columnNumber: 33
      }
    }, __jsx("input", {
      type: "checkbox",
      id: "switch-6",
      className: "mdl-switch__input",
      defaultChecked: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 35
      }
    })))))))))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (AddForm);

/***/ }),

/***/ "./components/ContainerComponents/staff/ContentStaff.js":
/*!**************************************************************!*\
  !*** ./components/ContainerComponents/staff/ContentStaff.js ***!
  \**************************************************************/
/*! exports provided: ContentStaff, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentStaff", function() { return ContentStaff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .//HeaderPage */ "./components/ContainerComponents/staff/HeaderPage.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabPane */ "./components/ContainerComponents/staff/TabPane.js");
/* harmony import */ var _GirdData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GirdData */ "./components/ContainerComponents/staff/GirdData.js");
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigator */ "./components/ContainerComponents/staff/Navigator.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./components/ContainerComponents/staff/Modal.js");
/* harmony import */ var _Export_Excel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Export/Excel */ "./Export/Excel.js");
/* harmony import */ var _Export_Excel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Export_Excel__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\ContentStaff.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class ContentStaff extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: this.props.results
    };
  }

  async fnExcel() {
    Object(_Export_Excel__WEBPACK_IMPORTED_MODULE_6__["fnExcelReport"])();
  }

  renderTableData() {
    return this.state.data.map((staff, index) => {
      const {
        MANHANVIEN,
        HOTEN,
        BIDANH,
        NGAYSINH,
        GIOITINH,
        VANHOA,
        NGOAINGU,
        SOTRUONG,
        CHUYENMON,
        TRINHDO,
        NGAYLUUHS,
        LYDOLUUHS,
        TRANGTHAI,
        DANTOC,
        TONGIAO,
        SOBHXH,
        NOI_DKKCB,
        NHANVIEN_ID,
        ngaynhap,
        nguoinhap,
        ngaysua,
        nguoisua,
        SOCMND,
        NGAYCAP,
        NOICAP,
        DIDONG,
        DIENTHOAIBAN,
        DIACHIEMAIL,
        MASOTHUE,
        Diachi,
        Quequan,
        Website,
        bangcapkhac,
        chungchikhac,
        uudiem,
        khuyetdiem,
        diachilienhe,
        kinhnghiem
      } = staff;
      return __jsx("tr", {
        key: MANHANVIEN,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 9
        }
      }, __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, __jsx("a", {
        href: "edit_professor.html",
        className: "btn btn-primary btn-xs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fa fa-pencil",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      })), __jsx("button", {
        className: "btn btn-danger btn-xs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }, __jsx("i", {
        className: "fa fa-trash-o ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }))), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }
      }, MANHANVIEN), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }, HOTEN), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, BIDANH), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }
      }, NGAYSINH), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }
      }, GIOITINH), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }, VANHOA), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }, NGOAINGU), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }
      }, SOTRUONG), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, CHUYENMON), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }
      }, TRINHDO), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }
      }, NGAYLUUHS), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, LYDOLUUHS), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }, TRANGTHAI), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }, DANTOC), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }
      }, TONGIAO), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }
      }, SOBHXH), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }
      }, NOI_DKKCB), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, NHANVIEN_ID), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, ngaynhap), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, nguoinhap), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }, ngaysua), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }, nguoisua), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }, SOCMND), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }
      }, NGAYCAP), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }, NOICAP), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }
      }, DIDONG), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }, DIENTHOAIBAN), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }
      }, DIACHIEMAIL), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }, MASOTHUE), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }
      }, Diachi), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }, Quequan), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, Website), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }, bangcapkhac), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, chungchikhac), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }
      }, uudiem), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }, khuyetdiem), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }
      }, diachilienhe), __jsx("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }, kinhnghiem));
    });
  }

  renderTableHeader() {
    const header = Object.keys(this.state.data[0]);
    const newheader = header.unshift('tools');
    return header.map((key, index) => __jsx("th", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }
    }, key.toUpperCase()));
  }

  render() {
    return __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "tabbable-line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "tab-pane active fontawesome-demo",
      id: "tab1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "card-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 27
      }
    }, __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 29
      }
    }, this.props.header), __jsx("div", {
      className: "tools",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: "fa fa-repeat btn-color box-refresh",
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 31
      }
    }), __jsx("a", {
      className: "t-collapse btn-color fa fa-chevron-down",
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 31
      }
    }), __jsx("a", {
      className: "t-close btn-color fa fa-times",
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 31
      }
    }))), __jsx("div", {
      className: "card-body ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-md-6 col-sm-6 col-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "btn-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 33
      }
    }, __jsx("button", {
      type: "button",
      className: "btn btn-info btn-lg",
      "data-toggle": "modal",
      "data-target": "#myModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 33
      }
    }, "Add New"))), __jsx("div", {
      className: "col-md-6 col-sm-6 col-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "btn-group pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "btn deepPink-bgcolor  btn-outline dropdown-toggle",
      "data-toggle": "dropdown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 35
      }
    }, "Tools", __jsx("i", {
      className: "fa fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 37
      }
    })), __jsx("ul", {
      className: "dropdown-menu pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 35
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 39
      }
    }, __jsx("i", {
      className: "fa fa-print",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 41
      }
    }), " Print ")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 37
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 39
      }
    }, __jsx("i", {
      className: "fa fa-file-pdf-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 41
      }
    }), " Save as PDF ")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 37
      }
    }, __jsx("a", {
      onClick: this.fnExcel,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 39
      }
    }, __jsx("i", {
      className: "fa fa-file-excel-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 41
      }
    }), "Export to Excel ")))))), __jsx("div", {
      className: "table-scrollable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 29
      }
    }, __jsx("table", {
      className: "table table-striped table-bordered table-hover table-checkable order-column valign-middle",
      id: "example4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 31
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 33
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 33
      }
    }, this.renderTableHeader())), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 33
      }
    }, this.renderTableData())))))))), __jsx(_TabPane__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 19
      }
    }), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 19
      }
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ContentStaff);

/***/ }),

/***/ "./components/ContainerComponents/staff/GirdData.js":
/*!**********************************************************!*\
  !*** ./components/ContainerComponents/staff/GirdData.js ***!
  \**********************************************************/
/*! exports provided: GirdData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GirdData", function() { return GirdData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\GirdData.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class GirdData extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "tab-pane active fontawesome-demo",
      id: "tab1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-head",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 19
      }
    }, __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, "All Students List"), __jsx("div", {
      className: "tools",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "fa fa-repeat btn-color box-refresh",
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 23
      }
    }), __jsx("a", {
      className: "t-collapse btn-color fa fa-chevron-down",
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 23
      }
    }), __jsx("a", {
      className: "t-close btn-color fa fa-times",
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 23
      }
    }))), __jsx("div", {
      className: "card-body ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-md-6 col-sm-6 col-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "btn-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, __jsx("button", {
      type: "button",
      className: "btn btn-info btn-lg",
      "data-toggle": "modal",
      "data-target": "#myModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, "Add New"))), __jsx("div", {
      className: "col-md-6 col-sm-6 col-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "btn-group pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "btn deepPink-bgcolor  btn-outline dropdown-toggle",
      "data-toggle": "dropdown",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 27
      }
    }, "Tools", __jsx("i", {
      className: "fa fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    })), __jsx("ul", {
      className: "dropdown-menu pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 27
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-print",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 33
      }
    }), " Print ")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-file-pdf-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 33
      }
    }), " Save as PDF ")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-file-excel-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }), "Export to Excel ")))))), __jsx("div", {
      className: "table-scrollable",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, __jsx("table", {
      className: "table table-striped table-bordered table-hover table-checkable order-column valign-middle",
      id: "example4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 23
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 27
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, " Roll No "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }, " Name "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, " Department "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, " Mobile "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, " Email "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, "Admission Date"), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, " Action "))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std1.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }, "18"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, "Rajesh Bhatt"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }
    }, "Mechanical"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:4444565756",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 33
      }
    }, "4444565756 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 33
      }
    }, "rajesh@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, "22 Feb 2010"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std10.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, "5"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      }
    }, "Pooja Patel"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }
    }, "Science"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444786876",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 33
      }
    }, "444786876 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 33
      }
    }, "pooja@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 29
      }
    }, "27 Aug 2005"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std2.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 29
      }
    }, "15"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 29
      }
    }, "Sarah Smith"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 29
      }
    }, "M.C.A."), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:44455546456",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, "44455546456 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 33
      }
    }, "sarah@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    }, "05 Jun 2011"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std3.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, "23"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 29
      }
    }, "John Deo"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, "M.B.B.S."), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 33
      }
    }, "john@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 29
      }
    }, "15 Feb 2012"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std4.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, "10"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 29
      }
    }, "Jay Soni"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 29
      }
    }, "Arts"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }, "kenh@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 29
      }
    }, "12 Nov 2012"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std5.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 29
      }
    }, "14"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 29
      }
    }, "Jacob Ryan"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 29
      }
    }, "Music"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 33
      }
    }, "johnson@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 29
      }
    }, "03 Dec 2001"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std6.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 29
      }
    }, "7"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 29
      }
    }, "Megha Trivedi"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 29
      }
    }, "Commerce"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 33
      }
    }, "megha@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 29
      }
    }, "17 Mar 2013"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std3.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 29
      }
    }, "18"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 29
      }
    }, "Rajesh"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 29
      }
    }, "Civil"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:4444565756",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 33
      }
    }, "4444565756 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 33
      }
    }, "rajesh@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 29
      }
    }, "22 Feb 2000"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std10.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 29
      }
    }, "5"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 29
      }
    }, "Pooja Patel"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 29
      }
    }, "Computer"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444786876",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 33
      }
    }, "444786876 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 33
      }
    }, "pooja@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 29
      }
    }, "27 Aug 2005"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 33
      }
    })), __jsx("a", {
      href: "javasctipt().html",
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std1.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 29
      }
    }, "18"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 29
      }
    }, "Rajesh Bhatt"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 29
      }
    }, "Mechanical"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:4444565756",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 33
      }
    }, "4444565756 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 33
      }
    }, "rajesh@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 29
      }
    }, "22 Feb 2010"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std10.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 29
      }
    }, "5"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 29
      }
    }, "Pooja Patel"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 29
      }
    }, "Science"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444786876",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 33
      }
    }, "444786876 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 33
      }
    }, "pooja@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 29
      }
    }, "27 Aug 2005"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std2.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 29
      }
    }, "15"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300,
        columnNumber: 29
      }
    }, "Sarah Smith"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 29
      }
    }, "M.C.A."), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:44455546456",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 33
      }
    }, "44455546456 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 33
      }
    }, "sarah@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 29
      }
    }, "05 Jun 2011"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std3.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 29
      }
    }, "23"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 29
      }
    }, "John Deo"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 29
      }
    }, "M.B.B.S."), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325,
        columnNumber: 33
      }
    }, "john@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 29
      }
    }, "15 Feb 2012"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std4.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 29
      }
    }, "10"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 29
      }
    }, "Jay Soni"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 29
      }
    }, "Arts"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 33
      }
    }, "kenh@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 29
      }
    }, "12 Nov 2012"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std5.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 29
      }
    }, "14"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 29
      }
    }, "Jacob Ryan"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 29
      }
    }, "Music"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 33
      }
    }, "johnson@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 29
      }
    }, "03 Dec 2001"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std6.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 29
      }
    }, "7"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 29
      }
    }, "Megha Trivedi"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 29
      }
    }, "Commerce"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444543564",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 33
      }
    }, "444543564 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 33
      }
    }, "megha@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 29
      }
    }, "17 Mar 2013"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std1.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 29
      }
    }, "18"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 29
      }
    }, "Rajesh"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 29
      }
    }, "Civil"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:4444565756",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407,
        columnNumber: 33
      }
    }, "4444565756 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 33
      }
    }, "rajesh@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 29
      }
    }, "22 Feb 2000"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 33
      }
    })), __jsx("button", {
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 33
      }
    })))), __jsx("tr", {
      className: "odd gradeX",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 27
      }
    }, __jsx("td", {
      className: "patient-img",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "../assets/img/std/std10.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 31
      }
    })), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 29
      }
    }, "5"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 29
      }
    }, "Pooja Patel"), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 29
      }
    }, "Computer"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "tel:444786876",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 33
      }
    }, "444786876 ")), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "mailto:shuxer@gmail.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 33
      }
    }, "pooja@gmail.com ")), __jsx("td", {
      className: "left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 29
      }
    }, "27 Aug 2005"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "btn btn-primary btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-pencil",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 33
      }
    })), __jsx("a", {
      href: "javasctipt().html",
      className: "btn btn-danger btn-xs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 437,
        columnNumber: 31
      }
    }, __jsx("i", {
      className: "fa fa-trash-o ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 33
      }
    }))))))))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (GirdData);

/***/ }),

/***/ "./components/ContainerComponents/staff/HeaderPage.js":
/*!************************************************************!*\
  !*** ./components/ContainerComponents/staff/HeaderPage.js ***!
  \************************************************************/
/*! exports provided: HeaderPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPage", function() { return HeaderPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\HeaderPage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class HeaderPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "page-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "page-title-breadcrumb",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: " pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "page-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 21
      }
    }, "All Students List")), __jsx("ol", {
      className: "breadcrumb page-breadcrumb pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 19
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "fa fa-home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }), "\xA0", __jsx("a", {
      className: "parent-item",
      href: "index.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 59
      }
    }, "Home"), "\xA0", __jsx("i", {
      className: "fa fa-angle-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 118
      }
    })), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "parent-item",
      href: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Students"), "\xA0", __jsx("i", {
      className: "fa fa-angle-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 75
      }
    })), __jsx("li", {
      className: "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, "All Students List"))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (HeaderPage);

/***/ }),

/***/ "./components/ContainerComponents/staff/Modal.js":
/*!*******************************************************!*\
  !*** ./components/ContainerComponents/staff/Modal.js ***!
  \*******************************************************/
/*! exports provided: Modal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddForm */ "./components/ContainerComponents/staff/AddForm.js");
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\Modal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    Promise.all([Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_1__["fetchPromised"])("http://backend/foo.txt", 500), Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_1__["fetchPromised"])("http://backend/baz.txt", 500)]).then(data => {
      let [foo, bar, baz] = data;
      console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
    }, err => {
      console.log(`error: ${err}`);
    });
  }

  render() {
    return __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "modal fade",
      id: "myModal",
      role: "dialog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 3
      }
    }, __jsx("div", {
      className: "modal-dialog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "modal-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx(_AddForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./components/ContainerComponents/staff/Navigator.js":
/*!***********************************************************!*\
  !*** ./components/ContainerComponents/staff/Navigator.js ***!
  \***********************************************************/
/*! exports provided: Navigator, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return Navigator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\Navigator.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Navigator extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("ul", {
      className: "nav customtab nav-tabs",
      role: "tablist",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#tab1",
      className: "nav-link active",
      "data-toggle": "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 38
      }
    }, "List View")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#tab2",
      className: "nav-link",
      "data-toggle": "tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 38
      }
    }, "Grid View")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Navigator);

/***/ }),

/***/ "./components/ContainerComponents/staff/TabPane.js":
/*!*********************************************************!*\
  !*** ./components/ContainerComponents/staff/TabPane.js ***!
  \*********************************************************/
/*! exports provided: TabPane, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return TabPane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\TabPane.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class TabPane extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "tab-pane",
      id: "tab2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std10.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Pooja Patel "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, " Science ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 23
      }
    }, "A-103, shyam gokul flats, Mahatma Road ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 65
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std1.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, "Rajesh "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, " Mathematics ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }
    }, "45, Krishna Tower, Near Bus Stop, Satellite, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 71
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std2.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, "Sarah Smith "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, " Commerce ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 23
      }
    }, "456, Estern evenue, Courtage area, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 61
      }
    }), "New York"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 25
      }
    }, "Read More"))))))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std3.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, "John Deo "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, " Arts ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 23
      }
    }, "A-103, shyam gokul flats, Mahatma Road ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 65
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std4.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }, "Jay Soni "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    }, " M.B.A. ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 23
      }
    }, "45, Krishna Tower, Near Bus Stop, Satellite, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 71
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std5.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 25
      }
    }, "Jacob Ryan "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, " Urology ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 23
      }
    }, "456, Estern evenue, Courtage area, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 61
      }
    }), "New York"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 25
      }
    }, "Read More"))))))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std6.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 25
      }
    }, "Megha Trivedi "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }, " Electrical ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 23
      }
    }, "A-103, shyam gokul flats, Mahatma Road ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 65
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std1.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, "Rajesh "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 25
      }
    }, " Mathematics ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 23
      }
    }, "45, Krishna Tower, Near Bus Stop, Satellite, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 71
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std2.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, "Sarah Smith "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 25
      }
    }, " Commerce ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 23
      }
    }, "456, Estern evenue, Courtage area, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 61
      }
    }), "New York"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 25
      }
    }, "Read More"))))))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std10.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 25
      }
    }, "Pooja Patel "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, " Science ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 23
      }
    }, "A-103, shyam gokul flats, Mahatma Road ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 65
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std1.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 25
      }
    }, "Rajesh "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 25
      }
    }, " Mathematics ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 23
      }
    }, "45, Krishna Tower, Near Bus Stop, Satellite, ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 71
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 25
      }
    }, "Read More")))))), __jsx("div", {
      className: "col-md-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "card card-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "card-body no-padding ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "doctor-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/std/std3.jpg",
      className: "doctor-pic",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "profile-usertitle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "doctor-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 25
      }
    }, "John Deo "), __jsx("div", {
      className: "name-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 25
      }
    }, " Arts ")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 23
      }
    }, "A-103, shyam gokul flats, Mahatma Road ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 65
      }
    }), "Mumbai"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 23
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "fa fa-phone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 28
      }
    }), __jsx("a", {
      href: "tel:(123)456-7890",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 57
      }
    }, " (123)456-7890"))), __jsx("div", {
      className: "profile-userbuttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "btn btn-circle deepPink-bgcolor btn-sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 25
      }
    }, "Read More"))))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (TabPane);

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
    }, " 2017 \xA9 Smart University Theme By", __jsx("a", {
      href: "mailto:redstartheme@gmail.com",
      target: "_top",
      className: "makerCss",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }, "Redstar Theme")), __jsx("div", {
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
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "page-header navbar navbar-fixed-top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "page-header-inner ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "page-logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "index.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "logo-icon material-icons fa-rotate-45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, "school"), __jsx("span", {
      className: "logo-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }, "HOME"), " ")), __jsx("ul", {
      className: "nav navbar-nav navbar-left in",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "menu-toggler sidebar-toggler",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "icon-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 78
      }
    })))), __jsx("form", {
      className: "search-form-opened",
      action: "#",
      method: "GET",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "input-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Search...",
      name: "query",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }), __jsx("span", {
      className: "input-group-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "btn submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "icon-magnifier",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }))))), __jsx("a", {
      href: "javascript:;",
      className: "menu-toggler responsive-toggler",
      "data-toggle": "collapse",
      "data-target": ".navbar-collapse",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "top-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("ul", {
      className: "nav navbar-nav pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "fullscreen-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fa fa-arrows-alt",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 69
      }
    }))), __jsx("li", {
      className: "dropdown language-switch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "aria-expanded": "false",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, " ", __jsx("img", {
      src: "../assets/img/flags/gb.png",
      className: "position-left",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 94
      }
    }), " English ", __jsx("span", {
      className: "fa fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 176
      }
    })), __jsx("ul", {
      className: "dropdown-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "deutsch",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/flags/de.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 44
      }
    }), " Deutsch")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "ukrainian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/flags/ua.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 46
      }
    }), " \u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "english",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/flags/gb.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 44
      }
    }), " English")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "espana",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/flags/es.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 43
      }
    }), " Espa\xF1a")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: "russian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, __jsx("img", {
      src: "../assets/img/flags/ru.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 44
      }
    }), " \u0420\u0443\u0441\u0441\u043A\u0438\u0439")))), __jsx("li", {
      className: "dropdown dropdown-extended dropdown-notification",
      id: "header_notification_bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "data-hover": "dropdown",
      "data-close-others": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "fa fa-bell-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "badge headerBadgeColor1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }
    }, " 6 ")), __jsx("ul", {
      className: "dropdown-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: "external",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, "Notifications")), __jsx("span", {
      className: "notification-label purple-bgcolor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    }, "New 6")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 19
      }
    }, __jsx("ul", {
      className: "dropdown-menu-list small-slimscroll-style",
      "data-handle-color": "#637283",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 27
      }
    }, "just now"), __jsx("span", {
      className: "details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "notification-icon circle deepPink-bgcolor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fa fa-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 89
      }
    })), "Congratulations!. "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 27
      }
    }, "3 mins"), __jsx("span", {
      className: "details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "notification-icon circle purple-bgcolor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fa fa-user o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 87
      }
    })), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 29
      }
    }, "John Micle "), "is now following you. "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 27
      }
    }, "7 mins"), __jsx("span", {
      className: "details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "notification-icon circle blue-bgcolor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fa fa-comments-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 85
      }
    })), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 29
      }
    }, "Sneha Jogi "), "sent you a message. "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 27
      }
    }, "12 mins"), __jsx("span", {
      className: "details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "notification-icon circle pink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fa fa-heart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 77
      }
    })), __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 29
      }
    }, "Ravi Patel "), "like your photo. "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 27
      }
    }, "15 mins"), __jsx("span", {
      className: "details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "notification-icon circle yellow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fa fa-warning",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 79
      }
    })), " Warning! "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "javascript:;",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 27
      }
    }, "10 hrs"), __jsx("span", {
      className: "details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "notification-icon circle red",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "fa fa-times",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 76
      }
    })), " Application error. ")))), __jsx("div", {
      className: "dropdown-menu-footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "javascript:void(0)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }, " All notifications "))))), __jsx("li", {
      className: "dropdown dropdown-extended dropdown-inbox",
      id: "header_inbox_bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "data-hover": "dropdown",
      "data-close-others": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "fa fa-envelope-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "badge headerBadgeColor2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 19
      }
    }, " 2 ")), __jsx("ul", {
      className: "dropdown-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: "external",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 19
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }
    }, "Messages")), __jsx("span", {
      className: "notification-label cyan-bgcolor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 21
      }
    }, "New 2")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx("ul", {
      className: "dropdown-menu-list small-slimscroll-style",
      "data-handle-color": "#637283",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "../assets/img/prof/prof2.jpg",
      className: "img-circle",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 29
      }
    })), __jsx("span", {
      className: "subject",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "from",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, " Sarah Smith "), __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 29
      }
    }, "Just Now ")), __jsx("span", {
      className: "message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 27
      }
    }, " Jatin I found you on LinkedIn... "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "../assets/img/prof/prof3.jpg",
      className: "img-circle",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 29
      }
    })), __jsx("span", {
      className: "subject",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "from",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 29
      }
    }, " John Deo "), __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 29
      }
    }, "16 mins ")), __jsx("span", {
      className: "message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 27
      }
    }, " Fwd: Important Notice Regarding Your Domain Name... "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "../assets/img/prof/prof1.jpg",
      className: "img-circle",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 29
      }
    })), __jsx("span", {
      className: "subject",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "from",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 29
      }
    }, " Rajesh "), __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }, "2 hrs ")), __jsx("span", {
      className: "message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 27
      }
    }, " pls take a print of attachments. "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "../assets/img/prof/prof8.jpg",
      className: "img-circle",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 29
      }
    })), __jsx("span", {
      className: "subject",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "from",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 29
      }
    }, " Lina Smith "), __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 29
      }
    }, "40 mins ")), __jsx("span", {
      className: "message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 27
      }
    }, " Apply for Ortho Surgeon "))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 23
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 27
      }
    }, __jsx("img", {
      src: "../assets/img/prof/prof5.jpg",
      className: "img-circle",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 29
      }
    })), __jsx("span", {
      className: "subject",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "from",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 29
      }
    }, " Jacob Ryan "), __jsx("span", {
      className: "time",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 29
      }
    }, "46 mins ")), __jsx("span", {
      className: "message",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 27
      }
    }, " Request for leave application. ")))), __jsx("div", {
      className: "dropdown-menu-footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 23
      }
    }, " All Messages "))))), __jsx("li", {
      className: "dropdown dropdown-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "dropdown-toggle",
      "data-toggle": "dropdown",
      "data-hover": "dropdown",
      "data-close-others": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }
    }, __jsx("img", {
      alt: "",
      className: "img-circle ",
      src: "../assets/img/dp.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: "username username-hide-on-mobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 19
      }
    }, " ", this.props.name, " "), __jsx("i", {
      className: "fa fa-angle-down",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 19
      }
    })), __jsx("ul", {
      className: "dropdown-menu dropdown-menu-default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 17
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "user_profile.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 23
      }
    }), " Profile ")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 23
      }
    }), " Settings")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-directions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 23
      }
    }), " Help")), __jsx("li", {
      className: "divider",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 19
      }
    }, " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "lock_screen.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-lock",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 23
      }
    }), " Lock")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: "login.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "icon-logout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 23
      }
    }), " Log Out ")))), __jsx("li", {
      className: "dropdown dropdown-quick-sidebar-toggler",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 15
      }
    }, __jsx("a", {
      id: "headerSettingButton",
      className: "mdl-button mdl-js-button mdl-button--icon pull-right",
      "data-upgraded": ",MaterialButton",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 17
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 19
      }
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
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\SidebarMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SidebarMenu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "sidebar-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sidemenu-container navbar-collapse collapse fixed-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, __jsx("div", {
      id: "remove-scroll",
      className: "left-sidemenu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("ul", {
      className: "sidemenu  page-header-fixed slimscroll-style",
      "data-keep-expanded": "false",
      "data-auto-scroll": "true",
      "data-slide-speed": 200,
      style: {
        paddingTop: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx("li", {
      className: "sidebar-toggler-wrapper hide",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "sidebar-toggler",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }))), __jsx("li", {
      className: "sidebar-user-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "user-panel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "pull-left image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "../assets/img/dp.jpg",
      className: "img-circle user-img-circle",
      alt: "User Image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 19
      }
    })), __jsx("div", {
      className: "pull-left info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }, " Kiran Patel"), __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fa fa-circle user-online",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "txtOnline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 73
      }
    }, "Online"))))), __jsx("li", {
      className: "nav-item start ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, "dashboard"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }, "Dashboard"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item   ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "index.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, "Dashboard 1"))), __jsx("li", {
      className: "nav-item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "dashboard2.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, "Dashboard 2"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "dashboard3.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, "Dashboard 3"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "event.html",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 69
      }
    }, "event"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, "Event Management"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 60
      }
    }, "person"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    }, "Professors"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 59
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_professors.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 72
      }
    }, "All Professors"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_professor.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 71
      }
    }, "Add Professor"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_professor_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 81
      }
    }, "Add Professor Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_professor.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 72
      }
    }, "Edit Professor"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "professor_profile.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 75
      }
    }, "About Professor"))))), __jsx("li", {
      className: "nav-item active open",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 59
      }
    }, "group"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }
    }, "Students"), __jsx("span", {
      className: "selected",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 56
      }
    }), __jsx("span", {
      className: "arrow open",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_students.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 70
      }
    }, "All Students"), __jsx("span", {
      className: "selected",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_student.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 69
      }
    }, "Add Student"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_student_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 79
      }
    }, "Add Student Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_student.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 70
      }
    }, "Edit Student"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "student_profile.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 73
      }
    }, "About Student"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 60
      }
    }, "school"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }, "Courses"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 56
      }
    }), __jsx("span", {
      className: "label label-rouded label-menu label-success",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, "new")), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_courses.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 69
      }
    }, "All Courses"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_course.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 68
      }
    }, "Add Course"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_course_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 78
      }
    }, "Add Course Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_course.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 69
      }
    }, "Edit Course"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "course_details.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 72
      }
    }, "About Course"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 60
      }
    }, "local_library"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 17
      }
    }, "Library"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 56
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_assets.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 68
      }
    }, "All Library Assets"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_library.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 69
      }
    }, "Add Library Asset"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_library_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 79
      }
    }, "Add Asset Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_library.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 70
      }
    }, "Edit Asset"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 60
      }
    }, "business"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }, "Departments"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 60
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_department.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 72
      }
    }, "All Departments"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_department.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 72
      }
    }, "Add Department"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_department_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 82
      }
    }, "Add Department Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_department.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 73
      }
    }, "Edit Department"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 60
      }
    }, "face"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, "Staff"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 54
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_staffs.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 68
      }
    }, "All Staff"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_staff.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 67
      }
    }, "Add Staff"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_staff_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 77
      }
    }, "Add Staff Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_staff.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 68
      }
    }, "Edit Staff"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "staff_profile.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 71
      }
    }, "Staff Profile"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 60
      }
    }, "airline_seat_individual_suite"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    }, "Holiday"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 56
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "all_holidays.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 70
      }
    }, "All Holiday"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_holiday.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 69
      }
    }, "Add Holiday"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_holiday_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 79
      }
    }, "Add Holiday Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "edit_holiday.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 70
      }
    }, "Edit Holiday"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "holiday_calendar.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 74
      }
    }, "Holiday Calendar"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }, "email"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 17
      }
    }, "Email"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 17
      }
    }), __jsx("span", {
      className: "label label-rouded label-menu label-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 17
      }
    }, "new")), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "email_inbox.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 21
      }
    }, "Inbox"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "email_view.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 21
      }
    }, "View Mail"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "email_compose.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296,
        columnNumber: 21
      }
    }, "Compose Mail"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 60
      }
    }, "monetization_on"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 17
      }
    }, "Fees"), " ", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 53
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "fees_collection.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 73
      }
    }, "Fees Collection"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_fees.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 66
      }
    }, "Add Fees "))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "add_fees_bootstrap.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 76
      }
    }, "Add Fees Bootstrap"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "fees_receipt.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 70
      }
    }, "Fee Receipt"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "widget.html",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 70
      }
    }, "widgets"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    }, "Widget"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 17
      }
    }, "dvr"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 17
      }
    }, "UI Elements"), __jsx("span", {
      className: "label label-rouded label-menu label-warning",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 17
      }
    }, "new"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_buttons.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }
    }, "Buttons"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_sweet_alert.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 21
      }
    }, "Sweet Alert"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_tabs_accordions_navs.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 21
      }
    }, "Tabs & Accordions"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_typography.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 21
      }
    }, "Typography"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "notification.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 362,
        columnNumber: 21
      }
    }, "Notification"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_icons.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 21
      }
    }, "Icons"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_panels.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 21
      }
    }, "Panels"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_grid.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 21
      }
    }, "Grids"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "calendar.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 21
      }
    }, "Calender"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_tree.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 21
      }
    }, "Tree View"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "ui_carousel.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 21
      }
    }, "Carousel"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 17
      }
    }, "store"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 17
      }
    }, "Material Elements"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_button.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 21
      }
    }, "Buttons"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_tab.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 410,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 21
      }
    }, "Tabs"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_chips.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 21
      }
    }, "Chips"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_grid.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 21
      }
    }, "Grid"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_icons.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 425,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 21
      }
    }, "Icon"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_form.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 21
      }
    }, "Form"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_datepicker.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 436,
        columnNumber: 21
      }
    }, "DatePicker"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 439,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_select.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 21
      }
    }, "Select Item"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_loading.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 21
      }
    }, "Loading"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_menu.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 21
      }
    }, "Menu"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_slider.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 456,
        columnNumber: 21
      }
    }, "Slider"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 459,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_tables.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 461,
        columnNumber: 21
      }
    }, "Tables"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_toggle.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 21
      }
    }, "Toggle"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "material_badges.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 21
      }
    }, "Badges"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 477,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 478,
        columnNumber: 17
      }
    }, "subtitles"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 17
      }
    }, "Forms "), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 483,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "layouts_form.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 484,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 21
      }
    }, "Form Layout"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "advance_form.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 490,
        columnNumber: 21
      }
    }, "Advance Component"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "wizard.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 21
      }
    }, "Form Wizard"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "validation_form.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 21
      }
    }, "Form Validation"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "editable_form.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 21
      }
    }, "Editor"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 17
      }
    }, "list"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 17
      }
    }, "Data Tables"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "basic_table.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 21
      }
    }, "Basic Tables"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "advanced_table.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 21
      }
    }, "Advance Tables"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "export_table.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 21
      }
    }, "Export Tables"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 532,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "child_row_table.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 21
      }
    }, "Child Row Tables"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 537,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "group_table.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 21
      }
    }, "Grouping"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "tableData.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 21
      }
    }, "Tables With Sourced Data"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 549,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 550,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 17
      }
    }, "timeline"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 17
      }
    }, "Charts"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "charts_apexchart.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 21
      }
    }, "Apex chart"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "charts_amchart.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 21
      }
    }, "amChart"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "charts_echarts.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 21
      }
    }, "eCharts"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "charts_morris.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 573,
        columnNumber: 21
      }
    }, "Morris Charts"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "charts_chartjs.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 21
      }
    }, "Chartjs"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 584,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 585,
        columnNumber: 17
      }
    }, "map"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 17
      }
    }, "Maps"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 590,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "google_maps.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 21
      }
    }, "Google Maps"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 595,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "vector_maps.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 21
      }
    }, "Vector Maps"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 15
      }
    }, " ", __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 71
      }
    }, "description"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 17
      }
    }, "Extra pages"), __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 607,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "login.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 63
      }
    }, "Login"))), __jsx("li", {
      className: "nav-item  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "sign_up.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 65
      }
    }, "Sign Up"))), __jsx("li", {
      className: "nav-item  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "forgot_password.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 73
      }
    }, "Forgot Password"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "user_profile.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 42
      }
    }, __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 92
      }
    }, "Profile"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "contact.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 65
      }
    }, "Contact Us"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "lock_screen.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 69
      }
    }, "Lock Screen"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "page-404.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 66
      }
    }, "404 Page"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "page-500.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 66
      }
    }, "500 Page"))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 641,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "blank_page.html",
      className: "nav-link ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 19
      }
    }, " ", __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 642,
        columnNumber: 68
      }
    }, "Blank Page"))))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 15
      }
    }, __jsx("i", {
      className: "material-icons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 650,
        columnNumber: 17
      }
    }, "slideshow"), __jsx("span", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 651,
        columnNumber: 17
      }
    }, "Multi Level Menu"), __jsx("span", {
      className: "arrow ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 17
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 15
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 655,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 656,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fa fa-university",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 21
      }
    }), " Item 1", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 21
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 19
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 661,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-bell-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 25
      }
    }), " Arrow Toggle", __jsx("span", {
      className: "arrow ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 25
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 666,
        columnNumber: 23
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 667,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fa fa-calculator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 29
      }
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 671,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fa fa-clone",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 29
      }
    }), " Sample Link 2")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 675,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 27
      }
    }, __jsx("i", {
      className: "fa fa-cogs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 29
      }
    }), " Sample Link 3")))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-file-pdf-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 25
      }
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-rss",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 25
      }
    }), " Sample Link 2")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-hdd-o",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691,
        columnNumber: 25
      }
    }), " Sample Link 3")))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "javascript:;",
      className: "nav-link nav-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 696,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fa fa-gavel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 21
      }
    }), " Arrow Toggle", __jsx("span", {
      className: "arrow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 21
      }
    })), __jsx("ul", {
      className: "sub-menu",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 19
      }
    }, __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 702,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-paper-plane",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 25
      }
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-power-off",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 25
      }
    }), " Sample Link 1")), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710,
        columnNumber: 23
      }
    }, __jsx("i", {
      className: "fa fa-recycle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 25
      }
    }), " Sample Link 1")))), __jsx("li", {
      className: "nav-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#",
      className: "nav-link",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 19
      }
    }, __jsx("i", {
      className: "fa fa-volume-up",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 21
      }
    }), " Item 3 "))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SidebarMenu);

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
/* harmony import */ var _components_ContainerComponents_staff_ContentStaff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ContainerComponents/staff/ContentStaff */ "./components/ContainerComponents/staff/ContentStaff.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cookies/Cookies */ "./Cookies/Cookies.js");
/* harmony import */ var _Cookies_Cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Cookies_Cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  static async getInitialProps(ctx) {
    return {
      header: 'List Staff',
      name: 'Thanh',
      List: "ListView",
      Coookies: this.userCookies
    };
  }

  constructor(props) {
    super(props);
    this.props.children;
    this.state = {
      counters: "this is thanh",
      name: "thanh",
      students: this.props.results
    };
  }

  render() {
    console.log(this.props.cookies);
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx("meta", {
      charSet: "utf-8",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx("meta", {
      httpEquiv: "X-UA-Compatible",
      content: "IE=edge",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx("meta", {
      content: "width=device-width, initial-scale=1",
      name: "viewport",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "description",
      content: "Responsive Admin Template",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx("meta", {
      name: "author",
      content: "SmartUniversity",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }), __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, "CDKTDL"), __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../fonts/simple-line-icons/simple-line-icons.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../fonts/font-awesome/css/font-awesome.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../fonts/material-design-icons/material-icon.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 12
      }
    }), __jsx("link", {
      href: "../assets/plugins/bootstrap/css/bootstrap.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/plugins/summernote/summernote.css",
      rel: "stylesheet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 12
      }
    }), __jsx("link", {
      href: "../assets/css/pages/inbox.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/plugins/material/material.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/css/material_style.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/css/theme/light/theme_style.css",
      rel: "stylesheet",
      id: "rt_style_components",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/css/theme/light/style.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/css/plugins.min.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/css/responsive.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/css/theme/light/theme-color.css",
      rel: "stylesheet",
      type: "text/css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }), __jsx("link", {
      href: "../assets/plugins/dropzone/dropzone.css",
      rel: "stylesheet",
      media: "screen",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "../assets/plugins/flatpicker/css/flatpickr.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "../assets/img/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "page-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }), __jsx(_components_QuickSetting__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "page-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, __jsx(_components_SidebarMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }), this.props.children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    })), __jsx("script", {
      src: "../assets/plugins/jquery/jquery.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/popper/popper.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/jquery-blockui/jquery.blockui.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/jquery-slimscroll/jquery.slimscroll.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/bootstrap/js/bootstrap.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/datatables/jquery.dataTables.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/pages/table/table_data.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/app.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/layout.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/theme-color.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/material/material.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/pages/material-select/getmdl-select.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/flatpicker/js/flatpicker.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/pages/date-time/date-time.init.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/dropzone/dropzone.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/dropzone/dropzone-call.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/plugins/apexcharts/apexcharts.min.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 9
      }
    }), __jsx("script", {
      src: "../assets/js/pages/chart/chartjs/home-data.js",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }
    }));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/staffs/addstaff.js":
/*!**********************************!*\
  !*** ./pages/staffs/addstaff.js ***!
  \**********************************/
/*! exports provided: AddStaff, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaff", function() { return AddStaff; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./pages/index.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ContainerComponents/LayoutContentPage/LayoutPage */ "./components/ContainerComponents/LayoutContentPage/LayoutPage.js");
/* harmony import */ var _components_ContainerComponents_staff_AddForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContainerComponents/staff/AddForm */ "./components/ContainerComponents/staff/AddForm.js");
var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\pages\\staffs\\addstaff.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






class AddStaff extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  static async getInitialProps(ctx) {
    const res = await Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_2__["Send_Get_RestAPI"])('http://localhost:3001/staff');
    const json = await res.json();
    return {
      results: json,
      header: 'List Staff'
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, __jsx(_components_ContainerComponents_LayoutContentPage_LayoutPage__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }), __jsx(_components_ContainerComponents_staff_AddForm__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (AddStaff);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29va2llcy9Db29raWVzLmpzIiwid2VicGFjazovLy8uL0V4cG9ydC9FeGNlbC5qcyIsIndlYnBhY2s6Ly8vLi9SZXF1ZXN0L2ltd19yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9MYXlvdXRDb250ZW50UGFnZS9MYXlvdXRQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9BZGRGb3JtLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9Db250ZW50U3RhZmYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0dpcmREYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9IZWFkZXJQYWdlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9Nb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lckNvbXBvbmVudHMvc3RhZmYvTmF2aWdhdG9yLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9zdGFmZi9UYWJQYW5lLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUXVpY2tTZXR0aW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZWJhck1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3RhZmZzL2FkZHN0YWZmLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2V0Q29va2llIiwiY25hbWUiLCJjdmFsdWUiLCJleGRheXMiLCJQcm9taXNlIiwicmVzb3ZlIiwicmVqZWN0IiwiZCIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImV4cGlyZXMiLCJ0b1VUQ1N0cmluZyIsImRvY3VtZW50IiwiY29va2llIiwiZ2V0Q29va2llIiwibmFtZSIsImNhIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwiYyIsImNoYXJBdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJjaGVja0Nvb2tpZSIsInVzZXJuYW1lIiwiYWxlcnQiLCJwcm9tcHQiLCJmbkV4Y2VsUmVwb3J0IiwidGFiX3RleHQiLCJ0ZXh0UmFuZ2UiLCJqIiwidGFiIiwiZ2V0RWxlbWVudEJ5SWQiLCJyb3dzIiwiaW5uZXJIVE1MIiwicmVwbGFjZSIsInVhIiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwibXNpZSIsIm1hdGNoIiwidHh0QXJlYTEiLCJvcGVuIiwid3JpdGUiLCJjbG9zZSIsImZvY3VzIiwic2EiLCJleGVjQ29tbWFuZCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNlbmRfUG9zdF9SZXN0QVBJIiwidXJsIiwiZGF0YSIsInJlcyIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTZW5kX0dldF9SZXN0QVBJIiwiZmV0Y2hQcm9taXNlZCIsInJlc29sdmUiLCJMYXlvdXRQYWdlIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIkFkZEZvcm0iLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsInJlc19saXN0c3YiLCJyZXN1bHRfbGlzdHN2IiwianNvbiIsInJlc190eXBlc2NvcmUiLCJTZW5kX0dldF9SZXN0IiwicmVzdWx0X3R5cGVzY29yZSIsImNvbnN0cnVjdG9yIiwiR2V0bGlzdERlcGFydG1lbnRzIiwiYmluZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiR2V0TGlzdEJyYW5jaGVzIiwiR2V0TGlzdENsYXNzZXMiLCJHZXRMaXN0U3ViamVjdHMiLCJHZXRMaXN0U3R1ZGVudHMiLCJHZXRMaXN0VHlwZVNjb3JlIiwiQ29udGVudFN0YWZmIiwic3RhdGUiLCJsb2FkaW5nIiwicmVzdWx0cyIsImZuRXhjZWwiLCJyZW5kZXJUYWJsZURhdGEiLCJtYXAiLCJzdGFmZiIsImluZGV4IiwiTUFOSEFOVklFTiIsIkhPVEVOIiwiQklEQU5IIiwiTkdBWVNJTkgiLCJHSU9JVElOSCIsIlZBTkhPQSIsIk5HT0FJTkdVIiwiU09UUlVPTkciLCJDSFVZRU5NT04iLCJUUklOSERPIiwiTkdBWUxVVUhTIiwiTFlET0xVVUhTIiwiVFJBTkdUSEFJIiwiREFOVE9DIiwiVE9OR0lBTyIsIlNPQkhYSCIsIk5PSV9ES0tDQiIsIk5IQU5WSUVOX0lEIiwibmdheW5oYXAiLCJuZ3VvaW5oYXAiLCJuZ2F5c3VhIiwibmd1b2lzdWEiLCJTT0NNTkQiLCJOR0FZQ0FQIiwiTk9JQ0FQIiwiRElET05HIiwiRElFTlRIT0FJQkFOIiwiRElBQ0hJRU1BSUwiLCJNQVNPVEhVRSIsIkRpYWNoaSIsIlF1ZXF1YW4iLCJXZWJzaXRlIiwiYmFuZ2NhcGtoYWMiLCJjaHVuZ2NoaWtoYWMiLCJ1dWRpZW0iLCJraHV5ZXRkaWVtIiwiZGlhY2hpbGllbmhlIiwia2luaG5naGllbSIsInJlbmRlclRhYmxlSGVhZGVyIiwiaGVhZGVyIiwiT2JqZWN0Iiwia2V5cyIsIm5ld2hlYWRlciIsInVuc2hpZnQiLCJrZXkiLCJ0b1VwcGVyQ2FzZSIsIkdpcmREYXRhIiwiSGVhZGVyUGFnZSIsIk1vZGFsIiwiY29tcG9uZW50RGlkTW91bnQiLCJhbGwiLCJ0aGVuIiwiZm9vIiwiYmFyIiwiYmF6IiwiZXJyIiwiTmF2aWdhdG9yIiwiVGFiUGFuZSIsIkZvb3RlciIsIlJlYWN0IiwiSGVhZGVyIiwiUXVpY2tTZXR0aW5nIiwiU2lkZWJhck1lbnUiLCJwYWRkaW5nVG9wIiwiSW5kZXgiLCJnZXRJbml0aWFsUHJvcHMiLCJMaXN0IiwiQ29vb2tpZXMiLCJ1c2VyQ29va2llcyIsImNvdW50ZXJzIiwic3R1ZGVudHMiLCJjb29raWVzIiwiQWRkU3RhZmYiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLFdBQVMsRUFBRSxVQUFTQyxLQUFULEVBQWdCQyxNQUFoQixFQUF3QkMsTUFBeEIsRUFBK0I7QUFDdEMsV0FBTyxJQUFJQyxPQUFKLENB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QkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0U7QUFBSyxlQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUVFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQVEsZUFBUyxFQUFDLG9FQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFxQixjQUFRLEVBQUMsVUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBSUU7QUFBUSxXQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsQ0FERixDQUZGLENBREYsRUFZRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtB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QURGLEVBS0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsY0FBUjtBQUF1QixlQUFTLEVBQUMsVUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFERixDQURGLEVBS0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsbUJBREYsQ0FMRixFQVNFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLG1CQURGLENBVEYsQ0FMRixDQURGLEVBcUJFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFERixDQXJCRixFQXlCRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksZUFBUyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFERixDQXpCRixFQTZCRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksZUFBUyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFERixDQTdCRixDQUxGLENBREYsRUF5Q0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsY0FBUjtBQUF1QixlQUFTLEVBQUMscUJBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFFRTtBQUFNLGVBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsQ0FERixFQUtFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLEdBQVI7QUFBWSxlQUFTLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFERixDQURGLEVBS0U7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLG1CQURGLENBTEYsRUFTRTtBQUFJLGVBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksZUFBUyxFQUFDLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBQyxlQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixtQkFERixDQVRGLENBTEYsQ0F6Q0YsRUE4REU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsR0FBUjtBQUFZLGVBQVMsRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLGFBREYsQ0E5REYsQ0FORixDQXpuQkYsQ0FERixDQURGLENBREEsQ0FERjtBQTZzQkQ7O0FBbnRCd0M7O0FBcXRCNUJELDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDenRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLTyxNQUFNRSxLQUFOLFNBQW9CbEcsK0NBQXBCLENBQThCO0FBQ25DLGVBQWFtRyxlQUFiLENBQTZCN0YsR0FBN0IsRUFBa0M7QUFDaEMsV0FBTztBQUFFbUUsWUFBTSxFQUFFLFlBQVY7QUFBdUIzSCxVQUFJLEVBQUcsT0FBOUI7QUFBc0NzSixVQUFJLEVBQUMsVUFBM0M7QUFBd0RDLGNBQVEsRUFBRyxLQUFLQztBQUF4RSxLQUFQO0FBQ0Q7O0FBQ0R6RixhQUFXLENBQUNYLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0EsS0FBTCxDQUFXQyxRQUFYO0FBQ0EsU0FBS3VCLEtBQUwsR0FBYTtBQUNYNkUsY0FBUSxFQUFFLGVBREM7QUFFWHpKLFVBQUksRUFBRSxPQUZLO0FBR1gwSixjQUFRLEVBQUUsS0FBS3RHLEtBQUwsQ0FBVzBCO0FBSFYsS0FBYjtBQUtEOztBQUNEM0IsUUFBTSxHQUFHO0FBQ1BpQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLakIsS0FBTCxDQUFXdUcsT0FBdkI7QUFDQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGFBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxhQUFPLEVBQUMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBTSxhQUFPLEVBQUMscUNBQWQ7QUFBb0QsVUFBSSxFQUFDLFVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDLDJCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRTtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQW9CLGFBQU8sRUFBQyxpQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORixFQVFFO0FBQ0UsVUFBSSxFQUFDLHFFQURQO0FBRUUsU0FBRyxFQUFDLFlBRk47QUFHRSxVQUFJLEVBQUMsVUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUkYsRUFjRTtBQUNFLFVBQUksRUFBQyxzREFEUDtBQUVFLFNBQUcsRUFBQyxZQUZOO0FBR0UsVUFBSSxFQUFDLFVBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWRGLEVBbUJFO0FBQ0UsVUFBSSxFQUFDLGdEQURQO0FBRUUsU0FBRyxFQUFDLFlBRk47QUFHRSxVQUFJLEVBQUMsVUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbkJGLEVBd0JFO0FBQ0UsVUFBSSxFQUFDLGtEQURQO0FBRUUsU0FBRyxFQUFDLFlBRk47QUFHRSxVQUFJLEVBQUMsVUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BeEJGLEVBNkJHO0FBQU0sVUFBSSxFQUFDLDhFQUFYO0FBQTBGLFNBQUcsRUFBQyxZQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN0JILEVBK0JFO0FBQ0UsVUFBSSxFQUFDLG1EQURQO0FBRUUsU0FBRyxFQUFDLFlBRk47QUFHRSxVQUFJLEVBQUMsVUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BL0JGLEVBb0NHO0FBQU0sVUFBSSxFQUFDLDZDQUFYO0FBQXlELFNBQUcsRUFBQyxZQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcENILEVBc0NFO0FBQU0sVUFBSSxFQUFDLG1DQUFYO0FBQStDLFNBQUcsRUFBQyxZQUFuRDtBQUFnRSxVQUFJLEVBQUMsVUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXRDRixFQXdDRTtBQUNFLFNBQUcsRUFBQyxZQUROO0FBRUUsVUFBSSxFQUFDLDZDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF4Q0YsRUE0Q0U7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMsa0NBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE1Q0YsRUE4Q0U7QUFDRSxVQUFJLEVBQUMsMkNBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUdFLFFBQUUsRUFBQyxxQkFITDtBQUlFLFVBQUksRUFBQyxVQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE5Q0YsRUFvREU7QUFDRSxVQUFJLEVBQUMscUNBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUdFLFVBQUksRUFBQyxVQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFwREYsRUF5REU7QUFDRSxVQUFJLEVBQUMsK0JBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUdFLFVBQUksRUFBQyxVQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF6REYsRUE4REU7QUFDRSxVQUFJLEVBQUMsOEJBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUdFLFVBQUksRUFBQyxVQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE5REYsRUFtRUU7QUFDRSxVQUFJLEVBQUMsMkNBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUdFLFVBQUksRUFBQyxVQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFuRUYsRUF5RUU7QUFDRSxVQUFJLEVBQUMseUNBRFA7QUFFRSxTQUFHLEVBQUMsWUFGTjtBQUdFLFdBQUssRUFBQyxRQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF6RUYsRUErRUU7QUFDRSxTQUFHLEVBQUMsWUFETjtBQUVFLFVBQUksRUFBQyxvREFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BL0VGLEVBb0ZFO0FBQU0sU0FBRyxFQUFDLGVBQVY7QUFBMEIsVUFBSSxFQUFDLDJCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcEZGLENBREYsRUF1RkU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLEtBQUt2RyxLQUFMLENBQVdDLFFBRmIsQ0FIRixFQU9FLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVBGLENBdkZGLEVBZ0dFO0FBQVEsU0FBRyxFQUFDLHdDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoR0YsRUFpR0U7QUFBUSxTQUFHLEVBQUMsb0NBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpHRixFQWtHRTtBQUFRLFNBQUcsRUFBQyx3REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEdGLEVBbUdFO0FBQVEsU0FBRyxFQUFDLDBEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFuR0YsRUFxR0U7QUFBUSxTQUFHLEVBQUMsaURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXJHRixFQXNHRTtBQUFRLFNBQUcsRUFBQywrREFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEdGLEVBd0dFO0FBQVEsU0FBRyxFQUFDLHVEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF4R0YsRUF5R0U7QUFBUSxTQUFHLEVBQUMsNkVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXpHRixFQTBHRTtBQUFRLFNBQUcsRUFBQyx3Q0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BMUdGLEVBNEdFO0FBQVEsU0FBRyxFQUFDLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE1R0YsRUE2R0U7QUFBUSxTQUFHLEVBQUMsd0JBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTdHRixFQThHRTtBQUFRLFNBQUcsRUFBQyw2QkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BOUdGLEVBZ0hFO0FBQVEsU0FBRyxFQUFDLDRDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFoSEYsRUFpSEU7QUFBUSxTQUFHLEVBQUMscURBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWpIRixFQWtIRTtBQUFRLFNBQUcsRUFBQyxtREFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbEhGLEVBbUhFO0FBQVEsU0FBRyxFQUFDLGdEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFuSEYsRUFxSEU7QUFBUSxTQUFHLEVBQUMsd0NBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXJIRixFQXNIRTtBQUFRLFNBQUcsRUFBQyw2Q0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdEhGLEVBd0hFO0FBQVEsU0FBRyxFQUFDLGdEQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF4SEYsRUF5SEU7QUFBUSxTQUFHLEVBQUMsK0NBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXpIRixDQURGO0FBK0hEOztBQTlJa0M7QUFpSnRCK0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1RLFFBQU4sU0FBdUIxRywrQ0FBdkIsQ0FBaUM7QUFDcEMsZUFBYW1HLGVBQWIsQ0FBNkI3RixHQUE3QixFQUFrQztBQUM5QixVQUFNakIsR0FBRyxHQUFHLE1BQU1PLDZFQUFnQixDQUFDLDZCQUFELENBQWxDO0FBQ0ssVUFBTWEsSUFBSSxHQUFHLE1BQU1wQixHQUFHLENBQUNvQixJQUFKLEVBQW5CO0FBQ0EsV0FBTztBQUFDbUIsYUFBTyxFQUFHbkIsSUFBWDtBQUFrQmdFLFlBQU0sRUFBRTtBQUExQixLQUFQO0FBQ047O0FBQ0g1RCxhQUFXLENBQUNYLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDSDs7QUFDREQsUUFBTSxHQUFFO0FBQ0osV0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLG9HQUFELGVBQWdCLEtBQUtDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDUSxNQUFDLHFGQUFELGVBQWEsS0FBS0EsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURSLENBREosQ0FESjtBQU9IOztBQWpCbUM7QUFvQnpCd0csdUVBQWYsRTs7Ozs7Ozs7Ozs7QUMxQkEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvc3RhZmZzL2FkZHN0YWZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9zdGFmZnMvYWRkc3RhZmYuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNldENvb2tpZTogZnVuY3Rpb24oY25hbWUsIGN2YWx1ZSwgZXhkYXlzKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleGRheXMqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIisgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArIFwiPVwiICsgY3ZhbHVlICsgXCI7IFwiICsgZXhwaXJlcztcclxuICAgICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIHJlc292ZShkKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRDb29raWU6IGZ1bmN0aW9uIChjbmFtZSkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDxjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2FbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApPT0nICcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYy5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXNvdmUoY2EpO1xyXG4gICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XHJcbiAgICAgICBcclxuICAgICAgfSk7XHJcbiAgfSxcclxuICBjaGVja0Nvb2tpZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICB2YXIgdXNlcm5hbWU9Z2V0Q29va2llKFwidXNlcm5hbWVcIik7XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lIT1cIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiV2VsY29tZSBhZ2FpbiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1c2VybmFtZSA9IHByb21wdChcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWU6XCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBpZiAodXNlcm5hbWUgIT0gXCJcIiAmJiB1c2VybmFtZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VybmFtZVwiLCB1c2VybmFtZSwgMzY1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgICByZXNvdmUodXNlcm5hbWUpO1xyXG4gICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xyXG4gICAgIFxyXG4gICAgfSk7XHJcbn0sXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGZuRXhjZWxSZXBvcnQ6IGZ1bmN0aW9uKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cyl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcclxuICAgICAgICAgICAgdmFyIHRhYl90ZXh0PVwiPHRhYmxlIGJvcmRlcj0nMnB4Jz48dHIgYmdjb2xvcj0nIzg3QUZDNic+XCI7XHJcbiAgICB2YXIgdGV4dFJhbmdlOyB2YXIgaj0wO1xyXG4gICAgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4YW1wbGU0Jyk7IC8vIGlkIG9mIHRhYmxlXHJcblxyXG4gICAgZm9yKGogPSAwIDsgaiA8IHRhYi5yb3dzLmxlbmd0aCA7IGorKykgXHJcbiAgICB7ICAgICBcclxuICAgICAgICB0YWJfdGV4dD10YWJfdGV4dCt0YWIucm93c1tqXS5pbm5lckhUTUwrXCI8L3RyPlwiO1xyXG4gICAgICAgIC8vdGFiX3RleHQ9dGFiX3RleHQrXCI8L3RyPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRhYl90ZXh0PXRhYl90ZXh0K1wiPC90YWJsZT5cIjtcclxuICAgIHRhYl90ZXh0PSB0YWJfdGV4dC5yZXBsYWNlKC88QVtePl0qPnw8XFwvQT4vZywgXCJcIik7Ly9yZW1vdmUgaWYgdSB3YW50IGxpbmtzIGluIHlvdXIgdGFibGVcclxuICAgIHRhYl90ZXh0PSB0YWJfdGV4dC5yZXBsYWNlKC88aW1nW14+XSo+L2dpLFwiXCIpOyAvLyByZW1vdmUgaWYgdSB3YW50IGltYWdlcyBpbiB5b3VyIHRhYmxlXHJcbiAgICB0YWJfdGV4dD0gdGFiX3RleHQucmVwbGFjZSgvPGlucHV0W14+XSo+fDxcXC9pbnB1dD4vZ2ksIFwiXCIpOyAvLyByZW9tdmVzIGlucHV0IHBhcmFtc1xyXG5cclxuICAgIHZhciB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgdmFyIG1zaWUgPSB1YS5pbmRleE9mKFwiTVNJRSBcIik7IFxyXG5cclxuICAgIGlmIChtc2llID4gMCB8fCAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQuKnJ2XFw6MTFcXC4vKSkgICAgICAvLyBJZiBJbnRlcm5ldCBFeHBsb3JlclxyXG4gICAge1xyXG4gICAgICAgIHR4dEFyZWExLmRvY3VtZW50Lm9wZW4oXCJ0eHQvaHRtbFwiLFwicmVwbGFjZVwiKTtcclxuICAgICAgICB0eHRBcmVhMS5kb2N1bWVudC53cml0ZSh0YWJfdGV4dCk7XHJcbiAgICAgICAgdHh0QXJlYTEuZG9jdW1lbnQuY2xvc2UoKTtcclxuICAgICAgICB0eHRBcmVhMS5mb2N1cygpOyBcclxuICAgICAgICBzYT10eHRBcmVhMS5kb2N1bWVudC5leGVjQ29tbWFuZChcIlNhdmVBc1wiLHRydWUsXCJTYXkgVGhhbmtzIHRvIFN1bWl0Lnhsc1wiKTtcclxuICAgIH0gIFxyXG4gICAgZWxzZSAgICAgICAgICAgICAgICAgLy9vdGhlciBicm93c2VyIG5vdCB0ZXN0ZWQgb24gSUUgMTFcclxuICAgICAgICBzYSA9IHdpbmRvdy5vcGVuKCdkYXRhOmFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCwnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRhYl90ZXh0KSk7ICBcclxuICAgICAgICAgICAgcmVzb3ZlKHNhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgU2VuZF9Qb3N0X1Jlc3RBUEk6IGZ1bmN0aW9uKHVybCxkYXRhKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoKHVybCx7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL3JlamVjdCgnZXJyb3InKTtcbiAgICAgICAgICAgIHJlc292ZShyZXMpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFNlbmRfR2V0X1Jlc3RBUEk6IGZ1bmN0aW9uKHVybCl7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292ZSwgcmVqZWN0KT0+e1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGZldGNoKHVybCx7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgICAgcmVzb3ZlKHJlcyk7XG4gICAgICB9KTtcbiAgfSxcbiAgZmV0Y2hQcm9taXNlZDogZnVuY3Rpb24gKHVybCkgIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBTZW5kX0dldF9SZXN0QVBJKHVybCwgcmVzb2x2ZSwgcmVqZWN0KVxuICAgIH0pXG59LFxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlclBhZ2UgZnJvbSBcIi4uL3N0YWZmL0hlYWRlclBhZ2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJQYWdlIC8+XHJcbiAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7U2VuZF9HZXRfUmVzdEFQSX0gZnJvbSAnLi4vLi4vLi4vUmVxdWVzdC9pbXdfcmVxdWVzdCdcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0U3RhdGljUHJvcHMoY3R4KSB7XHJcbiAgICBsZXQgcmVzX2xpc3RzdiA9IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc3R1ZGVudC9saXN0XCIpO1xyXG4gICAgbGV0IHJlc3VsdF9saXN0c3YgPSByZXNfbGlzdHN2Lmpzb24oKTtcclxuICAgIGxldCByZXNfdHlwZXNjb3JlID0gU2VuZF9HZXRfUmVzdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS90eXBlc2NvcmVcIik7XHJcbiAgICBsZXQgcmVzdWx0X3R5cGVzY29yZSA9IHJlc190eXBlc2NvcmUuanNvbigpO1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuR2V0bGlzdERlcGFydG1lbnRzID0gdGhpcy5HZXRsaXN0RGVwYXJ0bWVudHMuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgYXN5bmMgR2V0bGlzdERlcGFydG1lbnRzKGV2ZW50KXtcclxuICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICBsZXQgcmVzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njcm9yZS8xJylcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfVxyXG4gIGFzeW5jIEdldExpc3RCcmFuY2hlcygpe1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIG5nYW5oXCIpXHJcbiAgfVxyXG4gIGFzeW5jIEdldExpc3RDbGFzc2VzKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2xhc3NzXCIpXHJcbiAgfVxyXG4gIGFzeW5jIEdldExpc3RTdWJqZWN0cygpe1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHN1YmplY3RcIilcclxuICB9XHJcbiAgYXN5bmMgR2V0TGlzdFN0dWRlbnRzKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgc3R1ZGVudHNcIilcclxuICB9XHJcbiAgYXN5bmMgR2V0TGlzdFR5cGVTY29yZSgpe1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHR5cGVzY29yZVwiKVxyXG4gIH1cclxuICBcclxuICAgIHJlbmRlcigpXHJcbiAgICAge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPkZvcm0gU2NvcmU8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYW5lbC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvbiBwdWxsLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS11cGdyYWRlZD1cIixNYXRlcmlhbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1yaWdodCBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbWRsLWZvcj1cInBhbmVsLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXNzaXN0YW50X3Bob3RvPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWRsLW1lbnVfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnByaW50PC9pPkFub3RoZXIgYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L2k+U29tZXRoaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwLXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxpc3QyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImxpc3QyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgbWFyZ2luLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1kbC1pY29uLXRvZ2dsZV9fbGFiZWwgbWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGlzdDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlcGFydG1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tZGwtZm9yPVwibGlzdDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1sZWZ0IG1kbC1qcy1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuR2V0bGlzdERlcGFydG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiIGRhdGEtdmFsPVwiREVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlicmFyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiIGRhdGEtdmFsPVwiQllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRtaW5pc3RyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWRsLW1lbnVfX2l0ZW1cIiBkYXRhLXZhbD1cIkJZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zcG9ydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiIGRhdGEtdmFsPVwiQllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFib3JhdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwLXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxpc3QxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJsaXN0MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IG1hcmdpbi0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtZGwtaWNvbi10b2dnbGVfX2xhYmVsIG1hdGVyaWFsLWljb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X2Rvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cImxpc3QxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJlbmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbWRsLWZvcj1cImxpc3QxMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtbWVudSBtZGwtbWVudS0tYm90dG9tLWxlZnQgbWRsLWpzLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5HZXRMaXN0QnJhbmNoZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJERVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWJyYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJCWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZG1pbmlzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiIGRhdGEtdmFsPVwiQllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJCWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJvcmF0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHAtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCBnZXRtZGwtc2VsZWN0IGdldG1kbC1zZWxlY3RfX2ZpeC1oZWlnaHQgdHh0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGlzdDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwibGlzdDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBtYXJnaW4tMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWRsLWljb24tdG9nZ2xlX19sYWJlbCBtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd19kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJsaXN0OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xhc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tZGwtZm9yPVwibGlzdDlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1sZWZ0IG1kbC1qcy1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuR2V0TGlzdENsYXNzZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJERVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWJyYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJCWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZG1pbmlzdHJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiIGRhdGEtdmFsPVwiQllcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJCWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYWJvcmF0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHAtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCBnZXRtZGwtc2VsZWN0IGdldG1kbC1zZWxlY3RfX2ZpeC1oZWlnaHQgdHh0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiU2VsZWN0Qm94NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3g1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgbWFyZ2luLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1kbC1pY29uLXRvZ2dsZV9fbGFiZWwgbWF0ZXJpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmRfYXJyb3dfZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiU2VsZWN0Qm94NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3ViamVjdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1tZGwtZm9yPVwiU2VsZWN0Qm94NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtbWVudSBtZGwtbWVudS0tYm90dG9tLWxlZnQgbWRsLWpzLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5HZXRMaXN0U3ViamVjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJERVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCIgZGF0YS12YWw9XCJCWVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGZW1hbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsIGdldG1kbC1zZWxlY3QgZ2V0bWRsLXNlbGVjdF9fZml4LWhlaWdodCB0eHQtZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzYW1wbGUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNhbXBsZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBtYXJnaW4tMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWRsLWljb24tdG9nZ2xlX19sYWJlbCBtYXRlcmlhbC1pY29uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZF9hcnJvd19kb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzYW1wbGUyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZVNjb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbWRsLWZvcj1cInNhbXBsZTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1sZWZ0IG1kbC1qcy1tZW51XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuR2V0TGlzdFR5cGVTY29yZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWRsLW1lbnVfX2l0ZW1cIiBkYXRhLXZhbD1cIkRFXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWRsLW1lbnVfX2l0ZW1cIiBkYXRhLXZhbD1cIkJZXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZlbWFsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwLXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgdHh0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm49XCItP1swLTldKihcXC5bMC05XSspP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRleHQ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRleHQ1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTY29yZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdW1iZXIgcmVxdWlyZWQhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZHVjYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwidGV4dDdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkdWNhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBwLXQtMjAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3QgbS1iLTEwIG0tci0yMCBidG4tcGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG0tYi0xMCBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXItY29udGFpbmVyXCJcclxuICAgICAgICAgICAgICBkYXRhLWNsb3NlLW9uLWJvZHktY2xpY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNxdWlja19zaWRlYmFyX3RhYl8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZSB0YWItaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGF0PC9pPkNoYXRcclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNxdWlja19zaWRlYmFyX3RhYl8zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRhYi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidGFiXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNldHRpbmdzPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogU3RhcnQgVXNlciBDaGF0ICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlIGNoYXQtc2lkZWJhci1jaGF0IGluIGFjdGl2ZSBzaG93XCJcclxuICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicXVpY2tfc2lkZWJhcl90YWJfMVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtc2lkZWJhci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXQtc2lkZWJhci1jaGF0LXVzZXJzIHNsaW1zY3JvbGwtc3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXJhaWwtY29sb3I9XCIjZGRkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13cmFwcGVyLWNsYXNzPVwiY2hhdC1zaWRlYmFyLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPk9ubGluZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdCBsaXN0LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwib25saW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5Kb2huIERlbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTcGluZSBTdXJnZW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj41PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ1c3kgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPlJhamVzaDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5EaXJlY3RvcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y1LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhd2F5IGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5KYWNvYiBSeWFuPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ydGhvIFN1cmdlb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvbmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPktlaG4gQW5kZXJzb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+Q0VPPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ1c3kgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPlNhcmFoIFNtaXRoPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuYWVzdGhldGljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mNy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwib25saW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5WbGFkIENhcmRlbGxhPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhcmRpb2xvZ2lzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlzdC1oZWFkaW5nXCI+T2ZmbGluZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlzdCBsaXN0LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS13YXJuaW5nXCI+NDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5KZW5uaWZlciBNYWtsZW48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+TnVyc2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBzZWVuIDAxOjIwIEFNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y4LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5MaW5hIFNtaXRoPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9ydGhvIFN1cmdlb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhc3Qgc2VlbiAxMToxNCBQTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+OTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y5LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5KZWZmIEFkYW08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG91bmRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBzZWVuIDM6MzEgUE1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjEwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmplbGluYSBDYXJkZWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGh5c2lvdGhlcmFwaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IHNlZW4gNzo0NSBQTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiBFbmQgVXNlciBDaGF0ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogU3RhcnQgU2V0dGluZyBQYW5lbCAqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhYi1wYW5lIGNoYXQtc2lkZWJhci1zZXR0aW5nc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInF1aWNrX3NpZGViYXJfdGFiXzNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXItc2V0dGluZ3MtbGlzdCBzbGltc2Nyb2xsLXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaXN0LWhlYWRpbmdcIj5MYXlvdXQgU2V0dGluZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRwYW5lIGlubmVyLWNvbnRlbnQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPlNpZGViYXIgUG9zaXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzaWRlYmFyLXBvcy1vcHRpb24gZm9ybS1jb250cm9sIGlucHV0LWlubGluZSBpbnB1dC1zbSBpbnB1dC1zbWFsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVmdFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPkhlYWRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyLW9wdGlvbiBmb3JtLWNvbnRyb2wgaW5wdXQtaW5saW5lIGlucHV0LXNtIGlucHV0LXNtYWxsIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaXhlZFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpeGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5EZWZhdWx0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+Rm9vdGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicGFnZS1mb290ZXItb3B0aW9uIGZvcm0tY29udHJvbCBpbnB1dC1pbmxpbmUgaW5wdXQtc20gaW5wdXQtc21hbGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZpeGVkXCI+Rml4ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlzdC1oZWFkaW5nXCI+QWNjb3VudCBTZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5Ob3RpZmljYXRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN3aXRjaC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5TaG93IE9ubGluZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzd2l0Y2gtN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+U3RhdHVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN3aXRjaC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMiBTdGVwcyBWZXJpZmljYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzd2l0Y2gtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPkdlbmVyYWwgU2V0dGluZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+TG9jYXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPlNhdmUgSGlzdHJ5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN3aXRjaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5BdXRvIFVwZGF0ZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaC02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRGb3JtXHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlclBhZ2UgZnJvbSBcIi4vL0hlYWRlclBhZ2VcIjtcclxuaW1wb3J0IFRhYlBhbmUgZnJvbSBcIi4vVGFiUGFuZVwiO1xyXG5pbXBvcnQgR2lyZERhdGEgZnJvbSBcIi4vR2lyZERhdGFcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCB7Zm5FeGNlbFJlcG9ydH0gZnJvbSAnLi4vLi4vLi4vRXhwb3J0L0V4Y2VsJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50U3RhZmYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgIGxvYWRpbmc6dHJ1ZSxcclxuICAgICAgZGF0YSA6IHRoaXMucHJvcHMucmVzdWx0c1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBmbkV4Y2VsKCkge1xyXG4gICAgZm5FeGNlbFJlcG9ydCgpXHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlclRhYmxlRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGEubWFwKChzdGFmZiwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIE1BTkhBTlZJRU4sXHJcbiAgICAgICAgSE9URU4sXHJcbiAgICAgICAgQklEQU5ILFxyXG4gICAgICAgIE5HQVlTSU5ILFxyXG4gICAgICAgIEdJT0lUSU5ILFxyXG4gICAgICAgIFZBTkhPQSxcclxuICAgICAgICBOR09BSU5HVSxcclxuICAgICAgICBTT1RSVU9ORyxcclxuICAgICAgICBDSFVZRU5NT04sXHJcbiAgICAgICAgVFJJTkhETyxcclxuICAgICAgICBOR0FZTFVVSFMsXHJcbiAgICAgICAgTFlET0xVVUhTLFxyXG4gICAgICAgIFRSQU5HVEhBSSxcclxuICAgICAgICBEQU5UT0MsXHJcbiAgICAgICAgVE9OR0lBTyxcclxuICAgICAgICBTT0JIWEgsXHJcbiAgICAgICAgTk9JX0RLS0NCLFxyXG4gICAgICAgIE5IQU5WSUVOX0lELFxyXG4gICAgICAgIG5nYXluaGFwLFxyXG4gICAgICAgIG5ndW9pbmhhcCxcclxuICAgICAgICBuZ2F5c3VhLFxyXG4gICAgICAgIG5ndW9pc3VhLFxyXG4gICAgICAgIFNPQ01ORCxcclxuICAgICAgICBOR0FZQ0FQLFxyXG4gICAgICAgIE5PSUNBUCxcclxuICAgICAgICBESURPTkcsXHJcbiAgICAgICAgRElFTlRIT0FJQkFOLFxyXG4gICAgICAgIERJQUNISUVNQUlMLFxyXG4gICAgICAgIE1BU09USFVFLFxyXG4gICAgICAgIERpYWNoaSxcclxuICAgICAgICBRdWVxdWFuLFxyXG4gICAgICAgIFdlYnNpdGUsXHJcbiAgICAgICAgYmFuZ2NhcGtoYWMsXHJcbiAgICAgICAgY2h1bmdjaGlraGFjLFxyXG4gICAgICAgIHV1ZGllbSxcclxuICAgICAgICBraHV5ZXRkaWVtLFxyXG4gICAgICAgIGRpYWNoaWxpZW5oZSxcclxuICAgICAgICBraW5obmdoaWVtXHJcbiAgICAgIH0gPSBzdGFmZjtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dHIga2V5PXtNQU5IQU5WSUVOfT5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPntNQU5IQU5WSUVOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0hPVEVOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0JJREFOSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZU0lOSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntHSU9JVElOSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntWQU5IT0F9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdPQUlOR1V9PC90ZD5cclxuICAgICAgICAgIDx0ZD57U09UUlVPTkd9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Q0hVWUVOTU9OfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RSSU5IRE99PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdBWUxVVUhTfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0xZRE9MVVVIU308L3RkPlxyXG4gICAgICAgICAgPHRkPntUUkFOR1RIQUl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57REFOVE9DfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RPTkdJQU99PC90ZD5cclxuICAgICAgICAgIDx0ZD57U09CSFhIfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05PSV9ES0tDQn08L3RkPlxyXG4gICAgICAgICAgPHRkPntOSEFOVklFTl9JRH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ2F5bmhhcH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ3VvaW5oYXB9PC90ZD5cclxuICAgICAgICAgIDx0ZD57bmdheXN1YX08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ3VvaXN1YX08L3RkPlxyXG4gICAgICAgICAgPHRkPntTT0NNTkR9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdBWUNBUH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOT0lDQVB9PC90ZD5cclxuICAgICAgICAgIDx0ZD57RElET05HfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RJRU5USE9BSUJBTn08L3RkPlxyXG4gICAgICAgICAgPHRkPntESUFDSElFTUFJTH08L3RkPlxyXG4gICAgICAgICAgPHRkPntNQVNPVEhVRX08L3RkPlxyXG4gICAgICAgICAgPHRkPntEaWFjaGl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57UXVlcXVhbn08L3RkPlxyXG4gICAgICAgICAgPHRkPntXZWJzaXRlfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2JhbmdjYXBraGFjfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2NodW5nY2hpa2hhY308L3RkPlxyXG4gICAgICAgICAgPHRkPnt1dWRpZW19PC90ZD5cclxuICAgICAgICAgIDx0ZD57a2h1eWV0ZGllbX08L3RkPlxyXG4gICAgICAgICAgPHRkPntkaWFjaGlsaWVuaGV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57a2luaG5naGllbX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJsZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZGF0YVswXSlcclxuICAgIGNvbnN0IG5ld2hlYWRlciA9IGhlYWRlci51bnNoaWZ0KCd0b29scycpXHJcbiAgICByZXR1cm4gaGVhZGVyLm1hcCgoa2V5LCBpbmRleCkgPT5cclxuICAgICAgPHRoIGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtrZXkudG9VcHBlckNhc2UoKX1cclxuICAgICAgPC90aD4pXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiYmFibGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRvciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmUgZm9udGF3ZXNvbWUtZGVtb1wiIGlkPVwidGFiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLXJlcGVhdCBidG4tY29sb3IgYm94LXJlZnJlc2hcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidC1jb2xsYXBzZSBidG4tY29sb3IgZmEgZmEtY2hldnJvbi1kb3duXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY2xvc2UgYnRuLWNvbG9yIGZhIGZhLXRpbWVzXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tbGdcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiPkFkZCBOZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gZGVlcFBpbmstYmdjb2xvciAgYnRuLW91dGxpbmUgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlRvb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcHJpbnRcIiAvPiBQcmludCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLXBkZi1vXCIgLz4gU2F2ZSBhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUERGIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZm5FeGNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWV4Y2VsLW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IHRvIEV4Y2VsIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXNjcm9sbGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgdGFibGUtY2hlY2thYmxlIG9yZGVyLWNvbHVtbiB2YWxpZ24tbWlkZGxlXCIgaWQ9XCJleGFtcGxlNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e3RoaXMucmVuZGVyVGFibGVIZWFkZXIoKX08L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYmxlRGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFN0YWZmO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgR2lyZERhdGEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlIGZvbnRhd2Vzb21lLWRlbW9cIiBpZD1cInRhYjFcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5BbGwgU3R1ZGVudHMgTGlzdDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLXJlcGVhdCBidG4tY29sb3IgYm94LXJlZnJlc2hcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY29sbGFwc2UgYnRuLWNvbG9yIGZhIGZhLWNoZXZyb24tZG93blwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidC1jbG9zZSBidG4tY29sb3IgZmEgZmEtdGltZXNcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tbGdcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiPkFkZCBOZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gZGVlcFBpbmstYmdjb2xvciAgYnRuLW91dGxpbmUgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlRvb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcHJpbnRcIiAvPiBQcmludCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1wZGYtb1wiIC8+IFNhdmUgYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQREYgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtZXhjZWwtb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IHRvIEV4Y2VsIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXNjcm9sbGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLWNoZWNrYWJsZSBvcmRlci1jb2x1bW4gdmFsaWduLW1pZGRsZVwiIGlkPVwiZXhhbXBsZTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBSb2xsIE5vIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IE5hbWUgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gRGVwYXJ0bWVudCA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBNb2JpbGUgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gRW1haWwgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZG1pc3Npb24gRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IEFjdGlvbiA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJhamVzaCBCaGF0dDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPk1lY2hhbmljYWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NDU2NTc1NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ0NDQ1NjU3NTYgPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIm1haWx0bzpzaHV4ZXJAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFqZXNoQGdtYWlsLmNvbSA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MjIgRmViIDIwMTA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMTAuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBvb2phIFBhdGVsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+U2NpZW5jZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cInRlbDo0NDQ3ODY4NzZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ3ODY4NzYgPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIm1haWx0bzpzaHV4ZXJAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9vamFAZ21haWwuY29tIDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj4yNyBBdWcgMjAwNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJvZGQgZ3JhZGVYXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGF0aWVudC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj4xNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2FyYWggU21pdGg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj5NLkMuQS48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NTU1NDY0NTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ1NTU0NjQ1NiA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwibWFpbHRvOnNodXhlckBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhaEBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjA1IEp1biAyMDExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9kZCBncmFkZVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYXRpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDMuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjIzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2huIERlbzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPk0uQi5CLlMuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidGVsOjQ0NDU0MzU2NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ0NDU0MzU2NCA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwibWFpbHRvOnNodXhlckBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huQGdtYWlsLmNvbSA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTUgRmViIDIwMTI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkNC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpheSBTb25pPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+QXJ0czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cInRlbDo0NDQ1NDM1NjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ1NDM1NjQgPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIm1haWx0bzpzaHV4ZXJAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VuaEBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjEyIE5vdiAyMDEyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9kZCBncmFkZVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYXRpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDUuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjE0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5KYWNvYiBSeWFuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+TXVzaWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NTQzNTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDQ0NTQzNTY0IDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJtYWlsdG86c2h1eGVyQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5zb25AZ21haWwuY29tIDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj4wMyBEZWMgMjAwMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJvZGQgZ3JhZGVYXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGF0aWVudC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQ2LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj43PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NZWdoYSBUcml2ZWRpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+Q29tbWVyY2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NTQzNTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDQ0NTQzNTY0IDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJtYWlsdG86c2h1eGVyQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZ2hhQGdtYWlsLmNvbSA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTcgTWFyIDIwMTM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMy5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJhamVzaDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPkNpdmlsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidGVsOjQ0NDQ1NjU3NTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ0NTY1NzU2IDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJtYWlsdG86c2h1eGVyQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhamVzaEBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjIyIEZlYiAyMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9kZCBncmFkZVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYXRpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDEwLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qb29qYSBQYXRlbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPkNvbXB1dGVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidGVsOjQ0NDc4Njg3NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ0NDc4Njg3NiA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwibWFpbHRvOnNodXhlckBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb29qYUBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjI3IEF1ZyAyMDA1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjdGlwdCgpLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJhamVzaCBCaGF0dDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPk1lY2hhbmljYWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NDU2NTc1NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ0NDQ1NjU3NTYgPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIm1haWx0bzpzaHV4ZXJAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFqZXNoQGdtYWlsLmNvbSA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MjIgRmViIDIwMTA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMTAuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlBvb2phIFBhdGVsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+U2NpZW5jZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cInRlbDo0NDQ3ODY4NzZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ3ODY4NzYgPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIm1haWx0bzpzaHV4ZXJAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9vamFAZ21haWwuY29tIDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj4yNyBBdWcgMjAwNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJvZGQgZ3JhZGVYXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGF0aWVudC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQyLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj4xNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2FyYWggU21pdGg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj5NLkMuQS48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NTU1NDY0NTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ1NTU0NjQ1NiA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwibWFpbHRvOnNodXhlckBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXJhaEBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjA1IEp1biAyMDExPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9kZCBncmFkZVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYXRpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDMuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjIzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Kb2huIERlbzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPk0uQi5CLlMuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidGVsOjQ0NDU0MzU2NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ0NDU0MzU2NCA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwibWFpbHRvOnNodXhlckBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2huQGdtYWlsLmNvbSA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTUgRmViIDIwMTI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkNC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkpheSBTb25pPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+QXJ0czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cInRlbDo0NDQ1NDM1NjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ1NDM1NjQgPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIm1haWx0bzpzaHV4ZXJAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2VuaEBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjEyIE5vdiAyMDEyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9kZCBncmFkZVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYXRpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDUuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjE0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5KYWNvYiBSeWFuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+TXVzaWM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NTQzNTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDQ0NTQzNTY0IDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJtYWlsdG86c2h1eGVyQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaG5zb25AZ21haWwuY29tIDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj4wMyBEZWMgMjAwMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJvZGQgZ3JhZGVYXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGF0aWVudC1pbWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQ2LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj43PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NZWdoYSBUcml2ZWRpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+Q29tbWVyY2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJ0ZWw6NDQ0NTQzNTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNDQ0NTQzNTY0IDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJtYWlsdG86c2h1eGVyQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZ2hhQGdtYWlsLmNvbSA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTcgTWFyIDIwMTM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib2RkIGdyYWRlWFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBhdGllbnQtaW1nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJsZWZ0XCI+MTg8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlJhamVzaDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPkNpdmlsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidGVsOjQ0NDQ1NjU3NTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0NDQ0NTY1NzU2IDwvYT48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCJtYWlsdG86c2h1eGVyQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhamVzaEBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjIyIEZlYiAyMDAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9kZCBncmFkZVhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwYXRpZW50LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDEwLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImxlZnRcIj41PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Qb29qYSBQYXRlbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPkNvbXB1dGVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwidGVsOjQ0NDc4Njg3NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDQ0NDc4Njg3NiA8L2E+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YSBocmVmPVwibWFpbHRvOnNodXhlckBnbWFpbC5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb29qYUBnbWFpbC5jb20gPC9hPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibGVmdFwiPjI3IEF1ZyAyMDA1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjdGlwdCgpLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2lyZERhdGFcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlclBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZS1icmVhZGNydW1iXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB1bGwtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPkFsbCBTdHVkZW50cyBMaXN0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiBwYWdlLWJyZWFkY3J1bWIgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJmYSBmYS1ob21lXCIgLz4mbmJzcDs8YSBjbGFzc05hbWU9XCJwYXJlbnQtaXRlbVwiIGhyZWY9XCJpbmRleC5odG1sXCI+SG9tZTwvYT4mbmJzcDs8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1yaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwicGFyZW50LWl0ZW1cIiBocmVmPlN0dWRlbnRzPC9hPiZuYnNwOzxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj5BbGwgU3R1ZGVudHMgTGlzdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJQYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7ZmV0Y2hQcm9taXNlZH0gZnJvbSAnLi4vLi4vLi4vUmVxdWVzdC9pbXdfcmVxdWVzdCdcclxuaW1wb3J0IEFkZEZvcm0gZnJvbSAnLi9BZGRGb3JtJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICBcIklEX1NWX01IXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiSURfTG9haWRpZW1cIjogXCJcIixcclxuICAgICAgICBcIlNvZGllbVwiIDogXCJcIixcclxuICAgICAgICBcIkdoaWNodVwiIDogXCJcIixcclxuICAgICAgICBcIk5nYXluaGFwXCI6XCJcIixcclxuICAgICAgICBcIk5ndW9pbmhhcFwiIDogXCJcIixcclxuICAgICAgICBcIk5nYXlzdWFcIiA6IFwiXCIsXHJcbiAgICAgICAgXCJOZ3VvaXN1YVwiIDogXCJcIixcclxuICAgICAgICBcIlRyYW5ndGhhaVwiOlwiXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICBmZXRjaFByb21pc2VkKFwiaHR0cDovL2JhY2tlbmQvZm9vLnR4dFwiLCA1MDApLFxyXG4gICAgICAgIGZldGNoUHJvbWlzZWQoXCJodHRwOi8vYmFja2VuZC9iYXoudHh0XCIsIDUwMClcclxuICAgIF0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBsZXQgWyBmb28sIGJhciwgYmF6IF0gPSBkYXRhXHJcbiAgICAgICAgY29uc29sZS5sb2coYHN1Y2Nlc3M6IGZvbz0ke2Zvb30gYmFyPSR7YmFyfSBiYXo9JHtiYXp9YClcclxuICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3I6ICR7ZXJyfWApXHJcbiAgICB9KVxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gIHsvKiBNb2RhbCAqL31cclxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm15TW9kYWxcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICB7LyogTW9kYWwgY29udGVudCovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICB7Lyp0aGVtIGluIGhlcmUgKi99XHJcbiAgICAgICAgICA8QWRkRm9ybS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBjdXN0b210YWIgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj48YSBocmVmPVwiI3RhYjFcIiBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkxpc3RcclxuICAgICAgICAgICAgICAgIFZpZXc8L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+PGEgaHJlZj1cIiN0YWIyXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkdyaWRcclxuICAgICAgICAgICAgICAgIFZpZXc8L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0b3JcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhYlBhbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmVcIiBpZD1cInRhYjJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbm8tcGFkZGluZyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDEwLmpwZ1wiIGNsYXNzTmFtZT1cImRvY3Rvci1waWNcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1uYW1lXCI+UG9vamEgUGF0ZWwgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1jZW50ZXJcIj4gU2NpZW5jZSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+QS0xMDMsIHNoeWFtIGdva3VsIGZsYXRzLCBNYWhhdG1hIFJvYWQgPGJyIC8+TXVtYmFpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIiAvPjxhIGhyZWY9XCJ0ZWw6KDEyMyk0NTYtNzg5MFwiPiAoMTIzKTQ1Ni03ODkwPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9mZXNzb3JfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGUgZGVlcFBpbmstYmdjb2xvciBidG4tc21cIj5SZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBuby1wYWRkaW5nIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMS5qcGdcIiBjbGFzc05hbWU9XCJkb2N0b3ItcGljXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VydGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItbmFtZVwiPlJhamVzaCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNlbnRlclwiPiBNYXRoZW1hdGljcyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+NDUsIEtyaXNobmEgVG93ZXIsIE5lYXIgQnVzIFN0b3AsIFNhdGVsbGl0ZSwgPGJyIC8+TXVtYmFpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIC8+PGEgaHJlZj1cInRlbDooMTIzKTQ1Ni03ODkwXCI+ICgxMjMpNDU2LTc4OTA8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcmJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2Zlc3Nvcl9wcm9maWxlLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNpcmNsZSBkZWVwUGluay1iZ2NvbG9yIGJ0bi1zbVwiPlJlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG5vLXBhZGRpbmcgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQyLmpwZ1wiIGNsYXNzTmFtZT1cImRvY3Rvci1waWNcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1uYW1lXCI+U2FyYWggU21pdGggPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1jZW50ZXJcIj4gQ29tbWVyY2UgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPjQ1NiwgRXN0ZXJuIGV2ZW51ZSwgQ291cnRhZ2UgYXJlYSwgPGJyIC8+TmV3IFlvcms8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIC8+PGEgaHJlZj1cInRlbDooMTIzKTQ1Ni03ODkwXCI+ICgxMjMpNDU2LTc4OTA8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcmJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2Zlc3Nvcl9wcm9maWxlLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNpcmNsZSBkZWVwUGluay1iZ2NvbG9yIGJ0bi1zbVwiPlJlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBuby1wYWRkaW5nIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMy5qcGdcIiBjbGFzc05hbWU9XCJkb2N0b3ItcGljXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VydGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItbmFtZVwiPkpvaG4gRGVvIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY2VudGVyXCI+IEFydHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPkEtMTAzLCBzaHlhbSBnb2t1bCBmbGF0cywgTWFoYXRtYSBSb2FkIDxiciAvPk11bWJhaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOigxMjMpNDU2LTc4OTBcIj4gKDEyMyk0NTYtNzg5MDwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZmVzc29yX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGRlZXBQaW5rLWJnY29sb3IgYnRuLXNtXCI+UmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbm8tcGFkZGluZyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDQuanBnXCIgY2xhc3NOYW1lPVwiZG9jdG9yLXBpY1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLW5hbWVcIj5KYXkgU29uaSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNlbnRlclwiPiBNLkIuQS4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPjQ1LCBLcmlzaG5hIFRvd2VyLCBOZWFyIEJ1cyBTdG9wLCBTYXRlbGxpdGUsIDxiciAvPk11bWJhaVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIiAvPjxhIGhyZWY9XCJ0ZWw6KDEyMyk0NTYtNzg5MFwiPiAoMTIzKTQ1Ni03ODkwPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9mZXNzb3JfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGUgZGVlcFBpbmstYmdjb2xvciBidG4tc21cIj5SZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBuby1wYWRkaW5nIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkNS5qcGdcIiBjbGFzc05hbWU9XCJkb2N0b3ItcGljXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VydGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItbmFtZVwiPkphY29iIFJ5YW4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1jZW50ZXJcIj4gVXJvbG9neSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+NDU2LCBFc3Rlcm4gZXZlbnVlLCBDb3VydGFnZSBhcmVhLCA8YnIgLz5OZXcgWW9yazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOigxMjMpNDU2LTc4OTBcIj4gKDEyMyk0NTYtNzg5MDwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZmVzc29yX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGRlZXBQaW5rLWJnY29sb3IgYnRuLXNtXCI+UmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG5vLXBhZGRpbmcgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQ2LmpwZ1wiIGNsYXNzTmFtZT1cImRvY3Rvci1waWNcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1uYW1lXCI+TWVnaGEgVHJpdmVkaSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNlbnRlclwiPiBFbGVjdHJpY2FsIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD5BLTEwMywgc2h5YW0gZ29rdWwgZmxhdHMsIE1haGF0bWEgUm9hZCA8YnIgLz5NdW1iYWk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzc05hbWU9XCJmYSBmYS1waG9uZVwiIC8+PGEgaHJlZj1cInRlbDooMTIzKTQ1Ni03ODkwXCI+ICgxMjMpNDU2LTc4OTA8L2E+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcmJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2Zlc3Nvcl9wcm9maWxlLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNpcmNsZSBkZWVwUGluay1iZ2NvbG9yIGJ0bi1zbVwiPlJlYWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBNb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG5vLXBhZGRpbmcgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQxLmpwZ1wiIGNsYXNzTmFtZT1cImRvY3Rvci1waWNcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1uYW1lXCI+UmFqZXNoIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY2VudGVyXCI+IE1hdGhlbWF0aWNzIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD40NSwgS3Jpc2huYSBUb3dlciwgTmVhciBCdXMgU3RvcCwgU2F0ZWxsaXRlLCA8YnIgLz5NdW1iYWlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOigxMjMpNDU2LTc4OTBcIj4gKDEyMyk0NTYtNzg5MDwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZmVzc29yX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGRlZXBQaW5rLWJnY29sb3IgYnRuLXNtXCI+UmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbm8tcGFkZGluZyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDIuanBnXCIgY2xhc3NOYW1lPVwiZG9jdG9yLXBpY1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLW5hbWVcIj5TYXJhaCBTbWl0aCA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNlbnRlclwiPiBDb21tZXJjZSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+NDU2LCBFc3Rlcm4gZXZlbnVlLCBDb3VydGFnZSBhcmVhLCA8YnIgLz5OZXcgWW9yazwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOigxMjMpNDU2LTc4OTBcIj4gKDEyMyk0NTYtNzg5MDwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZmVzc29yX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGRlZXBQaW5rLWJnY29sb3IgYnRuLXNtXCI+UmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IG5vLXBhZGRpbmcgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3N0ZC9zdGQxMC5qcGdcIiBjbGFzc05hbWU9XCJkb2N0b3ItcGljXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VydGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItbmFtZVwiPlBvb2phIFBhdGVsIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY2VudGVyXCI+IFNjaWVuY2UgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPkEtMTAzLCBzaHlhbSBnb2t1bCBmbGF0cywgTWFoYXRtYSBSb2FkIDxiciAvPk11bWJhaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOigxMjMpNDU2LTc4OTBcIj4gKDEyMyk0NTYtNzg5MDwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZmVzc29yX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGRlZXBQaW5rLWJnY29sb3IgYnRuLXNtXCI+UmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgbm8tcGFkZGluZyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3Rvci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvc3RkL3N0ZDEuanBnXCIgY2xhc3NOYW1lPVwiZG9jdG9yLXBpY1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtdXNlcnRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLW5hbWVcIj5SYWplc2ggPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZS1jZW50ZXJcIj4gTWF0aGVtYXRpY3MgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPjQ1LCBLcmlzaG5hIFRvd2VyLCBOZWFyIEJ1cyBTdG9wLCBTYXRlbGxpdGUsIDxiciAvPk11bWJhaVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3NOYW1lPVwiZmEgZmEtcGhvbmVcIiAvPjxhIGhyZWY9XCJ0ZWw6KDEyMyk0NTYtNzg5MFwiPiAoMTIzKTQ1Ni03ODkwPC9hPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXVzZXJidXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9mZXNzb3JfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jaXJjbGUgZGVlcFBpbmstYmdjb2xvciBidG4tc21cIj5SZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBuby1wYWRkaW5nIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdG9yLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9zdGQvc3RkMy5qcGdcIiBjbGFzc05hbWU9XCJkb2N0b3ItcGljXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VydGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2N0b3ItbmFtZVwiPkpvaG4gRGVvIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtY2VudGVyXCI+IEFydHMgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPkEtMTAzLCBzaHlhbSBnb2t1bCBmbGF0cywgTWFoYXRtYSBSb2FkIDxiciAvPk11bWJhaTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzTmFtZT1cImZhIGZhLXBob25lXCIgLz48YSBocmVmPVwidGVsOigxMjMpNDU2LTc4OTBcIj4gKDEyMyk0NTYtNzg5MDwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS11c2VyYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZmVzc29yX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2lyY2xlIGRlZXBQaW5rLWJnY29sb3IgYnRuLXNtXCI+UmVhZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmU8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiUGFuZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyAgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1mb290ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWZvb3Rlci1pbm5lclwiPiAyMDE3IMKpIFNtYXJ0IFVuaXZlcnNpdHkgVGhlbWUgQnlcbiAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOnJlZHN0YXJ0aGVtZUBnbWFpbC5jb21cIiB0YXJnZXQ9XCJfdG9wXCIgY2xhc3NOYW1lPVwibWFrZXJDc3NcIj5SZWRzdGFyIFRoZW1lPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1hcnJvdy11cFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlciBuYXZiYXIgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWhlYWRlci1pbm5lciBcIj5cbiAgICAgICAgICAgICAgICB7LyogbG9nbyBzdGFydCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9nb1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWljb24gbWF0ZXJpYWwtaWNvbnMgZmEtcm90YXRlLTQ1XCI+c2Nob29sPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dvLWRlZmF1bHRcIj5IT01FPC9zcGFuPiA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIGxvZ28gZW5kICovfVxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbGVmdCBpblwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZXIgc2lkZWJhci10b2dnbGVyXCI+PGkgY2xhc3NOYW1lPVwiaWNvbi1tZW51XCIgLz48L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtLW9wZW5lZFwiIGFjdGlvbj1cIiNcIiBtZXRob2Q9XCJHRVRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIG5hbWU9XCJxdWVyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cImJ0biBzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbWFnbmlmaWVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgey8qIHN0YXJ0IG1vYmlsZSBtZW51ICovfVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZXIgcmVzcG9uc2l2ZS10b2dnbGVyXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICB7LyogZW5kIG1vYmlsZSBtZW51ICovfVxuICAgICAgICAgICAgICAgIHsvKiBzdGFydCBoZWFkZXIgbWVudSAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1tZW51XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4tYnRuXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3dzLWFsdFwiIC8+PC9hPjwvbGk+XG4gICAgICAgICAgICAgIHsvKiBzdGFydCBsYW5ndWFnZSBtZW51ICovfVxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gbGFuZ3VhZ2Utc3dpdGNoXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPiA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZmxhZ3MvZ2IucG5nXCIgY2xhc3NOYW1lPVwicG9zaXRpb24tbGVmdFwiIGFsdD1cIlwiIC8+IEVuZ2xpc2ggPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRldXRzY2hcIj48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZmxhZ3MvZGUucG5nXCIgYWx0PVwiXCIgLz4gRGV1dHNjaDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrcmFpbmlhblwiPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9mbGFncy91YS5wbmdcIiBhbHQ9XCJcIiAvPiDQo9C60YDQsNGX0L3RgdGM0LrQsDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImVuZ2xpc2hcIj48aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvZmxhZ3MvZ2IucG5nXCIgYWx0PVwiXCIgLz4gRW5nbGlzaDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImVzcGFuYVwiPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9mbGFncy9lcy5wbmdcIiBhbHQ9XCJcIiAvPiBFc3Bhw7FhPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicnVzc2lhblwiPjxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9mbGFncy9ydS5wbmdcIiBhbHQ9XCJcIiAvPiDQoNGD0YHRgdC60LjQuTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgey8qIGVuZCBsYW5ndWFnZSBtZW51ICovfVxuICAgICAgICAgICAgICB7Lyogc3RhcnQgbm90aWZpY2F0aW9uIGRyb3Bkb3duICovfVxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tZXh0ZW5kZWQgZHJvcGRvd24tbm90aWZpY2F0aW9uXCIgaWQ9XCJoZWFkZXJfbm90aWZpY2F0aW9uX2JhclwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgZGF0YS1ob3Zlcj1cImRyb3Bkb3duXCIgZGF0YS1jbG9zZS1vdGhlcnM9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iZWxsLW9cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgaGVhZGVyQmFkZ2VDb2xvcjFcIj4gNiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZXh0ZXJuYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5Ob3RpZmljYXRpb25zPC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1sYWJlbCBwdXJwbGUtYmdjb2xvclwiPk5ldyA2PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtbGlzdCBzbWFsbC1zbGltc2Nyb2xsLXN0eWxlXCIgZGF0YS1oYW5kbGUtY29sb3I9XCIjNjM3MjgzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+anVzdCBub3c8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taWNvbiBjaXJjbGUgZGVlcFBpbmstYmdjb2xvclwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb25zIS4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+MyBtaW5zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWljb24gY2lyY2xlIHB1cnBsZS1iZ2NvbG9yXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdXNlciBvXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+Sm9obiBNaWNsZSA8L2I+aXMgbm93IGZvbGxvd2luZyB5b3UuIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPjcgbWluczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pY29uIGNpcmNsZSBibHVlLWJnY29sb3JcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1jb21tZW50cy1vXCIgLz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+U25laGEgSm9naSA8L2I+c2VudCB5b3UgYSBtZXNzYWdlLiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj4xMiBtaW5zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWljb24gY2lyY2xlIHBpbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1oZWFydFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPlJhdmkgUGF0ZWwgPC9iPmxpa2UgeW91ciBwaG90by4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+MTUgbWluczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pY29uIGNpcmNsZSB5ZWxsb3dcIj48aSBjbGFzc05hbWU9XCJmYSBmYS13YXJuaW5nXCIgLz48L3NwYW4+IFdhcm5pbmchIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPjEwIGhyczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pY29uIGNpcmNsZSByZWRcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10aW1lc1wiIC8+PC9zcGFuPiBBcHBsaWNhdGlvbiBlcnJvci4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+IEFsbCBub3RpZmljYXRpb25zIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIHsvKiBlbmQgbm90aWZpY2F0aW9uIGRyb3Bkb3duICovfVxuICAgICAgICAgICAgICB7Lyogc3RhcnQgbWVzc2FnZSBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLWV4dGVuZGVkIGRyb3Bkb3duLWluYm94XCIgaWQ9XCJoZWFkZXJfaW5ib3hfYmFyXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBkYXRhLWhvdmVyPVwiZHJvcGRvd25cIiBkYXRhLWNsb3NlLW90aGVycz1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlLW9cIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgaGVhZGVyQmFkZ2VDb2xvcjJcIj4gMiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZXh0ZXJuYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPjxzcGFuIGNsYXNzTmFtZT1cImJvbGRcIj5NZXNzYWdlczwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tbGFiZWwgY3lhbi1iZ2NvbG9yXCI+TmV3IDI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1saXN0IHNtYWxsLXNsaW1zY3JvbGwtc3R5bGVcIiBkYXRhLWhhbmRsZS1jb2xvcj1cIiM2MzcyODNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2YyLmpwZ1wiIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmplY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmcm9tXCI+IFNhcmFoIFNtaXRoIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lXCI+SnVzdCBOb3cgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj4gSmF0aW4gSSBmb3VuZCB5b3Ugb24gTGlua2VkSW4uLi4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMy5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJqZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnJvbVwiPiBKb2huIERlbyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPjE2IG1pbnMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj4gRndkOiBJbXBvcnRhbnQgTm90aWNlIFJlZ2FyZGluZyBZb3VyIERvbWFpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUuLi4gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGhvdG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMS5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJqZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnJvbVwiPiBSYWplc2ggPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj4yIGhycyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVzc2FnZVwiPiBwbHMgdGFrZSBhIHByaW50IG9mIGF0dGFjaG1lbnRzLiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwaG90b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y4LmpwZ1wiIGNsYXNzTmFtZT1cImltZy1jaXJjbGVcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YmplY3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmcm9tXCI+IExpbmEgU21pdGggPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWVcIj40MCBtaW5zIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+IEFwcGx5IGZvciBPcnRobyBTdXJnZW9uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBob3RvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjUuanBnXCIgY2xhc3NOYW1lPVwiaW1nLWNpcmNsZVwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZyb21cIj4gSmFjb2IgUnlhbiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZVwiPjQ2IG1pbnMgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj4gUmVxdWVzdCBmb3IgbGVhdmUgYXBwbGljYXRpb24uIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj4gQWxsIE1lc3NhZ2VzIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIHsvKiBlbmQgbWVzc2FnZSBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgey8qIHN0YXJ0IG1hbmFnZSB1c2VyIGRyb3Bkb3duICovfVxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gZHJvcGRvd24tdXNlclwiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgZGF0YS1ob3Zlcj1cImRyb3Bkb3duXCIgZGF0YS1jbG9zZS1vdGhlcnM9XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1jaXJjbGUgXCIgc3JjPVwiLi4vYXNzZXRzL2ltZy9kcC5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcm5hbWUgdXNlcm5hbWUtaGlkZS1vbi1tb2JpbGVcIj4ge3RoaXMucHJvcHMubmFtZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwidXNlcl9wcm9maWxlLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLXVzZXJcIiAvPiBQcm9maWxlIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1zZXR0aW5nc1wiIC8+IFNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1kaXJlY3Rpb25zXCIgLz4gSGVscFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpdmlkZXJcIj4gPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImxvY2tfc2NyZWVuLmh0bWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWxvY2tcIiAvPiBMb2NrXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJsb2dpbi5odG1sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1sb2dvdXRcIiAvPiBMb2cgT3V0IDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgey8qIGVuZCBtYW5hZ2UgdXNlciBkcm9wZG93biAqL31cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIGRyb3Bkb3duLXF1aWNrLXNpZGViYXItdG9nZ2xlclwiPlxuICAgICAgICAgICAgICAgIDxhIGlkPVwiaGVhZGVyU2V0dGluZ0J1dHRvblwiIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1pY29uIHB1bGwtcmlnaHRcIiBkYXRhLXVwZ3JhZGVkPVwiLE1hdGVyaWFsQnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1vcmVfdmVydDwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBRdWlja1NldHRpbmcgZXh0ZW5kcyAgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ1NpZGViYXJcIj5cbiAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT1cInNldHRpbmdQYW5lbFRvZ2dsZVwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS1zcGluIGZhLWNvZ1wiIC8+XG4gIDwvYT5cbiAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nU2lkZWJhci1ib2R5IHBzLWNvbnRhaW5lciBwcy10aGVtZS1kZWZhdWx0XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCIgZmFkZSBzaG93IGFjdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXBhbmVsLWhlYWRlclwiPlNldHRpbmcgUGFuZWxcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWljay1zZXR0aW5nIHNsaW1zY3JvbGwtc3R5bGVcIj5cbiAgICAgICAgPHVsIGlkPVwidGhlbWVjb2xvcnNcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWRlYmFyU2V0dGluZ1RpdGxlXCI+U2lkZWJhciBDb2xvcjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21wbGV0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jb2xvciBzaWRlYmFyLXRoZW1lXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cIndoaXRlXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJkYXJrXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJibHVlXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJpbmRpZ29cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImN5YW5cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImdyZWVuXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJyZWRcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNpZGViYXJTZXR0aW5nVGl0bGVcIj5IZWFkZXIgQnJhbmQgY29sb3I8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGhlbWUtb3B0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRoZW1lLWNvbG9yIGxvZ28tdGhlbWVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwibG9nby13aGl0ZVwiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwibG9nby1kYXJrXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJsb2dvLWJsdWVcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImxvZ28taW5kaWdvXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJsb2dvLWN5YW5cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImxvZ28tZ3JlZW5cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImxvZ28tcmVkXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzaWRlYmFyU2V0dGluZ1RpdGxlXCI+SGVhZGVyIGNvbG9yPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRoZW1lLW9wdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aGVtZS1jb2xvciBoZWFkZXItdGhlbWVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiaGVhZGVyLXdoaXRlXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJoZWFkZXItZGFya1wiPjxzcGFuIGNsYXNzTmFtZT1cImhlYWRcIiAvPjxzcGFuIGNsYXNzTmFtZT1cImNvbnRcIiAvPjwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiBcIiBkYXRhLXRoZW1lPVwiaGVhZGVyLWJsdWVcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImhlYWRlci1pbmRpZ29cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImhlYWRlci1jeWFuXCI+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZFwiIC8+PHNwYW4gY2xhc3NOYW1lPVwiY29udFwiIC8+PC9hPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiIFwiIGRhdGEtdGhlbWU9XCJoZWFkZXItZ3JlZW5cIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIgXCIgZGF0YS10aGVtZT1cImhlYWRlci1yZWRcIj48c3BhbiBjbGFzc05hbWU9XCJoZWFkXCIgLz48c3BhbiBjbGFzc05hbWU9XCJjb250XCIgLz48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBRdWlja1NldHRpbmc7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuXG5jbGFzcyBTaWRlYmFyTWVudSBleHRlbmRzICBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW1lbnUtY29udGFpbmVyIG5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSBmaXhlZC1tZW51XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJyZW1vdmUtc2Nyb2xsXCIgY2xhc3NOYW1lPVwibGVmdC1zaWRlbWVudVwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlbWVudSAgcGFnZS1oZWFkZXItZml4ZWQgc2xpbXNjcm9sbC1zdHlsZVwiIGRhdGEta2VlcC1leHBhbmRlZD1cImZhbHNlXCIgZGF0YS1hdXRvLXNjcm9sbD1cInRydWVcIiBkYXRhLXNsaWRlLXNwZWVkPXsyMDB9IHN0eWxlPXt7cGFkZGluZ1RvcDogJzIwcHgnfX0+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci10b2dnbGVyLXdyYXBwZXIgaGlkZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItdG9nZ2xlclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLXVzZXItcGFuZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vYXNzZXRzL2ltZy9kcC5qcGdcIiBjbGFzc05hbWU9XCJpbWctY2lyY2xlIHVzZXItaW1nLWNpcmNsZVwiIGFsdD1cIlVzZXIgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IGluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxwPiBLaXJhbiBQYXRlbDwvcD5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2lyY2xlIHVzZXItb25saW5lXCIgLz48c3BhbiBjbGFzc05hbWU9XCJ0eHRPbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICBPbmxpbmU8L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gc3RhcnQgXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+ZGFzaGJvYXJkPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGFzaGJvYXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gICBcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGFzaGJvYXJkIDE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZGFzaGJvYXJkMi5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGFzaGJvYXJkIDI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJkYXNoYm9hcmQzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5EYXNoYm9hcmQgMzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiZXZlbnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV2ZW50IE1hbmFnZW1lbnQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+IDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cGVyc29uPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UHJvZmVzc29yczwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9wcm9mZXNzb3JzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BbGxcbiAgICAgICAgICAgICAgICAgICAgICBQcm9mZXNzb3JzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgUHJvZmVzc29yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3Byb2Zlc3Nvcl9ib290c3RyYXAuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZCBQcm9mZXNzb3IgQm9vdHN0cmFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRcbiAgICAgICAgICAgICAgICAgICAgICBQcm9mZXNzb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9mZXNzb3JfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICBQcm9mZXNzb3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlIG9wZW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5ncm91cDwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlN0dWRlbnRzPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdGVkXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdyBvcGVuXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWxsX3N0dWRlbnRzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BbGxcbiAgICAgICAgICAgICAgICAgICAgICBTdHVkZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0ZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3N0dWRlbnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZFxuICAgICAgICAgICAgICAgICAgICAgIFN0dWRlbnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfc3R1ZGVudF9ib290c3RyYXAuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZFxuICAgICAgICAgICAgICAgICAgICAgIFN0dWRlbnQgQm9vdHN0cmFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9zdHVkZW50Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5FZGl0XG4gICAgICAgICAgICAgICAgICAgICAgU3R1ZGVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInN0dWRlbnRfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWJvdXRcbiAgICAgICAgICAgICAgICAgICAgICBTdHVkZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnNjaG9vbDwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvdXJzZXM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1yb3VkZWQgbGFiZWwtbWVudSBsYWJlbC1zdWNjZXNzXCI+bmV3PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9jb3Vyc2VzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BbGxcbiAgICAgICAgICAgICAgICAgICAgICBDb3Vyc2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2NvdXJzZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgQ291cnNlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2NvdXJzZV9ib290c3RyYXAuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZFxuICAgICAgICAgICAgICAgICAgICAgIENvdXJzZSBCb290c3RyYXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X2NvdXJzZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdFxuICAgICAgICAgICAgICAgICAgICAgIENvdXJzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNvdXJzZV9kZXRhaWxzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BYm91dFxuICAgICAgICAgICAgICAgICAgICAgIENvdXJzZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5sb2NhbF9saWJyYXJ5PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TGlicmFyeTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9hc3NldHMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFsbCBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgQXNzZXRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2xpYnJhcnkuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZCBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgQXNzZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfbGlicmFyeV9ib290c3RyYXAuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZFxuICAgICAgICAgICAgICAgICAgICAgIEFzc2V0IEJvb3RzdHJhcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfbGlicmFyeS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdFxuICAgICAgICAgICAgICAgICAgICAgIEFzc2V0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmJ1c2luZXNzPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGVwYXJ0bWVudHM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhbGxfZGVwYXJ0bWVudC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWxsXG4gICAgICAgICAgICAgICAgICAgICAgRGVwYXJ0bWVudHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZGRfZGVwYXJ0bWVudC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgRGVwYXJ0bWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9kZXBhcnRtZW50X2Jvb3RzdHJhcC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkIERlcGFydG1lbnQgQm9vdHN0cmFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9kZXBhcnRtZW50Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5FZGl0XG4gICAgICAgICAgICAgICAgICAgICAgRGVwYXJ0bWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5mYWNlPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U3RhZmY8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhbGxfc3RhZmZzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BbGxcbiAgICAgICAgICAgICAgICAgICAgICBTdGFmZjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9zdGFmZi5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkIFN0YWZmPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX3N0YWZmX2Jvb3RzdHJhcC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgU3RhZmYgQm9vdHN0cmFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9zdGFmZi5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdFxuICAgICAgICAgICAgICAgICAgICAgIFN0YWZmPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwic3RhZmZfcHJvZmlsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U3RhZmZcbiAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFpcmxpbmVfc2VhdF9pbmRpdmlkdWFsX3N1aXRlPC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+SG9saWRheTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFsbF9ob2xpZGF5cy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWxsXG4gICAgICAgICAgICAgICAgICAgICAgSG9saWRheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9ob2xpZGF5Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRcbiAgICAgICAgICAgICAgICAgICAgICBIb2xpZGF5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2hvbGlkYXlfYm9vdHN0cmFwLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5BZGRcbiAgICAgICAgICAgICAgICAgICAgICBIb2xpZGF5IEJvb3RzdHJhcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfaG9saWRheS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdFxuICAgICAgICAgICAgICAgICAgICAgIEhvbGlkYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJob2xpZGF5X2NhbGVuZGFyLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Ib2xpZGF5XG4gICAgICAgICAgICAgICAgICAgICAgQ2FsZW5kYXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5lbWFpbDwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVtYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1yb3VkZWQgbGFiZWwtbWVudSBsYWJlbC1kYW5nZXJcIj5uZXc8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWxfaW5ib3guaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkluYm94PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWxfdmlldy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VmlldyBNYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZW1haWxfY29tcG9zZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9zZSBNYWlsPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1vbmV0aXphdGlvbl9vbjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkZlZXM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJmZWVzX2NvbGxlY3Rpb24uaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkZlZXNcbiAgICAgICAgICAgICAgICAgICAgICBDb2xsZWN0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiYWRkX2ZlZXMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkZCBGZWVzIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImFkZF9mZWVzX2Jvb3RzdHJhcC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWRkXG4gICAgICAgICAgICAgICAgICAgICAgRmVlcyBCb290c3RyYXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJmZWVzX3JlY2VpcHQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkZlZVxuICAgICAgICAgICAgICAgICAgICAgIFJlY2VpcHQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIndpZGdldC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPiA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPndpZGdldHM8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5XaWRnZXQ8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kdnI8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5VSSBFbGVtZW50czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC1yb3VkZWQgbGFiZWwtbWVudSBsYWJlbC13YXJuaW5nXCI+bmV3PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ1aV9idXR0b25zLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5CdXR0b25zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidWlfc3dlZXRfYWxlcnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlN3ZWV0IEFsZXJ0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidWlfdGFic19hY2NvcmRpb25zX25hdnMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRhYnMgJmFtcDsgQWNjb3JkaW9uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVpX3R5cG9ncmFwaHkuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlR5cG9ncmFwaHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJub3RpZmljYXRpb24uaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk5vdGlmaWNhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVpX2ljb25zLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5JY29uczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInVpX3BhbmVscy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UGFuZWxzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwidWlfZ3JpZC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+R3JpZHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjYWxlbmRhci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q2FsZW5kZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ1aV90cmVlLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UcmVlIFZpZXc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ1aV9jYXJvdXNlbC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q2Fyb3VzZWw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdG9yZTwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPk1hdGVyaWFsIEVsZW1lbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9idXR0b24uaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkJ1dHRvbnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF90YWIuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRhYnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9jaGlwcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Q2hpcHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9ncmlkLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5HcmlkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfaWNvbnMuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkljb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9mb3JtLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfZGF0ZXBpY2tlci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGF0ZVBpY2tlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hdGVyaWFsX3NlbGVjdC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VsZWN0IEl0ZW08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF9sb2FkaW5nLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Mb2FkaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfbWVudS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hdGVyaWFsX3NsaWRlci5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2xpZGVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWF0ZXJpYWxfdGFibGVzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5UYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYXRlcmlhbF90b2dnbGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRvZ2dsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1hdGVyaWFsX2JhZGdlcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QmFkZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zdWJ0aXRsZXM8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtcyA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImxheW91dHNfZm9ybS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Rm9ybSBMYXlvdXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZHZhbmNlX2Zvcm0uaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFkdmFuY2UgQ29tcG9uZW50PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwid2l6YXJkLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3JtIFdpemFyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInZhbGlkYXRpb25fZm9ybS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+Rm9ybSBWYWxpZGF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZWRpdGFibGVfZm9ybS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdG9yPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5saXN0PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+RGF0YSBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImJhc2ljX3RhYmxlLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5CYXNpYyBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJhZHZhbmNlZF90YWJsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+QWR2YW5jZSBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJleHBvcnRfdGFibGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV4cG9ydCBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaGlsZF9yb3dfdGFibGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNoaWxkIFJvdyBUYWJsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJncm91cF90YWJsZS5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+R3JvdXBpbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0YWJsZURhdGEuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRhYmxlcyBXaXRoIFNvdXJjZWQgRGF0YTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dGltZWxpbmU8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DaGFydHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNoYXJ0c19hcGV4Y2hhcnQuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkFwZXggY2hhcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJjaGFydHNfYW1jaGFydC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+YW1DaGFydDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNoYXJ0c19lY2hhcnRzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5lQ2hhcnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiY2hhcnRzX21vcnJpcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TW9ycmlzIENoYXJ0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNoYXJ0c19jaGFydGpzLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5DaGFydGpzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tYXA8L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5NYXBzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJnb29nbGVfbWFwcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+R29vZ2xlIE1hcHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ2ZWN0b3JfbWFwcy5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+VmVjdG9yIE1hcHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj4gPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5kZXNjcmlwdGlvbjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV4dHJhIHBhZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gIFwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImxvZ2luLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Mb2dpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSAgXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwic2lnbl91cC5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+U2lnbiBVcDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSAgXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiZm9yZ290X3Bhc3N3b3JkLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5Gb3Jnb3RcbiAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPjxhIGhyZWY9XCJ1c2VyX3Byb2ZpbGUuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPjxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+UHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImNvbnRhY3QuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbnRhY3QgVXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJsb2NrX3NjcmVlbi5odG1sXCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgXCI+IDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TG9ja1xuICAgICAgICAgICAgICAgICAgICAgIFNjcmVlbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2UtNDA0Lmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj40MDQgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInBhZ2UtNTAwLmh0bWxcIiBjbGFzc05hbWU9XCJuYXYtbGluayBcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj41MDAgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImJsYW5rX3BhZ2UuaHRtbFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rIFwiPiA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPkJsYW5rXG4gICAgICAgICAgICAgICAgICAgICAgUGFnZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3NOYW1lPVwibmF2LWxpbmsgbmF2LXRvZ2dsZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2xpZGVzaG93PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+TXVsdGkgTGV2ZWwgTWVudTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvdyBcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdW5pdmVyc2l0eVwiIC8+IEl0ZW0gMVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3ViLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rIG5hdi10b2dnbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWJlbGwtb1wiIC8+IEFycm93IFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3cgXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1Yi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2FsY3VsYXRvclwiIC8+IFNhbXBsZSBMaW5rIDE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jbG9uZVwiIC8+IFNhbXBsZSBMaW5rIDI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2dzXCIgLz4gU2FtcGxlIExpbmsgMzwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1wZGYtb1wiIC8+IFNhbXBsZSBMaW5rIDE8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJzc1wiIC8+IFNhbXBsZSBMaW5rIDI8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWhkZC1vXCIgLz4gU2FtcGxlIExpbmsgMzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzc05hbWU9XCJuYXYtbGluayBuYXYtdG9nZ2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdhdmVsXCIgLz4gQXJyb3cgVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wYXBlci1wbGFuZVwiIC8+IFNhbXBsZSBMaW5rIDE8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBvd2VyLW9mZlwiIC8+IFNhbXBsZSBMaW5rIDE8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJlY3ljbGVcIiAvPiBTYW1wbGUgTGluayAxXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS12b2x1bWUtdXBcIiAvPiBJdGVtIDMgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhck1lbnU7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IFF1aWNrU2V0dGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9RdWlja1NldHRpbmdcIjtcbmltcG9ydCBTaWRlYmFyTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWRlYmFyTWVudVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcbmltcG9ydCBDb250ZW50U3RhZmYgZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0NvbnRlbnRTdGFmZidcbmltcG9ydCB7c2V0Y29va2llLGdldENvb2tpZSxjaGVja0Nvb2tpZX0gZnJvbSAnLi4vQ29va2llcy9Db29raWVzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4gICAgcmV0dXJuIHsgaGVhZGVyOiAnTGlzdCBTdGFmZicsbmFtZSA6ICdUaGFuaCcsTGlzdDpcIkxpc3RWaWV3XCIgLCBDb29va2llcyA6IHRoaXMudXNlckNvb2tpZXMgfTtcbiAgfVxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50ZXJzOiBcInRoaXMgaXMgdGhhbmhcIixcbiAgICAgIG5hbWU6IFwidGhhbmhcIixcbiAgICAgIHN0dWRlbnRzOiB0aGlzLnByb3BzLnJlc3VsdHNcbiAgICB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNvb2tpZXMpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgICA8bWV0YSBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiBuYW1lPVwidmlld3BvcnRcIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJSZXNwb25zaXZlIEFkbWluIFRlbXBsYXRlXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNtYXJ0VW5pdmVyc2l0eVwiIC8+XG4gICAgICAgICAgPHRpdGxlPkNES1RETDwvdGl0bGU+XG4gICAgICAgICAgey8qIGdvb2dsZSBmb250ICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7LyogaWNvbnMgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9mb250cy9zaW1wbGUtbGluZS1pY29ucy9zaW1wbGUtbGluZS1pY29ucy5taW4uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vZm9udHMvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2ZvbnRzL21hdGVyaWFsLWRlc2lnbi1pY29ucy9tYXRlcmlhbC1pY29uLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICBcdDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9kYXRhdGFibGVzL3BsdWdpbnMvYm9vdHN0cmFwL2RhdGFUYWJsZXMuYm9vdHN0cmFwNC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICB7Lypib290c3RyYXAgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIFx0PGxpbmsgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL3N1bW1lcm5vdGUvc3VtbWVybm90ZS5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPlxuICAgICAgICAgIHsvKmluYm94IHN0eWxlICovfVxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIuLi9hc3NldHMvY3NzL3BhZ2VzL2luYm94Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgLz5cbiAgICAgICAgICB7LyogTWF0ZXJpYWwgRGVzaWduIExpdGUgQ1NTICovfVxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvcGx1Z2lucy9tYXRlcmlhbC9tYXRlcmlhbC5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vYXNzZXRzL2Nzcy9tYXRlcmlhbF9zdHlsZS5jc3NcIiAvPlxuICAgICAgICAgIHsvKiBUaGVtZSBTdHlsZXMgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvY3NzL3RoZW1lL2xpZ2h0L3RoZW1lX3N0eWxlLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGlkPVwicnRfc3R5bGVfY29tcG9uZW50c1wiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGhyZWY9XCIuLi9hc3NldHMvY3NzL3RoZW1lL2xpZ2h0L3N0eWxlLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvcGx1Z2lucy5taW4uY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiLi4vYXNzZXRzL2Nzcy9yZXNwb25zaXZlLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9jc3MvdGhlbWUvbGlnaHQvdGhlbWUtY29sb3IuY3NzXCJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBkcm9wem9uZSAqL31cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Ryb3B6b25lL2Ryb3B6b25lLmNzc1wiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIG1lZGlhPVwic2NyZWVuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBEYXRlIFRpbWUgaXRlbSBDU1MgKi99XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi4uL2Fzc2V0cy9wbHVnaW5zL2ZsYXRwaWNrZXIvY3NzL2ZsYXRwaWNrci5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiBmYXZpY29uICovfVxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiLi4vYXNzZXRzL2ltZy9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPFF1aWNrU2V0dGluZyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxTaWRlYmFyTWVudSAvPlxuICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2pxdWVyeS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvcG9wcGVyL3BvcHBlci5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2pxdWVyeS1ibG9ja3VpL2pxdWVyeS5ibG9ja3VpLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2pxdWVyeS1zbGltc2Nyb2xsL2pxdWVyeS5zbGltc2Nyb2xsLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9ib290c3RyYXAvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2Jvb3RzdHJhcC1zd2l0Y2gvanMvYm9vdHN0cmFwLXN3aXRjaC5taW4uanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9wbHVnaW5zL2RhdGF0YWJsZXMvanF1ZXJ5LmRhdGFUYWJsZXMubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvZGF0YXRhYmxlcy9wbHVnaW5zL2Jvb3RzdHJhcC9kYXRhVGFibGVzLmJvb3RzdHJhcDQubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL3BhZ2VzL3RhYmxlL3RhYmxlX2RhdGEuanNcIj48L3NjcmlwdD5cblxuICAgICAgICA8c2NyaXB0IHNyYz1cIi4uL2Fzc2V0cy9qcy9hcHAuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvbGF5b3V0LmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL3RoZW1lLWNvbG9yLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9tYXRlcmlhbC9tYXRlcmlhbC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvanMvcGFnZXMvbWF0ZXJpYWwtc2VsZWN0L2dldG1kbC1zZWxlY3QuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9mbGF0cGlja2VyL2pzL2ZsYXRwaWNrZXIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL3BhZ2VzL2RhdGUtdGltZS9kYXRlLXRpbWUuaW5pdC5qc1wiPjwvc2NyaXB0PlxuXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL3BsdWdpbnMvZHJvcHpvbmUvZHJvcHpvbmUuanNcIj48L3NjcmlwdD5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9kcm9wem9uZS9kcm9wem9uZS1jYWxsLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgICAgPHNjcmlwdCBzcmM9XCIuLi9hc3NldHMvcGx1Z2lucy9hcGV4Y2hhcnRzL2FwZXhjaGFydHMubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiLi4vYXNzZXRzL2pzL3BhZ2VzL2NoYXJ0L2NoYXJ0anMvaG9tZS1kYXRhLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluZGV4IGZyb20gJy4uL2luZGV4J1xyXG5pbXBvcnQge1NlbmRfR2V0X1Jlc3RBUEl9IGZyb20gJy4uLy4uL1JlcXVlc3QvaW13X3JlcXVlc3QnXHJcbmltcG9ydCBMYXlvdXRQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyQ29tcG9uZW50cy9MYXlvdXRDb250ZW50UGFnZS9MYXlvdXRQYWdlJ1xyXG5pbXBvcnQgQWRkRm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lckNvbXBvbmVudHMvc3RhZmYvQWRkRm9ybSdcclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRTdGFmZiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zdGFmZicpXHJcbiAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgIHJldHVybiB7cmVzdWx0cyA6IGpzb24gLCBoZWFkZXI6ICdMaXN0IFN0YWZmJyB9O1xyXG4gICAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEluZGV4PlxyXG4gICAgICAgICAgICAgICAgPExheW91dFBhZ2Ugey4uLnRoaXMucHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkRm9ybSB7Li4udGhpcy5wcm9wc30vPlxyXG4gICAgICAgICAgICAgICAgIDwvTGF5b3V0UGFnZT5cclxuICAgICAgICAgICAgPC9JbmRleD5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFN0YWZmXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==