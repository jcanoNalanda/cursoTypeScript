"use strict";
;
(() => {
    class Avenger {
        name;
        team;
        realName;
        static avgAge = 35;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    const antman = new Avenger('Antman', 'Team B', 'Scott Lang');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map