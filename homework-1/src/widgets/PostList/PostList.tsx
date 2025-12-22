import React, { useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

type Comment = {
  id: number;
  text: string;
};

type Post = {
  id: string;
  title: string;
  description: string;
  comments: Comment[];
};

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps) {
  const handleClick = useCallback((id: string) => {
    console.log(`Клик по посту: ${id}`);
  }, []);

  return (
    <div className={styles.listCards}>
      {posts.map((post) => (
        <div key={post.id} onClick={() => handleClick(post.id)}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}

export default React.memo(PostList);
