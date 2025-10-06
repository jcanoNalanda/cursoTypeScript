var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
define("classes/Hero", ["require", "exports", "data/powers"], function (require, exports, powers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero4 = exports.Hero3 = exports.Hero2 = exports.Hero = void 0;
    powers_1 = __importDefault(powers_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = powers_1.default.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'No tiene poder';
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
define("index", ["require", "exports", "classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ironman = new Hero_1.Hero('Ironman', 100, 40);
    console.log(ironman);
    console.log(ironman.power);
});
//# sourceMappingURL=main.js.map