import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListRowRenderer } from 'react-virtualized';
import { List } from 'src/components/shared/List';

import { rowHeight, overScanRowCount } from 'src/data/constants/pokemonSearchList';
import { SearchResult } from '../SearchResult/';
import { TPokemon } from 'src/types/Pokemons';

type TProps = {
  searchResults: TPokemon[];
};

const renderRow: ListRowRenderer = ({ index, key, style, parent }) => {
  const { props } = parent;
  const { data, onItemClick } = props;

  const searchResult = data[index];

  return (
    <SearchResult
      searchResult={searchResult}
      key={key}
      onClick={onItemClick(`/details/${searchResult.name}`)}
      style={style}
    />
  );
};

const PokemonsList = ({ searchResults }: TProps) => {
  const navigate = useNavigate();

  const navigateToDetails = useCallback((path: string) => () => navigate(path), []);

  return (
    <List
      data={searchResults}
      rowHeight={rowHeight}
      overScanRowCount={overScanRowCount}
      renderRow={renderRow}
      onItemClick={navigateToDetails}
    />
  );
};

export default PokemonsList;
