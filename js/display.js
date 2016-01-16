var length =  Symbol("Length of the Field");
var field =  Symbol("Value of the Field");


export default class DisplayField{
    
    constructor(l){

        if(l < 1 || isNaN(l))
            throw new Error("Invalid Field Length");

        this[length] = l;
        this[field] = null;
    }

    /*change entire value*/
    updateAddessField(value)
    {
        this[field] = value;
    }

    /*add a char to value*/
    addChar(value)
    {
        this[field] += value;
        if(this[field].length > this[length])
            this[field] = this[field].slice(1,5);
    }

    /*clear completely*/
    clearDisplay()
    {

    }

    /*show ups*/
    reset()
    {

    }

    /*show dot*/
    activate()
    {

    }

    /*get the current value*/
    getValue()
    {

    }
}