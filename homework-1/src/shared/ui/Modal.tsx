import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <button className={styles.closeBtn} onClick={onClose}>Закрыть</button>
      </div>
    </div>,
    document.body
  );
}

export default Modal;