import React from 'react';
import usePosts from '../features/PostList/model/hooks/usePosts';

function PostsPage() {
  const { posts, loading, error } = usePosts();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Список постов</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> — {post.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;