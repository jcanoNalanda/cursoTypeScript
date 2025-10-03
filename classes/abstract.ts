;(() => {
    abstract class Mutante {
        constructor(public name: string, public realName: string) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado!'
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado!'
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan')
    const magneto = new Villian('Magneto', 'Max Eisenhardt')

    console.log(wolverine.salvarMundo())
    console.log(magneto.conquistarMundo())

    const printName = (character: Mutante) => {
        console.log(character.realName)
    }

    //! const prueba = new Mutante('Prueba', 'Test') //! No se puede instanciar una clase abstracta a diferencia de las clases normales
    //? Vale para obligar a que las clases hijas implementen ciertos metodos o propiedades


    printName(wolverine)
    printName(magneto)
})()
