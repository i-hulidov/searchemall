import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AutoSizer as _AutoSizer, AutoSizerProps, List as _List, ListProps, ListRowRenderer } from 'react-virtualized';

import { rowHeight } from '../../../data/constants/list';
import { SearchResult } from '../SearchResult/';
import { TPokemon } from '../../../types/Pokemons';

import styles from './PokemonsList.styles.module.scss';

const List = _List as unknown as FC<ListProps>;
const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

type TProps = {
  searchResults: TPokemon[];
};

const PokemonsList = ({ searchResults }: TProps) => {
  const navigate = useNavigate();

  const navigateToDetails = useCallback((path: string) => () => navigate(path), []);

  const renderRow: ListRowRenderer = ({ index, key, style }) => {
    const searchResult = searchResults[index];

    return (
      <SearchResult
        searchResult={searchResult}
        key={key}
        onClick={navigateToDetails(`/details/${searchResult.name}`)}
        style={style}
      />
    );
  };

  return searchResults.length ? (
    <div className={styles.container}>
      <AutoSizer>
        {({ width, height }) => {
          return (
            <List
              width={width}
              height={height}
              rowHeight={rowHeight}
              rowRenderer={renderRow}
              rowCount={searchResults.length}
              overscanRowCount={3}
            />
          );
        }}
      </AutoSizer>
    </div>
  ) : null;
};

export default PokemonsList;

/*
{searchResults.map((searchResult) => (
  <SearchResult
    searchResult={searchResult}
    key={searchResult.name}
    onClick={() => navigate(`/details/${searchResult.name}`)}
  />
))}
 */
