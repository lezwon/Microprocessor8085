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

	"use strict";
	
	var _DisplayField = __webpack_require__(1);
	
	var _DisplayField2 = _interopRequireDefault(_DisplayField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	
	//TODO gettets and setter sof rvariables in class
	//TODO hex class
	//TODO convert to instructions
	//TODO arrays or json to store instructions and stuff
	
	var vm = new Vue({
	    el: "#app",
	    data: {
	        addressFieldObj: new _DisplayField2.default(4, "UPS-"),
	        dataFieldObj: new _DisplayField2.default(2, "85"),
	        addressField: "UPS-",
	        dataField: "85",
	        ACTIVE_ADDRESS: false,
	        ACTIVE_DATA: false,
	        MP_RESET: true
	    },
	
	    methods: {
	        clearScreen: function clearScreen() {
	            this.addressFieldObj.clear();
	            this.dataFieldObj.clear();
	            this.MP_RESET = false;
	        },
	
	        updtAdd: function updtAdd(e) {
	            if (this.ACTIVE_ADDRESS && !this.ACTIVE_DATA) {
	                if (this.MP_RESET) this.clearScreen();
	                this.addressFieldObj.value += e.target.value;
	            } else if (!this.ACTIVE_ADDRESS && this.ACTIVE_DATA) {
	                this.dataFieldObj.value += e.target.value;
	            }
	        },
	
	        reset: function reset() {
	            this.addressFieldObj.reset();
	            this.dataFieldObj.reset();
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
	            if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 70 || char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
	                if (this.ACTIVE_ADDRESS && !this.ACTIVE_DATA) {
	                    if (this.MP_RESET) this.clearScreen();
	                    this.addressFieldObj.value += char;
	                } else if (!this.ACTIVE_ADDRESS && this.ACTIVE_DATA) {
	                    this.dataFieldObj.value += char;
	                }
	            }
	        }
	    }
	
	});
	
	vm.$watch('addressFieldObj', function () {
	    this.addressField = this.addressFieldObj.value;
	}, { deep: true });
	
	vm.$watch('dataFieldObj', function () {
	    this.dataField = this.dataFieldObj.value;
	}, { deep: true });

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayField = function () {
	    function DisplayField(len, value) {
	        _classCallCheck(this, DisplayField);
	
	        if (len < 1 || isNaN(len)) throw new Error("Invalid Field Length");
	
	        this.resetValue = value;
	        this.length = len;
	        this.fieldValue = value;
	    }
	
	    //change entire value
	
	    _createClass(DisplayField, [{
	        key: "addChar",
	
	        /*add a char to value*/
	        value: function addChar(value) {
	            this.fieldValue += value;
	            if (this.fieldValue.length > this.length) this.fieldValue = this.fieldValue.slice(1, this.length + 1);
	        }
	
	        /*clear completely*/
	
	    }, {
	        key: "clear",
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

/***/ }
/******/ ]);
//# sourceMappingURL=final.js.map