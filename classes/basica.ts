;(() => {
    class Avenger {
        private name: string

        public team: string
        public realName?: string
        static avgAge: number = 35

        constructor(name: string, team: string, realName?: string) {
            this.name = name
            this.team = team
            this.realName = realName
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Team B')
    //? console.log(Avenger.avgAge); //Las propiedades static se acceden a través de la clase

    console.log(antman.team);
})()
