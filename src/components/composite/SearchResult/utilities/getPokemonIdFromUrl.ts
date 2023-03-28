export const getPokemonIdFromUrl = (url: string) => url.slice(0, -1).split('/').pop();
