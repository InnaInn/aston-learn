import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPhotosByAlbumQuery } from '../entities/photos/api/photosApi';
import UserTabs from '../widgets/UserTabs/UserTabs';
import styles from './AlbumPhotosPage.module.css';

function AlbumPhotosPage() {
  const { userId, albumId } = useParams<{ userId: string; albumId: string }>();
  const { data: photos = [], isLoading, error } = useGetPhotosByAlbumQuery(Number(albumId));

  if (isLoading) return <p>Загрузка фотографий...</p>;
  if (error) return <p>Ошибка при загрузке фотографий</p>;

  return (
    <div className={styles.container}>
      <h2>Фото альбома {albumId}</h2>
      <UserTabs userId={Number(userId)} />
      <div className={styles.blockPhoto}>
        {photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumPhotosPage;