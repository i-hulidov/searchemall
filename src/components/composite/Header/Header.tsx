import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Image } from 'src/components/shared/Image';

import pokeballLogo from 'src/assets/logos/pokeballLogo.png';
import { routes } from 'src/data/constants/routes';
import styles from './Header.styles.module.scss';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Image src={pokeballLogo} alt="logo" className={styles.image} onClick={() => navigate(routes.welcome)} />
      <span className={styles.text}>Search &apos;Em All</span>
    </div>
  );
};

export default Header;
