export default class Controller{

    static setDisplayFields(addressField, dataField) {
        this.addressField = addressField;
        this.dataField = dataField;
    }

    static inputKey(key) {
        alert(key);
    }
}