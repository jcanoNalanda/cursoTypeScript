;(() => {
    class Apocalipsis {
        static instance: Apocalipsis

        private constructor(public nombre: string) {}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Jesús')
            }

            return Apocalipsis.instance
        }

        changeName(newName: string): void {
            this.nombre = newName
        }
    }

    //! const apocalipsis = new Apocalipsis('Jesús'); //! No se puede instanciar una clase con constructor privado desde fuera de la clase

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()
    const apocalipsis4 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Paco') //? Cambiamos el nombre a través de la instancia 1 y se refleja en todas las demás instancias porque todas apuntan a la misma instancia. El constructor vale para hacer una instacia única o singleton

    console.log(apocalipsis1, apocalipsis2, apocalipsis3, apocalipsis4)
})()
