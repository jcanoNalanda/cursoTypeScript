;(() => {
    let flash = { name: 'Barry Allen', age: 24, powers: ['Súper velocidad', 'Viajar en el tiempo'] }

    //! Pedirá los demás atributos no descritos
    //! flash = { name: 'Superman'}

    //* Correcto
    flash = { name: 'Superman', age: 500, powers: ['Súper fuerza'] }


    //! Si queremos añadir atributos nuevos fallará de esta manera. Más adelante se ve como arreglarlo.
    flash = {
        name: 'Superman',
        age: 500,
        powers: ['Súper fuerza'],
        getName() {
            return this.name
        }
    }
})()
