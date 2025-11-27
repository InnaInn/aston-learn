import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';
import React from 'react';

type PostListProps = {
  posts: {
    id: string;
    title: string;
    description: string;
  }[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.listCards}>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostCard post={post} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default PostList;