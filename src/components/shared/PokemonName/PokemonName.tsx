import React from 'react';

import { getDisplayName } from 'src/utils/getDisplayName';
import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';
import styles from './PokemonName.styles.module.scss';

type TProps = {
  name: string;
  order: number;
};

const PokemonName = ({ name, order }: TProps) => {
  const displayName = capitalizeFirstLetter(getDisplayName(name));

  return <div className={styles.container}>{`${displayName} #${order}`}</div>;
};

export default PokemonName;
