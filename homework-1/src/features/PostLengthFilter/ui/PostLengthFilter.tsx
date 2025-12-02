import React, { useState } from 'react';
import styles from './PostLengthFilter.module.css';
import { filterByLength } from '../lib/filterByLength';

type Post = {
  id: string;
  title: string;
  description: string;
  comments: { id: number; text: string }[];
};

type Props = {
  posts: Post[];
  onFilter: (filteredPosts: Post[]) => void;
};

function PostLengthFilter({ posts, onFilter }: Props) {

  const [isFiltered, setIsFiltered] = useState(false);

  const handleToggle = () => {
    if (!isFiltered) {
      const filtered = filterByLength(posts, 10);
      console.log("Фильтр (>= 10 символов):", filtered.map(p => p.title));
      onFilter(filtered);
    } else {
      console.log("Возврат к исходному списку");
      onFilter(posts);
    }
    setIsFiltered(!isFiltered);
  };

  return (
    <div>
      <button className={styles.filterButton} onClick={handleToggle}>
        {isFiltered ? "Показать все посты" : "Фильтр: длинный заголовок(больше 10 символов)"}
      </button>
    </div>
  );
}

export default PostLengthFilter;