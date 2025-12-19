import React, { useCallback } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import type { Post } from '../../entities/posts/model/types';
import ItemList from '../../shared/ui/ItemList/ItemList';
import styles from './PostList.module.css';
import type { ReactElement, MouseEventHandler } from 'react';

type PostListProps = {
  posts: Post[];
};

function PostList({ posts }: PostListProps): ReactElement {
  const handleClick: (id: number) => void = useCallback((id: number) => {
    console.log(`Клик по посту: ${id}`);
  }, []);

  return (
    <div className={styles.listCards}>
      <ItemList<Post>
        items={posts}
        keyExtractor={(post) => post.id}
        renderItem={(post) => (
          <div onClick={() => handleClick(post.id)}>
            <PostCard post={post} />
          </div>
        )}
      />
    </div>
  );
}

export default React.memo(PostList);
