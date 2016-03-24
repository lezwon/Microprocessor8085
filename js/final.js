/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Microprocessor = __webpack_require__(1);
	
	var _Microprocessor2 = _interopRequireDefault(_Microprocessor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function () {
	    _Microprocessor2.default.start();
	    _Microprocessor2.default.listen();
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Lezwon on 24-03-2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _DisplayField = __webpack_require__(2);
	
	var _DisplayField2 = _interopRequireDefault(_DisplayField);
	
	var _Keyboard = __webpack_require__(3);
	
	var _Keyboard2 = _interopRequireDefault(_Keyboard);
	
	var _Controller = __webpack_require__(4);
	
	var _Controller2 = _interopRequireDefault(_Controller);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var addressFieldId = "address-field";
	var dataFieldId = "data-field";
	
	//TODO add activate
	//TODO add chracter typing
	
	var Microprocessor = function () {
	    function Microprocessor() {
	        _classCallCheck(this, Microprocessor);
	    }
	
	    _createClass(Microprocessor, null, [{
	        key: 'start',
	
	        /*initialize all classes and objects*/
	        value: function start() {
	            this.addressField = new _DisplayField2.default(addressFieldId, 4, "UPS-");
	            this.dataField = new _DisplayField2.default(dataFieldId, 2, "80");
	
	            _Controller2.default.setDisplayFields(this.addressField, this.dataField);
	            _Keyboard2.default.setController(_Controller2.default);
	        }
	
	        /*start listening for events*/
	
	    }, {
	        key: 'listen',
	        value: function listen() {
	            document.addEventListener('keypress', _Keyboard2.default.keypressHandler);
	
	            var buttons = document.querySelectorAll('.button');
	            for (var i = 0; i < buttons.length; i++) {
	                buttons[i].addEventListener('click', _Keyboard2.default.buttonClickHandler);
	            }
	        }
	    }]);
	
	    return Microprocessor;
	}();
	
	exports.default = Microprocessor;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayField = function () {
	    function DisplayField(idString, len, value) {
	        _classCallCheck(this, DisplayField);
	
	        if (len < 1 || isNaN(len)) throw new Error("Invalid Field Length");
	
	        this.element = document.getElementById(idString) !== null ? document.getElementById(idString) : null;
	
	        if (!this.element) {
	            throw new Error("Element not found. Incorrect ID");
	        }
	
	        this.resetValue = value;
	        this.length = len;
	        this.fieldValue = value;
	    }
	
	    /*setter for fieldValue (modifies element text on change)*/
	
	    _createClass(DisplayField, [{
	        key: "clear",
	
	        /*clear completely*/
	        value: function clear() {
	            this.fieldValue = "";
	        }
	
	        /*show ups*/
	
	    }, {
	        key: "reset",
	        value: function reset() {
	            this.fieldValue = this.resetValue;
	        }
	    }, {
	        key: "fieldValue",
	        set: function set(value) {
	            this.element.innerHTML = value;
	        }
	
	        /*getter for field value*/
	        ,
	        get: function get() {}
	
	        /*change entire value (slices if value > 4)*/
	
	    }, {
	        key: "value",
	        set: function set(value) {
	            if (value.length > this.length) this.fieldValue = value.slice(1, this.length + 1);else this.fieldValue = value;
	        }
	
	        /*get the current value*/
	        ,
	        get: function get() {
	            return this.fieldValue;
	        }
	    }]);
	
	    return DisplayField;
	}();
	
	exports.default = DisplayField;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Lezwon on 26-01-2016.
	 */
	
	var validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", //data keys
	"N", "M", "K", "L", "O", "P", "R", "S", "G", "H", "J", "I", "Y", "U"]; //control keys
	
	var Keyboard = function () {
	    function Keyboard() {
	        _classCallCheck(this, Keyboard);
	    }
	
	    _createClass(Keyboard, null, [{
	        key: "setController",
	        value: function setController(Controller) {
	            this.controller = Controller;
	        }
	    }, {
	        key: "buttonClickHandler",
	        value: function buttonClickHandler(e) {
	            var character = e.target.value;
	            Keyboard.sendToController(character);
	        }
	    }, {
	        key: "keypressHandler",
	        value: function keypressHandler(e) {
	            var character = String.fromCharCode(e.keyCode).toUpperCase();
	            Keyboard.sendToController(character);
	        }
	    }, {
	        key: "sendToController",
	        value: function sendToController(key) {
	            for (var i = 0; i < validKeys.length; i++) {
	                if (validKeys[i] == key) {
	                    alert(key);
	                    return true;
	                }
	            }return false;
	        }
	    }]);
	
	    return Keyboard;
	}();
	
	exports.default = Keyboard;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controller = function () {
	    function Controller() {
	        _classCallCheck(this, Controller);
	    }
	
	    _createClass(Controller, null, [{
	        key: "setDisplayFields",
	        value: function setDisplayFields(addressField, dataField) {
	            this.addressField = addressField;
	            this.dataField = dataField;
	        }
	    }]);
	
	    return Controller;
	}();
	
	exports.default = Controller;

/***/ }
/******/ ]);
//# sourceMappingURL=final.js.map