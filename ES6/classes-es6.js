(()=>{


    class Avenger {
       name;
       power;

       constructor(name = 'Unknown', power = 0) {
           this.name = name;
           this.power = power;
       }
    }


    class FlyingAvenger extends Avenger {
        fly;
        constructor(name, power, fly) {
            super(name, power);
            this.fly = fly;
        }
    }



    const hulk = new Avenger('Hulk', 9000);

    console.log(hulk)

})()