;(() => {
    class Avenger {
        // private name: string
        // public team: string
        // public realName?: string
        static avgAge: number = 35
        static getAvgAge() {
            return this.name; //Esto devuelve el nombre de la clase y no un atributo como tal ya que no existe
        }

        constructor(private name: string, private team: string, public realName?: string) {}

        public bio() {
            return `${this.name} (${this.realName}) is a member of ${this.team}.`
        }


    }

    const antman: Avenger = new Avenger('Antman', 'Team Avengers', 'Scott Lang')
    //? console.log(Avenger.avgAge); //Las propiedades static se acceden a través de la clase

    console.log(Avenger.getAvgAge()); //Esto devuelve el nombre de la clase y no un atributo como tal ya que no existe
})()
