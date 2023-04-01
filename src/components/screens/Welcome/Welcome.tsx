import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'src/components/shared/Image';
import { routes } from 'src/data/constants/routes';
import pikachuWavingImg from 'src/assets/images/pikachu-waving.png';
import styles from './Welcome.styles.module.scss';

const Welcome = () => {
  return (
    <div className={styles.container}>
      <Image src={pikachuWavingImg} alt="pikachu" className={styles.image} />
      <p className={styles.header}>Welcome!</p>
      <p>
        You can find your favourite pokemons{' '}
        <Link className={styles.link} to={routes.search}>
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default Welcome;
