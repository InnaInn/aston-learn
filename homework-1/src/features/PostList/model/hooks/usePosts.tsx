import { useState, useEffect } from 'react';
import type { Post } from '../../../../entities/posts/model/types';


const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Ошибка загрузки постов');
        }

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Ошибка загрузки постов');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;