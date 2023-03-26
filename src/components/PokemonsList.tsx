import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { allPokemonsUrl, searchCharactersRequired } from '../constants';
import { SearchResult } from '../components';
import { TPokemon } from '../types';
import { contains } from '../utilities';

type TProps = {
  searchQuery: string;
  debouncedSearchQuery: string;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
};

const PokemonsList = ({ searchQuery, debouncedSearchQuery, setLoading }: TProps) => {
  const [pokemonList, setPokemonList] = useState<TPokemon[]>([]);
  const [searchResults, setSearchResults] = useState<TPokemon[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(allPokemonsUrl)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch((e) => console.log('error', e));
  }, []);

  useEffect(() => {
    if (debouncedSearchQuery.length >= searchCharactersRequired) {
      const filteredPokemons = pokemonList.filter(contains(debouncedSearchQuery));
      setSearchResults(filteredPokemons);
    }
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (debouncedSearchQuery.length >= searchCharactersRequired && searchResults.length === 0) {
    return <div>No pokemons found</div>;
  }

  return searchResults.length ? (
    <div className="search-list">
      {searchResults.map((searchResult) => (
        <SearchResult
          searchResult={searchResult}
          key={searchResult.name}
          onClick={() => navigate(`details/${searchResult.name}`)}
        />
      ))}
    </div>
  ) : null;
};

export default PokemonsList;
