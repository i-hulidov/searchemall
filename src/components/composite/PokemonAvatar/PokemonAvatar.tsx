import React from 'react';

import { Image } from 'src/components/shared/Image';
import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';
import styles from './PokemonAvatar.styles.module.scss';

type TProps = {
  img: string;
  name: string;
};

// TODO: Combine modal and avatar components
const PokemonAvatar = ({ img, name }: TProps) => {
  return (
    // TODO move to separate component
    <div className={styles.container}>
      <Image className={styles.container__image} src={img} />
      <div className={styles.container__name}>{capitalizeFirstLetter(name)}</div>
    </div>
  );
};

export default PokemonAvatar;
