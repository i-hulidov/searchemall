import { Dispatch, SetStateAction } from 'react';

export type TPokemon = {
  name: string;
  url: string;
};

export type TPokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type TPokemonType = {
  type: {
    name: string;
  };
};

export type TPokemonDetails = {
  name: string;
  sprites: {
    front_default: string;
  };
  stats: TPokemonStat[];
  types: TPokemonType[];
};

export type TUseSearchReturn = {
  searchQuery: string;
  debouncedSearchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
