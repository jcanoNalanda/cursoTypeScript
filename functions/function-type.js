"use strict";
;
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    //* Dependiendo de como declaremos la variable myFunction nos dará error o no con las funciones asociadas
    //?    let myFunction: number
    myFunction = 10;
    console.log({ myFunction });
    //?    let myFunction: (y:number, z:number) => number
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    //?    let myFunction: (y:string) => string
    myFunction = greet;
    console.log(myFunction('Fernando'));
    //? let myFunction: () => string
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
