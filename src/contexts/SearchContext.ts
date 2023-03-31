import { createContext } from 'react';

import { TPokemon } from '../types/Pokemons';

type TSearchContext = {
  loading: boolean;
  searchQuery: string;
  pokemonList: TPokemon[];
  searchResults: TPokemon[];
  setSearchQuery: (value: string) => void;
  setLoading: (value: boolean) => void;
};

export const SearchContext = createContext({} as TSearchContext);
