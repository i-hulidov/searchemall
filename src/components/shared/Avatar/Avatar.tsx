import React from 'react';

import { Image } from 'src/components/shared/Image';
import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';
import styles from './Avatar.styles.module.scss';

type TProps = {
  img: string;
  name: string;
};

const Avatar = ({ img, name }: TProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.container__image} src={img} />
      <div className={styles.container__name}>{capitalizeFirstLetter(name)}</div>
    </div>
  );
};

export default Avatar;
