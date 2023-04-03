import { TPokemon } from 'src/types/Pokemons';

export const contains = (searchQuery: string) => (pokemon: TPokemon) =>
  pokemon.name.includes(searchQuery.toLowerCase());
