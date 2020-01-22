webpackHotUpdate("static\\development\\pages\\game.js",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QuestionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/QuestionCard */ "./components/QuestionCard.js");
/* harmony import */ var _components_ComboTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ComboTracker */ "./components/ComboTracker.js");
/* harmony import */ var _components_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Options */ "./components/Options.js");
var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\pages\\game.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Game = function Game() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4),
      optionsAmount = _useState[0],
      setOptionsAmount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      answer = _useState2[0],
      setAnswer = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      userAnswer = _useState3[0],
      setUserAnswer = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      newOptions = _useState4[0],
      setNewOptions = _useState4[1]; //on user input
  //setOptionsAmount


  var sendAnswer = function sendAnswer(userAnswer) {
    setUserAnswer(userAnswer);
  };

  var nextCard = function nextCard() {
    setUserAnswer(null);
    setNewOptions(true);
    setAnswer(Math.round(Math.random() * 110));
  };

  console.log("Game is Rendering:", newOptions);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Memory Game"), __jsx(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    questionNumber: answer,
    userAnswer: userAnswer,
    nextCard: nextCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_components_ComboTracker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_Options__WEBPACK_IMPORTED_MODULE_3__["default"], {
    optionsAmount: optionsAmount,
    answer: answer,
    sendAnswer: sendAnswer,
    newOptions: newOptions,
    setNewOptions: setNewOptions,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ })

})
//# sourceMappingURL=game.js.9c7c0d22ae1dba461138.hot-update.js.map