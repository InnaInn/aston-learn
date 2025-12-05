import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsPage from '../../../pages/PostsPage';
import PostDetailPage from '../../../pages/PostDetailPage';
import UserAlbumsPage from '../../../pages/UserAlbumsPage';
import AlbumPhotosPage from '../../../pages/AlbumPhotosPage';
import UserTodosPage from '../../../pages/UserTodosPage';
import UserPostsPage from '../../../pages/UserPostsPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/users/:id/albums" element={<UserAlbumsPage />} />
        <Route path="/albums/:id/photos" element={<AlbumPhotosPage />} />
        <Route path="/users/:id/todos" element={<UserTodosPage />} />
        <Route path="/users/:id/posts" element={<UserPostsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;