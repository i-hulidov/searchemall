import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { pokemonUrl } from '../../../data/constants/urls';
import { PokemonAvatar, PokemonStats, PokemonTypes } from '../../composite';
import { TPokemonDetails } from '../../../types/Pokemons';
import { routes } from '../../..//routes';

import './Details.styles.css';

const Details = () => {
  const [, setLoading] = useState(true);
  const [details, setDetails] = useState<TPokemonDetails | null>(null);
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${pokemonUrl}/${pokemonName}`)
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
      <div className="footer" onClick={() => navigate(-1)}>
        Go back
        {/*<Link to={routes.search}>{'<- Back'}</Link>*/}
      </div>
    </div>
  ) : null;
};

export default Details;
