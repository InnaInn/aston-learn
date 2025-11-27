import styles from './Header.module.css';
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import { useTheme } from '../../shared/lib/theme/useTheme';
import Button from '../../shared/ui/Button';
import Modal from '../../shared/ui/Modal';
import React, { useState } from 'react';


function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.header} ${theme}`}>
      <div className={styles.left}>
        <h1>My blog</h1>
      </div>

      <div className={styles.right}>
        <ThemeSwitcher />
        <Button onClick={() => setIsOpen(true)}>О проекте</Button>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>Это учебный проект для практики  React.</p>
      </Modal>
    </div>
  );
}

export default Header;