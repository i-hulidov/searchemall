import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PokemonAvatar } from 'src/components/composite/PokemonAvatar';
import { PokemonStats } from 'src/components/composite/PokemonStats';
import { PokemonTypes } from 'src/components/composite/PokemonTypes';
import { routes } from 'src/data/constants/routes';
import { pokemonUrl } from 'src/data/constants/urls';
import { TPokemonDetails } from 'src/types/Pokemons';

import styles from './Details.styles.module.scss';

const Details = () => {
  const [, setLoading] = useState(true);
  const [details, setDetails] = useState<TPokemonDetails | null>(null);
  const { pokemonName } = useParams();

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
    <div className={styles.container}>
      <PokemonAvatar img={details.sprites.front_default} name={details.name} />
      <PokemonTypes types={details.types} />
      <PokemonStats stats={details.stats} />
      <Link className={styles.link} to={routes.search}>
        {'Back'}
      </Link>
    </div>
  ) : null;
};

export default Details;
