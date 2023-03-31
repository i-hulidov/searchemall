import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Image } from '../../shared/Image';
import { routes } from '../../../routes';
import pokeballLogo from '../../../assets/logos/pokeballLogo.png';
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
