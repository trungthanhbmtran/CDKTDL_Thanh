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
            lineNumber: 75,
            columnNumber: 9
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }
        }, __jsx("a", {
          href: "edit_professor.html",
          className: "btn btn-primary btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-pencil",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }
        })), __jsx("button", {
          className: "btn btn-danger btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-trash-o ",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }
        }))), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }
        }, MANHANVIEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }
        }, HOTEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }
        }, BIDANH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, NGAYSINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }
        }, GIOITINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }
        }, VANHOA), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, NGOAINGU), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }
        }, SOTRUONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }
        }, CHUYENMON), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }
        }, TRINHDO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }
        }, NGAYLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }
        }, LYDOLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }
        }, TRANGTHAI), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }
        }, DANTOC), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }
        }, TONGIAO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }
        }, SOBHXH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, NOI_DKKCB), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }
        }, NHANVIEN_ID), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }
        }, ngaynhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }
        }, nguoinhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }
        }, ngaysua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }
        }, nguoisua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }
        }, SOCMND), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }
        }, NGAYCAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }
        }, NOICAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, DIDONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 11
          }
        }, DIENTHOAIBAN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }
        }, DIACHIEMAIL), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 11
          }
        }, MASOTHUE), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 11
          }
        }, Diachi), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 11
          }
        }, Quequan), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 11
          }
        }, Website), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 11
          }
        }, bangcapkhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }
        }, chungchikhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 11
          }
        }, uudiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }
        }, khuyetdiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 11
          }
        }, diachilienhe), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121,
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
            lineNumber: 131,
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
          lineNumber: 137,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "tabbable-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "tab-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "tab-pane active fontawesome-demo",
        id: "tab1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "card card-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 27
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 29
        }
      }, this.props.header), __jsx("div", {
        className: "tools",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "fa fa-repeat btn-color box-refresh",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-collapse btn-color fa fa-chevron-down",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-close btn-color fa fa-times",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 31
        }
      }))), __jsx("div", {
        className: "card-body ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
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
          lineNumber: 158,
          columnNumber: 33
        }
      }, "Add New"))), __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "btn deepPink-bgcolor  btn-outline dropdown-toggle",
        "data-toggle": "dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 35
        }
      }, "Tools", __jsx("i", {
        className: "fa fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 37
        }
      })), __jsx("ul", {
        className: "dropdown-menu pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 35
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-print",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 41
        }
      }), " Print ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-pdf-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 41
        }
      }), " Save as PDF ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 37
        }
      }, __jsx("a", {
        onClick: this.fnExcel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-excel-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 41
        }
      }), "Export to Excel ")))))), __jsx("div", {
        className: "table-scrollable",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 29
        }
      }, __jsx("table", {
        className: "table table-striped table-bordered table-hover table-checkable order-column valign-middle",
        id: "example4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 31
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 33
        }
      }, this.renderTableHeader())), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 33
        }
      }, this.renderTableData())))))))), __jsx(_TabPane__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 19
        }
      }), __jsx(_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3N0YWZmL0NvbnRlbnRTdGFmZi5qcyJdLCJuYW1lcyI6WyJDb250ZW50U3RhZmYiLCJjdHgiLCJTZW5kX0dldF9SZXN0QVBJIiwicmVzX2RlcGFydG1lbnRzIiwianNvbiIsInJlc3VsdHNfZGVwYXJ0bWVudHMiLCJyZXNfdHlwZXNjb3JlcyIsInJlc3VsdHNfdHlwZXNjb3JlcyIsInJlc3VsdHMiLCJoZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsImRhdGEiLCJmbkV4Y2VsUmVwb3J0IiwibWFwIiwic3RhZmYiLCJpbmRleCIsIk1BTkhBTlZJRU4iLCJIT1RFTiIsIkJJREFOSCIsIk5HQVlTSU5IIiwiR0lPSVRJTkgiLCJWQU5IT0EiLCJOR09BSU5HVSIsIlNPVFJVT05HIiwiQ0hVWUVOTU9OIiwiVFJJTkhETyIsIk5HQVlMVVVIUyIsIkxZRE9MVVVIUyIsIlRSQU5HVEhBSSIsIkRBTlRPQyIsIlRPTkdJQU8iLCJTT0JIWEgiLCJOT0lfREtLQ0IiLCJOSEFOVklFTl9JRCIsIm5nYXluaGFwIiwibmd1b2luaGFwIiwibmdheXN1YSIsIm5ndW9pc3VhIiwiU09DTU5EIiwiTkdBWUNBUCIsIk5PSUNBUCIsIkRJRE9ORyIsIkRJRU5USE9BSUJBTiIsIkRJQUNISUVNQUlMIiwiTUFTT1RIVUUiLCJEaWFjaGkiLCJRdWVxdWFuIiwiV2Vic2l0ZSIsImJhbmdjYXBraGFjIiwiY2h1bmdjaGlraGFjIiwidXVkaWVtIiwia2h1eWV0ZGllbSIsImRpYWNoaWxpZW5oZSIsImtpbmhuZ2hpZW0iLCJPYmplY3QiLCJrZXlzIiwibmV3aGVhZGVyIiwidW5zaGlmdCIsImtleSIsInRvVXBwZXJDYXNlIiwiZm5FeGNlbCIsInJlbmRlclRhYmxlSGVhZGVyIiwicmVuZGVyVGFibGVEYXRhIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QU5GLENBREYsRUErQkU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFPLGlCQUFTLEVBQUMsMkZBQWpCO0FBQTZHLFVBQUUsRUFBQyxVQUFoSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSyxLQUFLQyxpQkFBTCxFQUFMLENBREEsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxLQUFLQyxlQUFMLEVBREQsQ0FKRixDQURGLENBL0JGLENBVEYsQ0FERixDQURGLENBREosQ0FEQSxFQTJERSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUEzREYsRUE0REUsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBNURGLENBRkYsQ0FERixDQURGLENBRE47QUF1RUQ7QUFyTUg7O0FBQUE7QUFBQSxFQUFrQ0MsK0NBQWxDO0FBd01lakUsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3RhZmZzL3N0YWZmLjVhMjQ5YzljODkyMDRjYmM0ZDRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXJQYWdlIGZyb20gXCIuLy9IZWFkZXJQYWdlXCI7XHJcbmltcG9ydCBUYWJQYW5lIGZyb20gXCIuL1RhYlBhbmVcIjtcclxuaW1wb3J0IEdpcmREYXRhIGZyb20gXCIuL0dpcmREYXRhXCI7XHJcbmltcG9ydCBOYXZpZ2F0b3IgZnJvbSBcIi4vTmF2aWdhdG9yXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiO1xyXG5pbXBvcnQge2ZuRXhjZWxSZXBvcnR9IGZyb20gJy4uLy4uLy4uL0V4cG9ydC9FeGNlbCdcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGVudFN0YWZmIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgbGV0IHJlc19kZXBhcnRtZW50cyA9IGF3YWl0IFNlbmRfR2V0X1Jlc3RBUEkoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2NvcmUvZGVwYXJ0bWVudHNcIik7XHJcbiAgICBsZXQgcmVzdWx0c19kZXBhcnRtZW50cyA9IGF3YWl0IHJlc19kZXBhcnRtZW50cy5qc29uKCk7XHJcbiAgICBsZXQgcmVzX3R5cGVzY29yZXMgPSAgYXdhaXQgU2VuZF9HZXRfUmVzdEFQSShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zY29yZS90eXBlc2NvcmVzXCIpO1xyXG4gICAgbGV0IHJlc3VsdHNfdHlwZXNjb3JlcyA9IGF3YWl0IHJlc190eXBlc2NvcmVzLmpzb24oKTtcclxuIFxyXG4gcmV0dXJuIHtyZXN1bHRzIDoganNvbiAsIGhlYWRlcjogJ0xpc3QgU3RhZmYnIH07XHJcblxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICBsb2FkaW5nOnRydWUsXHJcbiAgICAgIGRhdGEgOiB0aGlzLnByb3BzLnJlc3VsdHNcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgZm5FeGNlbCgpIHtcclxuICAgIGZuRXhjZWxSZXBvcnQoKVxyXG4gIH1cclxuICBcclxuICByZW5kZXJUYWJsZURhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRhLm1hcCgoc3RhZmYsIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBNQU5IQU5WSUVOLFxyXG4gICAgICAgIEhPVEVOLFxyXG4gICAgICAgIEJJREFOSCxcclxuICAgICAgICBOR0FZU0lOSCxcclxuICAgICAgICBHSU9JVElOSCxcclxuICAgICAgICBWQU5IT0EsXHJcbiAgICAgICAgTkdPQUlOR1UsXHJcbiAgICAgICAgU09UUlVPTkcsXHJcbiAgICAgICAgQ0hVWUVOTU9OLFxyXG4gICAgICAgIFRSSU5IRE8sXHJcbiAgICAgICAgTkdBWUxVVUhTLFxyXG4gICAgICAgIExZRE9MVVVIUyxcclxuICAgICAgICBUUkFOR1RIQUksXHJcbiAgICAgICAgREFOVE9DLFxyXG4gICAgICAgIFRPTkdJQU8sXHJcbiAgICAgICAgU09CSFhILFxyXG4gICAgICAgIE5PSV9ES0tDQixcclxuICAgICAgICBOSEFOVklFTl9JRCxcclxuICAgICAgICBuZ2F5bmhhcCxcclxuICAgICAgICBuZ3VvaW5oYXAsXHJcbiAgICAgICAgbmdheXN1YSxcclxuICAgICAgICBuZ3VvaXN1YSxcclxuICAgICAgICBTT0NNTkQsXHJcbiAgICAgICAgTkdBWUNBUCxcclxuICAgICAgICBOT0lDQVAsXHJcbiAgICAgICAgRElET05HLFxyXG4gICAgICAgIERJRU5USE9BSUJBTixcclxuICAgICAgICBESUFDSElFTUFJTCxcclxuICAgICAgICBNQVNPVEhVRSxcclxuICAgICAgICBEaWFjaGksXHJcbiAgICAgICAgUXVlcXVhbixcclxuICAgICAgICBXZWJzaXRlLFxyXG4gICAgICAgIGJhbmdjYXBraGFjLFxyXG4gICAgICAgIGNodW5nY2hpa2hhYyxcclxuICAgICAgICB1dWRpZW0sXHJcbiAgICAgICAga2h1eWV0ZGllbSxcclxuICAgICAgICBkaWFjaGlsaWVuaGUsXHJcbiAgICAgICAga2luaG5naGllbVxyXG4gICAgICB9ID0gc3RhZmY7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRyIGtleT17TUFOSEFOVklFTn0+XHJcbiAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJlZGl0X3Byb2Zlc3Nvci5odG1sXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBlbmNpbFwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlciBidG4teHNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaC1vIFwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZD57TUFOSEFOVklFTn08L3RkPlxyXG4gICAgICAgICAgPHRkPntIT1RFTn08L3RkPlxyXG4gICAgICAgICAgPHRkPntCSURBTkh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdBWVNJTkh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57R0lPSVRJTkh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57VkFOSE9BfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05HT0FJTkdVfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1NPVFJVT05HfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0NIVVlFTk1PTn08L3RkPlxyXG4gICAgICAgICAgPHRkPntUUklOSERPfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05HQVlMVVVIU308L3RkPlxyXG4gICAgICAgICAgPHRkPntMWURPTFVVSFN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57VFJBTkdUSEFJfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RBTlRPQ308L3RkPlxyXG4gICAgICAgICAgPHRkPntUT05HSUFPfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1NPQkhYSH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOT0lfREtLQ0J9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkhBTlZJRU5fSUR9PC90ZD5cclxuICAgICAgICAgIDx0ZD57bmdheW5oYXB9PC90ZD5cclxuICAgICAgICAgIDx0ZD57bmd1b2luaGFwfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25nYXlzdWF9PC90ZD5cclxuICAgICAgICAgIDx0ZD57bmd1b2lzdWF9PC90ZD5cclxuICAgICAgICAgIDx0ZD57U09DTU5EfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05HQVlDQVB9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Tk9JQ0FQfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RJRE9OR308L3RkPlxyXG4gICAgICAgICAgPHRkPntESUVOVEhPQUlCQU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57RElBQ0hJRU1BSUx9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TUFTT1RIVUV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57RGlhY2hpfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1F1ZXF1YW59PC90ZD5cclxuICAgICAgICAgIDx0ZD57V2Vic2l0ZX08L3RkPlxyXG4gICAgICAgICAgPHRkPntiYW5nY2Fwa2hhY308L3RkPlxyXG4gICAgICAgICAgPHRkPntjaHVuZ2NoaWtoYWN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57dXVkaWVtfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2todXlldGRpZW19PC90ZD5cclxuICAgICAgICAgIDx0ZD57ZGlhY2hpbGllbmhlfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2tpbmhuZ2hpZW19PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyVGFibGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmRhdGFbMF0pXHJcbiAgICBjb25zdCBuZXdoZWFkZXIgPSBoZWFkZXIudW5zaGlmdCgndG9vbHMnKVxyXG4gICAgcmV0dXJuIGhlYWRlci5tYXAoKGtleSwgaW5kZXgpID0+XHJcbiAgICAgIDx0aCBrZXk9e2luZGV4fT5cclxuICAgICAgICB7a2V5LnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgIDwvdGg+KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmJhYmxlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlIGZvbnRhd2Vzb21lLWRlbW9cIiBpZD1cInRhYjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+e3RoaXMucHJvcHMuaGVhZGVyfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYSBmYS1yZXBlYXQgYnRuLWNvbG9yIGJveC1yZWZyZXNoXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY29sbGFwc2UgYnRuLWNvbG9yIGZhIGZhLWNoZXZyb24tZG93blwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0LWNsb3NlIGJ0bi1jb2xvciBmYSBmYS10aW1lc1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWxnXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj5BZGQgTmV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGRlZXBQaW5rLWJnY29sb3IgIGJ0bi1vdXRsaW5lIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5Ub29sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXByaW50XCIgLz4gUHJpbnQgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1wZGYtb1wiIC8+IFNhdmUgYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBERiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZuRXhjZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1leGNlbC1vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCB0byBFeGNlbCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLWNoZWNrYWJsZSBvcmRlci1jb2x1bW4gdmFsaWduLW1pZGRsZVwiIGlkPVwiZXhhbXBsZTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPnt0aGlzLnJlbmRlclRhYmxlSGVhZGVyKCl9PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJsZURhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZSAvPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWwgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRTdGFmZjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==