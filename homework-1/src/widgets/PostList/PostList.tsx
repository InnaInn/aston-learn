import React, { useMemo, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/posts/api/postsApi';
import styles from './PostList.module.css';

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  const handleClick = useCallback((id: number) => {
    console.log(`Клик по посту: ${id}`);
  }, []);

  const renderedPosts = useMemo(() => {
  return posts.map((post) => (
    <React.Fragment key={post.id}>
      <PostCard post={post} />
    </React.Fragment>
  ));
}, [posts, handleClick]);

  return <div className={styles.listCards}>{renderedPosts}</div>;
}

export default React.memo(PostList);