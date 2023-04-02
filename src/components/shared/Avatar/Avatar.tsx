import React from 'react';

import { Image } from 'src/components/shared/Image';
import styles from './Avatar.styles.module.scss';

type TProps = {
  img: string;
  onClick: () => void;
};

const Avatar = ({ img, onClick }: TProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <Image className={styles.container__image} src={img} />
    </div>
  );
};

export default Avatar;
