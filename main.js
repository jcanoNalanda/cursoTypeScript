"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("classes/Hero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    class Hero {
        name;
        power;
        age;
        constructor(name, power, age) {
            this.name = name;
            this.power = power;
            this.age = age;
        }
    }
    exports.Hero = Hero;
    class Hero2 {
    }
    exports.Hero2 = Hero2;
    class Hero3 {
    }
    exports.Hero3 = Hero3;
    class Hero4 {
    }
    exports.Hero4 = Hero4;
});
define("data/powers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.powers = void 0;
    exports.powers = [
        { id: 1, desc: 'Flying' },
        { id: 2, desc: 'Strength' }
    ];
    exports.default = exports.powers;
});
define("index", ["require", "exports", "classes/Hero", "data/powers"], function (require, exports, Hero_1, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    powers_1 = __importDefault(powers_1);
    const ironman = new Hero_1.Hero('Ironman', 100, 40);
    console.log(ironman);
    console.log(powers_1.default);
});
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