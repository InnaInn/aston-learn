import React from 'react';
import { useParams } from 'react-router-dom';

function UserAlbumsPage() {
  const { id } = useParams();
  return <h2>Альбомы пользователя {id}</h2>;
}

export default UserAlbumsPage;