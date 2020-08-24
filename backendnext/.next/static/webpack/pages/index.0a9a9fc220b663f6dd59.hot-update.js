webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContainerComponents/staff/ContentStaff.js":
/*!**************************************************************!*\
  !*** ./components/ContainerComponents/staff/ContentStaff.js ***!
  \**************************************************************/
/*! exports provided: ContentStaff, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentStaff", function() { return ContentStaff; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _HeaderPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//HeaderPage */ "./components/ContainerComponents/staff/HeaderPage.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TabPane */ "./components/ContainerComponents/staff/TabPane.js");
/* harmony import */ var _GirdData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GirdData */ "./components/ContainerComponents/staff/GirdData.js");
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navigator */ "./components/ContainerComponents/staff/Navigator.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Modal */ "./components/ContainerComponents/staff/Modal.js");
/* harmony import */ var _Export_Excel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../Export/Excel */ "./Export/Excel.js");
/* harmony import */ var _Export_Excel__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Export_Excel__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\staff\\ContentStaff.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var ContentStaff = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContentStaff, _Component);

  var _super = _createSuper(ContentStaff);

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ContentStaff, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var res_departments, results_departments, res_typescores, results_typescores;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                  results: json,
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

  function ContentStaff(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ContentStaff);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      data: _this.props.results
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ContentStaff, [{
    key: "fnExcel",
    value: function () {
      var _fnExcel = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                Object(_Export_Excel__WEBPACK_IMPORTED_MODULE_13__["fnExcelReport"])();

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function fnExcel() {
        return _fnExcel.apply(this, arguments);
      }

      return fnExcel;
    }()
  }, {
    key: "renderTableData",
    value: function renderTableData() {
      var _this2 = this;

      return this.state.data.map(function (staff, index) {
        var MANHANVIEN = staff.MANHANVIEN,
            HOTEN = staff.HOTEN,
            BIDANH = staff.BIDANH,
            NGAYSINH = staff.NGAYSINH,
            GIOITINH = staff.GIOITINH,
            VANHOA = staff.VANHOA,
            NGOAINGU = staff.NGOAINGU,
            SOTRUONG = staff.SOTRUONG,
            CHUYENMON = staff.CHUYENMON,
            TRINHDO = staff.TRINHDO,
            NGAYLUUHS = staff.NGAYLUUHS,
            LYDOLUUHS = staff.LYDOLUUHS,
            TRANGTHAI = staff.TRANGTHAI,
            DANTOC = staff.DANTOC,
            TONGIAO = staff.TONGIAO,
            SOBHXH = staff.SOBHXH,
            NOI_DKKCB = staff.NOI_DKKCB,
            NHANVIEN_ID = staff.NHANVIEN_ID,
            ngaynhap = staff.ngaynhap,
            nguoinhap = staff.nguoinhap,
            ngaysua = staff.ngaysua,
            nguoisua = staff.nguoisua,
            SOCMND = staff.SOCMND,
            NGAYCAP = staff.NGAYCAP,
            NOICAP = staff.NOICAP,
            DIDONG = staff.DIDONG,
            DIENTHOAIBAN = staff.DIENTHOAIBAN,
            DIACHIEMAIL = staff.DIACHIEMAIL,
            MASOTHUE = staff.MASOTHUE,
            Diachi = staff.Diachi,
            Quequan = staff.Quequan,
            Website = staff.Website,
            bangcapkhac = staff.bangcapkhac,
            chungchikhac = staff.chungchikhac,
            uudiem = staff.uudiem,
            khuyetdiem = staff.khuyetdiem,
            diachilienhe = staff.diachilienhe,
            kinhnghiem = staff.kinhnghiem;
        return __jsx("tr", {
          key: MANHANVIEN,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 9
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, __jsx("a", {
          href: "edit_professor.html",
          className: "btn btn-primary btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-pencil",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }
        })), __jsx("button", {
          className: "btn btn-danger btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-trash-o ",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }
        }))), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, MANHANVIEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }
        }, HOTEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }
        }, BIDANH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }
        }, NGAYSINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, GIOITINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }
        }, VANHOA), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }
        }, NGOAINGU), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, SOTRUONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }
        }, CHUYENMON), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }
        }, TRINHDO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }
        }, NGAYLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }
        }, LYDOLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }
        }, TRANGTHAI), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }
        }, DANTOC), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }
        }, TONGIAO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }
        }, SOBHXH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }
        }, NOI_DKKCB), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, NHANVIEN_ID), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }
        }, ngaynhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }
        }, nguoinhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }
        }, ngaysua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }
        }, nguoisua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }
        }, SOCMND), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }
        }, NGAYCAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }
        }, NOICAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }
        }, DIDONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, DIENTHOAIBAN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 11
          }
        }, DIACHIEMAIL), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }
        }, MASOTHUE), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }
        }, Diachi), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 11
          }
        }, Quequan), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }
        }, Website), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }
        }, bangcapkhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }
        }, chungchikhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }
        }, uudiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }
        }, khuyetdiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }
        }, diachilienhe), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 11
          }
        }, kinhnghiem));
      });
    }
  }, {
    key: "renderTableHeader",
    value: function renderTableHeader() {
      var _this3 = this;

      var header = Object.keys(this.state.data[0]);
      var newheader = header.unshift('tools');
      return header.map(function (key, index) {
        return __jsx("th", {
          key: index,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 7
          }
        }, key.toUpperCase());
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "tabbable-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 15
        }
      }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "tab-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "tab-pane active fontawesome-demo",
        id: "tab1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "card card-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 27
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 29
        }
      }, this.props.header), __jsx("div", {
        className: "tools",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "fa fa-repeat btn-color box-refresh",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-collapse btn-color fa fa-chevron-down",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-close btn-color fa fa-times",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 31
        }
      }))), __jsx("div", {
        className: "card-body ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
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
          lineNumber: 157,
          columnNumber: 33
        }
      }, "Add New"))), __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "btn deepPink-bgcolor  btn-outline dropdown-toggle",
        "data-toggle": "dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 35
        }
      }, "Tools", __jsx("i", {
        className: "fa fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 37
        }
      })), __jsx("ul", {
        className: "dropdown-menu pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 35
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-print",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 41
        }
      }), " Print ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-pdf-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 41
        }
      }), " Save as PDF ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 37
        }
      }, __jsx("a", {
        onClick: this.fnExcel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-excel-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 41
        }
      }), "Export to Excel ")))))), __jsx("div", {
        className: "table-scrollable",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 29
        }
      }, __jsx("table", {
        className: "table table-striped table-bordered table-hover table-checkable order-column valign-middle",
        id: "example4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 31
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 33
        }
      }, this.renderTableHeader())), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 33
        }
      }, this.renderTableData())))))))), __jsx(_TabPane__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 19
        }
      }), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 19
        }
      })))));
    }
  }]);

  return ContentStaff;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (ContentStaff);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0NvbnRlbnRTdGFmZi5qcyJdLCJuYW1lcyI6WyJDb250ZW50U3RhZmYiLCJjdHgiLCJTZW5kX0dldF9SZXN0QVBJIiwicmVzX2RlcGFydG1lbnRzIiwianNvbiIsInJlc3VsdHNfZGVwYXJ0bWVudHMiLCJyZXNfdHlwZXNjb3JlcyIsInJlc3VsdHNfdHlwZXNjb3JlcyIsInJlc3VsdHMiLCJoZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJmbkV4Y2VsUmVwb3J0IiwibWFwIiwic3RhZmYiLCJpbmRleCIsIk1BTkhBTlZJRU4iLCJIT1RFTiIsIkJJREFOSCIsIk5HQVlTSU5IIiwiR0lPSVRJTkgiLCJWQU5IT0EiLCJOR09BSU5HVSIsIlNPVFJVT05HIiwiQ0hVWUVOTU9OIiwiVFJJTkhETyIsIk5HQVlMVVVIUyIsIkxZRE9MVVVIUyIsIlRSQU5HVEhBSSIsIkRBTlRPQyIsIlRPTkdJQU8iLCJTT0JIWEgiLCJOT0lfREtLQ0IiLCJOSEFOVklFTl9JRCIsIm5nYXluaGFwIiwibmd1b2luaGFwIiwibmdheXN1YSIsIm5ndW9pc3VhIiwiU09DTU5EIiwiTkdBWUNBUCIsIk5PSUNBUCIsIkRJRE9ORyIsIkRJRU5USE9BSUJBTiIsIkRJQUNISUVNQUlMIiwiTUFTT1RIVUUiLCJEaWFjaGkiLCJRdWVxdWFuIiwiV2Vic2l0ZSIsImJhbmdjYXBraGFjIiwiY2h1bmdjaGlraGFjIiwidXVkaWVtIiwia2h1eWV0ZGllbSIsImRpYWNoaWxpZW5oZSIsImtpbmhuZ2hpZW0iLCJPYmplY3QiLCJrZXlzIiwibmV3aGVhZGVyIiwidW5zaGlmdCIsImtleSIsInRvVXBwZXJDYXNlIiwiZm5FeGNlbCIsInJlbmRlclRhYmxlSGVhZGVyIiwicmVuZGVyVGFibGVEYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TkYsQ0FERixFQStCRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8saUJBQVMsRUFBQywyRkFBakI7QUFBNkcsVUFBRSxFQUFDLFVBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtDLGlCQUFMLEVBQUwsQ0FEQSxDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLEtBQUtDLGVBQUwsRUFERCxDQUpGLENBREYsQ0EvQkYsQ0FURixDQURGLENBREYsQ0FESixDQURBLEVBMkRFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTNERixFQTRERSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE1REYsQ0FGRixDQURGLENBREYsQ0FETjtBQXVFRDtBQXBNSDs7QUFBQTtBQUFBLEVBQWtDQywrQ0FBbEM7QUF1TWVqRSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYTlhOWZjMjIwYjY2M2Y2ZGQ1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyUGFnZSBmcm9tIFwiLi8vSGVhZGVyUGFnZVwiO1xyXG5pbXBvcnQgVGFiUGFuZSBmcm9tIFwiLi9UYWJQYW5lXCI7XHJcbmltcG9ydCBHaXJkRGF0YSBmcm9tIFwiLi9HaXJkRGF0YVwiO1xyXG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gXCIuL05hdmlnYXRvclwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vTW9kYWxcIjtcclxuaW1wb3J0IHtmbkV4Y2VsUmVwb3J0fSBmcm9tICcuLi8uLi8uLi9FeHBvcnQvRXhjZWwnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRlbnRTdGFmZiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGxldCByZXNfZGVwYXJ0bWVudHMgPSBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL2RlcGFydG1lbnRzXCIpO1xyXG4gICAgbGV0IHJlc3VsdHNfZGVwYXJ0bWVudHMgPSBhd2FpdCByZXNfZGVwYXJ0bWVudHMuanNvbigpO1xyXG4gICAgbGV0IHJlc190eXBlc2NvcmVzID0gIGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvdHlwZXNjb3Jlc1wiKTtcclxuICAgIGxldCByZXN1bHRzX3R5cGVzY29yZXMgPSBhd2FpdCByZXNfdHlwZXNjb3Jlcy5qc29uKCk7XHJcbiByZXR1cm4ge3Jlc3VsdHMgOiBqc29uICwgaGVhZGVyOiAnTGlzdCBTdGFmZicgfTtcclxuXHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgIGxvYWRpbmc6dHJ1ZSxcclxuICAgICAgZGF0YSA6IHRoaXMucHJvcHMucmVzdWx0c1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBhc3luYyBmbkV4Y2VsKCkge1xyXG4gICAgZm5FeGNlbFJlcG9ydCgpXHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlclRhYmxlRGF0YSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmRhdGEubWFwKChzdGFmZiwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIE1BTkhBTlZJRU4sXHJcbiAgICAgICAgSE9URU4sXHJcbiAgICAgICAgQklEQU5ILFxyXG4gICAgICAgIE5HQVlTSU5ILFxyXG4gICAgICAgIEdJT0lUSU5ILFxyXG4gICAgICAgIFZBTkhPQSxcclxuICAgICAgICBOR09BSU5HVSxcclxuICAgICAgICBTT1RSVU9ORyxcclxuICAgICAgICBDSFVZRU5NT04sXHJcbiAgICAgICAgVFJJTkhETyxcclxuICAgICAgICBOR0FZTFVVSFMsXHJcbiAgICAgICAgTFlET0xVVUhTLFxyXG4gICAgICAgIFRSQU5HVEhBSSxcclxuICAgICAgICBEQU5UT0MsXHJcbiAgICAgICAgVE9OR0lBTyxcclxuICAgICAgICBTT0JIWEgsXHJcbiAgICAgICAgTk9JX0RLS0NCLFxyXG4gICAgICAgIE5IQU5WSUVOX0lELFxyXG4gICAgICAgIG5nYXluaGFwLFxyXG4gICAgICAgIG5ndW9pbmhhcCxcclxuICAgICAgICBuZ2F5c3VhLFxyXG4gICAgICAgIG5ndW9pc3VhLFxyXG4gICAgICAgIFNPQ01ORCxcclxuICAgICAgICBOR0FZQ0FQLFxyXG4gICAgICAgIE5PSUNBUCxcclxuICAgICAgICBESURPTkcsXHJcbiAgICAgICAgRElFTlRIT0FJQkFOLFxyXG4gICAgICAgIERJQUNISUVNQUlMLFxyXG4gICAgICAgIE1BU09USFVFLFxyXG4gICAgICAgIERpYWNoaSxcclxuICAgICAgICBRdWVxdWFuLFxyXG4gICAgICAgIFdlYnNpdGUsXHJcbiAgICAgICAgYmFuZ2NhcGtoYWMsXHJcbiAgICAgICAgY2h1bmdjaGlraGFjLFxyXG4gICAgICAgIHV1ZGllbSxcclxuICAgICAgICBraHV5ZXRkaWVtLFxyXG4gICAgICAgIGRpYWNoaWxpZW5oZSxcclxuICAgICAgICBraW5obmdoaWVtXHJcbiAgICAgIH0gPSBzdGFmZjtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dHIga2V5PXtNQU5IQU5WSUVOfT5cclxuICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImVkaXRfcHJvZmVzc29yLmh0bWxcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGVuY2lsXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoLW8gXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkPntNQU5IQU5WSUVOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0hPVEVOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0JJREFOSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZU0lOSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntHSU9JVElOSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntWQU5IT0F9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdPQUlOR1V9PC90ZD5cclxuICAgICAgICAgIDx0ZD57U09UUlVPTkd9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Q0hVWUVOTU9OfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RSSU5IRE99PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdBWUxVVUhTfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0xZRE9MVVVIU308L3RkPlxyXG4gICAgICAgICAgPHRkPntUUkFOR1RIQUl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57REFOVE9DfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RPTkdJQU99PC90ZD5cclxuICAgICAgICAgIDx0ZD57U09CSFhIfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05PSV9ES0tDQn08L3RkPlxyXG4gICAgICAgICAgPHRkPntOSEFOVklFTl9JRH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ2F5bmhhcH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ3VvaW5oYXB9PC90ZD5cclxuICAgICAgICAgIDx0ZD57bmdheXN1YX08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ3VvaXN1YX08L3RkPlxyXG4gICAgICAgICAgPHRkPntTT0NNTkR9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdBWUNBUH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOT0lDQVB9PC90ZD5cclxuICAgICAgICAgIDx0ZD57RElET05HfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RJRU5USE9BSUJBTn08L3RkPlxyXG4gICAgICAgICAgPHRkPntESUFDSElFTUFJTH08L3RkPlxyXG4gICAgICAgICAgPHRkPntNQVNPVEhVRX08L3RkPlxyXG4gICAgICAgICAgPHRkPntEaWFjaGl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57UXVlcXVhbn08L3RkPlxyXG4gICAgICAgICAgPHRkPntXZWJzaXRlfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2JhbmdjYXBraGFjfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2NodW5nY2hpa2hhY308L3RkPlxyXG4gICAgICAgICAgPHRkPnt1dWRpZW19PC90ZD5cclxuICAgICAgICAgIDx0ZD57a2h1eWV0ZGllbX08L3RkPlxyXG4gICAgICAgICAgPHRkPntkaWFjaGlsaWVuaGV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57a2luaG5naGllbX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJsZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZGF0YVswXSlcclxuICAgIGNvbnN0IG5ld2hlYWRlciA9IGhlYWRlci51bnNoaWZ0KCd0b29scycpXHJcbiAgICByZXR1cm4gaGVhZGVyLm1hcCgoa2V5LCBpbmRleCkgPT5cclxuICAgICAgPHRoIGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtrZXkudG9VcHBlckNhc2UoKX1cclxuICAgICAgPC90aD4pXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiYmFibGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRvciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmUgZm9udGF3ZXNvbWUtZGVtb1wiIGlkPVwidGFiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLXJlcGVhdCBidG4tY29sb3IgYm94LXJlZnJlc2hcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidC1jb2xsYXBzZSBidG4tY29sb3IgZmEgZmEtY2hldnJvbi1kb3duXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY2xvc2UgYnRuLWNvbG9yIGZhIGZhLXRpbWVzXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tbGdcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiPkFkZCBOZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gZGVlcFBpbmstYmdjb2xvciAgYnRuLW91dGxpbmUgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlRvb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcHJpbnRcIiAvPiBQcmludCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLXBkZi1vXCIgLz4gU2F2ZSBhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUERGIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZm5FeGNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWV4Y2VsLW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IHRvIEV4Y2VsIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXNjcm9sbGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgdGFibGUtY2hlY2thYmxlIG9yZGVyLWNvbHVtbiB2YWxpZ24tbWlkZGxlXCIgaWQ9XCJleGFtcGxlNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e3RoaXMucmVuZGVyVGFibGVIZWFkZXIoKX08L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYmxlRGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFN0YWZmO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9