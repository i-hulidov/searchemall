import React from 'react';
import styles from './CloseIcon.styles.module.scss';

type TProps = {
  onClick: () => void;
  className?: string;
};

const CloseIcon = ({ onClick, className }: TProps) => {
  return <div className={`${styles.close} ${className}`} onClick={onClick} />;
};

export default CloseIcon;
