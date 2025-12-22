import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../widgets/UserTabs/UserTabs';

function UserAlbumsPage() {
  const { id } = useParams();

  return (
    <div>
      <UserTabs />
      <h2>Альбомы пользователя {id}</h2>
    </div>
  );
}

export default UserAlbumsPage;
