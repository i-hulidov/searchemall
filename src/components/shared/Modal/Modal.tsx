import React from 'react';

import { CloseIcon } from 'src/components/shared/CloseIcon';
import { ReactPortal } from 'src/components/shared/ReactPortal';
import styles from './Modal.styles.module.scss';

type TProps = {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
};

const Modal = ({ children, isOpen, handleClose }: TProps) => {
  if (!isOpen) return null;

  return (
    <ReactPortal>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <CloseIcon onClick={handleClose} className={styles.close} />
          {children}
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
