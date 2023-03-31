import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Image } from 'src/components/shared/Image';

import pokeballLogo from 'src/assets/logos/pokeballLogo.png';
import { routes } from 'src/data/constants/routes';
import styles from './Header.styles.module.scss';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Image src={pokeballLogo} alt="logo" className={styles.image} onClick={() => navigate(routes.welcome)} />
      <nav>
        <Link className={styles.link} to={routes.welcome}>
          Home
        </Link>
        <Link to={routes.search}>Search</Link>
      </nav>
    </div>
  );
};

export default Header;
