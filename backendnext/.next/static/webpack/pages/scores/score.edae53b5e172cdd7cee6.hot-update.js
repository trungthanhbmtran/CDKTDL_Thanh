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

      return this.state.data.map(function (scores, index) {
        var _staff = staff,
            MANHANVIEN = _staff.MANHANVIEN,
            NHANVIEN_ID = _staff.NHANVIEN_ID,
            HOTEN = _staff.HOTEN,
            NGAYSINH = _staff.NGAYSINH,
            ID_SV_MH = _staff.ID_SV_MH,
            ID_Mon_Lophoc = _staff.ID_Mon_Lophoc,
            tinhdiem_tbc = _staff.tinhdiem_tbc,
            hoclai = _staff.hoclai,
            Lan_Hoc = _staff.Lan_Hoc,
            Ghichu = _staff.Ghichu,
            Diem_Trungbinh = _staff.Diem_Trungbinh,
            Diem_Trungbinh2 = _staff.Diem_Trungbinh2,
            TB_KT = _staff.TB_KT,
            tx1 = _staff.tx1,
            tx2 = _staff.tx2,
            tx3 = _staff.tx3,
            tx4 = _staff.tx4,
            tx5 = _staff.tx5,
            dk1 = _staff.dk1,
            dk2 = _staff.dk2,
            dk3 = _staff.dk3,
            dk4 = _staff.dk4,
            dk5 = _staff.dk5,
            dk6 = _staff.dk6,
            dk7 = _staff.dk7,
            dk8 = _staff.dk8,
            kt1 = _staff.kt1,
            kt2 = _staff.kt2;
        return __jsx("tr", {
          key: MANHANVIEN,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 9
          }
        }, __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }
        }, __jsx("a", {
          href: "edit_professor.html",
          className: "btn btn-primary btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-pencil",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }
        })), __jsx("button", {
          className: "btn btn-danger btn-xs",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }
        }, __jsx("i", {
          className: "fa fa-trash-o ",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }
        }))), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }
        }, MANHANVIEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }
        }, HOTEN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }
        }, BIDANH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 11
          }
        }, NGAYSINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 11
          }
        }, GIOITINH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }
        }, VANHOA), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }
        }, NGOAINGU), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 11
          }
        }, SOTRUONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }
        }, CHUYENMON), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }
        }, TRINHDO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }
        }, NGAYLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, LYDOLUUHS), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }
        }, TRANGTHAI), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }
        }, DANTOC), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }
        }, TONGIAO), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }
        }, SOBHXH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }
        }, NOI_DKKCB), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }
        }, NHANVIEN_ID), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }
        }, ngaynhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, nguoinhap), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }
        }, ngaysua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }
        }, nguoisua), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }
        }, SOCMND), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, NGAYCAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }
        }, NOICAP), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }
        }, DIDONG), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, DIENTHOAIBAN), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }
        }, DIACHIEMAIL), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }
        }, MASOTHUE), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 11
          }
        }, Diachi), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }
        }, Quequan), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }
        }, Website), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }
        }, bangcapkhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 11
          }
        }, chungchikhac), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }
        }, uudiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 11
          }
        }, khuyetdiem), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 11
          }
        }, diachilienhe), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
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
            lineNumber: 111,
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
          lineNumber: 117,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal fade",
        id: "myModal",
        role: "dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-dialog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "modal-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 13
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, "thanhkute")))));
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "tabbable-line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      }, __jsx(_Navigator__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 17
        }
      }), __jsx("div", {
        className: "tab-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "tab-pane active fontawesome-demo",
        id: "tab1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 23
        }
      }, __jsx("div", {
        className: "card card-box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "card-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 27
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 29
        }
      }, this.props.header), __jsx("div", {
        className: "tools",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      }, __jsx("a", {
        className: "fa fa-repeat btn-color box-refresh",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-collapse btn-color fa fa-chevron-down",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 31
        }
      }), __jsx("a", {
        className: "t-close btn-color fa fa-times",
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 31
        }
      }))), __jsx("div", {
        className: "card-body ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 29
        }
      }, __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
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
          lineNumber: 154,
          columnNumber: 33
        }
      }, "Add New"))), __jsx("div", {
        className: "col-md-6 col-sm-6 col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 31
        }
      }, __jsx("div", {
        className: "btn-group pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "btn deepPink-bgcolor  btn-outline dropdown-toggle",
        "data-toggle": "dropdown",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 35
        }
      }, "Tools", __jsx("i", {
        className: "fa fa-angle-down",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 37
        }
      })), __jsx("ul", {
        className: "dropdown-menu pull-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 35
        }
      }, __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 37
        }
      }, __jsx("a", {
        href: "javascript:;",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-print",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 41
        }
      }), " Print ")), __jsx("li", {
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
        className: "fa fa-file-pdf-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 41
        }
      }), " Save as PDF ")), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 37
        }
      }, __jsx("a", {
        onClick: this.fnExcel,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 39
        }
      }, __jsx("i", {
        className: "fa fa-file-excel-o",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 41
        }
      }), "Export to Excel ")))))), __jsx("div", {
        className: "table-scrollable",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 29
        }
      }, __jsx("table", {
        className: "table table-striped table-bordered table-hover table-checkable order-column valign-middle",
        id: "example4",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 31
        }
      }, __jsx("thead", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 33
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 33
        }
      }, this.renderTableHeader())), __jsx("tbody", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 33
        }
      }, this.renderTableData())))))))), this.renderModalAdd(), __jsx(_TabPane__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3Njb3JlL3Njb3JlLmpzIl0sIm5hbWVzIjpbIlNjb3JlIiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJkYXRhIiwicmVzdWx0cyIsImZuRXhjZWxSZXBvcnQiLCJtYXAiLCJzY29yZXMiLCJpbmRleCIsInN0YWZmIiwiTUFOSEFOVklFTiIsIk5IQU5WSUVOX0lEIiwiSE9URU4iLCJOR0FZU0lOSCIsIklEX1NWX01IIiwiSURfTW9uX0xvcGhvYyIsInRpbmhkaWVtX3RiYyIsImhvY2xhaSIsIkxhbl9Ib2MiLCJHaGljaHUiLCJEaWVtX1RydW5nYmluaCIsIkRpZW1fVHJ1bmdiaW5oMiIsIlRCX0tUIiwidHgxIiwidHgyIiwidHgzIiwidHg0IiwidHg1IiwiZGsxIiwiZGsyIiwiZGszIiwiZGs0IiwiZGs1IiwiZGs2IiwiZGs3IiwiZGs4Iiwia3QxIiwia3QyIiwiQklEQU5IIiwiR0lPSVRJTkgiLCJWQU5IT0EiLCJOR09BSU5HVSIsIlNPVFJVT05HIiwiQ0hVWUVOTU9OIiwiVFJJTkhETyIsIk5HQVlMVVVIUyIsIkxZRE9MVVVIUyIsIlRSQU5HVEhBSSIsIkRBTlRPQyIsIlRPTkdJQU8iLCJTT0JIWEgiLCJOT0lfREtLQ0IiLCJuZ2F5bmhhcCIsIm5ndW9pbmhhcCIsIm5nYXlzdWEiLCJuZ3VvaXN1YSIsIlNPQ01ORCIsIk5HQVlDQVAiLCJOT0lDQVAiLCJESURPTkciLCJESUVOVEhPQUlCQU4iLCJESUFDSElFTUFJTCIsIk1BU09USFVFIiwiRGlhY2hpIiwiUXVlcXVhbiIsIldlYnNpdGUiLCJiYW5nY2Fwa2hhYyIsImNodW5nY2hpa2hhYyIsInV1ZGllbSIsImtodXlldGRpZW0iLCJkaWFjaGlsaWVuaGUiLCJraW5obmdoaWVtIiwiaGVhZGVyIiwiT2JqZWN0Iiwia2V5cyIsIm5ld2hlYWRlciIsInVuc2hpZnQiLCJrZXkiLCJ0b1VwcGVyQ2FzZSIsImZuRXhjZWwiLCJyZW5kZXJUYWJsZUhlYWRlciIsInJlbmRlclRhYmxlRGF0YSIsInJlbmRlck1vZGFsQWRkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBRUUsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVk7QUFDVkMsYUFBTyxFQUFDLElBREU7QUFFVkMsVUFBSSxFQUFHLE1BQUtILEtBQUwsQ0FBV0k7QUFGUixLQUFaO0FBRmlCO0FBTWxCOztBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXSUMsb0ZBQWE7O0FBWGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQWNvQjtBQUFBOztBQUNoQixhQUFPLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQUEscUJBOEJ4Q0MsS0E5QndDO0FBQUEsWUFFMUNDLFVBRjBDLFVBRTFDQSxVQUYwQztBQUFBLFlBRzFDQyxXQUgwQyxVQUcxQ0EsV0FIMEM7QUFBQSxZQUkxQ0MsS0FKMEMsVUFJMUNBLEtBSjBDO0FBQUEsWUFLMUNDLFFBTDBDLFVBSzFDQSxRQUwwQztBQUFBLFlBTTFDQyxRQU4wQyxVQU0xQ0EsUUFOMEM7QUFBQSxZQU8xQ0MsYUFQMEMsVUFPMUNBLGFBUDBDO0FBQUEsWUFRMUNDLFlBUjBDLFVBUTFDQSxZQVIwQztBQUFBLFlBUzFDQyxNQVQwQyxVQVMxQ0EsTUFUMEM7QUFBQSxZQVUxQ0MsT0FWMEMsVUFVMUNBLE9BVjBDO0FBQUEsWUFXMUNDLE1BWDBDLFVBVzFDQSxNQVgwQztBQUFBLFlBWTFDQyxjQVowQyxV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LENBTkYsQ0FERixFQStCRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU8saUJBQVMsRUFBQywyRkFBakI7QUFBNkcsVUFBRSxFQUFDLFVBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFLLEtBQUtDLGlCQUFMLEVBQUwsQ0FEQSxDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDLEtBQUtDLGVBQUwsRUFERCxDQUpGLENBREYsQ0EvQkYsQ0FURixDQURGLENBREYsQ0FESixDQURBLEVBMkRHLEtBQUtDLGNBQUwsRUEzREgsRUE0REUsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBNURGLENBRkYsQ0FERixDQURGLENBRE47QUF1RUQ7QUFuTUg7O0FBQUE7QUFBQSxFQUEyQkMsK0NBQTNCO0FBc01lcEYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2NvcmVzL3Njb3JlLmVkYWU1M2I1ZTE3MmNkZDdjZWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBUYWJQYW5lIGZyb20gXCIuL1RhYlBhbmVcIjtcclxuaW1wb3J0IE5hdmlnYXRvciBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IHtmbkV4Y2VsUmVwb3J0fSBmcm9tICcuLi8uLi8uLi9FeHBvcnQvRXhjZWwnXHJcbmltcG9ydCBBZGRTY29yZSBmcm9tICcuL0FkZFNjb3JlJ1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTY29yZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgbG9hZGluZzp0cnVlLFxyXG4gICAgICBkYXRhIDogdGhpcy5wcm9wcy5yZXN1bHRzXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFzeW5jIGZuRXhjZWwoKSB7XHJcbiAgICBmbkV4Y2VsUmVwb3J0KClcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyVGFibGVEYXRhKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuZGF0YS5tYXAoKHNjb3JlcywgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIE1BTkhBTlZJRU4sXHJcbiAgICAgICAgTkhBTlZJRU5fSUQsXHJcbiAgICAgICAgSE9URU4sXHJcbiAgICAgICAgTkdBWVNJTkgsXHJcbiAgICAgICAgSURfU1ZfTUgsXHJcbiAgICAgICAgSURfTW9uX0xvcGhvYyxcclxuICAgICAgICB0aW5oZGllbV90YmMsXHJcbiAgICAgICAgaG9jbGFpLFxyXG4gICAgICAgIExhbl9Ib2MsXHJcbiAgICAgICAgR2hpY2h1LFxyXG4gICAgICAgIERpZW1fVHJ1bmdiaW5oLFxyXG4gICAgICAgIERpZW1fVHJ1bmdiaW5oMixcclxuICAgICAgICBUQl9LVCxcclxuICAgICAgICB0eDEsXHJcbiAgICAgICAgdHgyLFxyXG4gICAgICAgIHR4MyxcclxuICAgICAgICB0eDQsXHJcbiAgICAgICAgdHg1LFxyXG4gICAgICAgIGRrMSxcclxuICAgICAgICBkazIsXHJcbiAgICAgICAgZGszLFxyXG4gICAgICAgIGRrNCxcclxuICAgICAgICBkazUsXHJcbiAgICAgICAgZGs2LFxyXG4gICAgICAgIGRrNyxcclxuICAgICAgICBkazgsXHJcbiAgICAgICAga3QxLFxyXG4gICAgICAgIGt0MixcclxuICAgICAgfSA9IHN0YWZmO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBrZXk9e01BTkhBTlZJRU59PlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BTkhBTlZJRU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57SE9URU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57QklEQU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05HQVlTSU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0dJT0lUSU5IfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1ZBTkhPQX08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR09BSU5HVX08L3RkPlxyXG4gICAgICAgICAgPHRkPntTT1RSVU9OR308L3RkPlxyXG4gICAgICAgICAgPHRkPntDSFVZRU5NT059PC90ZD5cclxuICAgICAgICAgIDx0ZD57VFJJTkhET308L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZTFVVSFN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57TFlET0xVVUhTfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1RSQU5HVEhBSX08L3RkPlxyXG4gICAgICAgICAgPHRkPntEQU5UT0N9PC90ZD5cclxuICAgICAgICAgIDx0ZD57VE9OR0lBT308L3RkPlxyXG4gICAgICAgICAgPHRkPntTT0JIWEh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Tk9JX0RLS0NCfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05IQU5WSUVOX0lEfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25nYXluaGFwfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25ndW9pbmhhcH08L3RkPlxyXG4gICAgICAgICAgPHRkPntuZ2F5c3VhfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e25ndW9pc3VhfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1NPQ01ORH08L3RkPlxyXG4gICAgICAgICAgPHRkPntOR0FZQ0FQfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e05PSUNBUH08L3RkPlxyXG4gICAgICAgICAgPHRkPntESURPTkd9PC90ZD5cclxuICAgICAgICAgIDx0ZD57RElFTlRIT0FJQkFOfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RJQUNISUVNQUlMfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BU09USFVFfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RpYWNoaX08L3RkPlxyXG4gICAgICAgICAgPHRkPntRdWVxdWFufTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e1dlYnNpdGV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57YmFuZ2NhcGtoYWN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57Y2h1bmdjaGlraGFjfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3V1ZGllbX08L3RkPlxyXG4gICAgICAgICAgPHRkPntraHV5ZXRkaWVtfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2RpYWNoaWxpZW5oZX08L3RkPlxyXG4gICAgICAgICAgPHRkPntraW5obmdoaWVtfTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlbmRlclRhYmxlSGVhZGVyKCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5kYXRhWzBdKVxyXG4gICAgY29uc3QgbmV3aGVhZGVyID0gaGVhZGVyLnVuc2hpZnQoJ3Rvb2xzJylcclxuICAgIHJldHVybiBoZWFkZXIubWFwKChrZXksIGluZGV4KSA9PlxyXG4gICAgICA8dGgga2V5PXtpbmRleH0+XHJcbiAgICAgICAge2tleS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICA8L3RoPilcclxuICB9XHJcbiAgcmVuZGVyTW9kYWxBZGQoKXtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIHsvKiBNb2RhbCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cIm15TW9kYWxcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgey8qIE1vZGFsIGNvbnRlbnQqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIHsvKnRoZW0gaW4gaGVyZSAqL31cclxuICAgICAgICAgICAgPHA+dGhhbmhrdXRlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiYmFibGUtbGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdmlnYXRvciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItcGFuZSBhY3RpdmUgZm9udGF3ZXNvbWUtZGVtb1wiIGlkPVwidGFiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj57dGhpcy5wcm9wcy5oZWFkZXJ9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZhIGZhLXJlcGVhdCBidG4tY29sb3IgYm94LXJlZnJlc2hcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidC1jb2xsYXBzZSBidG4tY29sb3IgZmEgZmEtY2hldnJvbi1kb3duXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY2xvc2UgYnRuLWNvbG9yIGZhIGZhLXRpbWVzXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tbGdcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiPkFkZCBOZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTYgY29sLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBwdWxsLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gZGVlcFBpbmstYmdjb2xvciAgYnRuLW91dGxpbmUgZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPlRvb2xzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcHJpbnRcIiAvPiBQcmludCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLXBkZi1vXCIgLz4gU2F2ZSBhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUERGIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZm5FeGNlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWV4Y2VsLW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwb3J0IHRvIEV4Y2VsIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXNjcm9sbGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtYm9yZGVyZWQgdGFibGUtaG92ZXIgdGFibGUtY2hlY2thYmxlIG9yZGVyLWNvbHVtbiB2YWxpZ24tbWlkZGxlXCIgaWQ9XCJleGFtcGxlNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+e3RoaXMucmVuZGVyVGFibGVIZWFkZXIoKX08L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRhYmxlRGF0YSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1vZGFsQWRkKCl9XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY29yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==