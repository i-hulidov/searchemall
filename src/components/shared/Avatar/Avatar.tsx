import React from 'react';

import { Image } from 'src/components/shared/Image';
import styles from './Avatar.styles.module.scss';

type TProps = {
  img: string;
};

const Avatar = ({ img }: TProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.container__image} src={img} />
    </div>
  );
};

export default Avatar;
