import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PokemonAPI } from 'src/api/PokemonAPI';
import { PokemonAvatar } from 'src/components/composite/PokemonAvatar';
import { PokemonStats } from 'src/components/composite/PokemonStats';
import { PokemonTypes } from 'src/components/composite/PokemonTypes';
import { Loader } from 'src/components/shared/Loader';
import { routes } from 'src/data/constants/routes';
import { TPokemonDetails } from 'src/types/Pokemons';

import styles from './Details.styles.module.scss';

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<TPokemonDetails | null>(null);
  const { pokemonName } = useParams();
  useEffect(() => {
    if (pokemonName) {
      PokemonAPI.getPokemonDetails(pokemonName).then((res) => {
        setDetails(res);
        setLoading(false);
      });
    }
  }, []);

  if (!details) {
    return null;
  }

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PokemonAvatar img={details.sprites.front_default} name={details.name} />
          <PokemonTypes types={details.types} />
          <PokemonStats stats={details.stats} />
          <Link className={styles.link} to={routes.search}>
            {'Back'}
          </Link>
        </>
      )}
    </div>
  );
};

export default Details;
