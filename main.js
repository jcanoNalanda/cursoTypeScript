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
define("index", ["require", "exports", "generic/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, generics_1.printObject)(12300);
    (0, generics_1.printObject)(new Date());
    (0, generics_1.printObject)({ a: 1, b: 2, c: 3 });
    (0, generics_1.printObject)('Hola a todos');
    console.log((0, generics_1.genericFunction)(12300));
    console.log((0, generics_1.genericFunction)({ a: 1, b: 2, c: 3 }));
    console.log((0, generics_1.genericFunction)(new Date()).toFixed(2));
    console.log((0, generics_1.genericFunction)('Hola a todos').toFixed(2));
    console.log((0, generics_1.genericFunctionArrow)('Hola a todos').toFixed(2));
    console.log((0, generics_1.genericFunctionArrow)('Hola a todos').toFixed(2));
});
//# sourceMappingURL=main.js.map