webpackHotUpdate_N_E("pages/staffs/staff",{

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
                  results_departments: results_departments,
                  results_typescores: results_typescores,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0NvbnRlbnRTdGFmZi5qcyJdLCJuYW1lcyI6WyJDb250ZW50U3RhZmYiLCJjdHgiLCJTZW5kX0dldF9SZXN0QVBJIiwicmVzX2RlcGFydG1lbnRzIiwianNvbiIsInJlc3VsdHNfZGVwYXJ0bWVudHMiLCJyZXNfdHlwZXNjb3JlcyIsInJlc3VsdHNfdHlwZXNjb3JlcyIsImhlYWRlciIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwiZGF0YSIsInJlc3VsdHMiLCJmbkV4Y2VsUmVwb3J0IiwibWFwIiwic3RhZmYiLCJpbmRleCIsIk1BTkhBTlZJRU4iLCJIT1RFTiIsIkJJREFOSCIsIk5HQVlTSU5IIiwiR0lPSVRJTkgiLCJWQU5IT0EiLCJOR09BSU5HVSIsIlNPVFJVT05HIiwiQ0hVWUVOTU9OIiwiVFJJTkhETyIsIk5HQVlMVVVIUyIsIkxZRE9MVVVIUyIsIlRSQU5HVEhBSSIsIkRBTlRPQyIsIlRPTkdJQU8iLCJTT0JIWEgiLCJOT0lfREtLQ0IiLCJOSEFOVklFTl9JRCIsIm5nYXluaGFwIiwibmd1b2luaGFwIiwibmdheXN1YSIsIm5ndW9pc3VhIiwiU09DTU5EIiwiTkdBWUNBUCIsIk5PSUNBUCIsIkRJRE9ORyIsIkRJRU5USE9BSUJBTiIsIkRJQUNISUVNQUlMIiwiTUFTT1RIVUUiLCJEaWFjaGkiLCJRdWVxdWFuIiwiV2Vic2l0ZSIsImJhbmdjYXBraGFjIiwiY2h1bmdjaGlraGFjIiwidXVkaWVtIiwia2h1eWV0ZGllbSIsImRpYWNoaWxpZW5oZSIsImtpbmhuZ2hpZW0iLCJPYmplY3QiLCJrZXlzIiwibmV3aGVhZGVyIiwidW5zaGlmdCIsImtleSIsInRvVXBwZXJDYXNlIiwiZm5FeGNlbCIsInJlbmRlclRhYmxlSGVhZGVyIiwicmVuZGVyVGFibGVEYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QSxRQURGLHFCQURGLENBVkYsQ0FKRixDQURGLENBTkYsQ0FERixFQStCRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8saUJBQVMsRUFBQywyRkFBakI7QUFBNkcsVUFBRSxFQUFDLFVBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtDLGlCQUFMLEVBQUwsQ0FEQSxDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLEtBQUtDLGVBQUwsRUFERCxDQUpGLENBREYsQ0EvQkYsQ0FURixDQURGLENBREYsQ0FESixDQURBLEVBMkRFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTNERixFQTRERSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE1REYsQ0FGRixDQURGLENBREYsQ0FETjtBQXVFRDtBQXBNSDs7QUFBQTtBQUFBLEVBQWtDQywrQ0FBbEM7QUF1TWVqRSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdGFmZnMvc3RhZmYuYmVlMWFiYzgxM2Q2MGY0Y2JlMjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlclBhZ2UgZnJvbSBcIi4vL0hlYWRlclBhZ2VcIjtcclxuaW1wb3J0IFRhYlBhbmUgZnJvbSBcIi4vVGFiUGFuZVwiO1xyXG5pbXBvcnQgR2lyZERhdGEgZnJvbSBcIi4vR2lyZERhdGFcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuL01vZGFsXCI7XHJcbmltcG9ydCB7Zm5FeGNlbFJlcG9ydH0gZnJvbSAnLi4vLi4vLi4vRXhwb3J0L0V4Y2VsJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250ZW50U3RhZmYgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XHJcbiAgICBsZXQgcmVzX2RlcGFydG1lbnRzID0gYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS9kZXBhcnRtZW50c1wiKTtcclxuICAgIGxldCByZXN1bHRzX2RlcGFydG1lbnRzID0gYXdhaXQgcmVzX2RlcGFydG1lbnRzLmpzb24oKTtcclxuICAgIGxldCByZXNfdHlwZXNjb3JlcyA9ICBhd2FpdCBTZW5kX0dldF9SZXN0QVBJKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3Njb3JlL3R5cGVzY29yZXNcIik7XHJcbiAgICBsZXQgcmVzdWx0c190eXBlc2NvcmVzID0gYXdhaXQgcmVzX3R5cGVzY29yZXMuanNvbigpO1xyXG4gcmV0dXJuIHtyZXN1bHRzX2RlcGFydG1lbnRzIDogcmVzdWx0c19kZXBhcnRtZW50cyAsIHJlc3VsdHNfdHlwZXNjb3JlcyA6IHJlc3VsdHNfdHlwZXNjb3JlcyAgLCBoZWFkZXI6ICdMaXN0IFN0YWZmJyB9O1xyXG5cclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgbG9hZGluZzp0cnVlLFxyXG4gICAgICBkYXRhIDogdGhpcy5wcm9wcy5yZXN1bHRzXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZuRXhjZWwoKSB7XHJcbiAgICBmbkV4Y2VsUmVwb3J0KClcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyVGFibGVEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5tYXAoKHN0YWZmLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgTUFOSEFOVklFTixcclxuICAgICAgICBIT1RFTixcclxuICAgICAgICBCSURBTkgsXHJcbiAgICAgICAgTkdBWVNJTkgsXHJcbiAgICAgICAgR0lPSVRJTkgsXHJcbiAgICAgICAgVkFOSE9BLFxyXG4gICAgICAgIE5HT0FJTkdVLFxyXG4gICAgICAgIFNPVFJVT05HLFxyXG4gICAgICAgIENIVVlFTk1PTixcclxuICAgICAgICBUUklOSERPLFxyXG4gICAgICAgIE5HQVlMVVVIUyxcclxuICAgICAgICBMWURPTFVVSFMsXHJcbiAgICAgICAgVFJBTkdUSEFJLFxyXG4gICAgICAgIERBTlRPQyxcclxuICAgICAgICBUT05HSUFPLFxyXG4gICAgICAgIFNPQkhYSCxcclxuICAgICAgICBOT0lfREtLQ0IsXHJcbiAgICAgICAgTkhBTlZJRU5fSUQsXHJcbiAgICAgICAgbmdheW5oYXAsXHJcbiAgICAgICAgbmd1b2luaGFwLFxyXG4gICAgICAgIG5nYXlzdWEsXHJcbiAgICAgICAgbmd1b2lzdWEsXHJcbiAgICAgICAgU09DTU5ELFxyXG4gICAgICAgIE5HQVlDQVAsXHJcbiAgICAgICAgTk9JQ0FQLFxyXG4gICAgICAgIERJRE9ORyxcclxuICAgICAgICBESUVOVEhPQUlCQU4sXHJcbiAgICAgICAgRElBQ0hJRU1BSUwsXHJcbiAgICAgICAgTUFTT1RIVUUsXHJcbiAgICAgICAgRGlhY2hpLFxyXG4gICAgICAgIFF1ZXF1YW4sXHJcbiAgICAgICAgV2Vic2l0ZSxcclxuICAgICAgICBiYW5nY2Fwa2hhYyxcclxuICAgICAgICBjaHVuZ2NoaWtoYWMsXHJcbiAgICAgICAgdXVkaWVtLFxyXG4gICAgICAgIGtodXlldGRpZW0sXHJcbiAgICAgICAgZGlhY2hpbGllbmhlLFxyXG4gICAgICAgIGtpbmhuZ2hpZW1cclxuICAgICAgfSA9IHN0YWZmO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBrZXk9e01BTkhBTlZJRU59PlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BTkhBTlZJRU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57SE9URU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57QklEQU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05HQVlTSU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0dJT0lUSU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1ZBTkhPQX08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR09BSU5HVX08L3RkPlxyXG4gICAgICAgICAgPHRkPntTT1RSVU9OR308L3RkPlxyXG4gICAgICAgICAgPHRkPntDSFVZRU5NT059PC90ZD5cclxuICAgICAgICAgIDx0ZD57VFJJTkhET308L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZTFVVSFN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TFlET0xVVUhTfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RSQU5HVEhBSX08L3RkPlxyXG4gICAgICAgICAgPHRkPntEQU5UT0N9PC90ZD5cclxuICAgICAgICAgIDx0ZD57VE9OR0lBT308L3RkPlxyXG4gICAgICAgICAgPHRkPntTT0JIWEh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Tk9JX0RLS0NCfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05IQU5WSUVOX0lEfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25nYXluaGFwfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25ndW9pbmhhcH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ2F5c3VhfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25ndW9pc3VhfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1NPQ01ORH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZQ0FQfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05PSUNBUH08L3RkPlxyXG4gICAgICAgICAgPHRkPntESURPTkd9PC90ZD5cclxuICAgICAgICAgIDx0ZD57RElFTlRIT0FJQkFOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RJQUNISUVNQUlMfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BU09USFVFfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RpYWNoaX08L3RkPlxyXG4gICAgICAgICAgPHRkPntRdWVxdWFufTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1dlYnNpdGV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57YmFuZ2NhcGtoYWN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Y2h1bmdjaGlraGFjfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3V1ZGllbX08L3RkPlxyXG4gICAgICAgICAgPHRkPntraHV5ZXRkaWVtfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2RpYWNoaWxpZW5oZX08L3RkPlxyXG4gICAgICAgICAgPHRkPntraW5obmdoaWVtfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlclRhYmxlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5kYXRhWzBdKVxyXG4gICAgY29uc3QgbmV3aGVhZGVyID0gaGVhZGVyLnVuc2hpZnQoJ3Rvb2xzJylcclxuICAgIHJldHVybiBoZWFkZXIubWFwKChrZXksIGluZGV4KSA9PlxyXG4gICAgICA8dGgga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2tleS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICA8L3RoPilcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJiYWJsZS1saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1wYW5lIGFjdGl2ZSBmb250YXdlc29tZS1kZW1vXCIgaWQ9XCJ0YWIxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPnt0aGlzLnByb3BzLmhlYWRlcn08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmEgZmEtcmVwZWF0IGJ0bi1jb2xvciBib3gtcmVmcmVzaFwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0LWNvbGxhcHNlIGJ0bi1jb2xvciBmYSBmYS1jaGV2cm9uLWRvd25cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidC1jbG9zZSBidG4tY29sb3IgZmEgZmEtdGltZXNcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNiBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1sZ1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+QWRkIE5ldzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tNiBjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWdyb3VwIHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBkZWVwUGluay1iZ2NvbG9yICBidG4tb3V0bGluZSBkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+VG9vbHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wcmludFwiIC8+IFByaW50IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtcGRmLW9cIiAvPiBTYXZlIGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQREYgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17dGhpcy5mbkV4Y2VsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtZXhjZWwtb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgdG8gRXhjZWwgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtc2Nyb2xsYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ib3JkZXJlZCB0YWJsZS1ob3ZlciB0YWJsZS1jaGVja2FibGUgb3JkZXItY29sdW1uIHZhbGlnbi1taWRkbGVcIiBpZD1cImV4YW1wbGU0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj57dGhpcy5yZW5kZXJUYWJsZUhlYWRlcigpfTwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFibGVEYXRhKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgLz5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50U3RhZmY7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=