import MainLayout from '../shared/layouts/MainLayout';
import Header from '../widgets/LayoutHeader/Header';
import Footer from '../widgets/LayoutFooter/Footer';
import PostList from '../widgets/PostList/PostList';


const myPosts = [
  { id: "1", title: 'Первый пост', description: 'Описание первого поста' },
  { id: "2", title: 'Второй пост', description: 'Описание второго поста' },
  { id: "3", title: 'Третий пост', description: 'Описание третьего поста' },

];

function App() {
  return (
    <MainLayout>
      <Header />
      <PostList posts={myPosts} />
      <Footer />
    </MainLayout>
  );
}

export default App;
