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
  var url = 'http://localhost:8000/'; // #############
  //CLOUDINARY UPLOAD
  // #############

  var cloudName = 'luisan';
  var unsignedUploadPreset = 'jufwcv6o'; // var fileSelect = document.getElementById("fileSelect"),
  // fileElem = document.getElementById("fileElem");
  // urlSelect = document.getElementById("urlSelect");
  // fileSelect.addEventListener("click", function(e) {
  //     if (fileElem) {
  //     fileElem.click();
  // }
  // e.preventDefault(); // prevent navigation to "#"
  // }, false);
  // const handleClick = (e) => {
  //     if (fileElem) {
  //         fileElem.click();
  //     }
  //     e.preventDefault();
  // }
  // urlSelect.addEventListener("click", function(e) {
  //     uploadFile('https://res.cloudinary.com/demo/image/upload/sample.jpg')
  //     e.preventDefault(); // prevent navigation to "#"
  // }, false);
  // ************************ Drag and drop ***************** //
  // function dragenter(e) {
  //     e.stopPropagation();
  //     e.preventDefault();
  // }
  // function dragover(e) {
  //     e.stopPropagation();
  //     e.preventDefault();
  // }
  // dropbox = document.getElementById("dropbox");
  // dropbox.addEventListener("dragenter", dragenter, false);
  // dropbox.addEventListener("dragover", dragover, false);
  // dropbox.addEventListener("drop", drop, false);
  // function drop(e) {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     var dt = e.dataTransfer;
  //     var files = dt.files;
  //     handleFiles(files);
  // }
  // *********** Upload file to Cloudinary ******************** //

  function uploadFile(file) {
    var url = "https://api.cloudinary.com/v1_1/".concat(cloudName, "/upload");
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); // Reset the upload progress bar
    // document.getElementById('progress').style.width = 0;
    // // Update progress (can be used to show progress indicator)
    // xhr.upload.addEventListener("progress", function(e) {
    //     var progress = Math.round((e.loaded * 100.0) / e.total);
    //     document.getElementById('progress').style.width = progress + "%";
    //     console.log(`fileuploadprogress data.loaded: ${e.loaded},
    //     data.total: ${e.total}`);
    // });

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // File uploaded successfully
        var response = JSON.parse(xhr.responseText); // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg

        var url = response.secure_url;
        console.log("SECURE URL:", url); // Create a thumbnail of the uploaded image, with 150px width

        var tokens = url.split('/');
        tokens.splice(-2, 0, 'w_150,c_scale');
        console.log('TOKENS:', tokens); // var img = new Image(); // HTML5 Constructor
        // img.src = tokens.join('/');
        // img.alt = response.public_id;
        // document.getElementById('gallery').appendChild(img);
      }
    };

    fd.append('upload_preset', unsignedUploadPreset);
    fd.append('tags', 'browser_upload'); // Optional - add tag for image admin in Cloudinary

    fd.append('file', file);
    xhr.send(fd);
  } // *********** Handle selected files ******************** //


  var handleFiles = function handleFiles(files) {
    for (var i = 0; i < files.length; i++) {
      console.log("this ran ".concat(i, " times"));
      uploadFile(files[i]); // call the function to upload the file
    }
  }; // #############
  //CLOUDINARY UPLOAD END
  // #############
  //TODO: refactor as HOCs / 'container component pattern'
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
    console.log("we'll run some axios call here to our server our cloudinary"); // cloudinary.v2.uploader.upload(acceptedFiles, 
    //     function(error, result) {console.log(result, error)}
    // );

    handleFiles(acceptedFiles);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    "class": "option-card",
    onPointerDown: function onPointerDown() {
      return "";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
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
      lineNumber: 188
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
      lineNumber: 191
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
      lineNumber: 198
    },
    __self: this
  }), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, pegNumberStr), __jsx(react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onDrop: function onDrop(acceptedFiles) {
      return uploadAcceptedFiles(acceptedFiles);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Drag 'n' drop some files here, or click to select files")));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OptionEditable);

/***/ })

})
//# sourceMappingURL=mypegs.js.f45c8cc91ed4daf1dce0.hot-update.js.map