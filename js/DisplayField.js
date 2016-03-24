
export default class DisplayField{



    constructor(idString,len,value){
        if(len < 1 || isNaN(len))
            throw new Error("Invalid Field Length");

        this.element = document.getElementById(idString) !== null ? document.getElementById(idString): null;

        if(!this.element){
            throw new Error("Element not found. Incorrect ID");
        }

        this.resetValue = value;
        this.length = len;
        this.fieldValue = value;

    }

    /*setter for fieldValue (modifies element text on change)*/
    set fieldValue(value){
        this.element.innerHTML = value;
    }

    /*getter for field value*/
    get fieldValue(){

    }

    /*change entire value (slices if value > 4)*/
    set value(value)
    {
        if(value.length > this.length)
            this.fieldValue = value.slice(1,this.length+1);
        else
            this.fieldValue = value;


    }

    /*get the current value*/
    get value()
    {
        return this.fieldValue;
    }


    /*clear completely*/
    clear()
    {
        this.fieldValue = "";
    }

    /*show ups*/
    reset()
    {
        this.fieldValue = this.resetValue;
    }
}