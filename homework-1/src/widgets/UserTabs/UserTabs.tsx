import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';

function UserTabs() {
  const { id } = useParams();

  return (
    <div className={styles.userTabs}>
      <NavLink
        to={`/users/${id}/posts`}
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        Посты
      </NavLink>

      <NavLink
        to={`/users/${id}/albums`}
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        Альбомы
      </NavLink>

      <NavLink
        to={`/users/${id}/todos`}
        className={({ isActive }) =>
          isActive ? `${styles.tab} ${styles.active}` : styles.tab
        }
      >
        Задачи
      </NavLink>
    </div>
  );
}

export default UserTabs;