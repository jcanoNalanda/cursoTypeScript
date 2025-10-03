;(() => {
    interface Xmen {
        name: string
        realName: string
        mutantPower(id: number): string
    }

    interface Human {
        age: number
    }

    class Mutant implements Xmen, Human {
        public name: string
        public realName: string
        public age: number

        mutantPower() {
            return this.name + ' ' + this.realName
        }
    }
})()
