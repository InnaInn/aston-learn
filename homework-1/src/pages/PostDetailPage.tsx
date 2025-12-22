import React from 'react';
import { useParams } from 'react-router-dom';
import UserTabs from '../widgets/UserTabs/UserTabs';

function PostDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <UserTabs />
      <h2>Пост с id: {id}</h2>
    </div>
  );
}

export default PostDetailPage;
