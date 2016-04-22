/**
 * Created by Lezwon on 14-04-2016.
 */

export default class Helper{
    
    static loadJSON(path){
        return new Promise(function (resolve,reject) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.overrideMimeType("application/json");

            //if successfull
            xmlHttp.onload = function () {
                if(xmlHttp.readyState == 4 && xmlHttp.status == "200"){
                    resolve(JSON.parse(xmlHttp.responseText));
                }
            };

            //if error occurs
            xmlHttp.onerror = reject;

            xmlHttp.open("GET", path, true);
            xmlHttp.send();
        });
    }
}