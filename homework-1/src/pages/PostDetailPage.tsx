import React from 'react';
import type { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../entities/posts/api/postsApi';
import CommentList from '../widgets/CommentList/ui/CommentList';
import type { Post } from '../entities/posts/model/types';

function PostDetailPage(): ReactElement {
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

  const typedPost: Post = post;

  return (
    <div>
      <h2>{typedPost.title}</h2>
      <p>{typedPost.body}</p>
      <CommentList postId={typedPost.id} />
    </div>
  );
}

export default PostDetailPage;