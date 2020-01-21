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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/OptionEditable.js":
/*!**************************************!*\
  !*** ./components/OptionEditable.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageUpload */ "./components/ImageUpload.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\OptionEditable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const OptionEditable = (_ref) => {
  let props = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, _ref);

  const placeholderImage = 'https://apod.nasa.gov/apod/image/2001/22466-22467anaVantuyne900.jpg';
  const placeholderName = 'add a name to this peg';
  const {
    id
  } = props;
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(placeholderImage);
  const {
    0: pegName,
    1: setPegName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderName); //placeholder image

  let pegNumberStr = id.toString();
  pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    get({
      "peg": pegNumberStr
    });
  }, []);
  const url = 'http://localhost:8000/'; //TODO: refactor as HOCs / 'container component pattern'
  //TODO: use a container to handle the logic

  const get = data => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url + 'getImageUrl', {
      params: data
    }).then(res => {
      setImage(res.data.data[0].imageURL ? res.data.data[0].imageURL : placeholderImage);
      setPegName(res.data.data[0].pegName ? res.data.data[0].pegName : placeholderName);
    }).catch(err => {// console.log("this is where it's at:", err)
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("we'll post:", pegName, "for peg no.", id);
    const data = {
      peg: id,
      pegName: pegName
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(url + 'updateData', data).then(res => {
      console.log("put res:", res);
      get();
      console.log('RAN GET');
    }).catch(err => {
      console.log(err);
    });
  };

  const handleChange = e => {
    console.log(e.target.value);
    setPegName(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    class: "option-card",
    onPointerDown: () => "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("form", {
    onSubmit: e => {
      e.preventDefault();
      e.target.blur();
    },
    onBlur: e => handleSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    onChange: e => handleChange(e),
    name: "pegName",
    value: pegName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })), __jsx("img", {
    src: image,
    style: {
      height: '100px',
      width: '100px',
      border: '2px solid black',
      background: 'lightgray'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, pegNumberStr), __jsx(_ImageUpload__WEBPACK_IMPORTED_MODULE_2__["default"], {
    peg: id,
    update: get,
    pegName: pegName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionEditable);

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

/***/ "./pages/mypegs.js":
/*!*************************!*\
  !*** ./pages/mypegs.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_OptionEditable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/OptionEditable */ "./components/OptionEditable.js");
var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\pages\\mypegs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const PegsDisplay = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, " My Pegs!"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, [...Array(110)].map((v, index) => __jsx(_components_OptionEditable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PegsDisplay);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/mypegs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luisa\OneDrive\LuisAngel\Code\Memory Pegs\memory-pegs-game\pages\mypegs.js */"./pages/mypegs.js");


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
//# sourceMappingURL=mypegs.js.map