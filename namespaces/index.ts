import { getPokemon } from './generic/get-pokemon'

console.log(
    getPokemon(5)
        .then(pokemon => console.log(pokemon.name))
        .catch(console.log)
        .finally(() => console.log('Finally'))
)
