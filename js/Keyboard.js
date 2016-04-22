/**
 * Created by Lezwon on 26-01-2016.
 */
import Controller from './Controller';
import Helper from './Helper';

var keyMap;

Helper.loadJSON("js/keymap.json").then(function (data) {
    keyMap = data;
}).catch(function () {
    console.log("Could not load Keymap File");
});


export default class Keyboard{

    static buttonClickHandler(e) {
        var character = e.target.value;
        Keyboard.validate(character);
    }

    static keypressHandler(e) {
        var character = String.fromCharCode(e.keyCode).toUpperCase();
        Keyboard.validate(character);
    }

    static validate(key){
        for(var el in keyMap){
            if(keyMap.hasOwnProperty(el)){
                if(el == key){
                    Controller.inputKey(key);
                    return true;
                }
            }
        }
        return false;
    }
}