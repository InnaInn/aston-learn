import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../entities/posts/api/postsApi';
import CommentList from '../widgets/CommentList/ui/CommentList';

function PostDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, error } = useGetPostByIdQuery(Number(id));

  if (isLoading) {
    return <p>Загрузка поста...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке поста</p>;
  }

  if (!post) {
    return <p>Пост не найден</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <CommentList postId={post.id} />
    </div>
  );
}

export default PostDetailPage;