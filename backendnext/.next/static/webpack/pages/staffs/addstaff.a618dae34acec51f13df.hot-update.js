webpackHotUpdate_N_E("pages/staffs/addstaff",{

/***/ "./Request/imw_request.js":
/*!********************************!*\
  !*** ./Request/imw_request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _isomorphicUnfetch = _interopRequireDefault(__webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js"));

module.exports = {
  Send_Post_RestAPI: function Send_Post_RestAPI(url, data) {
    return new Promise(function (resove, reject) {
      var res = (0, _isomorphicUnfetch["default"])(url, {
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
  Send_Get_RestAPI: function Send_Get_RestAPI(url) {
    return new Promise(function (resove, reject) {
      var res = (0, _isomorphicUnfetch["default"])(url, {
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
  fetchPromised: function fetchPromised(url) {
    return new Promise(function (resolve, reject) {
      Send_Get_RestAPI(url, resolve, reject);
    });
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVxdWVzdC9pbXdfcmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiU2VuZF9Qb3N0X1Jlc3RBUEkiLCJ1cmwiLCJkYXRhIiwiUHJvbWlzZSIsInJlc292ZSIsInJlamVjdCIsInJlcyIsIm1ldGhvZCIsIm1vZGUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJTZW5kX0dldF9SZXN0QVBJIiwiZmV0Y2hQcm9taXNlZCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxtQkFBaUIsRUFBRSwyQkFBU0MsR0FBVCxFQUFhQyxJQUFiLEVBQWtCO0FBQ2pDLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUNqQyxVQUFNQyxHQUFHLEdBQUcsbUNBQU1MLEdBQU4sRUFBVTtBQUNsQk0sY0FBTSxFQUFFLE1BRFU7QUFFbEJDLFlBQUksRUFBRSxNQUZZO0FBR2xCQyxlQUFPLEVBQUU7QUFDUCwwQkFBZ0IsaUNBRFQ7QUFFUCxvQkFBVTtBQUZILFNBSFM7QUFPbEJDLFlBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLElBQWY7QUFQWSxPQUFWLENBQVosQ0FEaUMsQ0FVakM7O0FBQ0FFLFlBQU0sQ0FBQ0UsR0FBRCxDQUFOO0FBQ0gsS0FaTSxDQUFQO0FBYUgsR0FmWTtBQWdCYk8sa0JBQWdCLEVBQUUsMEJBQVNaLEdBQVQsRUFBYTtBQUM3QixXQUFPLElBQUlFLE9BQUosQ0FBWSxVQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDakMsVUFBTUMsR0FBRyxHQUFHLG1DQUFNTCxHQUFOLEVBQVU7QUFDbEJNLGNBQU0sRUFBRSxLQURVO0FBRWxCQyxZQUFJLEVBQUUsTUFGWTtBQUdsQkMsZUFBTyxFQUFFO0FBQ1AsMEJBQWdCLGlDQURUO0FBRVAsb0JBQVU7QUFGSDtBQUhTLE9BQVYsQ0FBWixDQURpQyxDQVNqQzs7QUFDQUwsWUFBTSxDQUFDRSxHQUFELENBQU47QUFDSCxLQVhNLENBQVA7QUFZSCxHQTdCYztBQThCZlEsZUFBYSxFQUFFLHVCQUFVYixHQUFWLEVBQWdCO0FBQzdCLFdBQU8sSUFBSUUsT0FBSixDQUFZLFVBQUNZLE9BQUQsRUFBVVYsTUFBVixFQUFxQjtBQUNwQ1Esc0JBQWdCLENBQUNaLEdBQUQsRUFBTWMsT0FBTixFQUFlVixNQUFmLENBQWhCO0FBQ0gsS0FGTSxDQUFQO0FBR0g7QUFsQ2dCLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0YWZmcy9hZGRzdGFmZi5hNjE4ZGFlMzRhY2VjNTFmMTNkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFNlbmRfUG9zdF9SZXN0QVBJOiBmdW5jdGlvbih1cmwsZGF0YSl7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb3ZlLCByZWplY3QpPT57XG4gICAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaCh1cmwse1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9yZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXNvdmUocmVzKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBTZW5kX0dldF9SZXN0QVBJOiBmdW5jdGlvbih1cmwpe1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvdmUsIHJlamVjdCk9PntcbiAgICAgICAgICBjb25zdCByZXMgPSBmZXRjaCh1cmwse1xuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICAgIHJlc292ZShyZXMpO1xuICAgICAgfSk7XG4gIH0sXG4gIGZldGNoUHJvbWlzZWQ6IGZ1bmN0aW9uICh1cmwpICB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgU2VuZF9HZXRfUmVzdEFQSSh1cmwsIHJlc29sdmUsIHJlamVjdClcbiAgICB9KVxufSxcbn0iXSwic291cmNlUm9vdCI6IiJ9