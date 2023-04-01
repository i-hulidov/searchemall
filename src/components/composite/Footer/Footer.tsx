import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'src/data/constants/routes';
import styles from './Footer.styles.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <nav>
        <Link className={styles.link} to={routes.welcome}>
          Home
        </Link>
        <Link className={styles.link} to={routes.search}>
          Search
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
