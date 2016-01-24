export default class DisplayField{
    
    constructor(len,value){
        if(len < 1 || isNaN(len))
            throw new Error("Invalid Field Length");

        this.resetValue = value;
        this.length = len;
        this.fieldValue = value;
    }


    //change entire value
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

    /*add a char to value*/
    addChar(value)
    {
        this.fieldValue += value;
        if(this.fieldValue.length > this.length)
            this.fieldValue = this.fieldValue.slice(1,this.length+1);
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