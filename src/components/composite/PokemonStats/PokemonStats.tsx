import React from 'react';

import { TPokemonStat } from '../../../types/Pokemons';

type TProps = {
  stats: TPokemonStat[];
};

const PokemonStats = ({ stats }: TProps) => {
  return (
    <div className="table-container">
      <div className="table-row heading">
        <div className="row-item">Base</div>
        <div className="row-item">Stats</div>
      </div>
      <div className="body">
        {stats.map((item) => (
          <div key={item.stat.name} className="table-row">
            <div className="row-item">{item.stat.name.toUpperCase()}:</div>
            <div className="row-item">{item.base_stat}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonStats;
