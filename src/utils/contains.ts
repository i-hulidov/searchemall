import { TPokemon } from '../types/Pokemons';

export const contains = (searchQuery: string) => (pokemon: TPokemon) => pokemon.name.startsWith(searchQuery);
