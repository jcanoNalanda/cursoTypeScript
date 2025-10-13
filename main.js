var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define("generic/get-pokemon", ["require", "exports", "../../node_modules/axios/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemon = void 0;
    index_1 = __importDefault(index_1);
    const getPokemon = async (pokemonId) => {
        const resp = await index_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        console.log(resp);
        return 1;
    };
    exports.getPokemon = getPokemon;
});
define("index", ["require", "exports", "generic/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log((0, get_pokemon_1.getPokemon)(5)
        .then(console.log)
        .catch(console.log)
        .finally(() => console.log('Finally')));
});
//# sourceMappingURL=main.js.map