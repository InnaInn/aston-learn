import React from 'react';
import type { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTodosByUserQuery } from '../entities/todos/api/todosApi';
import UserTabs from '../widgets/UserTabs/UserTabs';
import { useGetUserByIdQuery } from '../entities/users/api/usersApi';
import styles from './UserTodosPage.module.css';
import type { Todo } from '../entities/todos/model/types';
import type { User } from '../entities/users/model/types';

function UserTodosPage(): ReactElement {
  const { userId } = useParams<{ userId: string }>();
  const { data: todos = [], isLoading, error } = useGetTodosByUserQuery(Number(userId));
  const { data: user, isLoading: userLoading } = useGetUserByIdQuery(Number(userId));

  if (isLoading || userLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке задач</p>;
  }

  return (
    <div className={styles.container}>
      <h2>
        Задачи пользователя {user ? `${(user as User).name} (${(user as User).username})` : userId}
      </h2>
      <UserTabs userId={Number(userId)} />
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            {todo.completed ? ' ✅' : ' ❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTodosPage