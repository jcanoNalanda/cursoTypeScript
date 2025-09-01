"use strict";
;
(() => {
    function activarFuncion(firstName, secondName, upper = false) {
        if (upper) {
            return `El nombre es ${firstName} ${secondName || '----'}`.toUpperCase();
        }
        else {
            return `El nombre es ${firstName} ${secondName || '----'}`;
        }
    }
    console.log(activarFuncion('Juan', 'Perez', true));
})();
//# sourceMappingURL=args-default.js.map