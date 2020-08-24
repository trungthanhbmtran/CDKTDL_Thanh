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
        var MANHANVIEN = scores.MANHANVIEN,
            NHANVIEN_ID = scores.NHANVIEN_ID,
            HOTEN = scores.HOTEN,
            NGAYSINH = scores.NGAYSINH,
            ID_SV_MH = scores.ID_SV_MH,
            ID_Mon_Lophoc = scores.ID_Mon_Lophoc,
            tinhdiem_tbc = scores.tinhdiem_tbc,
            hoclai = scores.hoclai,
            Lan_Hoc = scores.Lan_Hoc,
            Ghichu = scores.Ghichu,
            Diem_Trungbinh = scores.Diem_Trungbinh,
            Diem_Trungbinh2 = scores.Diem_Trungbinh2,
            TB_KT = scores.TB_KT,
            tx1 = scores.tx1,
            tx2 = scores.tx2,
            tx3 = scores.tx3,
            tx4 = scores.tx4,
            tx5 = scores.tx5,
            dk1 = scores.dk1,
            dk2 = scores.dk2,
            dk3 = scores.dk3,
            dk4 = scores.dk4,
            dk5 = scores.dk5,
            dk6 = scores.dk6,
            dk7 = scores.dk7,
            dk8 = scores.dk8,
            kt1 = scores.kt1,
            kt2 = scores.kt2;
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
        }, NHANVIEN_ID), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }
        }, HOTEN), __jsx("td", {
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
        }, ID_SV_MH), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 11
          }
        }, ID_Mon_Lophoc), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 11
          }
        }, tinhdiem_tbc), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 11
          }
        }, hoclai), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 11
          }
        }, Lan_Hoc), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 11
          }
        }, Ghichu), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 11
          }
        }, Diem_Trungbinh), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, Diem_Trungbinh2), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 11
          }
        }, TB_KT), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 11
          }
        }, tx1), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 11
          }
        }, tx2), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 11
          }
        }, tx3), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 11
          }
        }, tx4), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 11
          }
        }, tx5), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 11
          }
        }, dk1), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 11
          }
        }, dk2), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }
        }, dk3), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }
        }, dk4), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 11
          }
        }, dk5), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 11
          }
        }, dk6), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }
        }, dk7), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 11
          }
        }, dk8), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 11
          }
        }, kt1), __jsx("td", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }
        }, kt2), __jsx("td", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXJDb21wb25lbnRzL3Njb3JlL3Njb3JlLmpzIl0sIm5hbWVzIjpbIlNjb3JlIiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJkYXRhIiwicmVzdWx0cyIsImZuRXhjZWxSZXBvcnQiLCJtYXAiLCJzY29yZXMiLCJpbmRleCIsIk1BTkhBTlZJRU4iLCJOSEFOVklFTl9JRCIsIkhPVEVOIiwiTkdBWVNJTkgiLCJJRF9TVl9NSCIsIklEX01vbl9Mb3Bob2MiLCJ0aW5oZGllbV90YmMiLCJob2NsYWkiLCJMYW5fSG9jIiwiR2hpY2h1IiwiRGllbV9UcnVuZ2JpbmgiLCJEaWVtX1RydW5nYmluaDIiLCJUQl9LVCIsInR4MSIsInR4MiIsInR4MyIsInR4NCIsInR4NSIsImRrMSIsImRrMiIsImRrMyIsImRrNCIsImRrNSIsImRrNiIsImRrNyIsImRrOCIsImt0MSIsImt0MiIsIk1BU09USFVFIiwiRGlhY2hpIiwiUXVlcXVhbiIsIldlYnNpdGUiLCJiYW5nY2Fwa2hhYyIsImNodW5nY2hpa2hhYyIsInV1ZGllbSIsImtodXlldGRpZW0iLCJkaWFjaGlsaWVuaGUiLCJraW5obmdoaWVtIiwiaGVhZGVyIiwiT2JqZWN0Iiwia2V5cyIsIm5ld2hlYWRlciIsInVuc2hpZnQiLCJrZXkiLCJ0b1VwcGVyQ2FzZSIsImZuRXhjZWwiLCJyZW5kZXJUYWJsZUhlYWRlciIsInJlbmRlclRhYmxlRGF0YSIsInJlbmRlck1vZGFsQWRkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxJQUFNQSxLQUFiO0FBQUE7O0FBQUE7O0FBRUUsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQVk7QUFDVkMsYUFBTyxFQUFDLElBREU7QUFFVkMsVUFBSSxFQUFHLE1BQUtILEtBQUwsQ0FBV0k7QUFGUixLQUFaO0FBRmlCO0FBTWxCOztBQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXSUMsb0ZBQWE7O0FBWGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQWNvQjtBQUFBOztBQUNoQixhQUFPLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkcsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1CO0FBQUEsWUFFMUNDLFVBRjBDLEdBOEJ4Q0YsTUE5QndDLENBRTFDRSxVQUYwQztBQUFBLFlBRzFDQyxXQUgwQyxHQThCeENILE1BOUJ3QyxDQUcxQ0csV0FIMEM7QUFBQSxZQUkxQ0MsS0FKMEMsR0E4QnhDSixNQTlCd0MsQ0FJMUNJLEtBSjBDO0FBQUEsWUFLMUNDLFFBTDBDLEdBOEJ4Q0wsTUE5QndDLENBSzFDSyxRQUwwQztBQUFBLFlBTTFDQyxRQU4wQyxHQThCeENOLE1BOUJ3QyxDQU0xQ00sUUFOMEM7QUFBQSxZQU8xQ0MsYUFQMEMsR0E4QnhDUCxNQTlCd0MsQ0FPMUNPLGFBUDBDO0FBQUEsWUFRMUNDLFlBUjBDLEdBOEJ4Q1IsTUE5QndDLENBUTFDUSxZQVIwQztBQUFBLFlBUzFDQyxNQVQwQyxHQThCeENULE1BOUJ3QyxDQVMxQ1MsTUFUMEM7QUFBQSxZQVUxQ0MsT0FWMEMsR0E4QnhDVixNQTlCd0MsQ0FVMUNVLE9BVjBDO0FBQUEsWUFXMUNDLE1BWDBDLEdBOEJ4Q1gsTUE5QndDLENBVzFDVyxNQVgwQztBQUFBLFlBWTFDQyxjQVowQyxHQThCeENaLE1BOUJ3QyxDQVkxQ1ksY0FaMEM7QUFBQSxZQWExQ0MsZUFiMEMsR0E4QnhDYixNQTlCd0MsQ0FhMUNhLGVBYjBDO0FBQUEsWUFjMUNDLEtBZDBDLEdBOEJ4Q2QsTUE5QndDLENBYzFDYyxLQWQwQztBQUFBLFlBZTFDQyxHQWYwQyxHQThCeENmLE1BOUJ3QyxDQWUxQ2UsR0FmMEM7QUFBQSxZQWdCMUNDLEdBaEIwQyxHQThCeENoQixNQTlCd0MsQ0FnQjFDZ0IsR0FoQjBDO0FBQUEsWUFpQjFDQyxHQWpCMEMsR0E4QnhDakIsTUE5QndDLENBaUIxQ2lCLEdBakIwQztBQUFBLFlBa0IxQ0MsR0FsQjBDLEdBOEJ4Q2xCLE1BOUJ3QyxDQWtCMUNrQixHQWxCMEM7QUFBQSxZQW1CMUNDLEdBbkIwQyxHQThCeENuQixNQTlCd0MsQ0FtQjFDbUIsR0FuQjBDO0FBQUEsWUFvQjFDQyxHQXBCMEMsR0E4QnhDcEIsTUE5QndDLENBb0IxQ29CLEdBcEIwQztBQUFBLFlBcUIxQ0MsR0FyQjBDLEdBOEJ4Q3JCLE1BOUJ3QyxDQXFCMUNxQixHQXJCMEM7QUFBQSxZQXNCMUNDLEdBdEIwQyxHQThCeEN0QixNQTlCd0MsQ0FzQjFDc0IsR0F0QjBDO0FBQUEsWUF1QjFDQyxHQXZCMEMsR0E4QnhDdkIsTUE5QndDLENBdUIxQ3VCLEdBdkIwQztBQUFBLFlBd0IxQ0MsR0F4QjBDLEdBOEJ4Q3hCLE1BOUJ3QyxDQXdCMUN3QixHQXhCMEM7QUFBQSxZQXlCMUNDLEdBekIwQyxHQThCeEN6QixNQTlCd0MsQ0F5QjFDeUIsR0F6QjBDO0FBQUEsWUEwQjFDQyxHQTFCMEMsR0E4QnhDMUIsTUE5QndDLENBMEIxQzBCLEdBMUIwQztBQUFBLFlBMkIxQ0MsR0EzQjBDLEdBOEJ4QzNCLE1BOUJ3QyxDQTJCMUMyQixHQTNCMEM7QUFBQSxZQTRCMUNDLEdBNUIwQyxHQThCeEM1QixNQTlCd0MsQ0E0QjFDNEIsR0E1QjBDO0FBQUEsWUE2QjFDQyxHQTdCMEMsR0E4QnhDN0IsTUE5QndDLENBNkIxQzZCLEdBN0IwQztBQStCNUMsZUFDRTtBQUFJLGFBQUcsRUFBRTNCLFVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFHLGNBQUksRUFBQyxxQkFBUjtBQUE4QixtQkFBUyxFQUFDLHdCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0U7QUFBRyxtQkFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBREYsRUFJRTtBQUFRLG1CQUFTLEVBQUMsdUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFHLG1CQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLENBSkYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0EsVUFBTCxDQVRGLEVBVUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxXQUFMLENBVkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLEtBQUwsQ0FYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsUUFBTCxDQVpGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxRQUFMLENBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLGFBQUwsQ0FkRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsWUFBTCxDQWZGLEVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsTUFBTCxDQWhCRixFQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLE9BQUwsQ0FqQkYsRUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxNQUFMLENBbEJGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsY0FBTCxDQW5CRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLGVBQUwsQ0FwQkYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxLQUFMLENBckJGLEVBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsR0FBTCxDQXRCRixFQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLEdBQUwsQ0F2QkYsRUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxHQUFMLENBeEJGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsR0FBTCxDQXpCRixFQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLEdBQUwsQ0ExQkYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxHQUFMLENBM0JGLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsR0FBTCxDQTVCRixFQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLEdBQUwsQ0E3QkYsRUE4QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxHQUFMLENBOUJGLEVBK0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsR0FBTCxDQS9CRixFQWdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLEdBQUwsQ0FoQ0YsRUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxHQUFMLENBakNGLEVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsR0FBTCxDQWxDRixFQW1DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLEdBQUwsQ0FuQ0YsRUFvQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxHQUFMLENBcENGLEVBcUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsUUFBTCxDQXJDRixFQXNDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLE1BQUwsQ0F0Q0YsRUF1Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxPQUFMLENBdkNGLEVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsT0FBTCxDQXhDRixFQXlDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLFdBQUwsQ0F6Q0YsRUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxZQUFMLENBMUNGLEVBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsTUFBTCxDQTNDRixFQTRDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUtDLFVBQUwsQ0E1Q0YsRUE2Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFLQyxZQUFMLENBN0NGLEVBOENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0MsVUFBTCxDQTlDRixDQURGO0FBa0RELE9BakZNLENBQVA7QUFrRkQ7QUFqR0g7QUFBQTtBQUFBLHdDQW1Hc0I7QUFBQTs7QUFDbEIsVUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLaEQsS0FBTCxDQUFXRSxJQUFYLENBQWdCLENBQWhCLENBQVosQ0FBZjtBQUNBLFVBQU0rQyxTQUFTLEdBQUdILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLE9BQWYsQ0FBbEI7QUFDQSxhQUFPSixNQUFNLENBQUN6QyxHQUFQLENBQVcsVUFBQzhDLEdBQUQsRUFBTTVDLEtBQU47QUFBQSxlQUNoQjtBQUFJLGFBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0c0QyxHQUFHLENBQUNDLFdBQUosRUFESCxDQURnQjtBQUFBLE9BQVgsQ0FBUDtBQUlEO0FBMUdIO0FBQUE7QUFBQSxxQ0EyR2tCO0FBQ1osYUFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBNEIsVUFBRSxFQUFDLFNBQS9CO0FBQXlDLFlBQUksRUFBQyxRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVJO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZBLENBRkosQ0FEQSxDQUZBLENBREY7QUFjSDtBQTFISDtBQUFBO0FBQUEsNkJBMkhXO0FBQ1AsYUFDTTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGlCQUFTLEVBQUMsa0NBQWY7QUFBa0QsVUFBRSxFQUFDLE1BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTLEtBQUtyRCxLQUFMLENBQVcrQyxNQUFwQixDQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxvQ0FBYjtBQUFrRCxZQUFJLEVBQUMsY0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBRyxpQkFBUyxFQUFDLHlDQUFiO0FBQXVELFlBQUksRUFBQyxjQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFHLGlCQUFTLEVBQUMsK0JBQWI7QUFBNkMsWUFBSSxFQUFDLGNBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQUZGLENBREYsRUFTRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQyxxQkFBaEM7QUFBc0QsdUJBQVksT0FBbEU7QUFBMEUsdUJBQVksVUFBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxDQURGLENBREYsRUFNRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLG1EQUFiO0FBQWlFLHVCQUFZLFVBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ0U7QUFBRyxpQkFBUyxFQUFDLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGLEVBSUU7QUFBSSxpQkFBUyxFQUFDLDBCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxZQUFJLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLFlBREYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLFlBQUksRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsa0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLGtCQURGLENBTEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxlQUFPLEVBQUUsS0FBS08sT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYscUJBREYsQ0FWRixDQUpGLENBREYsQ0FORixDQURGLEVBK0JFO0FBQUssaUJBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTyxpQkFBUyxFQUFDLDJGQUFqQjtBQUE2RyxVQUFFLEVBQUMsVUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUssS0FBS0MsaUJBQUwsRUFBTCxDQURBLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsS0FBS0MsZUFBTCxFQURELENBSkYsQ0FERixDQS9CRixDQVRGLENBREYsQ0FERixDQURKLENBREEsRUEyREcsS0FBS0MsY0FBTCxFQTNESCxFQTRERSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUE1REYsQ0FGRixDQURGLENBREYsQ0FETjtBQXVFRDtBQW5NSDs7QUFBQTtBQUFBLEVBQTJCQywrQ0FBM0I7QUFzTWUzRCxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zY29yZXMvc2NvcmUuMjE1NjAxMjczNjgxNjllZTk2MmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRhYlBhbmUgZnJvbSBcIi4vVGFiUGFuZVwiO1xyXG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gXCIuL05hdmlnYXRvclwiO1xyXG5pbXBvcnQge2ZuRXhjZWxSZXBvcnR9IGZyb20gJy4uLy4uLy4uL0V4cG9ydC9FeGNlbCdcclxuaW1wb3J0IEFkZFNjb3JlIGZyb20gJy4vQWRkU2NvcmUnXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNjb3JlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9e1xyXG4gICAgICBsb2FkaW5nOnRydWUsXHJcbiAgICAgIGRhdGEgOiB0aGlzLnByb3BzLnJlc3VsdHNcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgZm5FeGNlbCgpIHtcclxuICAgIGZuRXhjZWxSZXBvcnQoKVxyXG4gIH1cclxuICBcclxuICByZW5kZXJUYWJsZURhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5kYXRhLm1hcCgoc2NvcmVzLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB7XHJcbiAgICAgICAgTUFOSEFOVklFTixcclxuICAgICAgICBOSEFOVklFTl9JRCxcclxuICAgICAgICBIT1RFTixcclxuICAgICAgICBOR0FZU0lOSCxcclxuICAgICAgICBJRF9TVl9NSCxcclxuICAgICAgICBJRF9Nb25fTG9waG9jLFxyXG4gICAgICAgIHRpbmhkaWVtX3RiYyxcclxuICAgICAgICBob2NsYWksXHJcbiAgICAgICAgTGFuX0hvYyxcclxuICAgICAgICBHaGljaHUsXHJcbiAgICAgICAgRGllbV9UcnVuZ2JpbmgsXHJcbiAgICAgICAgRGllbV9UcnVuZ2JpbmgyLFxyXG4gICAgICAgIFRCX0tULFxyXG4gICAgICAgIHR4MSxcclxuICAgICAgICB0eDIsXHJcbiAgICAgICAgdHgzLFxyXG4gICAgICAgIHR4NCxcclxuICAgICAgICB0eDUsXHJcbiAgICAgICAgZGsxLFxyXG4gICAgICAgIGRrMixcclxuICAgICAgICBkazMsXHJcbiAgICAgICAgZGs0LFxyXG4gICAgICAgIGRrNSxcclxuICAgICAgICBkazYsXHJcbiAgICAgICAgZGs3LFxyXG4gICAgICAgIGRrOCxcclxuICAgICAgICBrdDEsXHJcbiAgICAgICAga3QyLFxyXG4gICAgICB9ID0gc2NvcmVzO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0ciBrZXk9e01BTkhBTlZJRU59PlxyXG4gICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiZWRpdF9wcm9mZXNzb3IuaHRtbFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4teHNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1wZW5jaWxcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXhzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHJhc2gtbyBcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e01BTkhBTlZJRU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkhBTlZJRU5fSUR9PC90ZD5cclxuICAgICAgICAgIDx0ZD57SE9URU59PC90ZD5cclxuICAgICAgICAgIDx0ZD57TkdBWVNJTkh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57SURfU1ZfTUh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57SURfTW9uX0xvcGhvY308L3RkPlxyXG4gICAgICAgICAgPHRkPnt0aW5oZGllbV90YmN9PC90ZD5cclxuICAgICAgICAgIDx0ZD57aG9jbGFpfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0xhbl9Ib2N9PC90ZD5cclxuICAgICAgICAgIDx0ZD57R2hpY2h1fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RpZW1fVHJ1bmdiaW5ofTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e0RpZW1fVHJ1bmdiaW5oMn08L3RkPlxyXG4gICAgICAgICAgPHRkPntUQl9LVH08L3RkPlxyXG4gICAgICAgICAgPHRkPnt0eDF9PC90ZD5cclxuICAgICAgICAgIDx0ZD57dHgyfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3R4M308L3RkPlxyXG4gICAgICAgICAgPHRkPnt0eDR9PC90ZD5cclxuICAgICAgICAgIDx0ZD57dHg1fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2RrMX08L3RkPlxyXG4gICAgICAgICAgPHRkPntkazJ9PC90ZD5cclxuICAgICAgICAgIDx0ZD57ZGszfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2RrNH08L3RkPlxyXG4gICAgICAgICAgPHRkPntkazV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57ZGs2fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2RrN308L3RkPlxyXG4gICAgICAgICAgPHRkPntkazh9PC90ZD5cclxuICAgICAgICAgIDx0ZD57a3QxfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2t0Mn08L3RkPlxyXG4gICAgICAgICAgPHRkPntNQVNPVEhVRX08L3RkPlxyXG4gICAgICAgICAgPHRkPntEaWFjaGl9PC90ZD5cclxuICAgICAgICAgIDx0ZD57UXVlcXVhbn08L3RkPlxyXG4gICAgICAgICAgPHRkPntXZWJzaXRlfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2JhbmdjYXBraGFjfTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e2NodW5nY2hpa2hhY308L3RkPlxyXG4gICAgICAgICAgPHRkPnt1dWRpZW19PC90ZD5cclxuICAgICAgICAgIDx0ZD57a2h1eWV0ZGllbX08L3RkPlxyXG4gICAgICAgICAgPHRkPntkaWFjaGlsaWVuaGV9PC90ZD5cclxuICAgICAgICAgIDx0ZD57a2luaG5naGllbX08L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJsZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZGF0YVswXSlcclxuICAgIGNvbnN0IG5ld2hlYWRlciA9IGhlYWRlci51bnNoaWZ0KCd0b29scycpXHJcbiAgICByZXR1cm4gaGVhZGVyLm1hcCgoa2V5LCBpbmRleCkgPT5cclxuICAgICAgPHRoIGtleT17aW5kZXh9PlxyXG4gICAgICAgIHtrZXkudG9VcHBlckNhc2UoKX1cclxuICAgICAgPC90aD4pXHJcbiAgfVxyXG4gIHJlbmRlck1vZGFsQWRkKCl7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7LyogTW9kYWwgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJteU1vZGFsXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgIHsvKiBNb2RhbCBjb250ZW50Ki99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICB7Lyp0aGVtIGluIGhlcmUgKi99XHJcbiAgICAgICAgICAgIDxwPnRoYW5oa3V0ZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmJhYmxlLWxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZpZ2F0b3IgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLXBhbmUgYWN0aXZlIGZvbnRhd2Vzb21lLWRlbW9cIiBpZD1cInRhYjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+e3RoaXMucHJvcHMuaGVhZGVyfTwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmYSBmYS1yZXBlYXQgYnRuLWNvbG9yIGJveC1yZWZyZXNoXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInQtY29sbGFwc2UgYnRuLWNvbG9yIGZhIGZhLWNoZXZyb24tZG93blwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0LWNsb3NlIGJ0bi1jb2xvciBmYSBmYS10aW1lc1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLWxnXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj5BZGQgTmV3PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS02IGNvbC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgcHVsbC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGRlZXBQaW5rLWJnY29sb3IgIGJ0bi1vdXRsaW5lIGRyb3Bkb3duLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIj5Ub29sc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHB1bGwtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXByaW50XCIgLz4gUHJpbnQgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1wZGYtb1wiIC8+IFNhdmUgYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBERiA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmZuRXhjZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1leGNlbC1vXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cG9ydCB0byBFeGNlbCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1zY3JvbGxhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWJvcmRlcmVkIHRhYmxlLWhvdmVyIHRhYmxlLWNoZWNrYWJsZSBvcmRlci1jb2x1bW4gdmFsaWduLW1pZGRsZVwiIGlkPVwiZXhhbXBsZTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPnt0aGlzLnJlbmRlclRhYmxlSGVhZGVyKCl9PC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUYWJsZURhdGEoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNb2RhbEFkZCgpfVxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=