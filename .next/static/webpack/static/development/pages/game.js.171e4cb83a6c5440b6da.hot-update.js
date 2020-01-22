webpackHotUpdate("static\\development\\pages\\game.js",{

/***/ "./components/Options.js":
/*!*******************************!*\
  !*** ./components/Options.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./components/Option.js");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageUpload */ "./components/ImageUpload.js");

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\Options.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //TODO: destructure here

var Options = function Options(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  var optionsAmount = props.optionsAmount,
      answer = props.answer,
      sendAnswer = props.sendAnswer,
      setNewOptions = props.setNewOptions;
  var newOptions = props.newOptions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      options = _useState[0],
      setOptions = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setOptions(createOptions(optionsAmount));
    setNewOptions(false);
  }, [newOptions]);

  var shuffleArray = function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref2 = [array[j], array[i]];
      array[i] = _ref2[0];
      array[j] = _ref2[1];
    }
  };

  var createOptions = function createOptions(optionsAmount) {
    console.log('CREATE OPTIONS');
    var options = [];
    var randomNumber = Math.round(Math.random() * 110);

    for (var i = 0; i < optionsAmount - 1; i++) {
      do {
        randomNumber = Math.round(Math.random() * 110);
      } while (randomNumber === answer);

      options.push(__jsx(_Option__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: randomNumber,
        answer: randomNumber,
        sendAnswer: sendAnswer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }));
    }

    options.push(__jsx(_Option__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: answer,
      answer: answer,
      sendAnswer: sendAnswer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
    shuffleArray(options); //shuffle options order

    return options;
  };

  console.log("OPTIONS is Rendering");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, options);
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ })

})
//# sourceMappingURL=game.js.171e4cb83a6c5440b6da.hot-update.js.map