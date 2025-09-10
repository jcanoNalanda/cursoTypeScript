"use strict";
;
(() => {
    class Avenger {
        name;
        realName;
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        isMutant;
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            return `${super.getFullName()} - ${this.isMutant ? 'Mutante' : 'No Mutante'}`;
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Jesús';
    wolverine.fullName = 'Je';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map