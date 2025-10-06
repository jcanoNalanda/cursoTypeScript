"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.trim().length > 3;
    };
    Validations.validateDate = (date) => {
        return !isNaN(date.valueOf());
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Hola'));

//# sourceMappingURL=main.js.map