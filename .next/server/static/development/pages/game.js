module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ComboTracker.js":
/*!************************************!*\
  !*** ./components/ComboTracker.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\ComboTracker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ComboTracker = () => {
  const {
    0: optionsAmount,
    1: setOptionsAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "A React ComboTracker"));
};

/* harmony default export */ __webpack_exports__["default"] = (ComboTracker);

/***/ }),

/***/ "./components/ImageUpload.js":
/*!***********************************!*\
  !*** ./components/ImageUpload.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\ImageUpload.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // const db = "database placehlder"

class ImageUpload extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "showWidget", () => {
      const url = 'http://localhost:8000/';
      let widget = window.cloudinary.createUploadWidget({
        cloudName: `luisan`,
        uploadPreset: `jufwcv6o`
      }, (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
          const data = {
            peg: this.props.peg,
            imageURL: result.info.url,
            pegName: this.props.pegName
          };
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.put(url + 'updateData', data).then(res => {
            console.log('this is in fact running');
            this.props.update();
          }).catch(err => {
            console.log(err);
          });
        }
      });
      widget.open();
    });

    this.state = {};
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("script", {
      src: "https://widget.cloudinary.com/v2.0/global/all.js",
      type: "text/javascript",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("button", {
      onPointerDown: this.showWidget,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, " Upload Image "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ImageUpload);

/***/ }),

/***/ "./components/Option.js":
/*!******************************!*\
  !*** ./components/Option.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\Option.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // const express = require('express')
// const cloudinary = require('cloudinary')
// const formData = require('express-form-data')
// const cors = require('cors')
//TODO: destructure here

const Option = (_ref) => {
  let props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  const placeholderImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F172778278123-0-1%2Fs-l1000.jpg&f=1&nofb=1';
  const {
    answer,
    id,
    sendAnswer
  } = props;
  const {
    0: pegName,
    1: setPegName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('give me a name');
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderImage);
  let answerStr = answer.toString();
  answerStr = answer > 99 ? answerStr.slice(1) : answerStr;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    get({
      "peg": answer
    });
  }, []);
  const url = 'http://localhost:8000/';

  const get = data => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url + 'getImageUrl', {
      params: data
    }).then(res => setImage(res.data.data[0].imageURL ? res.data.data[0].imageURL : placeholderImage)).catch(err => console.log(err));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onPointerDown: () => sendAnswer(answer),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, pegName), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, answerStr), __jsx("img", {
    src: image,
    style: {
      height: '100px',
      width: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), "Send me as answer!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "./components/Options.js":
/*!*******************************!*\
  !*** ./components/Options.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./components/Option.js");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageUpload */ "./components/ImageUpload.js");

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\Options.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //TODO: destructure here

const Options = (_ref) => {
  let props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  const {
    optionsAmount,
    answer,
    sendAnswer,
    setNewOptions
  } = props;
  let {
    newOptions
  } = props;
  const {
    0: options,
    1: setOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setOptions(createOptions(optionsAmount));
    setNewOptions(false);
  }, [newOptions]);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const createOptions = optionsAmount => {
    let options = [];
    let randomNumber = Math.round(Math.random() * 110);

    for (let i = 0; i < optionsAmount - 1; i++) {
      do {
        randomNumber = Math.round(Math.random() * 110);
      } while (randomNumber === answer);

      options.push(__jsx(_Option__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: randomNumber,
        answer: randomNumber,
        sendAnswer: sendAnswer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }));
    }

    options.push(__jsx(_Option__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: answer,
      answer: answer,
      sendAnswer: sendAnswer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }));
    shuffleArray(options); //shuffle options order

    return options;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, options);
};

/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "./components/QuestionCard.js":
/*!************************************!*\
  !*** ./components/QuestionCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\QuestionCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const QuestionCard = (_ref) => {
  let props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  const {
    questionNumber,
    userAnswer,
    nextCard
  } = props;
  let questionNumberString = questionNumber.toString();
  questionNumberString = questionNumber > 99 ? questionNumberString.slice(1) : questionNumberString;

  if (questionNumber === userAnswer) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, " Correct Answer!"), __jsx("div", {
      onPointerDown: () => nextCard(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, "Next Card"));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "A React QuestionCard"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, questionNumberString));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionCard);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_QuestionCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/QuestionCard */ "./components/QuestionCard.js");
/* harmony import */ var _components_ComboTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ComboTracker */ "./components/ComboTracker.js");
/* harmony import */ var _components_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Options */ "./components/Options.js");
var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\pages\\game.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Game = () => {
  const {
    0: optionsAmount,
    1: setOptionsAmount
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(4);
  const {
    0: answer,
    1: setAnswer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: userAnswer,
    1: setUserAnswer
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: newOptions,
    1: setNewOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); //on user input
  //setOptionsAmount

  const sendAnswer = userAnswer => {
    setUserAnswer(userAnswer);
  };

  const nextCard = () => {
    setUserAnswer(null);
    setNewOptions(true);
    setAnswer(Math.round(Math.random() * 110));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Memory Game"), __jsx(_components_QuestionCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    questionNumber: answer,
    userAnswer: userAnswer,
    nextCard: nextCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_components_ComboTracker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
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
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luisa\OneDrive\LuisAngel\Code\Memory Pegs\memory-pegs-game\pages\game.js */"./pages/game.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=game.js.map