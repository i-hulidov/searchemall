import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routes';

import styles from './Welcome.styles.module.scss';

const Welcome = () => {
  return (
    <div className={styles.container}>
      Welcome! You can find your favourite pokemons{' '}
      <Link className={styles.link} to={routes.search}>
        here
      </Link>
    </div>
  );
};

export default Welcome;
