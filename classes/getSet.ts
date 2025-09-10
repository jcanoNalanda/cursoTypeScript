;(() => {
    class Avenger {
        constructor(public name: string, public realName: string) {
            /* console.log("Constructor Avenger"); */
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(name: string, realName: string, public isMutant: boolean) {
            super(name, realName)
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 letras')
            }

            this.name = name
        }

        getFullNameDesdeXmen() {
            return `${super.getFullName()} - ${this.isMutant ? 'Mutante' : 'No Mutante'}`
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)

    wolverine.fullName = 'Jesús' //? Set
    wolverine.fullName = 'Je' //! Error

    console.log(wolverine.fullName)
})()
