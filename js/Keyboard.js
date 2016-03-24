/**
 * Created by Lezwon on 26-01-2016.
 */

var validKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", //data keys
    "N", "M", "K", "L", "O", "P", "R", "S", "G", "H", "J", "I", "Y", "U" ]; //control keys

export default class Keyboard{

    static setController(Controller){
        this.controller = Controller;
    }
    
    static buttonClickHandler(e) {
        var character = e.target.value;
        Keyboard.sendToController(character);
    }

    static keypressHandler(e) {
        var character = String.fromCharCode(e.keyCode).toUpperCase();
        Keyboard.sendToController(character);
    }

    static sendToController(key){
        for(var i=0; i<validKeys.length; i++)
            if(validKeys[i] == key){
                alert(key);
                return true;
            }
        return false;
    }
}