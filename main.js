"use strict";
;
(() => {
    const batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4
    };
    const bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        }
    };
    const villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true
        }
    ];
    const charles = {
        poder: 'psiquico',
        estatura: 1.78
    };
    const apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel']
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
    console.log(mystique);
})();
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
;
(() => {
    function activarFuncion(firstName, secondName) {
        return `El nombre es ${firstName} ${secondName || '----'}`;
    }
    console.log(activarFuncion('Juan', 'Perez'));
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
;
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
;
(() => {
    const primero = 5;
    function activarFuncion(primero) {
        return `El número es ${primero}`;
    }
    console.log(activarFuncion(primero));
})();
(() => {
    let isSuperman = true;
})();
//# sourceMappingURL=main.js.map