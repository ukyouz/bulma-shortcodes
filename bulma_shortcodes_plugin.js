/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _grid = __webpack_require__(1);

var _elements = __webpack_require__(2);

var _components = __webpack_require__(3);

(function () {
  var menuComponents = [_elements.bulmaButton, _grid.bulmaColumns, _grid.bulmaColumn, _components.bulmaBox, _components.bulmaNotification, _components.bulmaCard, _components.bulmaIcon, _components.bulmaMenu];

  tinymce.create('tinymce.plugins.bulma_shortcodes_plugin', {

    // url argument holds the absolute url of our plugin directory
    init: function init(ed, url) {
      var menuItems = [];

      menuComponents.forEach(function (comp) {
        var item = comp(ed);
        menuItems.push(item);
      });

      // add new button
      ed.addButton('bulma_shortcodes', {
        type: 'menubutton',
        text: 'Bulma',
        menu: menuItems
      });
    },
    getInfo: function getInfo() {
      return {
        longname: 'Bulma Shortcodes Plugin',
        author: 'Joshua Bartlett',
        version: '1'
      };
    }
  });

  tinymce.PluginManager.add('bulma_shortcodes_plugin', tinymce.plugins.bulma_shortcodes_plugin);
})(); /* eslint no-undef: 0 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bulmaColumns = function bulmaColumns(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-columns]<br />[bulma-column]' + selectedText + '[/bulma-column]<br />[bulma-column][/bulma-column]<br />[/bulma-columns]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Columns',
    icon: 'fa fa-bars',
    onClick: onClick
  };
};

var bulmaColumn = function bulmaColumn(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-column]' + selectedText + '[/bulma-column]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Column',
    icon: 'fa fa-columns',
    onClick: onClick
  };
};

exports.bulmaColumns = bulmaColumns;
exports.bulmaColumn = bulmaColumn;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bulmaButton = function bulmaButton(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-button link="#" class="is-primary" icon=""]' + selectedText + '[/bulma-button]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Button',
    icon: 'fa fa-mouse-pointer',
    onClick: onClick
  };
};

exports.bulmaButton = bulmaButton;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bulmaBox = function bulmaBox(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-box]' + selectedText + '[/bulma-box]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Box',
    icon: 'fa fa-square-o',
    onClick: onClick
  };
};

var bulmaNotification = function bulmaNotification(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-notification type="is-primary"]' + selectedText + '[/bulma-notification]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Notification',
    icon: 'fa fa-flag',
    onClick: onClick
  };
};

var bulmaCard = function bulmaCard(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-card]<br />\n                      [bulma-card-header][/bulma-card-header]<br />\n                      [bulma-card-content]' + selectedText + '[/bulma-card-content]<br />\n                      [bulma-card-footer][/bulma-card-footer]<br />\n                      [/bulma-card]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Card',
    icon: 'fa fa-id-card-o',
    onClick: onClick
  };
};

var bulmaIcon = function bulmaIcon(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-icon name="" type="is-primary"]' + selectedText + '[/bulma-icon]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Icon',
    icon: 'fa fa-font-awesome',
    onClick: onClick
  };
};

var bulmaMenu = function bulmaMenu(ed) {
  var onClick = function onClick() {
    var selectedText = ed.selection.getContent();
    var returnText = '[bulma-menu]<br />\n                      [bulma-menu-label]Hello![/bulma-menu-label]<br />\n                      [bulma-menu-list]\n                        <a href="#">Link 1</a>|Text 1\n                      [/bulma-menu-list]<br />\n                      [/bulma-menu]';
    ed.execCommand('mceInsertContent', 0, returnText);
  };

  return {
    text: 'Menu',
    icon: 'fa fa-font-awesome',
    onClick: onClick
  };
};

exports.bulmaBox = bulmaBox;
exports.bulmaNotification = bulmaNotification;
exports.bulmaCard = bulmaCard;
exports.bulmaIcon = bulmaIcon;
exports.bulmaMenu = bulmaMenu;

/***/ })
/******/ ]);