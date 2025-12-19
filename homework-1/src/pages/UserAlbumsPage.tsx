import React from 'react';
import type { ReactElement } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetAlbumsByUserQuery } from '../entities/albums/api/albumsApi';
import { useGetUserByIdQuery } from '../entities/users/api/usersApi';
import UserTabs from '../widgets/UserTabs/UserTabs';
import styles from './UserAlbumsPage.module.css';
import type { Album } from '../entities/albums/model/types';
import type { User } from '../entities/users/model/types';

function UserAlbumsPage(): ReactElement {
  const { userId } = useParams<{ userId: string }>();

  const { data: albums = [], isLoading, error } = useGetAlbumsByUserQuery(Number(userId));
  const { data: user, isLoading: userLoading } = useGetUserByIdQuery(Number(userId));

  if (isLoading || userLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке альбомов</p>;
  }

  return (
    <div className={styles.container}>
      <h2>
        Альбомы пользователя {user ? `${(user as User).name} (${(user as User).username})` : userId}
      </h2>
      <UserTabs userId={Number(userId)} />
      <ul>
        {albums.map((album: Album) => (
          <li key={album.id}>
            <Link to={`/users/${userId}/albums/${album.id}/photos`}>
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserAlbumsPage;