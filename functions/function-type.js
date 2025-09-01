"use strict";
;
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    myFunction = 10;
    console.log({ myFunction });
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Fernando'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map