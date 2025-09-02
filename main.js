"use strict";
;
(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.realName}) is a member of ${this.team}.`;
        }
    }
    const antman = new Avenger('Antman', 'Team Avengers', 'Scott Lang');
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map