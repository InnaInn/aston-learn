import React, { useMemo, useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

type Comment = {
  id: number;
  text: string;
};

type PostListProps = {
  posts: {
    id: string;
    title: string;
    description: string;
    comments: Comment[];
  }[];
};

function PostList({ posts }: PostListProps) {
  const handleClick = useCallback((id: string) => {
    console.log(`Клик по посту: ${id}`);
  }, []);

  const renderedPosts = useMemo(() => {
    return posts.map((post) => (
      <React.Fragment key={post.id}>
        <PostCard post={post} />
      </React.Fragment>
    ));
  }, [posts]);

  return <div className={styles.listCards}>{renderedPosts}</div>;
}

export default React.memo(PostList);