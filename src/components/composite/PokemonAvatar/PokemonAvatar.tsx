import React from 'react';

import { Image } from '../../shared/Image';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import styles from './PokemonAvatar.styles.module.scss';

type TProps = {
  img: string;
  name: string;
};

const PokemonAvatar = ({ img, name }: TProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.container__image} src={img} />
      <div className={styles.container__name}>{capitalizeFirstLetter(name)}</div>
    </div>
  );
};

export default PokemonAvatar;
