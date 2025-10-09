define("generic/generics", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunctionArrow = exports.printObject = void 0;
    exports.genericFunction = genericFunction;
    const printObject = (argument) => {
        console.log(argument);
    };
    exports.printObject = printObject;
    function genericFunction(argument) {
        return argument;
    }
    const genericFunctionArrow = (argument) => argument;
    exports.genericFunctionArrow = genericFunctionArrow;
});
define("interfaces/hero", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("index", ["require", "exports", "generic/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).name);
});
//# sourceMappingURL=main.js.map