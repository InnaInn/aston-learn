import { useState, useEffect } from 'react';

type Comment = { id: number; text: string };
export type Post = { id: string; title: string; description: string; comments: Comment[] };

const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setLoading(true);
                setError(null);

                const response = await new Promise<Post[]>((resolve) =>
                    setTimeout(
                        () =>
                            resolve([
                                {
                                    id: '1',
                                    title: 'Пример поста',
                                    description: 'Описание поста',
                                    comments: [{ id: 1, text: 'Комментарий' }],
                                },
                            ]),
                        1000
                    )
                );

                setPosts(response);
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