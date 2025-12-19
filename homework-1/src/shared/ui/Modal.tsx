import type { ReactNode, ReactElement, MouseEventHandler } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
  children: ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps): ReactElement | null {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.content}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Header = function ModalHeader({ children }: { children: ReactNode }): ReactElement {
  return <div className={styles.header}>{children}</div>;
};

Modal.Body = function ModalBody({ children }: { children: ReactNode }): ReactElement {
  return <div className={styles.body}>{children}</div>;
};

Modal.Footer = function ModalFooter({ children }: { children: ReactNode }): ReactElement {
  return <div className={styles.footer}>{children}</div>;
};

export default Modal;