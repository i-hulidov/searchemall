import React, { useCallback, useState } from 'react';

import { Avatar } from 'src/components/shared/Avatar';
import { Button } from 'src/components/shared/Button';
import { Image } from 'src/components/shared/Image';
import { Modal } from 'src/components/shared/Modal';
import styles from './PokemonAvatar.styles.module.scss';

type TProps = {
  sprites: {
    front_default: string;
    back_default: string;
  };
};

const PokemonAvatar = ({ sprites }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState(sprites.front_default);

  const toggleImage = useCallback(() => {
    setSrc(src === sprites.front_default ? sprites.back_default : sprites.front_default);
  }, [src]);

  return (
    <div>
      <Avatar img={sprites.front_default} onClick={() => setIsOpen(true)} />
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <div className={styles.modalContainer}>
          <Image className={styles.modalImage} src={src} />
          <div className={styles.buttonsContainer}>
            <Button name="Left" className={styles.button} onClick={toggleImage} />
            <Button name="Right" className={styles.button} onClick={toggleImage} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PokemonAvatar;
