import { TPokemon } from '../types';

export const contains = (searchQuery: string) => (pokemon: TPokemon) => pokemon.name.startsWith(searchQuery);

export const getPokemonIdFromUrl = (url: string) => url.slice(0, -1).split('/').pop();

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
