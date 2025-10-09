

import axios from "../../node_modules/axios/index"

export const getPokemon = async (pokemonId: number) => { //? Ahora al ser una sync function devuelve una promesa y typescrip lo sabe. Si se resuelve finalmente devuelve un number
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    console.log(resp)

    return 1
}
