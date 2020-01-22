webpackHotUpdate("static\\development\\pages\\mypegs.js",{

/***/ "./components/OptionEditable.js":
/*!**************************************!*\
  !*** ./components/OptionEditable.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageUpload */ "./components/ImageUpload.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");

var _jsxFileName = "C:\\Users\\luisa\\OneDrive\\LuisAngel\\Code\\Memory Pegs\\memory-pegs-game\\components\\OptionEditable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var OptionEditable = function OptionEditable(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  var placeholderImage = 'https://apod.nasa.gov/apod/image/2001/22466-22467anaVantuyne900.jpg';
  var placeholderName = 'add a name to this peg';
  var id = props.id; //TODO: useReducer?

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderImage),
      image = _useState[0],
      setImage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(placeholderName),
      pegName = _useState2[0],
      setPegName = _useState2[1]; //placeholder image


  var pegNumberStr = id.toString();
  pegNumberStr = id > 99 ? pegNumberStr.slice(1) : pegNumberStr;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    get({
      "peg": pegNumberStr
    });
  }, []);
  var url = 'http://localhost:8000/'; //TODO: refactor as HOCs / 'container component pattern'
  //TODO: use a container to handle the logic

  var get = function get(data) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url + 'getImageUrl', {
      params: data
    }).then(function (res) {
      setImage(res.data.data[0].imageURL ? res.data.data[0].imageURL : placeholderImage);
      setPegName(res.data.data[0].pegName ? res.data.data[0].pegName : placeholderName);
    })["catch"](function (err) {// console.log("this is where it's at:", err)
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log("we'll post:", pegName, "for peg no.", id);
    var data = {
      peg: id,
      pegName: pegName
    };
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.put(url + 'updateData', data).then(function (res) {
      console.log("put res:", res);
      get();
      console.log('RAN GET');
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var handleChange = function handleChange(e) {
    console.log(e.target.value);
    setPegName(e.target.value);
  };

  var uploadAcceptedFiles = function uploadAcceptedFiles(acceptedFiles) {
    console.log(acceptedFiles);
    console.log("we'll run some axios call here to our server our cloudinary");
    cloudinary.v2.uploader.upload(acceptedFiles, function (error, result) {
      console.log(result, error);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    "class": "option-card",
    onPointerDown: function onPointerDown() {
      return "";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      e.target.blur();
    },
    onBlur: function onBlur(e) {
      return handleSubmit(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    name: "pegName",
    value: pegName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
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
      lineNumber: 86
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, pegNumberStr), __jsx(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDrop: function onDrop(acceptedFiles) {
      return uploadAcceptedFiles(acceptedFiles);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Drag 'n' drop some files here, or click to select files")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionEditable);

/***/ })

})
//# sourceMappingURL=mypegs.js.e091831cbf22e97e6f5e.hot-update.js.map