import React, { useState, FC, ImgHTMLAttributes } from 'react';

import pokeball from '../../../assets/images/pokeball.png';
import styles from './Image.styles.module.scss';

const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({ src, alt, ...rest }) => {
  const [hasError, setHasError] = useState(false);

  const finalSrc = !src || hasError ? pokeball : src;

  return <img className={styles.image} src={finalSrc} alt={alt} onError={() => setHasError(true)} {...rest} />;
};

export default Image;
