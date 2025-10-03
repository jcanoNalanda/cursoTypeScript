(()=>{
    class Avenger{
        constructor(
            public name:string,
            public realName:string
        )
        {
            /* console.log("Constructor Avenger"); */
        }

        protected getFullName(){
            return `${this.name} ${this.realName}`;
        }
    }


    class Xmen extends Avenger{

        constructor (
            name:string,
            realName:string,
            public isMutant:boolean)
            {                   
                super(name , realName)
            }

            getFullNameDesdeXmen(){
                return `${super.getFullName()} - ${this.isMutant ? 'Mutante' : 'No Mutante'}`;
            }
    }

    const wolverine = new Xmen("Wolverine","Logan", true);

    /* console.log(wolverine); */
    console.log(wolverine.getFullNameDesdeXmen());

})()