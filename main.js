"use strict";
;
(() => {
    const avengers = {
        nick: 'Nick Fury',
        ironman: 'Robert Downey Jr.',
        cap: 'Captain America',
        activo: true,
        poder: 140.12313
    };
    const printAvenger = ({ ironman, ...resto }) => {
        console.log(ironman, resto);
    };
    printAvenger(avengers);
})();
//# sourceMappingURL=main.js.map