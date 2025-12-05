import React from 'react';
import { useParams } from 'react-router-dom';

function UserTodosPage() {
  const { id } = useParams();
  return <h2>Задачи пользователя {id}</h2>;
}

export default UserTodosPage;