"use strict";
;
(() => {
    function activarFuncion(firstName, secondName) {
        return `El nombre es ${firstName} ${secondName || '----'}`;
    }
    console.log(activarFuncion('Juan', 'Perez'));
})();
//# sourceMappingURL=args-optional.js.map