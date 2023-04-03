import React, { useEffect, useState } from 'react';
import { PokemonAPI } from 'src/api/PokemonAPI';

import { Loader } from 'src/components/shared/Loader';
import { TPokemonAbility, TPokemonAbilityDetails } from 'src/types/Pokemons';
import { getDisplayName } from 'src/utils/getDisplayName';
import { getEnglishFlavorText } from './utilities/getEnglishFlavorText';
import styles from './Abilities.styles.module.scss';

type TAbilitiesProps = {
  abilities: TPokemonAbility[];
};

type TAbilityItemProps = {
  ability: TPokemonAbility;
};

const AbilityItem = ({ ability }: TAbilityItemProps) => {
  const [abilityDetails, setAbilityDetails] = useState<TPokemonAbilityDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PokemonAPI.getPokemonAbility(ability.ability.url).then((res) => {
      setAbilityDetails(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.abilityItem}>
      {loading || !abilityDetails ? (
        <Loader style={{ width: '24px', height: '24px', alignSelf: 'center' }} />
      ) : (
        <>
          <div className={styles.abilityItem__name}>{getDisplayName(abilityDetails.name)}</div>
          <div className={styles.abilityItem__description}>{getEnglishFlavorText(abilityDetails)}</div>
        </>
      )}
    </div>
  );
};

const Abilities = ({ abilities }: TAbilitiesProps) => {
  if (!abilities.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Abilities</div>
      {abilities.map((ability) => {
        return <AbilityItem key={ability.ability.name} ability={ability} />;
      })}
    </div>
  );
};

export default Abilities;
