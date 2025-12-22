import React, { useState, useEffect } from 'react';
import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import PostList from '../widgets/PostList/PostList';
import withLoading from '../shared/lib/hoc/withLoading';
import PostLengthFilter from '../features/PostLengthFilter/ui/PostLengthFilter';
import AppRouter from './providers/router/AppRouter';

const PostListWithLoading = withLoading(PostList);

type Comment = { id: number; text: string };
type Post = { id: string; title: string; description: string; comments: Comment[] };

const myPosts: Post[] = [
  {
    id: "1",
    title: "Короткий",
    description: "Описание первого поста",
    comments: [
      { id: 1, text: "Комментарий к первому посту" },
      { id: 2, text: "Ещё один комментарий" },
    ],
  },
  {
    id: "2",
    title: "Очень длинный заголовок поста",
    description: "Описание второго поста",
    comments: [{ id: 1, text: "Комментарий к второму посту" }],
  },
  {
    id: "3",
    title: "Средний заголовок",
    description: "Описание третьего поста",
    comments: [
      { id: 1, text: "Комментарий к третьему  посту" },
      { id: 2, text: "Ещё один комментарий" },
      { id: 3, text: "И еще один" },

    ],
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(myPosts);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <MainLayout>
      <Header />
      <AppRouter></AppRouter>
      {!loading && (
        <PostLengthFilter
          posts={myPosts}
          onFilter={(filtered) => setFilteredPosts(filtered)}
        />
      )}
      <PostListWithLoading isLoading={loading} posts={filteredPosts} />
      <Footer />
    </MainLayout>
  );
}

export default App;