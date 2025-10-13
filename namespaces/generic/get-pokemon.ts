import axios from 'axios'
import { Pokemon } from './../interfaces'

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
    //? Ahora al ser una sync function devuelve una promesa y typescrip lo sabe. Si se resuelve finalmente devuelve un number
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    console.log(data.name)

    return data
}
