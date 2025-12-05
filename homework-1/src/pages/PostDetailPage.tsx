import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetailPage() {
  const { id } = useParams();
  return <h2>Пост с id: {id}</h2>;
}

export default PostDetailPage;