/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _display = __webpack_require__(1);

	var _display2 = _interopRequireDefault(_display);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MAX_LENGTH_ADDRESS = 4;
	var MAX_LENGTH_DATA = 2;
	var RESET = 0;
	var EXAM_MEM = 1;
	var EXAM_REG = 2;
	var BLK_MOVE = 3;
	var SINGLE_STEP = 4;
	var GO = 5;
	var EXEC = 6;
	var DELETE = 7;
	var INSERT = 8;

	var ACTIVE_FUNCTION = RESET;

	new Vue({
	    el: "#app",
	    data: {
	        addressField: "UPS-",
	        dataField: "85",
	        ACTIVE_ADDRESS: false,
	        ACTIVE_DATA: false,
	        MP_RESET: true
	    },

	    methods: {
	        clearScreen: function clearScreen() {
	            this.addressField = "";
	            this.dataField = "";
	            this.MP_RESET = false;
	        },

	        updtAdd: function updtAdd(e) {
	            if (this.ACTIVE_ADDRESS && !this.ACTIVE_DATA) {
	                if (this.MP_RESET) this.clearScreen();
	                this.addressField += e.target.value;
	            } else if (!this.ACTIVE_ADDRESS && this.ACTIVE_DATA) {
	                this.dataField += e.target.value;
	            }
	        },

	        reset: function reset() {
	            this.addressField = "UPS-";
	            this.dataField = "85";
	            this.MP_RESET = 1;
	            this.ACTIVE_ADDRESS = false;
	            this.ACTIVE_DATA = false;
	        },

	        examRegister: function examRegister() {},

	        examMemory: function examMemory() {
	            this.ACTIVE_ADDRESS = true;
	            this.clearScreen();
	        },

	        next: function next() {

	            if (this.MP_RESET && !this.ACTIVE_ADDRESS) return;

	            this.ACTIVE_ADDRESS = false;
	            this.ACTIVE_DATA = true;
	        },

	        keyPressed: function keyPressed(e) {
	            var char = String.fromCharCode(e.keyCode).toUpperCase();
	            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 97) {
	                //AddressField.addChar(char);
	            }
	        }

	    },

	    watch: {
	        addressField: function addressField() {
	            if (this.addressField.length > MAX_LENGTH_ADDRESS) this.addressField = this.addressField.slice(1, 5);
	        },

	        dataField: function dataField() {
	            if (this.dataField.length > MAX_LENGTH_DATA) this.dataField = this.dataField.slice(1, 3);
	        }
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var length =  Symbol();
	var field =  Symbol();

	var DisplayField = function () {
	    function DisplayField(l) {
	        _classCallCheck(this, DisplayField);

	        if (l < 1 || isNaN(l)) throw new Error("Invalid Field Length");

	        this[length] = l;
	        this[field] = null;
	    }

	    /*change entire value*/

	    _createClass(DisplayField, [{
	        key: "updateAddessField",
	        value: function updateAddessField(value) {
	            this[field] = value;
	        }

	        /*add a char to value*/

	    }, {
	        key: "addChar",
	        value: function addChar(value) {
	            this[field] += value;
	            if (this[field].length > this[length]) this[field] = this[field].slice(1, 5);
	        }

	        /*clear completely*/

	    }, {
	        key: "clearDisplay",
	        value: function clearDisplay() {}

	        /*show ups*/

	    }, {
	        key: "reset",
	        value: function reset() {}

	        /*show dot*/

	    }, {
	        key: "activate",
	        value: function activate() {}

	        /*get the current value*/

	    }, {
	        key: "getValue",
	        value: function getValue() {}
	    }]);

	    return DisplayField;
	}();

	exports.default = DisplayField;

/***/ }
/******/ ]);