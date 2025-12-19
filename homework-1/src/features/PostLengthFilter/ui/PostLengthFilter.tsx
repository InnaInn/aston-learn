import React, { useState } from 'react';
import type { MouseEventHandler } from 'react';
import styles from './PostLengthFilter.module.css';
import type { Post } from '../../../entities/posts/model/types';

type Props = {
  posts: Post[];
  onFilter: (filteredPosts: Post[]) => void;
};

function PostLengthFilter({ posts, onFilter }: Props) {
  const [isFiltered, setIsFiltered] = useState(false);

  const handleToggle: MouseEventHandler<HTMLButtonElement> = () => {
    if (!isFiltered) {
      const filtered = posts.filter((p) => p.title.length >= 30);
      console.log("Фильтр (>= 30 символов):", filtered.map((p) => p.title));
      onFilter(filtered);
    } else {
      console.log("Возврат к исходному списку");
      onFilter(posts);
    }
    setIsFiltered(!isFiltered);
  };

  return (
    <div className={styles.filterWrapper}>
      <button className={styles.filterButton} onClick={handleToggle}>
        {isFiltered
          ? "Показать все посты"
          : "Фильтр: длинный заголовок (больше 30 символов)"}
      </button>
    </div>
  );
}

export default PostLengthFilter;