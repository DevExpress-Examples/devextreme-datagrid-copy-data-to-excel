(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!*******************************************************************************************************************************!*\
  !*** multi ./node_modules/devextreme/dist/css/dx.common.css ./node_modules/devextreme/dist/css/dx.light.css ./src/styles.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Projects\workspace\DataGrid---How-to-copy-datagrid-to-Excel_20.1.8+\Angular\node_modules\devextreme\dist\css\dx.common.css */"SDvI");
__webpack_require__(/*! C:\Projects\workspace\DataGrid---How-to-copy-datagrid-to-Excel_20.1.8+\Angular\node_modules\devextreme\dist\css\dx.light.css */"ru2K");
module.exports = __webpack_require__(/*! C:\Projects\workspace\DataGrid---How-to-copy-datagrid-to-Excel_20.1.8+\Angular\src\styles.css */"OmL/");


/***/ }),

/***/ "HqBb":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/devextreme/dist/css/dx.light.css ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "SDvI":
/*!********************************************************!*\
  !*** ./node_modules/devextreme/dist/css/dx.common.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--12-1!../../../postcss-loader/src??embedded!./dx.common.css */ "T6Sz");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "T6Sz":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/devextreme/dist/css/dx.common.css ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\n* DevExtreme (dx.common.css)\n* Version: 20.2.5\n* Build date: Fri Jan 15 2021\n*\n* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED\n* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/\n*/\n.dx-clearfix::after,\n.dx-clearfix::before {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.dx-clearfix::after {\n  clear: both;\n}\n.dx-translate-disabled {\n  -webkit-transform: none!important;\n  transform: none!important;\n}\n.dx-hidden-input {\n  position: fixed;\n  top: -10px;\n  left: -10px;\n  width: 0;\n  height: 0;\n}\n.dx-user-select {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.dx-hidden,\n.dx-state-invisible {\n  display: none!important;\n}\n.dx-gesture-cover {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  opacity: 0;\n  z-index: 2147483647;\n}\n.dx-animating {\n  pointer-events: none;\n}\n.dx-fade-animation.dx-enter,\n.dx-fade-animation.dx-leave.dx-leave-active,\n.dx-no-direction.dx-enter,\n.dx-no-direction.dx-leave.dx-leave-active {\n  opacity: 0;\n}\n.dx-fade-animation.dx-enter.dx-enter-active,\n.dx-fade-animation.dx-leave,\n.dx-no-direction.dx-enter.dx-enter-active,\n.dx-no-direction.dx-leave {\n  opacity: 1;\n}\n.dx-overflow-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-enter.dx-backward,\n.dx-overflow-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-overflow-animation.dx-leave.dx-forward,\n.dx-overflow-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 1;\n}\n.dx-overflow-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-slide-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-slide-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-100%,0,0);\n  transform: translate3d(-100%,0,0);\n}\n.dx-slide-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-slide-animation.dx-leave.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-100%,0,0);\n  transform: translate3d(-100%,0,0);\n}\n.dx-slide-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-opendoor-animation.dx-enter.dx-forward {\n  -webkit-transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 0;\n}\n.dx-opendoor-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-opendoor-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: none;\n  transform: none;\n  opacity: 1;\n}\n.dx-opendoor-animation.dx-leave.dx-backward,\n.dx-opendoor-animation.dx-leave.dx-forward {\n  -webkit-transform: none;\n  transform: none;\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 1;\n}\n.dx-opendoor-animation.dx-enter.dx-backward,\n.dx-opendoor-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: matrix3d(.5,0,.87,-.001,0,1,0,0,-.87,0,.5,0,0,0,0,1);\n  transform: matrix3d(.5,0,.87,-.001,0,1,0,0,-.87,0,.5,0,0,0,0,1);\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 0;\n}\n.dx-opendoor-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-forward {\n  -webkit-transform: scale(.5);\n  transform: scale(.5);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.dx-win-pop-animation.dx-enter.dx-backward,\n.dx-win-pop-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-enter-active.dx-backward {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.dx-win-pop-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: scale(.5);\n  transform: scale(.5);\n  opacity: 0;\n}\n.dx-android-pop-animation.dx-enter.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(0,150px,0);\n  transform: translate3d(0,150px,0);\n  opacity: 0;\n}\n.dx-android-pop-animation.dx-enter.dx-enter-active.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n}\n.dx-android-pop-animation.dx-enter.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-backward {\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-enter.dx-forward {\n  z-index: 2;\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-ios7-slide-animation.dx-enter.dx-enter-active.dx-forward {\n  z-index: 2;\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-ios7-slide-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-20%,0,0);\n  transform: translate3d(-20%,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-enter.dx-enter-active.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-leave.dx-forward {\n  z-index: 1;\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-ios7-slide-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-20%,0,0);\n  transform: translate3d(-20%,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-leave.dx-backward {\n  z-index: 2;\n}\n.dx-ios7-slide-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-40%,0,0);\n  transform: translate3d(-40%,0,0);\n  opacity: 0;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-ios7-toolbar-animation.dx-leave.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-40%,0,0);\n  transform: translate3d(-40%,0,0);\n  opacity: 0;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n  z-index: 2;\n}\n.dx-drop-animation.dx-enter,\n.dx-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,-120%,0);\n  transform: translate3d(0,-120%,0);\n}\n.dx-drop-animation.dx-enter.dx-enter-active,\n.dx-drop-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-3d-drop-animation.dx-enter,\n.dx-3d-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: rotate3d(1,0,0,10deg) translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  transform: rotate3d(1,0,0,10deg) translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-3d-drop-animation.dx-enter.dx-enter-active,\n.dx-3d-drop-animation.dx-leave {\n  -webkit-transform: rotate3d(1,0,0,0) translate3d(0,0,0) scale3d(1,1,1);\n  transform: rotate3d(1,0,0,0) translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-drop-animation.dx-enter,\n.dx-fade-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  transform: translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-fade-drop-animation.dx-enter.dx-enter-active,\n.dx-fade-drop-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);\n  transform: translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-rise-animation.dx-enter,\n.dx-fade-rise-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,10px,0) scale3d(1.1,1.1,1.1);\n  transform: translate3d(0,10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-fade-rise-animation.dx-enter.dx-enter-active,\n.dx-fade-rise-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);\n  transform: translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-slide-animation.dx-enter,\n.dx-fade-slide-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n}\n.dx-fade-slide-animation.dx-enter.dx-enter-active,\n.dx-fade-slide-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n}\n.dx-fade-zoom-animation.dx-enter,\n.dx-fade-zoom-animation.dx-leave.dx-leave-active {\n  -webkit-transform: scale3d(.3,.3,.3);\n  transform: scale3d(.3,.3,.3);\n  opacity: 0;\n}\n.dx-fade-zoom-animation.dx-enter.dx-enter-active,\n.dx-fade-zoom-animation.dx-leave {\n  -webkit-transform: scale3d(1,1,1);\n  transform: scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-color-scheme {\n  font-family: \"#\";\n}\n.dx-widget {\n  display: block;\n  -ms-content-zooming: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-text-size-adjust: none;\n  -webkit-touch-callout: none;\n  padding: 0;\n  outline: 0;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n.dx-widget,\n.dx-widget *,\n.dx-widget ::after,\n.dx-widget ::before,\n.dx-widget::after,\n.dx-widget::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.dx-item {\n  outline: 0;\n}\n.dx-rtl {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n.dx-state-disabled {\n  pointer-events: none;\n}\n.dx-draggable {\n  left: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.dx-draggable.dx-state-disabled,\n.dx-state-disabled .dx-draggable {\n  cursor: default;\n}\n.dx-draggable-clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n}\n.dx-sortable {\n  overflow: hidden;\n}\n.dx-sortable-dragging.dx-sortable-clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  opacity: .9;\n  z-index: 2147483647;\n}\n.dx-sortable-dragging.dx-sortable-clone * {\n  cursor: pointer;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.dx-sortable-source {\n  opacity: .5;\n}\n.dx-sortable-source-hidden {\n  opacity: 0;\n}\n.dx-sortable-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 2147483647;\n}\n.dx-sortable-placeholder-inside {\n  border-width: 2px;\n}\n.dx-card {\n  overflow: hidden;\n}\n.dx-box-item-content {\n  font-size: 14px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-width: 100%;\n}\n.dx-box-fallback-item > .dx-box-item-content {\n  width: 100%;\n  height: 100%;\n}\n.dx-buttongroup {\n  display: inline-block;\n}\n.dx-buttongroup-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  height: 100%;\n  width: 100%;\n}\n.dx-buttongroup-item {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n}\n.dx-buttongroup-item.dx-button-mode-contained,\n.dx-buttongroup-item.dx-button-mode-outlined {\n  border-left-width: 0;\n}\n.dx-buttongroup-item.dx-button-mode-contained.dx-button,\n.dx-buttongroup-item.dx-button-mode-outlined.dx-button {\n  border-radius: 0;\n}\n.dx-buttongroup-item.dx-button-mode-text {\n  margin-left: 1px;\n}\n.dx-buttongroup-item-has-width {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.dx-checkbox {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.dx-checkbox.dx-state-readonly {\n  cursor: default;\n}\n.dx-checkbox-icon {\n  display: inline-block;\n  position: relative;\n  background-position: 0 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.dx-checkbox-container {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dx-checkbox-has-text .dx-checkbox-icon,\n.dx-checkbox-has-text .dx-checkbox-text {\n  vertical-align: middle;\n}\n.dx-checkbox-text {\n  display: inline-block;\n  vertical-align: middle;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: normal;\n  height: 100%;\n  width: 100%;\n}\n.dx-rtl .dx-checkbox-text,\n.dx-rtl.dx-checkbox-text {\n  margin: 0;\n  padding: 0;\n}\n.dx-state-disabled .dx-checkbox,\n.dx-state-disabled.dx-checkbox {\n  cursor: default;\n}\n.dx-map-container,\n.dx-map-shield {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #000;\n}\n.dx-map-shield {\n  top: -100%;\n  left: 0;\n  background: rgba(0,0,0,.01);\n  opacity: .01;\n}\n.dx-textarea .dx-texteditor-input-container {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n.dx-textarea .dx-texteditor-input {\n  resize: none;\n  font-family: inherit;\n  display: block;\n  overflow: auto;\n  white-space: pre-wrap;\n  margin: 0;\n}\n.dx-textarea .dx-texteditor-input-auto-resize {\n  overflow-y: hidden;\n}\n.dx-textarea .dx-placeholder {\n  height: auto;\n}\n.dx-textarea .dx-placeholder::before {\n  white-space: normal;\n}\n.dx-tileview div.dx-scrollable-container {\n  overflow-y: hidden;\n}\n.dx-tile {\n  position: absolute;\n  text-align: center;\n}\n.dx-tile.dx-state-active {\n  -webkit-transform: scale(.96);\n  transform: scale(.96);\n  -webkit-transition: -webkit-transform .1s linear;\n  transition: -webkit-transform .1s linear;\n  transition: transform .1s linear;\n  transition: transform .1s linear, -webkit-transform .1s linear;\n  transition: transform .1s linear,-webkit-transform .1s linear;\n}\n.dx-tile-content {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n.dx-tileview-wrapper {\n  position: relative;\n  height: 1px;\n}\n.dx-device-ios-6 .dx-tile {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dx-tooltip-wrapper .dx-overlay-content {\n  min-width: 34px;\n  min-height: 26px;\n  text-align: center;\n  line-height: 0;\n}\n.dx-tooltip-wrapper .dx-overlay-content::before {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.dx-tooltip-wrapper .dx-overlay-content .dx-popup-content {\n  display: inline-block;\n  padding: 12px 17px;\n  font-size: .85em;\n  line-height: normal;\n  white-space: nowrap;\n}\n.dx-loadpanel-content {\n  padding: 10px;\n  border: 1px solid #ccc;\n  background: #fefefe;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-drag: none;\n  border-radius: 5px;\n}\n.dx-loadpanel-content::before {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.dx-loadpanel-content-wrapper {\n  display: inline-block;\n  width: 100%;\n  vertical-align: middle;\n}\n.dx-loadpanel-message {\n  text-align: center;\n}\n.dx-loadpanel-content.dx-loadpanel-pane-hidden {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  background: 0 0;\n}\n@-webkit-keyframes dx-loadpanel-opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes dx-loadpanel-opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dx-selectbox {\n  cursor: pointer;\n}\n.dx-selectbox .dx-texteditor-input {\n  max-width: 100%;\n}\n.dx-selectbox .dx-texteditor-input:-moz-read-only {\n  cursor: pointer;\n}\n.dx-selectbox .dx-texteditor-input:read-only {\n  cursor: pointer;\n}\n.dx-selectbox-container {\n  position: relative;\n}\n.dx-state-disabled .dx-selectbox .dx-texteditor-input,\n.dx-state-disabled.dx-selectbox .dx-texteditor-input {\n  cursor: default;\n}\n.dx-slideoutview {\n  height: 100%;\n  width: 100%;\n  -ms-touch-action: pinch-zoom;\n  touch-action: pinch-zoom;\n}\n.dx-slideoutview-wrapper {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.dx-slideoutview-menu-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.dx-slideoutview-menu-content.dx-slideoutview-right {\n  right: 0;\n}\n.dx-slideoutview-menu-content.dx-slideoutview-left {\n  left: 0;\n}\n.dx-slideoutview-content {\n  position: absolute;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 100;\n}\n.dx-slideoutview-shield {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.dx-device-android .dx-slideoutview-content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dx-slideout {\n  height: 100%;\n  width: 100%;\n}\n.dx-slideout-menu {\n  min-width: 280px;\n  max-width: 350px;\n}\n.dx-slideout-menu .dx-list-item .dx-icon {\n  float: left;\n  margin-right: 15px;\n  width: 24px;\n  height: 24px;\n  background-size: 100% 100%;\n}\n.dx-slideout-item,\n.dx-slideout-item-content {\n  height: 100%;\n  width: 100%;\n}\n.dx-rtl .dx-slideout-menu .dx-list-item .dx-icon {\n  float: right;\n  margin-right: 0;\n  margin-left: 15px;\n}\n.dx-tabpanel-tabs {\n  width: 100%;\n}\n.dx-tabpanel-tabs .dx-tabs {\n  height: 100%;\n}\n.dx-tabpanel-container {\n  width: 100%;\n  height: 100%;\n}\n.dx-validationsummary-item {\n  cursor: pointer;\n}\n.dx-invalid-message.dx-overlay {\n  position: relative;\n}\n.dx-invalid-message.dx-overlay-wrapper {\n  width: 100%;\n  visibility: hidden;\n  pointer-events: none;\n}\n.dx-invalid-message > .dx-overlay-content {\n  display: inline-block;\n  border-width: 0;\n  padding: 10px;\n  font-size: .85em;\n  line-height: normal;\n  word-wrap: break-word;\n}\n.dx-dropdownbox.dx-dropdowneditor-active .dx-invalid-message-auto,\n.dx-invalid-message-visible.dx-invalid .dx-invalid-message-auto,\n.dx-invalid-message.dx-invalid-message-always,\n.dx-lookup.dx-dropdowneditor-active .dx-invalid-message-auto,\n.dx-state-focused.dx-invalid .dx-invalid-message-auto {\n  visibility: visible;\n}\n.dx-fa-button .dx-overlay-content {\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dx-deferrendering .dx-deferrendering-loadindicator-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.dx-deferrendering.dx-pending-rendering .dx-invisible-while-pending-rendering,\n.dx-deferrendering:not(.dx-pending-rendering) .dx-visible-while-pending-rendering {\n  display: none!important;\n}\n.dx-badge {\n  padding: 0 5px;\n  border-radius: 14px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 1;\n}\n.dx-dropdownlist-popup-wrapper .dx-list {\n  min-height: 35px;\n}\n.dx-dropdownlist-popup-wrapper .dx-list .dx-scrollable-content {\n  margin: 0;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list {\n  min-height: 40px;\n  min-width: 100px;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item {\n  display: block;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item:last-of-type {\n  border-bottom: none;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item-content {\n  display: block;\n}\n.dx-overlay-wrapper.dx-dropdownmenu-popup .dx-overlay-content .dx-popover-arrow {\n  width: 0;\n  height: 0;\n}\n.dx-dropdownmenu-popup-wrapper .dx-list-item {\n  display: block;\n}\n.dx-splitter-wrapper {\n  height: 100%;\n  width: 0;\n  position: absolute;\n  z-index: 998;\n  top: 0;\n}\n.dx-splitter-wrapper .dx-splitter-border {\n  z-index: 997;\n  height: 100%;\n  width: 7px;\n  cursor: col-resize;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter {\n  height: 100%;\n  width: 1px;\n  display: block;\n  cursor: col-resize;\n  z-index: 999;\n  margin: auto;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter.dx-splitter-inactive {\n  z-index: 998;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter.dx-state-disabled {\n  width: 0;\n  cursor: default;\n}", "",{"version":3,"sources":["webpack://node_modules/devextreme/dist/css/dx.common.css"],"names":[],"mappings":"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c;EACd,cAAc;EACd,qBAAqB;EACrB,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,6BAA6B;EAC7B,qBAAqB;EACrB,gDAAgD;EAChD,wCAAgC;EAAhC,gCAAgC;EAAhC,8DAAgC;EAChC,6DAA6D;AAC/D;AACA;EACE,UAAU;EACV,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;AAChB;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,2BAA2B;EAC3B,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,qBAAqB;EACrB,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;;EAEE,eAAe;AACjB;AACA;EACE,YAAY;EACZ,WAAW;EACX,4BAA4B;EAC5B,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;AACX;AACA;EACE,QAAQ;AACV;AACA;EACE,OAAO;AACT;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,MAAM;EACN,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,YAAY;EACZ,WAAW;EACX,UAAU;AACZ;AACA;EACE,mCAAmC;EACnC,2BAA2B;AAC7B;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,0BAA0B;AAC5B;AACA;;EAEE,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;AACvB;AACA;;;;;EAKE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;AACA;;EAEE,uBAAuB;AACzB;AACA;EACE,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,eAAe;EACf,cAAc;AAChB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,SAAS;AACX;AACA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;AACA;EACE,QAAQ;EACR,SAAS;AACX;AACA;EACE,cAAc;AAChB;AACA;EACE,YAAY;EACZ,QAAQ;EACR,kBAAkB;EAClB,YAAY;EACZ,MAAM;AACR;AACA;EACE,YAAY;EACZ,YAAY;EACZ,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,UAAU;EACV,cAAc;EACd,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,QAAQ;EACR,eAAe;AACjB","sourcesContent":["/**\n* DevExtreme (dx.common.css)\n* Version: 20.2.5\n* Build date: Fri Jan 15 2021\n*\n* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED\n* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/\n*/\n.dx-clearfix::after,\n.dx-clearfix::before {\n  display: table;\n  content: \"\";\n  line-height: 0;\n}\n.dx-clearfix::after {\n  clear: both;\n}\n.dx-translate-disabled {\n  -webkit-transform: none!important;\n  transform: none!important;\n}\n.dx-hidden-input {\n  position: fixed;\n  top: -10px;\n  left: -10px;\n  width: 0;\n  height: 0;\n}\n.dx-user-select {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.dx-hidden,\n.dx-state-invisible {\n  display: none!important;\n}\n.dx-gesture-cover {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  opacity: 0;\n  z-index: 2147483647;\n}\n.dx-animating {\n  pointer-events: none;\n}\n.dx-fade-animation.dx-enter,\n.dx-fade-animation.dx-leave.dx-leave-active,\n.dx-no-direction.dx-enter,\n.dx-no-direction.dx-leave.dx-leave-active {\n  opacity: 0;\n}\n.dx-fade-animation.dx-enter.dx-enter-active,\n.dx-fade-animation.dx-leave,\n.dx-no-direction.dx-enter.dx-enter-active,\n.dx-no-direction.dx-leave {\n  opacity: 1;\n}\n.dx-overflow-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-enter.dx-backward,\n.dx-overflow-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-overflow-animation.dx-leave.dx-forward,\n.dx-overflow-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 1;\n}\n.dx-overflow-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 2;\n}\n.dx-overflow-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-slide-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-slide-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-100%,0,0);\n  transform: translate3d(-100%,0,0);\n}\n.dx-slide-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-slide-animation.dx-leave.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-100%,0,0);\n  transform: translate3d(-100%,0,0);\n}\n.dx-slide-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-slide-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-opendoor-animation.dx-enter.dx-forward {\n  -webkit-transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 0;\n}\n.dx-opendoor-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-opendoor-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: none;\n  transform: none;\n  opacity: 1;\n}\n.dx-opendoor-animation.dx-leave.dx-backward,\n.dx-opendoor-animation.dx-leave.dx-forward {\n  -webkit-transform: none;\n  transform: none;\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 1;\n}\n.dx-opendoor-animation.dx-enter.dx-backward,\n.dx-opendoor-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: matrix3d(.5,0,.87,-.001,0,1,0,0,-.87,0,.5,0,0,0,0,1);\n  transform: matrix3d(.5,0,.87,-.001,0,1,0,0,-.87,0,.5,0,0,0,0,1);\n  -webkit-transform-origin: center left 0;\n  transform-origin: center left 0;\n  opacity: 0;\n}\n.dx-opendoor-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  transform: matrix3d(.71,0,.71,.001,0,1,0,0,-.71,0,.71,0,0,0,0,1);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-forward {\n  -webkit-transform: scale(.5);\n  transform: scale(.5);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.dx-win-pop-animation.dx-enter.dx-backward,\n.dx-win-pop-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n  opacity: 0;\n}\n.dx-win-pop-animation.dx-enter.dx-enter-active.dx-backward {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n}\n.dx-win-pop-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: scale(.5);\n  transform: scale(.5);\n  opacity: 0;\n}\n.dx-android-pop-animation.dx-enter.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(0,150px,0);\n  transform: translate3d(0,150px,0);\n  opacity: 0;\n}\n.dx-android-pop-animation.dx-enter.dx-enter-active.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n}\n.dx-android-pop-animation.dx-enter.dx-forward,\n.dx-android-pop-animation.dx-leave.dx-backward {\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-enter.dx-forward {\n  z-index: 2;\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n}\n.dx-ios7-slide-animation.dx-enter.dx-enter-active.dx-forward {\n  z-index: 2;\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-ios7-slide-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-20%,0,0);\n  transform: translate3d(-20%,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-enter.dx-enter-active.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-leave.dx-forward {\n  z-index: 1;\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-ios7-slide-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-20%,0,0);\n  transform: translate3d(-20%,0,0);\n  z-index: 1;\n}\n.dx-ios7-slide-animation.dx-leave.dx-backward {\n  z-index: 2;\n}\n.dx-ios7-slide-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(100%,0,0);\n  transform: translate3d(100%,0,0);\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-forward {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-enter-active.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-backward {\n  -webkit-transform: translate3d(-40%,0,0);\n  transform: translate3d(-40%,0,0);\n  opacity: 0;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-enter.dx-enter-active.dx-backward,\n.dx-ios7-toolbar-animation.dx-leave.dx-forward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-leave-active.dx-forward {\n  -webkit-transform: translate3d(-40%,0,0);\n  transform: translate3d(-40%,0,0);\n  opacity: 0;\n  z-index: 1;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-backward {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n  z-index: 2;\n}\n.dx-ios7-toolbar-animation.dx-leave.dx-leave-active.dx-backward {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n  z-index: 2;\n}\n.dx-drop-animation.dx-enter,\n.dx-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,-120%,0);\n  transform: translate3d(0,-120%,0);\n}\n.dx-drop-animation.dx-enter.dx-enter-active,\n.dx-drop-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n}\n.dx-3d-drop-animation.dx-enter,\n.dx-3d-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: rotate3d(1,0,0,10deg) translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  transform: rotate3d(1,0,0,10deg) translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-3d-drop-animation.dx-enter.dx-enter-active,\n.dx-3d-drop-animation.dx-leave {\n  -webkit-transform: rotate3d(1,0,0,0) translate3d(0,0,0) scale3d(1,1,1);\n  transform: rotate3d(1,0,0,0) translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-drop-animation.dx-enter,\n.dx-fade-drop-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  transform: translate3d(0,-10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-fade-drop-animation.dx-enter.dx-enter-active,\n.dx-fade-drop-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);\n  transform: translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-rise-animation.dx-enter,\n.dx-fade-rise-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(0,10px,0) scale3d(1.1,1.1,1.1);\n  transform: translate3d(0,10px,0) scale3d(1.1,1.1,1.1);\n  opacity: 0;\n}\n.dx-fade-rise-animation.dx-enter.dx-enter-active,\n.dx-fade-rise-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0) scale3d(1,1,1);\n  transform: translate3d(0,0,0) scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-fade-slide-animation.dx-enter,\n.dx-fade-slide-animation.dx-leave.dx-leave-active {\n  -webkit-transform: translate3d(40%,0,0);\n  transform: translate3d(40%,0,0);\n  opacity: 0;\n}\n.dx-fade-slide-animation.dx-enter.dx-enter-active,\n.dx-fade-slide-animation.dx-leave {\n  -webkit-transform: translate3d(0,0,0);\n  transform: translate3d(0,0,0);\n  opacity: 1;\n}\n.dx-fade-zoom-animation.dx-enter,\n.dx-fade-zoom-animation.dx-leave.dx-leave-active {\n  -webkit-transform: scale3d(.3,.3,.3);\n  transform: scale3d(.3,.3,.3);\n  opacity: 0;\n}\n.dx-fade-zoom-animation.dx-enter.dx-enter-active,\n.dx-fade-zoom-animation.dx-leave {\n  -webkit-transform: scale3d(1,1,1);\n  transform: scale3d(1,1,1);\n  opacity: 1;\n}\n.dx-color-scheme {\n  font-family: \"#\";\n}\n.dx-widget {\n  display: block;\n  -ms-content-zooming: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-text-size-adjust: none;\n  -webkit-touch-callout: none;\n  padding: 0;\n  outline: 0;\n  -webkit-print-color-adjust: exact;\n  color-adjust: exact;\n}\n.dx-widget,\n.dx-widget *,\n.dx-widget ::after,\n.dx-widget ::before,\n.dx-widget::after,\n.dx-widget::before {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.dx-item {\n  outline: 0;\n}\n.dx-rtl {\n  direction: rtl;\n  unicode-bidi: embed;\n}\n.dx-state-disabled {\n  pointer-events: none;\n}\n.dx-draggable {\n  left: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.dx-draggable.dx-state-disabled,\n.dx-state-disabled .dx-draggable {\n  cursor: default;\n}\n.dx-draggable-clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2147483647;\n}\n.dx-sortable {\n  overflow: hidden;\n}\n.dx-sortable-dragging.dx-sortable-clone {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  opacity: .9;\n  z-index: 2147483647;\n}\n.dx-sortable-dragging.dx-sortable-clone * {\n  cursor: pointer;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.dx-sortable-source {\n  opacity: .5;\n}\n.dx-sortable-source-hidden {\n  opacity: 0;\n}\n.dx-sortable-placeholder {\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 2147483647;\n}\n.dx-sortable-placeholder-inside {\n  border-width: 2px;\n}\n.dx-card {\n  overflow: hidden;\n}\n.dx-box-item-content {\n  font-size: 14px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-width: 100%;\n}\n.dx-box-fallback-item > .dx-box-item-content {\n  width: 100%;\n  height: 100%;\n}\n.dx-buttongroup {\n  display: inline-block;\n}\n.dx-buttongroup-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row nowrap;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  height: 100%;\n  width: 100%;\n}\n.dx-buttongroup-item {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n}\n.dx-buttongroup-item.dx-button-mode-contained,\n.dx-buttongroup-item.dx-button-mode-outlined {\n  border-left-width: 0;\n}\n.dx-buttongroup-item.dx-button-mode-contained.dx-button,\n.dx-buttongroup-item.dx-button-mode-outlined.dx-button {\n  border-radius: 0;\n}\n.dx-buttongroup-item.dx-button-mode-text {\n  margin-left: 1px;\n}\n.dx-buttongroup-item-has-width {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n}\n.dx-checkbox {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0;\n  -webkit-user-drag: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n}\n.dx-checkbox.dx-state-readonly {\n  cursor: default;\n}\n.dx-checkbox-icon {\n  display: inline-block;\n  position: relative;\n  background-position: 0 0;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.dx-checkbox-container {\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dx-checkbox-has-text .dx-checkbox-icon,\n.dx-checkbox-has-text .dx-checkbox-text {\n  vertical-align: middle;\n}\n.dx-checkbox-text {\n  display: inline-block;\n  vertical-align: middle;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  line-height: normal;\n  height: 100%;\n  width: 100%;\n}\n.dx-rtl .dx-checkbox-text,\n.dx-rtl.dx-checkbox-text {\n  margin: 0;\n  padding: 0;\n}\n.dx-state-disabled .dx-checkbox,\n.dx-state-disabled.dx-checkbox {\n  cursor: default;\n}\n.dx-map-container,\n.dx-map-shield {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  color: #000;\n}\n.dx-map-shield {\n  top: -100%;\n  left: 0;\n  background: rgba(0,0,0,.01);\n  opacity: .01;\n}\n.dx-textarea .dx-texteditor-input-container {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n}\n.dx-textarea .dx-texteditor-input {\n  resize: none;\n  font-family: inherit;\n  display: block;\n  overflow: auto;\n  white-space: pre-wrap;\n  margin: 0;\n}\n.dx-textarea .dx-texteditor-input-auto-resize {\n  overflow-y: hidden;\n}\n.dx-textarea .dx-placeholder {\n  height: auto;\n}\n.dx-textarea .dx-placeholder::before {\n  white-space: normal;\n}\n.dx-tileview div.dx-scrollable-container {\n  overflow-y: hidden;\n}\n.dx-tile {\n  position: absolute;\n  text-align: center;\n}\n.dx-tile.dx-state-active {\n  -webkit-transform: scale(.96);\n  transform: scale(.96);\n  -webkit-transition: -webkit-transform .1s linear;\n  transition: transform .1s linear;\n  transition: transform .1s linear,-webkit-transform .1s linear;\n}\n.dx-tile-content {\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n.dx-tileview-wrapper {\n  position: relative;\n  height: 1px;\n}\n.dx-device-ios-6 .dx-tile {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dx-tooltip-wrapper .dx-overlay-content {\n  min-width: 34px;\n  min-height: 26px;\n  text-align: center;\n  line-height: 0;\n}\n.dx-tooltip-wrapper .dx-overlay-content::before {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.dx-tooltip-wrapper .dx-overlay-content .dx-popup-content {\n  display: inline-block;\n  padding: 12px 17px;\n  font-size: .85em;\n  line-height: normal;\n  white-space: nowrap;\n}\n.dx-loadpanel-content {\n  padding: 10px;\n  border: 1px solid #ccc;\n  background: #fefefe;\n  text-align: center;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-user-drag: none;\n  border-radius: 5px;\n}\n.dx-loadpanel-content::before {\n  display: inline-block;\n  height: 100%;\n  content: \"\";\n  vertical-align: middle;\n}\n.dx-loadpanel-content-wrapper {\n  display: inline-block;\n  width: 100%;\n  vertical-align: middle;\n}\n.dx-loadpanel-message {\n  text-align: center;\n}\n.dx-loadpanel-content.dx-loadpanel-pane-hidden {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  background: 0 0;\n}\n@-webkit-keyframes dx-loadpanel-opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes dx-loadpanel-opacity {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dx-selectbox {\n  cursor: pointer;\n}\n.dx-selectbox .dx-texteditor-input {\n  max-width: 100%;\n}\n.dx-selectbox .dx-texteditor-input:-moz-read-only {\n  cursor: pointer;\n}\n.dx-selectbox .dx-texteditor-input:read-only {\n  cursor: pointer;\n}\n.dx-selectbox-container {\n  position: relative;\n}\n.dx-state-disabled .dx-selectbox .dx-texteditor-input,\n.dx-state-disabled.dx-selectbox .dx-texteditor-input {\n  cursor: default;\n}\n.dx-slideoutview {\n  height: 100%;\n  width: 100%;\n  -ms-touch-action: pinch-zoom;\n  touch-action: pinch-zoom;\n}\n.dx-slideoutview-wrapper {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.dx-slideoutview-menu-content {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\n.dx-slideoutview-menu-content.dx-slideoutview-right {\n  right: 0;\n}\n.dx-slideoutview-menu-content.dx-slideoutview-left {\n  left: 0;\n}\n.dx-slideoutview-content {\n  position: absolute;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 100;\n}\n.dx-slideoutview-shield {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n.dx-device-android .dx-slideoutview-content {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.dx-slideout {\n  height: 100%;\n  width: 100%;\n}\n.dx-slideout-menu {\n  min-width: 280px;\n  max-width: 350px;\n}\n.dx-slideout-menu .dx-list-item .dx-icon {\n  float: left;\n  margin-right: 15px;\n  width: 24px;\n  height: 24px;\n  background-size: 100% 100%;\n}\n.dx-slideout-item,\n.dx-slideout-item-content {\n  height: 100%;\n  width: 100%;\n}\n.dx-rtl .dx-slideout-menu .dx-list-item .dx-icon {\n  float: right;\n  margin-right: 0;\n  margin-left: 15px;\n}\n.dx-tabpanel-tabs {\n  width: 100%;\n}\n.dx-tabpanel-tabs .dx-tabs {\n  height: 100%;\n}\n.dx-tabpanel-container {\n  width: 100%;\n  height: 100%;\n}\n.dx-validationsummary-item {\n  cursor: pointer;\n}\n.dx-invalid-message.dx-overlay {\n  position: relative;\n}\n.dx-invalid-message.dx-overlay-wrapper {\n  width: 100%;\n  visibility: hidden;\n  pointer-events: none;\n}\n.dx-invalid-message > .dx-overlay-content {\n  display: inline-block;\n  border-width: 0;\n  padding: 10px;\n  font-size: .85em;\n  line-height: normal;\n  word-wrap: break-word;\n}\n.dx-dropdownbox.dx-dropdowneditor-active .dx-invalid-message-auto,\n.dx-invalid-message-visible.dx-invalid .dx-invalid-message-auto,\n.dx-invalid-message.dx-invalid-message-always,\n.dx-lookup.dx-dropdowneditor-active .dx-invalid-message-auto,\n.dx-state-focused.dx-invalid .dx-invalid-message-auto {\n  visibility: visible;\n}\n.dx-fa-button .dx-overlay-content {\n  border-radius: 50%;\n  cursor: pointer;\n}\n.dx-deferrendering .dx-deferrendering-loadindicator-container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.dx-deferrendering.dx-pending-rendering .dx-invisible-while-pending-rendering,\n.dx-deferrendering:not(.dx-pending-rendering) .dx-visible-while-pending-rendering {\n  display: none!important;\n}\n.dx-badge {\n  padding: 0 5px;\n  border-radius: 14px;\n  color: #fff;\n  font-size: 13px;\n  line-height: 1;\n}\n.dx-dropdownlist-popup-wrapper .dx-list {\n  min-height: 35px;\n}\n.dx-dropdownlist-popup-wrapper .dx-list .dx-scrollable-content {\n  margin: 0;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list {\n  min-height: 40px;\n  min-width: 100px;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item {\n  display: block;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item:last-of-type {\n  border-bottom: none;\n}\n.dx-dropdownmenu-popup-wrapper .dx-dropdownmenu-list .dx-list-item-content {\n  display: block;\n}\n.dx-overlay-wrapper.dx-dropdownmenu-popup .dx-overlay-content .dx-popover-arrow {\n  width: 0;\n  height: 0;\n}\n.dx-dropdownmenu-popup-wrapper .dx-list-item {\n  display: block;\n}\n.dx-splitter-wrapper {\n  height: 100%;\n  width: 0;\n  position: absolute;\n  z-index: 998;\n  top: 0;\n}\n.dx-splitter-wrapper .dx-splitter-border {\n  z-index: 997;\n  height: 100%;\n  width: 7px;\n  cursor: col-resize;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter {\n  height: 100%;\n  width: 1px;\n  display: block;\n  cursor: col-resize;\n  z-index: 999;\n  margin: auto;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter.dx-splitter-inactive {\n  z-index: 998;\n}\n.dx-splitter-wrapper .dx-splitter-border .dx-splitter.dx-state-disabled {\n  width: 0;\n  cursor: default;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAAA,8EAA8E","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "ru2K":
/*!*******************************************************!*\
  !*** ./node_modules/devextreme/dist/css/dx.light.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--12-1!../../../postcss-loader/src??embedded!./dx.light.css */ "HqBb");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map