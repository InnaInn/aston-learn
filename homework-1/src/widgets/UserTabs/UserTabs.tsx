import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.css';
import type { ReactElement } from 'react';

type UserTabsProps = {
  userId: number;
};

function UserTabs({ userId }: UserTabsProps): ReactElement {
  const getClassName = ({ isActive }: { isActive: boolean }): string =>
    isActive ? `${styles.tab} ${styles.active}` : styles.tab;

  return (
    <div className={styles.userTabs}>
      <NavLink to={`/users/${userId}/posts`} className={getClassName}>
        Посты
      </NavLink>
      <NavLink to={`/users/${userId}/albums`} className={getClassName}>
        Альбомы
      </NavLink>
      <NavLink to={`/users/${userId}/todos`} className={getClassName}>
        Задачи
      </NavLink>
    </div>
  );
}

export default UserTabs;
