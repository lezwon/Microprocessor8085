/**
 * Created by Lezwon on 24-03-2016.
 */
import DisplayField from './DisplayField';
import Keyboard from './Keyboard';
import Controller from './Controller';

var addressFieldId = "address-field";
var dataFieldId = "data-field";

//TODO add activate
//TODO add chracter typing

export default class Microprocessor{

    /*initialize all classes and objects*/
    static start(){
        this.addressField = new DisplayField(addressFieldId,4,"UPS-");
        this.dataField = new DisplayField(dataFieldId,2,"80");

        Controller.setDisplayFields(this.addressField,this.dataField);
        Keyboard.setController(Controller);
    }


    /*start listening for events*/
    static listen(){
        document.addEventListener('keypress',Keyboard.keypressHandler);
        
        var buttons = document.querySelectorAll('.button');
        for(var i = 0; i<buttons.length; i++){
            buttons[i].addEventListener('click', Keyboard.buttonClickHandler);
        }
    }


}
