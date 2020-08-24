webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Request/imw_request */ "./Request/imw_request.js");
/* harmony import */ var _Request_imw_request__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Request_imw_request__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);









var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\AddForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var AddForm = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(AddForm, _Component);

  var _super = _createSuper(AddForm);

  function AddForm(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AddForm);

    _this = _super.call(this, props);
    _this.state = {
      departments: 1004,
      brench: 4,
      "class": 2006,
      subjects: 1088,
      ID_SV_MH: 1088,
      ID_Loaidiem: "",
      Sodiem: "",
      Ghichu: ""
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AddForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, event.target.id, event.target.value));
    }
  }, {
    key: "RenderListDepartMents",
    value: function RenderListDepartMents() {
      var _this2 = this;

      return this.props.results_departments.map(function (value) {
        var TENDONVI = value.TENDONVI,
            ID_Donvi = value.ID_Donvi;
        return __jsx("option", {
          value: ID_Donvi,
          key: ID_Donvi,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7
          }
        }, TENDONVI);
      });
    }
  }, {
    key: "RenderListBrench",
    value: function RenderListBrench() {
      var _this3 = this;

      /*return  this.props.results_classes.map((value) => {
        const {Id_Nganhnghe,Ten_Nganhnghe} = value;
          return (
          <option value={Id_Nganhnghe} key={Id_Nganhnghe}>{Ten_Nganhnghe}</option>
          )
      })*/
      console.log(JSON.stringify(this.state));
      return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(this.props.results_brenches, {
        'ID_Donvi': parseInt(this.state.departments)
      }).map(function (value) {
        var ID_Nganhnghe = value.ID_Nganhnghe,
            Ten_Nganhnghe = value.Ten_Nganhnghe;
        return __jsx("option", {
          value: ID_Nganhnghe,
          key: ID_Nganhnghe,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }
        }, Ten_Nganhnghe);
      });
    }
  }, {
    key: "RenderListClasses",
    value: function RenderListClasses() {
      var _this4 = this;

      console.log(this.state.brench);
      return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(this.props.results_classes, {
        'ID_Nganhnghe': parseInt(this.state.brench)
      }).map(function (value) {
        var ID_Lophoc = value.ID_Lophoc,
            Ten_Lophoc = value.Ten_Lophoc;
        return __jsx("option", {
          value: ID_Lophoc,
          key: ID_Lophoc,
          __self: _this4,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }
        }, Ten_Lophoc);
      });
    }
  }, {
    key: "RenderListSubjects",
    value: function RenderListSubjects() {
      var _this5 = this;

      /*return  this.props.results_classes.map((value) => {
        const {ID_Lophoc,Ten_Lophoc} = value;
          return (
          <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
          )
      })*/
      return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(this.props.results_subjects, {
        'ID_Lophoc': parseInt(this.state["class"])
      }).map(function (value) {
        var ID_Mon_Lophoc = value.ID_Mon_Lophoc,
            ID_Lophoc = value.ID_Lophoc,
            Ten_Monhoc = value.Ten_Monhoc;
        return __jsx("option", {
          value: ID_Mon_Lophoc,
          key: ID_Mon_Lophoc,
          __self: _this5,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }
        }, Ten_Monhoc);
      });
    }
  }, {
    key: "RenderListSubjects",
    value: function RenderListSubjects() {
      var _this6 = this;

      /*return  this.props.results_classes.map((value) => {
        const {ID_Lophoc,Ten_Lophoc} = value;
          return (
          <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
          )
      })*/
      return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(this.props.results_subjects, {
        'ID_Lophoc': parseInt(this.state["class"])
      }).map(function (value) {
        var ID_Mon_Lophoc = value.ID_Mon_Lophoc,
            ID_Lophoc = value.ID_Lophoc,
            Ten_Monhoc = value.Ten_Monhoc;
        return __jsx("option", {
          value: ID_Mon_Lophoc,
          key: ID_Mon_Lophoc,
          __self: _this6,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, Ten_Monhoc);
      });
    }
  }, {
    key: "RenderListStudents",
    value: function RenderListStudents() {
      var _this7 = this;

      /*return  this.props.results_classes.map((value) => {
        const {ID_Lophoc,Ten_Lophoc} = value;
          return (
          <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
          )
      })*/
      return lodash__WEBPACK_IMPORTED_MODULE_11___default.a.filter(this.props.results_students, {
        'ID_Mon_Lophoc': parseInt(this.state.subjects)
      }).map(function (value) {
        var ID_Sinhvien = value.ID_Sinhvien,
            ID_SV_MH = value.ID_SV_MH,
            HOTEN = value.HOTEN,
            ID_Mon_Lophoc = value.ID_Mon_Lophoc;
        return __jsx("option", {
          value: ID_SV_MH,
          key: ID_SV_MH,
          __self: _this7,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }
        }, HOTEN);
      });
    }
  }, {
    key: "RenderListTypeScores",
    value: function RenderListTypeScores() {
      var _this8 = this;

      return this.props.results_typescores.map(function (value, index) {
        var ID_LoaiDiem = value.ID_LoaiDiem,
            Ten_LoaiDiem = value.Ten_LoaiDiem;
        return __jsx("option", {
          value: ID_LoaiDiem,
          key: ID_LoaiDiem,
          __self: _this8,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 7
          }
        }, Ten_LoaiDiem);
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                console.log(this.state);
                console.log(this.state.departments);
                console.log(this.state.brench);
                console.log(this.state["class"]);
                console.log(this.state.ID_SV_MH);
                console.log(this.state.ID_Loaidiem);
                console.log(this.state.Sodiem);
                console.log(this.state.Ghichu);

              case 9:
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
      console.log(this.props);
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-sm-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "card-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "card-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 19
        }
      }, "Form Score"), __jsx("button", {
        id: "panel-button",
        className: "mdl-button mdl-js-button mdl-button--icon pull-right",
        "data-upgraded": ",MaterialButton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 21
        }
      }, "more_vert")), __jsx("ul", {
        className: "mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",
        "data-mdl-for": "panel-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "mdl-menu__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 23
        }
      }, "assistant_photo"), "Action"), __jsx("li", {
        className: "mdl-menu__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 23
        }
      }, "print"), "Another action"), __jsx("li", {
        className: "mdl-menu__item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 23
        }
      }, "favorite"), "Something else here"))), __jsx("div", {
        className: "card-body row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label  getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox1",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
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
          lineNumber: 172,
          columnNumber: 23
        }
      }, this.RenderListDepartMents()))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label  getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox2",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }
      }, "Brenches"), __jsx("select", {
        id: "brench",
        onChange: this.handleChange,
        value: this.state.brench,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }, this.RenderListBrench()))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox3",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 21
        }
      }, "Classes"), __jsx("select", {
        id: "class",
        onChange: this.handleChange,
        value: this.state["class"],
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }
      }, this.RenderListClasses()))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox5",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 21
        }
      }, "Subjects"), __jsx("select", {
        id: "subjects",
        onChange: this.handleChange,
        value: this.state.subjects,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 21
        }
      }, this.RenderListSubjects()))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox5",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 21
        }
      }, "Students"), __jsx("select", {
        id: "ID_SV_MH",
        onChange: this.handleChange,
        value: this.state.ID_SV_MH,
        className: "mdl-textfield__input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 21
        }
      }, this.RenderListStudents()))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label  getmdl-select__fix-height txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 21
        }
      }, __jsx("label", {
        htmlFor: "SelectBox5",
        className: "mdl-textfield__label",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
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
          lineNumber: 237,
          columnNumber: 21
        }
      }, this.RenderListTypeScores()))), __jsx("div", {
        className: "col-lg-6 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
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
          lineNumber: 244,
          columnNumber: 23
        }
      }), __jsx("label", {
        className: "mdl-textfield__label",
        htmlFor: "text5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 23
        }
      }, "Score:"), __jsx("span", {
        className: "mdl-textfield__error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 23
        }
      }, "Number required!"))), __jsx("div", {
        className: "col-lg-12 p-t-20",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "mdl-textfield mdl-js-textfield txt-full-width",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 21
        }
      }, __jsx("textarea", {
        className: "mdl-textfield__input",
        rows: 4,
        id: "Ghichu",
        value: this.state.Ghichu,
        onChange: this.handleChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 23
        }
      }), __jsx("label", {
        className: "mdl-textfield__label",
        htmlFor: "text7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 23
        }
      }, "Education"))), __jsx("div", {
        className: "col-lg-12 p-t-20 text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 19
        }
      }, __jsx("button", {
        type: "button",
        className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink",
        onClick: this.handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }
      }, "Submit"), __jsx("button", {
        type: "button",
        className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 21
        }
      }, "Cancel"))))))), __jsx("div", {
        className: "chat-sidebar-container",
        "data-close-on-body-click": "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "chat-sidebar",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }
      }, __jsx("ul", {
        className: "nav nav-tabs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "#quick_sidebar_tab_1",
        className: "nav-link active tab-icon",
        "data-toggle": "tab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 17
        }
      }, " ", __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 19
        }
      }, "chat"), "Chat", __jsx("span", {
        className: "badge badge-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 19
        }
      }, "4"))), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: "#quick_sidebar_tab_3",
        className: "nav-link tab-icon",
        "data-toggle": "tab",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 17
        }
      }, " ", __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311,
          columnNumber: 19
        }
      }, "settings"), "Settings"))), __jsx("div", {
        className: "tab-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "tab-pane active chat-sidebar-chat in active show",
        role: "tabpanel",
        id: "quick_sidebar_tab_1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "chat-sidebar-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "chat-sidebar-chat-users slimscroll-style",
        "data-rail-color": "#ddd",
        "data-wrapper-class": "chat-sidebar-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 23
        }
      }, "Online")), __jsx("ul", {
        className: "media-list list-items",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
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
          lineNumber: 334,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "online dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343,
          columnNumber: 27
        }
      }, "John Deo"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344,
          columnNumber: 27
        }
      }, "Spine Surgeon"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
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
          lineNumber: 351,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "busy dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 27
        }
      }, "Rajesh"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 27
        }
      }, "Director"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364,
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
          lineNumber: 365,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "away dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 27
        }
      }, "Jacob Ryan"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 27
        }
      }, "Ortho Surgeon"))), __jsx("li", {
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
        className: "badge badge-danger",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380,
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
          lineNumber: 382,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "online dot",
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
      }, "Kehn Anderson"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392,
          columnNumber: 27
        }
      }, "CEO"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
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
          lineNumber: 396,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "busy dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405,
          columnNumber: 27
        }
      }, "Sarah Smith"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 27
        }
      }, "Anaesthetics"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
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
          lineNumber: 410,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "online dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419,
          columnNumber: 27
        }
      }, "Vlad Cardella"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 27
        }
      }, "Cardiologist")))), __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 23
        }
      }, "Offline")), __jsx("ul", {
        className: "media-list list-items",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 21
        }
      }, __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430,
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
          lineNumber: 432,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 441,
          columnNumber: 27
        }
      }, "Jennifer Maklen"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 27
        }
      }, "Nurse"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 443,
          columnNumber: 27
        }
      }, "Last seen 01:20 AM"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 448,
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
          lineNumber: 449,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 457,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 458,
          columnNumber: 27
        }
      }, "Lina Smith"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 459,
          columnNumber: 27
        }
      }, "Ortho Surgeon"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460,
          columnNumber: 27
        }
      }, "Last seen 11:14 PM"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 465,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "media-status",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 25
        }
      }, __jsx("span", {
        className: "badge badge-success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 467,
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
          lineNumber: 469,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478,
          columnNumber: 27
        }
      }, "Jeff Adam"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 479,
          columnNumber: 27
        }
      }, "Compounder"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 27
        }
      }, "Last seen 3:31 PM"))), __jsx("li", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485,
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
          lineNumber: 486,
          columnNumber: 25
        }
      }), __jsx("i", {
        className: "offline dot",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 25
        }
      }), __jsx("div", {
        className: "media-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 494,
          columnNumber: 25
        }
      }, __jsx("h5", {
        className: "media-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 27
        }
      }, "Anjelina Cardella"), __jsx("div", {
        className: "media-heading-sub",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 496,
          columnNumber: 27
        }
      }, "Physiotherapist"), __jsx("div", {
        className: "media-heading-small",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 27
        }
      }, "Last seen 7:45 PM"))))))), __jsx("div", {
        className: "tab-pane chat-sidebar-settings",
        role: "tabpanel",
        id: "quick_sidebar_tab_3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "chat-sidebar-settings-list slimscroll-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516,
          columnNumber: 19
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517,
          columnNumber: 21
        }
      }, "Layout Settings")), __jsx("div", {
        className: "chatpane inner-content ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "settings-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 520,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 522,
          columnNumber: 25
        }
      }, "Sidebar Position"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 523,
          columnNumber: 25
        }
      }, __jsx("select", {
        className: "sidebar-pos-option form-control input-inline input-sm input-small ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 524,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "left",
        selected: "selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 525,
          columnNumber: 29
        }
      }, "Left"), __jsx("option", {
        value: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 528,
          columnNumber: 29
        }
      }, "Right")))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 532,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 533,
          columnNumber: 25
        }
      }, "Header"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 534,
          columnNumber: 25
        }
      }, __jsx("select", {
        className: "page-header-option form-control input-inline input-sm input-small ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 535,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "fixed",
        selected: "selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 536,
          columnNumber: 29
        }
      }, "Fixed"), __jsx("option", {
        value: "default",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 539,
          columnNumber: 29
        }
      }, "Default")))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544,
          columnNumber: 25
        }
      }, "Footer"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545,
          columnNumber: 25
        }
      }, __jsx("select", {
        className: "page-footer-option form-control input-inline input-sm input-small ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546,
          columnNumber: 27
        }
      }, __jsx("option", {
        value: "fixed",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 547,
          columnNumber: 29
        }
      }, "Fixed"), __jsx("option", {
        value: "default",
        selected: "selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 548,
          columnNumber: 29
        }
      }, "Default"))))), __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 555,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 23
        }
      }, "Account Settings")), __jsx("div", {
        className: "settings-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 558,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560,
          columnNumber: 25
        }
      }, "Notifications"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 561,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 562,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 563,
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
          lineNumber: 567,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 577,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 578,
          columnNumber: 25
        }
      }, "Show Online"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 579,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 580,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-7",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 581,
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
          lineNumber: 585,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 595,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 596,
          columnNumber: 25
        }
      }, "Status"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 597,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 598,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 599,
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
          lineNumber: 603,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 613,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 614,
          columnNumber: 25
        }
      }, "2 Steps Verification"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 615,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 616,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
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
          lineNumber: 621,
          columnNumber: 31
        }
      })))))), __jsx("div", {
        className: "chat-header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 21
        }
      }, __jsx("h5", {
        className: "list-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 633,
          columnNumber: 23
        }
      }, "General Settings")), __jsx("div", {
        className: "settings-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 637,
          columnNumber: 25
        }
      }, "Location"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 638,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 639,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
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
          lineNumber: 644,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 655,
          columnNumber: 25
        }
      }, "Save Histry"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-5",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 658,
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
          lineNumber: 662,
          columnNumber: 31
        }
      }))))), __jsx("div", {
        className: "setting-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 672,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "setting-text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 673,
          columnNumber: 25
        }
      }, "Auto Updates"), __jsx("div", {
        className: "setting-set",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "switch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 27
        }
      }, __jsx("label", {
        className: "mdl-switch mdl-js-switch mdl-js-ripple-effect",
        htmlFor: "switch-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676,
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
          lineNumber: 680,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0FkZEZvcm0uanMiXSwibmFtZXMiOlsiQWRkRm9ybSIsInByb3BzIiwic3RhdGUiLCJkZXBhcnRtZW50cyIsImJyZW5jaCIsInN1YmplY3RzIiwiSURfU1ZfTUgiLCJJRF9Mb2FpZGllbSIsIlNvZGllbSIsIkdoaWNodSIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInJlc3VsdHNfZGVwYXJ0bWVudHMiLCJtYXAiLCJURU5ET05WSSIsIklEX0RvbnZpIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJfIiwiZmlsdGVyIiwicmVzdWx0c19icmVuY2hlcyIsInBhcnNlSW50IiwiSURfTmdhbmhuZ2hlIiwiVGVuX05nYW5obmdoZSIsInJlc3VsdHNfY2xhc3NlcyIsIklEX0xvcGhvYyIsIlRlbl9Mb3Bob2MiLCJyZXN1bHRzX3N1YmplY3RzIiwiSURfTW9uX0xvcGhvYyIsIlRlbl9Nb25ob2MiLCJyZXN1bHRzX3N0dWRlbnRzIiwiSURfU2luaHZpZW4iLCJIT1RFTiIsInJlc3VsdHNfdHlwZXNjb3JlcyIsImluZGV4IiwiSURfTG9haURpZW0iLCJUZW5fTG9haURpZW0iLCJwcmV2ZW50RGVmYXVsdCIsIlJlbmRlckxpc3REZXBhcnRNZW50cyIsIlJlbmRlckxpc3RCcmVuY2giLCJSZW5kZXJMaXN0Q2xhc3NlcyIsIlJlbmRlckxpc3RTdWJqZWN0cyIsIlJlbmRlckxpc3RTdHVkZW50cyIsIlJlbmRlckxpc3RUeXBlU2NvcmVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQWI7QUFBQTs7QUFBQTs7QUFDRSxtQkFBWUMs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NjhiNzBmNmVjMzlmZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2VuZF9HZXRfUmVzdEFQSSB9IGZyb20gXCIuLi8uLi8uLi9SZXF1ZXN0L2ltd19yZXF1ZXN0XCI7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRkRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRlcGFydG1lbnRzIDogMTAwNCxcclxuICAgICAgYnJlbmNoIDogNCxcclxuICAgICAgY2xhc3MgOiAyMDA2LFxyXG4gICAgICBzdWJqZWN0cyA6IDEwODgsXHJcbiAgICAgIElEX1NWX01IOiAxMDg4LFxyXG4gICAgICBJRF9Mb2FpZGllbTogXCJcIixcclxuICAgICAgU29kaWVtOiBcIlwiLFxyXG4gICAgICBHaGljaHU6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIFJlbmRlckxpc3REZXBhcnRNZW50cygpIHtcclxuICAgIHJldHVybiAgdGhpcy5wcm9wcy5yZXN1bHRzX2RlcGFydG1lbnRzLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgY29uc3Qge1RFTkRPTlZJLElEX0RvbnZpfSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICA8b3B0aW9uIHZhbHVlPXtJRF9Eb252aX0ga2V5PXtJRF9Eb252aX0+e1RFTkRPTlZJfTwvb3B0aW9uPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuICBSZW5kZXJMaXN0QnJlbmNoKCkge1xyXG4gICAgLypyZXR1cm4gIHRoaXMucHJvcHMucmVzdWx0c19jbGFzc2VzLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgY29uc3Qge0lkX05nYW5obmdoZSxUZW5fTmdhbmhuZ2hlfSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17SWRfTmdhbmhuZ2hlfSBrZXk9e0lkX05nYW5obmdoZX0+e1Rlbl9OZ2FuaG5naGV9PC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSkqL1xyXG5cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcclxuXHJcbiAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5wcm9wcy5yZXN1bHRzX2JyZW5jaGVzLCB7ICdJRF9Eb252aSc6IHBhcnNlSW50KHRoaXMuc3RhdGUuZGVwYXJ0bWVudHMpIH0pLm1hcCgodmFsdWUpID0+ICB7XHJcbiAgICAgIGNvbnN0IHtJRF9OZ2FuaG5naGUsVGVuX05nYW5obmdoZX09IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtJRF9OZ2FuaG5naGV9IGtleT17SURfTmdhbmhuZ2hlfT57VGVuX05nYW5obmdoZX08L29wdGlvbj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuICBSZW5kZXJMaXN0Q2xhc3NlcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYnJlbmNoKVxyXG4gICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMucHJvcHMucmVzdWx0c19jbGFzc2VzLCB7ICdJRF9OZ2FuaG5naGUnIDogcGFyc2VJbnQodGhpcy5zdGF0ZS5icmVuY2gpIH0pLm1hcCgodmFsdWUpID0+ICB7XHJcbiAgICAgIGNvbnN0IHtJRF9Mb3Bob2MsVGVuX0xvcGhvY30gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT17SURfTG9waG9jfSBrZXk9e0lEX0xvcGhvY30+e1Rlbl9Mb3Bob2N9PC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIFJlbmRlckxpc3RTdWJqZWN0cygpIHtcclxuICAgIC8qcmV0dXJuICB0aGlzLnByb3BzLnJlc3VsdHNfY2xhc3Nlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtJRF9Mb3Bob2MsVGVuX0xvcGhvY30gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9e0lEX0xvcGhvY30ga2V5PXtJRF9Mb3Bob2N9PntUZW5fTG9waG9jfTwvb3B0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH0pKi9cclxuICAgIHJldHVybiBfLmZpbHRlcih0aGlzLnByb3BzLnJlc3VsdHNfc3ViamVjdHMsIHsnSURfTG9waG9jJzpwYXJzZUludCh0aGlzLnN0YXRlLmNsYXNzKSAgfSkubWFwKCh2YWx1ZSkgPT4gIHtcclxuICAgICAgY29uc3Qge0lEX01vbl9Mb3Bob2MsSURfTG9waG9jLFRlbl9Nb25ob2N9ID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0lEX01vbl9Mb3Bob2N9IGtleT17SURfTW9uX0xvcGhvY30+e1Rlbl9Nb25ob2N9PC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcbiAgUmVuZGVyTGlzdFN1YmplY3RzKCkge1xyXG4gICAgLypyZXR1cm4gIHRoaXMucHJvcHMucmVzdWx0c19jbGFzc2VzLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgY29uc3Qge0lEX0xvcGhvYyxUZW5fTG9waG9jfSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPG9wdGlvbiB2YWx1ZT17SURfTG9waG9jfSBrZXk9e0lEX0xvcGhvY30+e1Rlbl9Mb3Bob2N9PC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSkqL1xyXG4gICAgcmV0dXJuIF8uZmlsdGVyKHRoaXMucHJvcHMucmVzdWx0c19zdWJqZWN0cywgeyAnSURfTG9waG9jJzpwYXJzZUludCh0aGlzLnN0YXRlLmNsYXNzKSB9KS5tYXAoKHZhbHVlKSA9PiAge1xyXG4gICAgICBjb25zdCB7SURfTW9uX0xvcGhvYyxJRF9Mb3Bob2MsVGVuX01vbmhvYyx9ID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0lEX01vbl9Mb3Bob2N9IGtleT17SURfTW9uX0xvcGhvY30+e1Rlbl9Nb25ob2N9PC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIFJlbmRlckxpc3RTdHVkZW50cygpIHtcclxuICAgIC8qcmV0dXJuICB0aGlzLnByb3BzLnJlc3VsdHNfY2xhc3Nlcy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtJRF9Mb3Bob2MsVGVuX0xvcGhvY30gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxvcHRpb24gdmFsdWU9e0lEX0xvcGhvY30ga2V5PXtJRF9Mb3Bob2N9PntUZW5fTG9waG9jfTwvb3B0aW9uPlxyXG4gICAgICAgIClcclxuICAgIH0pKi9cclxuICAgIHJldHVybiBfLmZpbHRlcih0aGlzLnByb3BzLnJlc3VsdHNfc3R1ZGVudHMsIHsnSURfTW9uX0xvcGhvYycgOiBwYXJzZUludCh0aGlzLnN0YXRlLnN1YmplY3RzKSAgfSkubWFwKCh2YWx1ZSkgPT4gIHtcclxuICAgICAgY29uc3Qge0lEX1Npbmh2aWVuLElEX1NWX01ILEhPVEVOLElEX01vbl9Mb3Bob2N9ID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9e0lEX1NWX01IfSBrZXk9e0lEX1NWX01IfT57SE9URU59PC9vcHRpb24+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIFJlbmRlckxpc3RUeXBlU2NvcmVzKCkge1xyXG4gICAgcmV0dXJuICB0aGlzLnByb3BzLnJlc3VsdHNfdHlwZXNjb3Jlcy5tYXAoKHZhbHVlLGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtJRF9Mb2FpRGllbSxUZW5fTG9haURpZW19ID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgIDxvcHRpb24gdmFsdWU9e0lEX0xvYWlEaWVtfSBrZXk9e0lEX0xvYWlEaWVtfT57VGVuX0xvYWlEaWVtfTwvb3B0aW9uPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcblxyXG4gIFxyXG4gIGFzeW5jIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRlcGFydG1lbnRzKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5icmVuY2gpXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNsYXNzKVxyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5JRF9TVl9NSClcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuSURfTG9haWRpZW0pXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLlNvZGllbSlcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuR2hpY2h1KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aGVhZGVyPkZvcm0gU2NvcmU8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFuZWwtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtYnV0dG9uIG1kbC1qcy1idXR0b24gbWRsLWJ1dHRvbi0taWNvbiBwdWxsLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXVwZ3JhZGVkPVwiLE1hdGVyaWFsQnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bW9yZV92ZXJ0PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPHVsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLW1lbnUgbWRsLW1lbnUtLWJvdHRvbS1yaWdodCBtZGwtanMtbWVudSBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1tZGwtZm9yPVwicGFuZWwtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hc3Npc3RhbnRfcGhvdG88L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZGwtbWVudV9faXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5wcmludDwvaT5Bbm90aGVyIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kbC1tZW51X19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9pPlNvbWV0aGluZyBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgIGdldG1kbC1zZWxlY3RfX2ZpeC1oZWlnaHQgdHh0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlNlbGVjdEJveDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlcGFydG1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVwYXJ0bWVudHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmRlcGFydG1lbnRzfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLlJlbmRlckxpc3REZXBhcnRNZW50cygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHAtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsICBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3gyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmVuY2hlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiYnJlbmNoXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5icmVuY2h9ICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5SZW5kZXJMaXN0QnJlbmNoKCl9XHJcbiAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdF9fZml4LWhlaWdodCB0eHQtZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiU2VsZWN0Qm94M1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2xhc3Nlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY2xhc3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmNsYXNzfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuUmVuZGVyTGlzdENsYXNzZXMoKX1cclxuICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwLXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3g1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTdWJqZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwic3ViamVjdHNcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLnN1YmplY3RzfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuUmVuZGVyTGlzdFN1YmplY3RzKCl9XHJcbiAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcC10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkIG1kbC1qcy10ZXh0ZmllbGQgbWRsLXRleHRmaWVsZC0tZmxvYXRpbmctbGFiZWwgZ2V0bWRsLXNlbGVjdF9fZml4LWhlaWdodCB0eHQtZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiU2VsZWN0Qm94NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3R1ZGVudHNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIklEX1NWX01IXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5JRF9TVl9NSH0gICBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLlJlbmRlckxpc3RTdHVkZW50cygpfVxyXG4gICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IHAtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIG1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsICBnZXRtZGwtc2VsZWN0X19maXgtaGVpZ2h0IHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJTZWxlY3RCb3g1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9fbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUeXBlQ29yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiSURfTG9haWRpZW1cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLklEX0xvYWlkaWVtfSAgIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuUmVuZGVyTGlzdFR5cGVTY29yZXMoKX1cclxuICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBwLXQtMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGQgbWRsLWpzLXRleHRmaWVsZCBtZGwtdGV4dGZpZWxkLS1mbG9hdGluZy1sYWJlbCB0eHQtZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBwYXR0ZXJuPVwiLT9bMC05XSooXFwuWzAtOV0rKT9cIiBpZD1cIlNvZGllbVwiIHZhbHVlPXt0aGlzLnN0YXRlLlNvZGllbX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2xhYmVsXCIgaHRtbEZvcj1cInRleHQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNjb3JlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1kbC10ZXh0ZmllbGRfX2Vycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlciByZXF1aXJlZCFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIHAtdC0yMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZCBtZGwtanMtdGV4dGZpZWxkIHR4dC1mdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXRleHRmaWVsZF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkdoaWNodVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLkdoaWNodX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZGwtdGV4dGZpZWxkX19sYWJlbFwiIGh0bWxGb3I9XCJ0ZXh0N1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFZHVjYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBwLXQtMjAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3QgbS1iLTEwIG0tci0yMCBidG4tcGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1idXR0b24gbWRsLWpzLWJ1dHRvbiBtZGwtYnV0dG9uLS1yYWlzZWQgbWRsLWpzLXJpcHBsZS1lZmZlY3QgbS1iLTEwIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXItY29udGFpbmVyXCJcclxuICAgICAgICAgIGRhdGEtY2xvc2Utb24tYm9keS1jbGljaz1cImZhbHNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtc2lkZWJhclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzXCI+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI3F1aWNrX3NpZGViYXJfdGFiXzFcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmUgdGFiLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jaGF0PC9pPkNoYXRcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCI+NDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNxdWlja19zaWRlYmFyX3RhYl8zXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgdGFiLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRhYlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5zZXR0aW5nczwvaT5cclxuICAgICAgICAgICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgey8qIFN0YXJ0IFVzZXIgQ2hhdCAqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmUgY2hhdC1zaWRlYmFyLWNoYXQgaW4gYWN0aXZlIHNob3dcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicXVpY2tfc2lkZWJhcl90YWJfMVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhdC1zaWRlYmFyLWNoYXQtdXNlcnMgc2xpbXNjcm9sbC1zdHlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1yYWlsLWNvbG9yPVwiI2RkZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13cmFwcGVyLWNsYXNzPVwiY2hhdC1zaWRlYmFyLWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPk9ubGluZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3QgbGlzdC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMy5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9ubGluZSBkb3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPkpvaG4gRGVvPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+U3BpbmUgU3VyZ2VvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+NTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVkaWEtb2JqZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9hc3NldHMvaW1nL3Byb2YvcHJvZjEuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJidXN5IGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+UmFqZXNoPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+RGlyZWN0b3I8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mNS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImF3YXkgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5KYWNvYiBSeWFuPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+T3J0aG8gU3VyZ2VvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1zdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYW5nZXJcIj44PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mNC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9ubGluZSBkb3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPktlaG4gQW5kZXJzb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5DRU88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJ1c3kgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5TYXJhaCBTbWl0aDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPkFuYWVzdGhldGljczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y3LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwib25saW5lIGRvdFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nXCI+VmxhZCBDYXJkZWxsYTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPkNhcmRpb2xvZ2lzdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlzdC1oZWFkaW5nXCI+T2ZmbGluZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZGlhLWxpc3QgbGlzdC1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtc3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPjQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2Y2LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwib2ZmbGluZSBkb3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZ1wiPkplbm5pZmVyIE1ha2xlbjwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPk51cnNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IHNlZW4gMDE6MjAgQU1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mOC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9mZmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5MaW5hIFNtaXRoPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmctc3ViXCI+T3J0aG8gU3VyZ2VvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBzZWVuIDExOjE0IFBNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLXN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIj45PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZWRpYS1vYmplY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2Fzc2V0cy9pbWcvcHJvZi9wcm9mOS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9mZmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5KZWZmIEFkYW08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaGVhZGluZy1zdWJcIj5Db21wb3VuZGVyPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IHNlZW4gMzozMSBQTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vYXNzZXRzL2ltZy9wcm9mL3Byb2YxMC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm9mZmxpbmUgZG90XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1lZGlhLWhlYWRpbmdcIj5BbmplbGluYSBDYXJkZWxsYTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXN1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGh5c2lvdGhlcmFwaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1oZWFkaW5nLXNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMYXN0IHNlZW4gNzo0NSBQTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogRW5kIFVzZXIgQ2hhdCAqL31cclxuICAgICAgICAgICAgICB7LyogU3RhcnQgU2V0dGluZyBQYW5lbCAqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWItcGFuZSBjaGF0LXNpZGViYXItc2V0dGluZ3NcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgICAgIGlkPVwicXVpY2tfc2lkZWJhcl90YWJfM1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXNpZGViYXItc2V0dGluZ3MtbGlzdCBzbGltc2Nyb2xsLXN0eWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlzdC1oZWFkaW5nXCI+TGF5b3V0IFNldHRpbmdzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdHBhbmUgaW5uZXItY29udGVudCBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdzLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+U2lkZWJhciBQb3NpdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJzaWRlYmFyLXBvcy1vcHRpb24gZm9ybS1jb250cm9sIGlucHV0LWlubGluZSBpbnB1dC1zbSBpbnB1dC1zbWFsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsZWZ0XCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPkhlYWRlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwYWdlLWhlYWRlci1vcHRpb24gZm9ybS1jb250cm9sIGlucHV0LWlubGluZSBpbnB1dC1zbSBpbnB1dC1zbWFsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaXhlZFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRml4ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlZmF1bHRcIj5EZWZhdWx0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPkZvb3RlcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJwYWdlLWZvb3Rlci1vcHRpb24gZm9ybS1jb250cm9sIGlucHV0LWlubGluZSBpbnB1dC1zbSBpbnB1dC1zbWFsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmaXhlZFwiPkZpeGVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImxpc3QtaGVhZGluZ1wiPkFjY291bnQgU2V0dGluZ3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5Ob3RpZmljYXRpb25zPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzd2l0Y2gtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5TaG93IE9ubGluZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+U3RhdHVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzd2l0Y2gtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj4yIFN0ZXBzIFZlcmlmaWNhdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibGlzdC1oZWFkaW5nXCI+R2VuZXJhbCBTZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGV4dFwiPkxvY2F0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzd2l0Y2gtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRleHRcIj5TYXZlIEhpc3RyeTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZGwtc3dpdGNoIG1kbC1qcy1zd2l0Y2ggbWRsLWpzLXJpcHBsZS1lZmZlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic3dpdGNoLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3dpdGNoLTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2hfX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy10ZXh0XCI+QXV0byBVcGRhdGVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kbC1zd2l0Y2ggbWRsLWpzLXN3aXRjaCBtZGwtanMtcmlwcGxlLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJzd2l0Y2gtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzd2l0Y2gtNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWRsLXN3aXRjaF9faW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9