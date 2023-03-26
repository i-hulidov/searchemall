import React, { useState } from 'react';

import { useSearch } from '../hooks';
import { PokemonsList } from '../components';

import '../styles/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const { searchQuery, setSearchQuery, debouncedSearchQuery } = useSearch();

  return (
    <div className="container">
      <input
        name="pokemon"
        type="text"
        placeholder="Enter a pokemon's name"
        value={searchQuery}
        disabled={loading}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <PokemonsList
        searchQuery={searchQuery}
        debouncedSearchQuery={debouncedSearchQuery}
        isLoading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default Home;
