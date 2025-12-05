import React from 'react';
import { useParams } from 'react-router-dom';

function AlbumPhotosPage() {
  const { id } = useParams();
  return <h2>Фото альбома {id}</h2>;
}

export default AlbumPhotosPage;