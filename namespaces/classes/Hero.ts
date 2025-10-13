
import powers from "../data/powers";

export class Hero{
    constructor(public name:string, public powerId:number, public age:number){
        this.name = name;
        this.powerId = powerId;
        this.age = age;
    }
    get power(): string{
        return powers.find(power => power.id === this.powerId)?.desc || 'No tiene poder';
    }
}

export class Hero2{}
export class Hero3{}
export class Hero4{}