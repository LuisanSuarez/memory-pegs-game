webpackHotUpdate("static\\development\\pages\\game.js",{

/***/ "./components/Option.js":
/*!******************************!*\
  !*** ./components/Option.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\Option.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // const express = require('express')
// const cloudinary = require('cloudinary')
// const formData = require('express-form-data')
// const cors = require('cors')
//TODO: destructure here

var Option = function Option(_ref) {
  var answer = _ref.answer,
      id = _ref.id,
      sendAnswer = _ref.sendAnswer;
  var placeholderImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1'; // const {answer, id, sendAnswer} = props;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('give me a name'),
      pegName = _useState[0],
      setPegName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(placeholderImage),
      image = _useState2[0],
      setImage = _useState2[1];

  var answerStr = answer.toString();
  answerStr = answer > 99 ? answerStr.slice(1) : answerStr;
  console.log("Mount: answer, id:", answer, id);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("useEffect", answer, id);
    get({
      "peg": answer
    });
  });
  var url = 'http://localhost:8000/';

  var get = function get(data) {
    console.log('Axios:', data);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url + 'getImageUrl', {
      params: data
    }).then(function (res) {
      return setImage(res.data.data[0].imageURL ? res.data.data[0].imageURL : placeholderImage);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    onPointerDown: function onPointerDown() {
      return sendAnswer(answer);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, pegName), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, answerStr), __jsx("img", {
    src: image,
    style: {
      height: '100px',
      width: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), "Send me as answer!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ })

})
//# sourceMappingURL=game.js.9828b53ed8911592c002.hot-update.js.map