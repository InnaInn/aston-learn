import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../widgets/UserTabs/UserTabs';

function UserTodosPage() {
  const { id } = useParams();

  return (
    <div>
      <UserTabs />
      <h2>Задачи пользователя {id}</h2>
    </div>
  );
}

export default UserTodosPage;
