import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { pokemonDetailsBaseUrl, routes } from '../constants';
import { PokemonAvatar, PokemonStats, PokemonTypes } from '../components';
import { TPokemonDetails } from '../types';

import '../styles/Details.css';

const Details = () => {
  const [, setLoading] = useState(true);
  const [details, setDetails] = useState<TPokemonDetails | null>(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    fetch(`${pokemonDetailsBaseUrl}/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((e) => console.log('error', e));
  }, []);

  return details ? (
    <div>
      <PokemonAvatar img={details.sprites.front_default} name={details.name} />
      <PokemonTypes types={details.types} />
      <PokemonStats stats={details.stats} />
      <div className="footer">
        <Link to={routes.home}>{'<- Back'}</Link>
      </div>
    </div>
  ) : null;
};

export default Details;
