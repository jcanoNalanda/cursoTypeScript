"use strict";
;
(() => {
    //! Pedirá los demás atributos no descritos
    //! flash = { name: 'Superman'}
    //! Si queremos añadir atributos nuevos fallará de esta manera.
    // let flash: { name: string, age: number, powers: string[] } = { name: 'Barry Allen', age: 24, powers: ['Súper velocidad', 'Viajar en el tiempo'] }
    //
    //  flash = { name: 'Superman', age: 500, powers: ['Súper fuerza'] }
    // 
    //  flash = {
    //     name: 'Superman',
    //     age: 500,
    //     powers: ['Súper fuerza'],
    //     getName() {
    //         return this.name
    //     }
    // }
    let flash = { name: 'Barry Allen', age: 24, powers: ['Súper velocidad', 'Viajar en el tiempo'] };
    flash = {
        name: 'Superman',
        // age: 500,
        powers: ['Súper fuerza'],
        // getName() {
        //     return this.name
        // }
    };
    console.log(flash);
})();
