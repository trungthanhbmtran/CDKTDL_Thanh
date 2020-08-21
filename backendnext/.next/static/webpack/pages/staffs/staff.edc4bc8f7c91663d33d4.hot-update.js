webpackHotUpdate_N_E("pages/staffs/staff",{

/***/ "./components/ContainerComponents/staff/AddForm.js":
/*!*********************************************************!*\
  !*** ./components/ContainerComponents/staff/AddForm.js ***!
  \*********************************************************/
/*! exports provided: AddForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForm", function() { return AddForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__);









var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\AddForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var AddForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddForm, _Component);

  var _super = _createSuper(AddForm);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddForm, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var res, json;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])("http://localhost:3001/staff");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt("return", {
                  results: json,
                  header: "List Staff"
                });

              case 7:
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

  function AddForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AddForm);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "RenderListType", function () {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "RenderListTest", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var url, res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = "http://localhost:3001/score/departments";
              _context2.next = 3;
              return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])(url);

            case 3:
              res = _context2.sent;
              _context2.next = 6;
              return res.json();

            case 6:
              data = _context2.sent;
              return _context2.abrupt("return", __jsx("li", {
                className: "mdl-menu__item",
                "data-val": "DE",
                __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 7
                }
              }, "abc ", "Khoa"));

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.state = {
      departments: "",
      brench: "",
      "class": "",
      ID_SV_MH: "",
      ID_Loaidiem: "",
      Sodiem: "",
      Ghichu: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.GetlistDepartments = _this.GetlistDepartments.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.id, event.target.value));
    }
  }, {
    key: "GetlistDepartments",
    value: function () {
      var _GetlistDepartments = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
        var url, res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                url = "http://localhost:3001/score/departments";
                _context3.next = 4;
                return Object(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__["Send_Get_RestAPI"])(url);

              case 4:
                res = _context3.sent;
                _context3.next = 7;
                return res.json();

              case 7:
                data = _context3.sent;
                console.log("get Department");

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function GetlistDepartments(_x2) {
        return _GetlistDepartments.apply(this, arguments);
      }

      return GetlistDepartments;
    }()
  }, {
    key: "GetListBranches",
    value: function () {
      var _GetListBranches = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log("this is nganh");

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function GetListBranches() {
        return _GetListBranches.apply(this, arguments);
      }

      return GetListBranches;
    }()
  }, {
    key: "GetListClasses",
    value: function () {
      var _GetListClasses = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                console.log("this is classs");

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function GetListClasses() {
        return _GetListClasses.apply(this, arguments);
      }

      return GetListClasses;
    }()
  }, {
    key: "GetListSubjects",
    value: function () {
      var _GetListSubjects = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                console.log("this is subject");

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function GetListSubjects() {
        return _GetListSubjects.apply(this, arguments);
      }

      return GetListSubjects;
    }()
  }, {
    key: "GetListStudents",
    value: function () {
      var _GetListStudents = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                console.log("this is students");

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function GetListStudents() {
        return _GetListStudents.apply(this, arguments);
      }

      return GetListStudents;
    }()
  }, {
    key: "GetListTypeScore",
    value: function () {
      var _GetListTypeScore = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                console.log("this is typescore");

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function GetListTypeScore() {
        return _GetListTypeScore.apply(this, arguments);
      }

      return GetListTypeScore;
    }()
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                event.preventDefault();
                console.log(this.state.departments);
                console.log(this.state.brench);
                console.log(this.state["class"]);
                console.log(this.state.ID_SV_MH);
                console.log(this.state.ID_Loaidiem);
                console.log(this.state.Sodiem);
                console.log(this.state.Ghichu);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function handleSubmit(_x3) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "card-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }, "Form Score"), __jsx("button", {
        id: "panel-button",
        className: "mdl-button mdl-js-button mdl-button--icon pull-right",
        "data-upgraded": ",MaterialButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }
      }, "more_vert")), __jsx("ul", {
        className: "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",
        "data-mdl-for": "panel-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "mdl-menu__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 23
        }
      }, "assistant_photo"), "Action"), __jsx("li", {
        className: "mdl-menu__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 23
        }
      }, "print"), "Another action"), __jsx("li", {
        className: "mdl-menu__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 23
        }
      }, "favorite"), "Something else here"))), __jsx("div", {
        className: "card-body row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox1",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }
      }, "Department"), __jsx("select", {
        id: "departments",
        onChange: this.handleChange,
        value: this.state.departments,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      }, __jsx("option", {
        value: "khoa1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 25
        }
      }, "1"), __jsx("option", {
        value: "khoa2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 25
        }
      }, "2"), __jsx("option", {
        value: "khoa3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 25
        }
      }, "3")))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox2",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }
      }, "Brench"), __jsx("select", {
        id: "departments",
        onChange: this.handleChange,
        value: this.state.departments,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }
      }, __jsx("option", {
        value: "khoa1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 25
        }
      }, "1"), __jsx("option", {
        value: "khoa2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 25
        }
      }, "2"), __jsx("option", {
        value: "khoa3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 25
        }
      }, "3")))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox3",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, "Class"), __jsx("select", {
        id: "departments",
        onChange: this.handleChange,
        value: this.state.departments,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }
      }, __jsx("option", {
        value: "khoa1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 25
        }
      }, "1"), __jsx("option", {
        value: "khoa2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }
      }, "2"), __jsx("option", {
        value: "khoa3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 25
        }
      }, "3")))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox5",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 21
        }
      }, "Subjects"), __jsx("select", {
        id: "departments",
        onChange: this.handleChange,
        value: this.state.departments,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }
      }, __jsx("option", {
        value: "khoa1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 25
        }
      }, "1"), __jsx("option", {
        value: "khoa2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }
      }, "2"), __jsx("option", {
        value: "khoa3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 25
        }
      }, "3")))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox5",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, "TypeCore"), __jsx("select", {
        id: "ID_Loaidiem",
        onChange: this.handleChange,
        value: this.state.ID_Loaidiem,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 21
        }
      }, __jsx("option", {
        value: "select",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 25
        }
      }, "kt1"), __jsx("option", {
        value: "Java",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 25
        }
      }, "kt2"), __jsx("option", {
        value: "C++",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 25
        }
      }, "C++")))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, __jsx("input", {
        className: "mdl-textfield__input",
        type: "text",
        pattern: "-?[0-9]*(\\.[0-9]+)?",
        id: "Sodiem",
        value: this.state.Sodiem,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 23
        }
      }), __jsx("label", {
        className: "mdl-textfield__label",
        htmlFor: "text5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 23
        }
      }, "Score:"), __jsx("span", {
        className: "mdl-textfield__error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 23
        }
      }, "Number required!"))), __jsx("div", {
        className: "col-lg-12 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 21
        }
      }, __jsx("textarea", {
        className: "mdl-textfield__input",
        rows: 4,
        id: "Ghichu",
        value: this.state.Ghichu,
        onChange: this.handleChange,
        defaultValue: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 23
        }
      }), __jsx("label", {
        className: "mdl-textfield__label",
        htmlFor: "text7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 23
        }
      }, "Education"))), __jsx("div", {
        className: "col-lg-12 p-t-20 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 19
        }
      }, __jsx("button", {
        type: "button",
        className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink",
        onClick: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }, "Submit"), __jsx("button", {
        type: "button",
        className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 21
        }
      }, "Cancel"))))))), __jsx("div", {
        className: "chat-sidebar-container",
        "data-close-on-body-click": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "chat-sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "nav nav-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "#quick_sidebar_tab_1",
        className: "nav-link active tab-icon",
        "data-toggle": "tab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 17
        }
      }, " ", __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 19
        }
      }, "chat"), "Chat", __jsx("span", {
        className: "badge badge-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 19
        }
      }, "4"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "#quick_sidebar_tab_3",
        className: "nav-link tab-icon",
        "data-toggle": "tab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 17
        }
      }, " ", __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 19
        }
      }, "settings"), "Settings"))), __jsx("div", {
        className: "tab-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "tab-pane active chat-sidebar-chat in active show",
        role: "tabpanel",
        id: "quick_sidebar_tab_1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "chat-sidebar-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "chat-sidebar-chat-users slimscroll-style",
        "data-rail-color": "#ddd",
        "data-wrapper-class": "chat-sidebar-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 23
        }
      }, "Online")), __jsx("ul", {
        className: "media-list list-items",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 23
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
          lineNumber: 284,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "online dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 27
        }
      }, "John Deo"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 27
        }
      }, "Spine Surgeon"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 27
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
          lineNumber: 301,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "busy dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 27
        }
      }, "Rajesh"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 27
        }
      }, "Director"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 23
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
          lineNumber: 315,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "away dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 27
        }
      }, "Jacob Ryan"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 27
        }
      }, "Ortho Surgeon"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 27
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
          lineNumber: 332,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "online dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 27
        }
      }, "Kehn Anderson"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 27
        }
      }, "CEO"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 23
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
          lineNumber: 346,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "busy dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 27
        }
      }, "Sarah Smith"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 27
        }
      }, "Anaesthetics"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 23
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
          lineNumber: 360,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "online dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 27
        }
      }, "Vlad Cardella"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 27
        }
      }, "Cardiologist")))), __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 23
        }
      }, "Offline")), __jsx("ul", {
        className: "media-list list-items",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
          columnNumber: 27
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
          lineNumber: 382,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391,
          columnNumber: 27
        }
      }, "Jennifer Maklen"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 27
        }
      }, "Nurse"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 27
        }
      }, "Last seen 01:20 AM"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398,
          columnNumber: 23
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
          lineNumber: 399,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 27
        }
      }, "Lina Smith"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 27
        }
      }, "Ortho Surgeon"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 27
        }
      }, "Last seen 11:14 PM"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 27
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
          lineNumber: 419,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 27
        }
      }, "Jeff Adam"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 27
        }
      }, "Compounder"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
          columnNumber: 27
        }
      }, "Last seen 3:31 PM"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 435,
          columnNumber: 23
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
          lineNumber: 436,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445,
          columnNumber: 27
        }
      }, "Anjelina Cardella"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 27
        }
      }, "Physiotherapist"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 449,
          columnNumber: 27
        }
      }, "Last seen 7:45 PM"))))))), __jsx("div", {
        className: "tab-pane chat-sidebar-settings",
        role: "tabpanel",
        id: "quick_sidebar_tab_3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "chat-sidebar-settings-list slimscroll-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 19
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
          columnNumber: 21
        }
      }, "Layout Settings")), __jsx("div", {
        className: "chatpane inner-content ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "settings-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 471,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 25
        }
      }, "Sidebar Position"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 25
        }
      }, __jsx("select", {
        className: "sidebar-pos-option form-control input-inline input-sm input-small ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "left",
        selected: "selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 475,
          columnNumber: 29
        }
      }, "Left"), __jsx("option", {
        value: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 29
        }
      }, "Right")))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 482,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 25
        }
      }, "Header"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 484,
          columnNumber: 25
        }
      }, __jsx("select", {
        className: "page-header-option form-control input-inline input-sm input-small ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "fixed",
        selected: "selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 29
        }
      }, "Fixed"), __jsx("option", {
        value: "default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 29
        }
      }, "Default")))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 25
        }
      }, "Footer"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 25
        }
      }, __jsx("select", {
        className: "page-footer-option form-control input-inline input-sm input-small ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "fixed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 497,
          columnNumber: 29
        }
      }, "Fixed"), __jsx("option", {
        value: "default",
        selected: "selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498,
          columnNumber: 29
        }
      }, "Default"))))), __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506,
          columnNumber: 23
        }
      }, "Account Settings")), __jsx("div", {
        className: "settings-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 509,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 25
        }
      }, "Notifications"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 513,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-1",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 25
        }
      }, "Show Online"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 529,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-7",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 25
        }
      }, "Status"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 549,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-2",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 553,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 564,
          columnNumber: 25
        }
      }, "2 Steps Verification"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 566,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 567,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-3",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 31
        }
      })))))), __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583,
          columnNumber: 23
        }
      }, "General Settings")), __jsx("div", {
        className: "settings-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 585,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 586,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 587,
          columnNumber: 25
        }
      }, "Location"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 588,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 590,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-4",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 594,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 604,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 605,
          columnNumber: 25
        }
      }, "Save Histry"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 606,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-5",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 622,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 623,
          columnNumber: 25
        }
      }, "Auto Updates"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 624,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 625,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 626,
          columnNumber: 29
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "switch-6",
        className: "mdl-switch__input",
        defaultChecked: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 31
        }
      })))))))))))));
    }
  }]);

  return AddForm;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (AddForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0FkZEZvcm0uanMiXSwibmFtZXMiOlsiQWRkRm9ybSIsImN0eCIsIlNlbmRfR2V0X1Jlc3RBUEkiLCJyZXMiLCJqc29uIiwicmVzdWx0cyIsImhlYWRlciIsInByb3BzIiwidXJsIiwiZGF0YSIsInN0YXRlIiwiZGVwYXJ0bWVudHMiLCJicmVuY2giLCJJRF9TVl9NSCIsIklEX0xvYWlkaWVtIiwiU29kaWVtIiwiR2hpY2h1IiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsIkdldGxpc3REZXBhcnRtZW50cyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsT0FBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtOQUMrQkMsR0FEL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFc0JDLDhFQUFnQixDQUFDLDZCQUFELENBRnRDOztBQUFBO0FBRVVDLG1CQUZWO0FBQUE7QUFBQSx1QkFHdUJBLEdBQUcsQ0FBQ0MsSUFBSixFQUh2Qjs7QUFBQTtBQUdVQSxvQkFIVjtBQUFBLGlEQUlXO0FBQUVDLHlCQUFPLEVBQUVELElBQVg7QUFBaUJFLHdCQUFNLEVBQUU7QUFBekIsaUJBSlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFNRSxtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIseU5Bb0JELFlBQU07QUFDdEIsYUFDRSxrRUFERjtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsaUJBQVMsRUFBQywrQ0FEWjtBQUVFLGVBQU8sRUFBQyxVQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FJRTtBQUNFLFlBQUksRUFBQyxVQURQO0FBRUUsVUFBRSxFQUFDLFVBRkw7QUFHRSxpQkFBUyxFQUFDLG1CQUhaO0FBSUUsc0JBQWMsTUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUpGLENBREYsQ0FERixDQUZGLENBckNGLENBcEhGLENBSkYsQ0FMRixDQWxNRixDQXpCRixDQUpGLENBekpGLENBREY7QUFzakJEO0FBcm9CSDs7QUFBQTtBQUFBLEVBQTZCUywrQ0FBN0I7QUF3b0JlN0Isc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhZmZzL3N0YWZmLmVkYzRiYzhmN2M5MTY2M2QzM2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbmRfR2V0X1Jlc3RBUEkgfSBmcm9tIFwiLi4vLi4vLi4vUmVxdWVzdC9pbXdfcmVxdWVzdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkZEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3N0YWZmXCIpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4geyByZXN1bHRzOiBqc29uLCBoZWFkZXI6IFwiTGlzdCBTdGFmZlwiIH07XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZXBhcnRtZW50cyA6XCJcIixcclxuICAgICAgYnJlbmNoIDpcIlwiLFxyXG4gICAgICBjbGFzcyA6XCJcIixcclxuICAgICAgSURfU1ZfTUg6IFwiXCIsXHJcbiAgICAgIElEX0xvYWlkaWVtOiBcIlwiLFxyXG4gICAgICBTb2RpZW06IFwiXCIsXHJcbiAgICAgIEdoaWNodTogXCJcIixcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLkdldGxpc3REZXBhcnRtZW50cyA9IHRoaXMuR2V0bGlzdERlcGFydG1lbnRzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgW2V2ZW50LnRhcmdldC5pZF06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgfSk7XHJcbn1cclxuICAgUmVuZGVyTGlzdFR5cGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgIFxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgR2V0bGlzdERlcGFydG1lbnRzKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvZGVwYXJ0bWVudHNcIjtcclxuICAgIGxldCByZXMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKHVybCk7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImdldCBEZXBhcnRtZW50XCIpO1xyXG4gIH1cclxuXHJcbiAgUmVuZGVyTGlzdFRlc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9kZXBhcnRtZW50c1wiO1xyXG4gICAgbGV0IHJlcyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkodXJsKTtcclxuICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiIGRhdGEtdmFsPVwiREVcIj5cclxuICAgICAgICB7XCJhYmMgXCJ9XHJcbiAgICAgICAgS2hvYVxyXG4gICAgICA8L2xpPlxyXG4gICAgKTtcclxuICB9O1xyXG4gIGFzeW5jIEdldExpc3RCcmFuY2hlcygpIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBuZ2FuaFwiKTtcclxuICB9XHJcbiAgYXN5bmMgR2V0TGlzdENsYXNzZXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2xhc3NzXCIpO1xyXG4gIH1cclxuICBhc3luYyBHZXRMaXN0U3ViamVjdHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgc3ViamVjdFwiKTtcclxuICB9XHJcbiAgYXN5bmMgR2V0TGlzdFN0dWRlbnRzKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHN0dWRlbnRzXCIpO1xyXG4gIH1cclxuICBhc3luYyBHZXRMaXN0VHlwZVNjb3JlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHR5cGVzY29yZVwiKTtcclxuICB9XHJcbiAgYXN5bmMgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5kZXBhcnRtZW50cylcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnJlbmNoKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jbGFzcylcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuSURfU1ZfTUgpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLklEX0xvYWlkaWVtKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5Tb2RpZW0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLkdoaWNodSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aGVhZGVyPkZvcm0gU2NvcmU8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvbiBwdWxsLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXVwZ3JhZGVkPVwiLE1hdGVyaWFsQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1yaWdodCBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1tZGwtZm9yPVwicGFuZWwtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hc3Npc3RhbnRfcGhvdG88L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5wcmludDwvaT5Bbm90aGVyIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9pPlNvbWV0aGluZyBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3gxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXBhcnRtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJkZXBhcnRtZW50c1wiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuZGVwYXJ0bWVudHN9ICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtob2ExXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2hvYTJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJraG9hM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwLXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCBnZXRtZGwtc2VsZWN0IGdldG1kbC1zZWxlY3RfX2ZpeC1oZWlnaHQgdHh0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlNlbGVjdEJveDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyZW5jaFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVwYXJ0bWVudHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlcGFydG1lbnRzfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJraG9hMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtob2EyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2hvYTNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3gzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVwYXJ0bWVudHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlcGFydG1lbnRzfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJraG9hMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtob2EyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2hvYTNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3g1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVwYXJ0bWVudHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlcGFydG1lbnRzfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJraG9hMVwiPjE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImtob2EyXCI+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia2hvYTNcIj4zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3g1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUeXBlQ29yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiSURfTG9haWRpZW1cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLklEX0xvYWlkaWVtfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzZWxlY3RcIj5rdDE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkphdmFcIj5rdDI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkMrK1wiPkMrKzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHAtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsIHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIHBhdHRlcm49XCItP1swLTldKihcXC5bMC05XSspP1wiIGlkPVwiU29kaWVtXCIgdmFsdWU9e3RoaXMuc3RhdGUuU29kaWVtfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwidGV4dDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2NvcmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyIHJlcXVpcmVkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgdHh0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiR2hpY2h1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuR2hpY2h1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIiBodG1sRm9yPVwidGV4dDdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRWR1Y2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgcC10LTIwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG0tYi0xMCBtLXItMjAgYnRuLXBpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0tcmFpc2VkIG1kbC1qcy1yaXBwbGUtZWZmZWN0IG0tYi0xMCBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hhdC1zaWRlYmFyLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICBkYXRhLWNsb3NlLW9uLWJvZHktY2xpY2s9XCJmYWxzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNxdWlja19zaWRlYmFyX3RhYl8xXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlIHRhYi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+Y2hhdDwvaT5DaGF0XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhbmdlclwiPjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjcXVpY2tfc2lkZWJhcl90YWJfM1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rIHRhYi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+c2V0dGluZ3M8L2k+XHJcbiAgICAgICAgICAgICAgICAgIFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIHsvKiBTdGFydCBVc2VyIENoYXQgKi99XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlIGNoYXQtc2lkZWJhci1jaGF0IGluIGFjdGl2ZSBzaG93XCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInF1aWNrX3NpZGViYXJfdGFiXzFcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1zaWRlYmFyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYXQtc2lkZWJhci1jaGF0LXVzZXJzIHNsaW1zY3JvbGwtc3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcmFpbC1jb2xvcj1cIiNkZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtd3JhcHBlci1jbGFzcz1cImNoYXQtc2lkZWJhci1saXN0XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaXN0LWhlYWRpbmdcIj5PbmxpbmU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWRpYS1saXN0IGxpc3QtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvbmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5Kb2huIERlbzwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPlNwaW5lIFN1cmdlb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPjU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2YxLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnVzeSBkb3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPlJhamVzaDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPkRpcmVjdG9yPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJhd2F5IGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+SmFjb2IgUnlhbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPk9ydGhvIFN1cmdlb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+ODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvbmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5LZWhuIEFuZGVyc29uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+Q0VPPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJidXN5IGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+U2FyYWggU21pdGg8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5BbmFlc3RoZXRpY3M8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mNy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9ubGluZSBkb3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPlZsYWQgQ2FyZGVsbGE8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5DYXJkaW9sb2dpc3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPk9mZmxpbmU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWRpYS1saXN0IGxpc3QtaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXdhcm5pbmdcIj40PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mNi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9mZmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5KZW5uaWZlciBNYWtsZW48L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5OdXJzZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBzZWVuIDAxOjIwIEFNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjguanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+TGluYSBTbWl0aDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPk9ydGhvIFN1cmdlb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExhc3Qgc2VlbiAxMToxNCBQTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+OTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjkuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+SmVmZiBBZGFtPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+Q29tcG91bmRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBzZWVuIDM6MzEgUE1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMTAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJvZmZsaW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+QW5qZWxpbmEgQ2FyZGVsbGE8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBoeXNpb3RoZXJhcGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBzZWVuIDc6NDUgUE1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIEVuZCBVc2VyIENoYXQgKi99XHJcbiAgICAgICAgICAgICAgey8qIFN0YXJ0IFNldHRpbmcgUGFuZWwgKi99XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFiLXBhbmUgY2hhdC1zaWRlYmFyLXNldHRpbmdzXCJcclxuICAgICAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cInF1aWNrX3NpZGViYXJfdGFiXzNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1zaWRlYmFyLXNldHRpbmdzLWxpc3Qgc2xpbXNjcm9sbC1zdHlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPkxheW91dCBTZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRwYW5lIGlubmVyLWNvbnRlbnQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPlNpZGViYXIgUG9zaXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwic2lkZWJhci1wb3Mtb3B0aW9uIGZvcm0tY29udHJvbCBpbnB1dC1pbmxpbmUgaW5wdXQtc20gaW5wdXQtc21hbGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVmdFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmlnaHRcIj5SaWdodDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5IZWFkZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicGFnZS1oZWFkZXItb3B0aW9uIGZvcm0tY29udHJvbCBpbnB1dC1pbmxpbmUgaW5wdXQtc20gaW5wdXQtc21hbGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZml4ZWRcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpeGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWZhdWx0XCI+RGVmYXVsdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5Gb290ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicGFnZS1mb290ZXItb3B0aW9uIGZvcm0tY29udHJvbCBpbnB1dC1pbmxpbmUgaW5wdXQtc20gaW5wdXQtc21hbGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZml4ZWRcIj5GaXhlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJsaXN0LWhlYWRpbmdcIj5BY2NvdW50IFNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+Tm90aWZpY2F0aW9uczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+U2hvdyBPbmxpbmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN3aXRjaC03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaC03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPlN0YXR1czwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+MiBTdGVwcyBWZXJpZmljYXRpb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN3aXRjaC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPkdlbmVyYWwgU2V0dGluZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5Mb2NhdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+U2F2ZSBIaXN0cnk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpdGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaCBtZGwtanMtc3dpdGNoIG1kbC1qcy1yaXBwbGUtZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInN3aXRjaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN3aXRjaC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoX19pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPkF1dG8gVXBkYXRlczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==