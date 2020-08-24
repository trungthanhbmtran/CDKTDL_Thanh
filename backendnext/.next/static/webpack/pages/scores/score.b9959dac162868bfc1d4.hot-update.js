webpackHotUpdate_N_E("pages/scores/score",{

/***/ "./components/ContainerComponents/score/score.js":
/*!*******************************************************!*\
  !*** ./components/ContainerComponents/score/score.js ***!
  \*******************************************************/
/*! exports provided: Score, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
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
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabPane */ "./components/ContainerComponents/score/TabPane.js");
/* harmony import */ var _Navigator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Navigator */ "./components/ContainerComponents/score/Navigator.js");
/* harmony import */ var _Export_Excel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../Export/Excel */ "./Export/Excel.js");
/* harmony import */ var _Export_Excel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Export_Excel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _AddScore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddScore */ "./components/ContainerComponents/score/AddScore.js");







var _jsxFileName = "D:\\Thanh\\BackUpCDKTDL_Final\\CDKTDL\\backendnext\\components\\ContainerComponents\\score\\score.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Score = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Score, _Component);

  var _super = _createSuper(Score);

  function Score(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Score);

    _this = _super.call(this, props);
    _this.state = {
      loading: true,
      data: _this.props.results
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Score, [{
    key: "fnExcel",
    value: function () {
      var _fnExcel = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Object(_Export_Excel__WEBPACK_IMPORTED_MODULE_10__["fnExcelReport"])();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
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
            lineNumber: 65,
            columnNumber: 9
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }
        }, __jsx("a", {
          href: "edit_professor.html",
          className: "btn btn-primary btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-pencil",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }
        })), __jsx("button", {
          className: "btn btn-danger btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-trash-o ",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }
        }))), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }
        }, MANHANVIEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, HOTEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }
        }, BIDANH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }
        }, NGAYSINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }
        }, GIOITINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }
        }, VANHOA), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }
        }, NGOAINGU), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }
        }, SOTRUONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }
        }, CHUYENMON), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, TRINHDO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }
        }, NGAYLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }
        }, LYDOLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }
        }, TRANGTHAI), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, DANTOC), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }
        }, TONGIAO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }
        }, SOBHXH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, NOI_DKKCB), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }
        }, NHANVIEN_ID), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }
        }, ngaynhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }
        }, nguoinhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }
        }, ngaysua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }
        }, nguoisua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }
        }, SOCMND), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }
        }, NGAYCAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }
        }, NOICAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }
        }, DIDONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, DIENTHOAIBAN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 11
          }
        }, DIACHIEMAIL), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }
        }, MASOTHUE), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }
        }, Diachi), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }
        }, Quequan), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 11
          }
        }, Website), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 11
          }
        }, bangcapkhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }
        }, chungchikhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 11
          }
        }, uudiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 11
          }
        }, khuyetdiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 11
          }
        }, diachilienhe), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
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
            lineNumber: 121,
            columnNumber: 7
          }
        }, key.toUpperCase());
      });
    }
  }, {
    key: "renderModalAdd",
    value: function renderModalAdd() {
      return __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "tabbable-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "tab-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "tab-pane active fontawesome-demo",
        id: "tab1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "card card-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 27
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 29
        }
      }, this.props.header), __jsx("div", {
        className: "tools",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "fa fa-repeat btn-color box-refresh",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-collapse btn-color fa fa-chevron-down",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-close btn-color fa fa-times",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 31
        }
      }))), __jsx("div", {
        className: "card-body ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
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
          lineNumber: 163,
          columnNumber: 33
        }
      }, "Add New"))), __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "btn deepPink-bgcolor  btn-outline dropdown-toggle",
        "data-toggle": "dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 35
        }
      }, "Tools", __jsx("i", {
        className: "fa fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 37
        }
      })), __jsx("ul", {
        className: "dropdown-menu pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 35
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-print",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 41
        }
      }), " Print ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-pdf-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 41
        }
      }), " Save as PDF ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 37
        }
      }, __jsx("a", {
        onClick: this.fnExcel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-excel-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 41
        }
      }), "Export to Excel ")))))), __jsx("div", {
        className: "table-scrollable",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 29
        }
      }, __jsx("table", {
        className: "table table-striped table-bordered table-hover table-checkable order-column valign-middle",
        id: "example4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 31
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 33
        }
      }, this.renderTableHeader())), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 33
        }
      }, this.renderTableData())))))))), this.renderModalAdd(), __jsx(_TabPane__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 19
        }
      })))));
    }
  }]);

  return Score;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Score);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3Njb3JlL3Njb3JlLmpzIl0sIm5hbWVzIjpbIlNjb3JlIiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJkYXRhIiwicmVzdWx0cyIsImZuRXhjZWxSZXBvcnQiLCJtYXAiLCJzdGFmZiIsImluZGV4IiwiTUFOSEFOVklFTiIsIkhPVEVOIiwiQklEQU5IIiwiTkdBWVNJTkgiLCJHSU9JVElOSCIsIlZBTkhPQSIsIk5HT0FJTkdVIiwiU09UUlVPTkciLCJDSFVZRU5NT04iLCJUUklOSERPIiwiTkdBWUxVVUhTIiwiTFlET0xVVUhTIiwiVFJBTkdUSEFJIiwiREFOVE9DIiwiVE9OR0lBTyIsIlNPQkhYSCIsIk5PSV9ES0tDQiIsIk5IQU5WSUVOX0lEIiwibmdheW5oYXAiLCJuZ3VvaW5oYXAiLCJuZ2F5c3VhIiwibmd1b2lzdWEiLCJTT0NNTkQiLCJOR0FZQ0FQIiwiTk9JQ0FQIiwiRElET05HIiwiRElFTlRIT0FJQkFOIiwiRElBQ0hJRU1BSUwiLCJNQVNPVEhVRSIsIkRpYWNoaSIsIlF1ZXF1YW4iLCJXZWJzaXRlIiwiYmFuZ2NhcGtoYWMiLCJjaHVuZ2NoaWtoYWMiLCJ1dWRpZW0iLCJraHV5ZXRkaWVtIiwiZGlhY2hpbGllbmhlIiwia2luaG5naGllbSIsImhlYWRlciIsIk9iamVjdCIsImtleXMiLCJuZXdoZWFkZXIiLCJ1bnNoaWZ0Iiwia2V5IiwidG9VcHBlckNhc2UiLCJmbkV4Y2VsIiwicmVuZGVyVGFibGVIZWFkZXIiLCJyZW5kZXJUYWJsZURhdGEiLCJyZW5kZXJNb2RhbEFkZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sSUFBTUEsS0FBYjtBQUFBOztBQUFBOztBQUVFLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtDLGlCQUFMLEVBQUwsQ0FEQSxDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLEtBQUtDLGVBQUwsRUFERCxDQUpGLENBREYsQ0EvQkYsQ0FURixDQURGLENBREYsQ0FESixDQURBLEVBMkRHLEtBQUtDLGNBQUwsRUEzREgsRUE0REUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBNURGLENBRkYsQ0FERixDQURGLENBRE47QUF1RUQ7QUE1TUg7O0FBQUE7QUFBQSxFQUEyQkMsK0NBQTNCO0FBK01lM0Qsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NvcmVzL3Njb3JlLmI5OTU5ZGFjMTYyODY4YmZjMWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUYWJQYW5lIGZyb20gXCIuL1RhYlBhbmVcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IHtmbkV4Y2VsUmVwb3J0fSBmcm9tICcuLi8uLi8uLi9FeHBvcnQvRXhjZWwnXHJcbmltcG9ydCBBZGRTY29yZSBmcm9tICcuL0FkZFNjb3JlJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTY29yZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgbG9hZGluZzp0cnVlLFxyXG4gICAgICBkYXRhIDogdGhpcy5wcm9wcy5yZXN1bHRzXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZuRXhjZWwoKSB7XHJcbiAgICBmbkV4Y2VsUmVwb3J0KClcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyVGFibGVEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5tYXAoKHN0YWZmLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgTUFOSEFOVklFTixcclxuICAgICAgICBIT1RFTixcclxuICAgICAgICBCSURBTkgsXHJcbiAgICAgICAgTkdBWVNJTkgsXHJcbiAgICAgICAgR0lPSVRJTkgsXHJcbiAgICAgICAgVkFOSE9BLFxyXG4gICAgICAgIE5HT0FJTkdVLFxyXG4gICAgICAgIFNPVFJVT05HLFxyXG4gICAgICAgIENIVVlFTk1PTixcclxuICAgICAgICBUUklOSERPLFxyXG4gICAgICAgIE5HQVlMVVVIUyxcclxuICAgICAgICBMWURPTFVVSFMsXHJcbiAgICAgICAgVFJBTkdUSEFJLFxyXG4gICAgICAgIERBTlRPQyxcclxuICAgICAgICBUT05HSUFPLFxyXG4gICAgICAgIFNPQkhYSCxcclxuICAgICAgICBOT0lfREtLQ0IsXHJcbiAgICAgICAgTkhBTlZJRU5fSUQsXHJcbiAgICAgICAgbmdheW5oYXAsXHJcbiAgICAgICAgbmd1b2luaGFwLFxyXG4gICAgICAgIG5nYXlzdWEsXHJcbiAgICAgICAgbmd1b2lzdWEsXHJcbiAgICAgICAgU09DTU5ELFxyXG4gICAgICAgIE5HQVlDQVAsXHJcbiAgICAgICAgTk9JQ0FQLFxyXG4gICAgICAgIERJRE9ORyxcclxuICAgICAgICBESUVOVEhPQUlCQU4sXHJcbiAgICAgICAgRElBQ0hJRU1BSUwsXHJcbiAgICAgICAgTUFTT1RIVUUsXHJcbiAgICAgICAgRGlhY2hpLFxyXG4gICAgICAgIFF1ZXF1YW4sXHJcbiAgICAgICAgV2Vic2l0ZSxcclxuICAgICAgICBiYW5nY2Fwa2hhYyxcclxuICAgICAgICBjaHVuZ2NoaWtoYWMsXHJcbiAgICAgICAgdXVkaWVtLFxyXG4gICAgICAgIGtodXlldGRpZW0sXHJcbiAgICAgICAgZGlhY2hpbGllbmhlLFxyXG4gICAgICAgIGtpbmhuZ2hpZW1cclxuICAgICAgfSA9IHN0YWZmO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBrZXk9e01BTkhBTlZJRU59PlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BTkhBTlZJRU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57SE9URU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57QklEQU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05HQVlTSU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0dJT0lUSU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1ZBTkhPQX08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR09BSU5HVX08L3RkPlxyXG4gICAgICAgICAgPHRkPntTT1RSVU9OR308L3RkPlxyXG4gICAgICAgICAgPHRkPntDSFVZRU5NT059PC90ZD5cclxuICAgICAgICAgIDx0ZD57VFJJTkhET308L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZTFVVSFN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TFlET0xVVUhTfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RSQU5HVEhBSX08L3RkPlxyXG4gICAgICAgICAgPHRkPntEQU5UT0N9PC90ZD5cclxuICAgICAgICAgIDx0ZD57VE9OR0lBT308L3RkPlxyXG4gICAgICAgICAgPHRkPntTT0JIWEh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Tk9JX0RLS0NCfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05IQU5WSUVOX0lEfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25nYXluaGFwfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25ndW9pbmhhcH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ2F5c3VhfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25ndW9pc3VhfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1NPQ01ORH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZQ0FQfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05PSUNBUH08L3RkPlxyXG4gICAgICAgICAgPHRkPntESURPTkd9PC90ZD5cclxuICAgICAgICAgIDx0ZD57RElFTlRIT0FJQkFOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RJQUNISUVNQUlMfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BU09USFVFfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RpYWNoaX08L3RkPlxyXG4gICAgICAgICAgPHRkPntRdWVxdWFufTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1dlYnNpdGV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57YmFuZ2NhcGtoYWN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Y2h1bmdjaGlraGFjfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3V1ZGllbX08L3RkPlxyXG4gICAgICAgICAgPHRkPntraHV5ZXRkaWVtfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2RpYWNoaWxpZW5oZX08L3RkPlxyXG4gICAgICAgICAgPHRkPntraW5obmdoaWVtfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlclRhYmxlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5kYXRhWzBdKVxyXG4gICAgY29uc3QgbmV3aGVhZGVyID0gaGVhZGVyLnVuc2hpZnQoJ3Rvb2xzJylcclxuICAgIHJldHVybiBoZWFkZXIubWFwKChrZXksIGluZGV4KSA9PlxyXG4gICAgICA8dGgga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2tleS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICA8L3RoPilcclxuICB9XHJcbiAgcmVuZGVyTW9kYWxBZGQoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiBNb2RhbCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm15TW9kYWxcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgey8qIE1vZGFsIGNvbnRlbnQqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHsvKnRoZW0gaW4gaGVyZSAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmJhYmxlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlIGZvbnRhd2Vzb21lLWRlbW9cIiBpZD1cInRhYjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+e3RoaXMucHJvcHMuaGVhZGVyfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYSBmYS1yZXBlYXQgYnRuLWNvbG9yIGJveC1yZWZyZXNoXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY29sbGFwc2UgYnRuLWNvbG9yIGZhIGZhLWNoZXZyb24tZG93blwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0LWNsb3NlIGJ0bi1jb2xvciBmYSBmYS10aW1lc1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWxnXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj5BZGQgTmV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGRlZXBQaW5rLWJnY29sb3IgIGJ0bi1vdXRsaW5lIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5Ub29sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXByaW50XCIgLz4gUHJpbnQgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1wZGYtb1wiIC8+IFNhdmUgYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBERiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZuRXhjZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1leGNlbC1vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCB0byBFeGNlbCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLWNoZWNrYWJsZSBvcmRlci1jb2x1bW4gdmFsaWduLW1pZGRsZVwiIGlkPVwiZXhhbXBsZTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPnt0aGlzLnJlbmRlclRhYmxlSGVhZGVyKCl9PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJsZURhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNb2RhbEFkZCgpfVxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=