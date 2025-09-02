"use strict";
;
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Team B');
    console.log(antman.team);
})();
//# sourceMappingURL=main.js.map