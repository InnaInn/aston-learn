import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../widgets/UserTabs/UserTabs';

function AlbumPhotosPage() {
  const { id } = useParams();

  return (
    <div>
      <UserTabs />
      <h2>Фото альбома {id}</h2>
    </div>
  );
}

export default AlbumPhotosPage;
