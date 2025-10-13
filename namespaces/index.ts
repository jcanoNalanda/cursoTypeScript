import { getPokemon } from './generic/get-pokemon'

console.log(
    getPokemon(5)
        .then(console.log)
        .catch(console.log)
        .finally(() => console.log('Finally'))
)
