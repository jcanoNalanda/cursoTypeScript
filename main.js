"use strict";
;
(() => {
    class Apocalipsis {
        nombre;
        static instance;
        constructor(nombre) {
            this.nombre = nombre;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Jesús');
            }
            return Apocalipsis.instance;
        }
        changeName(newName) {
            this.nombre = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    const apocalipsis4 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Paco');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3, apocalipsis4);
})();
//# sourceMappingURL=main.js.map