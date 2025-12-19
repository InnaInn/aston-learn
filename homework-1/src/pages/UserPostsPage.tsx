import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostsByUserQuery } from '../entities/posts/api/postsApi';
import { useGetUserByIdQuery } from '../entities/users/api/usersApi';
import UserTabs from '../widgets/UserTabs/UserTabs';
import PostCard from '../entities/post/ui/PostCard';
import PostLengthFilter from '../features/PostLengthFilter/ui/PostLengthFilter';
import styles from './UserPostsPage.module.css';
import type { Post } from '../entities/posts/model/types';
import type { User } from '../entities/users/model/types';

function UserPostsPage(): ReactElement {
  const { userId } = useParams<{ userId: string }>();
  const { data: posts = [], isLoading, error } = useGetPostsByUserQuery(Number(userId));
  const { data: user, isLoading: userLoading } = useGetUserByIdQuery(Number(userId));

  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (posts) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  if (isLoading || userLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка при загрузке постов</p>;
  }

  return (
    <div className={styles.container}>
      <h2>
        Посты пользователя {user ? `${(user as User).name} (${(user as User).username})` : userId}
      </h2>
      <UserTabs userId={Number(userId)} />
      
      {posts.length > 0 && (
        <PostLengthFilter
          posts={posts}
          onFilter={(filtered) => setFilteredPosts(filtered)}
        />
      )}

      <div>
        {filteredPosts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default UserPostsPage;