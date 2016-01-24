import DisplayField from './DisplayField';

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

//TODO gettets and setter sof rvariables in class
//TODO hex class
//TODO convert to instructions
//TODO arrays or json to store instructions and stuff

var vm = new Vue({
    el: "#app",
    data:{
        addressFieldObj : new DisplayField(4,"UPS-"),
        dataFieldObj : new DisplayField(2,"85"),
        addressField: "UPS-",
        dataField: "85",
        ACTIVE_ADDRESS: false,
        ACTIVE_DATA : false,
        MP_RESET : true
    },

    methods:{
        clearScreen: function () {
            this.addressFieldObj.clear();
            this.dataFieldObj.clear();
            this.MP_RESET = false;
        },

        updtAdd: function(e){
            if(this.ACTIVE_ADDRESS && !this.ACTIVE_DATA){
                if(this.MP_RESET) this.clearScreen();
                this.addressFieldObj.value += e.target.value;
            }
            else if(!this.ACTIVE_ADDRESS && this.ACTIVE_DATA){
                this.dataFieldObj.value += e.target.value;
            }
        },

        reset: function(){
            this.addressFieldObj.reset();
            this.dataFieldObj.reset();
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
            if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 70 || char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
                if(this.ACTIVE_ADDRESS && !this.ACTIVE_DATA){
                    if(this.MP_RESET) this.clearScreen();
                    this.addressFieldObj.value += char;
                }
                else if(!this.ACTIVE_ADDRESS && this.ACTIVE_DATA){
                    this.dataFieldObj.value += char;
                }
            }
        }
    }

});

vm.$watch('addressFieldObj',
    function(){
        this.addressField = this.addressFieldObj.value
    },
    { deep: true }
);

vm.$watch('dataFieldObj',
    function(){
        this.dataField = this.dataFieldObj.value
    },
    { deep: true }
);