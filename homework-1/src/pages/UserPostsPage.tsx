import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../widgets/UserTabs/UserTabs';

function UserPostsPage() {
  const { id } = useParams();
  return (
    <div>
      <h2>Посты пользователя {id}</h2>
      <UserTabs />
    </div>
  );
}

export default UserPostsPage;