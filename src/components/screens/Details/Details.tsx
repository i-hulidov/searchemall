import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PokemonAPI } from 'src/api/PokemonAPI';
import { Abilities } from 'src/components/composite/Abilities';
import Info from 'src/components/composite/Info/Info';
import { PokemonAvatar } from 'src/components/composite/PokemonAvatar';
import { PokemonStats } from 'src/components/composite/PokemonStats';
import { PokemonTypes } from 'src/components/composite/PokemonTypes';
import Button from 'src/components/shared/Button/Button';
import { Loader } from 'src/components/shared/Loader';
import { PokemonName } from 'src/components/shared/PokemonName';
import { routes } from 'src/data/constants/routes';
import { TPokemonDetails } from 'src/types/Pokemons';

import styles from './Details.styles.module.scss';

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<TPokemonDetails | null>(null);
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (pokemonName) {
      PokemonAPI.getPokemonDetails(pokemonName).then((res) => {
        setDetails(res);
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      {loading || !details ? (
        <Loader style={{ margin: 'auto ' }} />
      ) : (
        <>
          <div className={styles.innerWrapper}>
            <div className={styles.leftContainer}>
              <PokemonName name={details.name} order={details.order} />
              <PokemonAvatar sprites={details.sprites} />
              <PokemonTypes types={details.types} />
              <Info exp={details.base_experience} height={details.height} weight={details.weight} />
            </div>
            <div className={styles.rightContainer}>
              <PokemonStats stats={details.stats} />
              <Abilities abilities={details.abilities} />
            </div>
          </div>
          <div className={styles.backButtonContainer}>
            <Button name="Back" onClick={() => navigate(routes.search)} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
