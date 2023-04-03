import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'src/components/shared/Button';
import { Image } from 'src/components/shared/Image';
import { routes } from 'src/data/constants/routes';
import styles from './PokemonNotFound.styles.module.scss';
import pikachuSurprisedImage from 'src/assets/images/pikachu-surprised.png';

type TProps = {
  isPageNotFound?: boolean;
};

const PokemonNotFound = ({ isPageNotFound = false }: TProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container} data-testid="not-found">
      <Image src={pikachuSurprisedImage} alt="Pokemon not found" className={styles.image} />
      {isPageNotFound ? (
        <div className={styles.notFoundContainer}>
          <div className={styles.header}>404</div>
          <div className={styles.text}>Page not found</div>
          <Button name="Go back home" onClick={() => navigate(routes.welcome)} className={styles.button} />
        </div>
      ) : (
        <div className={styles.text}>Pokemon Not Found</div>
      )}
    </div>
  );
};

export default PokemonNotFound;
