import DisplayField from './display';

const MAX_LENGTH_ADDRESS = 4;
const MAX_LENGTH_DATA = 2;
const RESET = 0;
const EXAM_MEM = 1;
const EXAM_REG = 2;
const BLK_MOVE = 3;
const SINGLE_STEP = 4;
const GO = 5;
const EXEC = 6;
const DELETE = 7;
const INSERT = 8;

var ACTIVE_FUNCTION = RESET;


new Vue({
   el: "#app",
    data:{
        addressField: "UPS-",
        dataField: "85",
        ACTIVE_ADDRESS: false,
        ACTIVE_DATA : false,
        MP_RESET : true
    },

    methods:{
        clearScreen: function () {
            this.addressField = "";
            this.dataField= "";
            this.MP_RESET = false;
        },

        updtAdd: function(e){
            if(this.ACTIVE_ADDRESS && !this.ACTIVE_DATA){
                if(this.MP_RESET) this.clearScreen();
                this.addressField += e.target.value;
            }
            else if(!this.ACTIVE_ADDRESS && this.ACTIVE_DATA){
                this.dataField += e.target.value;
            }

        },

        reset: function(){
            this.addressField = "UPS-";
            this.dataField = "85";
            this.MP_RESET = 1;
            this.ACTIVE_ADDRESS = false;
            this.ACTIVE_DATA = false;
        },

        examRegister: function(){

        },

        examMemory: function(){
            this.ACTIVE_ADDRESS = true;
            this.clearScreen()
        },

        next:function(){

            if(this.MP_RESET && !this.ACTIVE_ADDRESS)
                return;

            this.ACTIVE_ADDRESS = false;
            this.ACTIVE_DATA = true;
        },

        keyPressed: function(e){
            var char = String.fromCharCode(e.keyCode).toUpperCase();
            if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 97){
                //AddressField.addChar(char);
            }
        }

    },

    watch: {
        addressField: function(){
            if(this.addressField.length > MAX_LENGTH_ADDRESS)
                this.addressField = this.addressField.slice(1,5);
        },

        dataField: function(){
            if(this.dataField.length > MAX_LENGTH_DATA)
                this.dataField = this.dataField.slice(1,3);
        }
    }
});