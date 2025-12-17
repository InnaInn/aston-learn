import { Routes, Route } from 'react-router-dom';
import PostsPage from '../../../pages/PostsPage';
import PostDetailPage from '../../../pages/PostDetailPage';
import UserAlbumsPage from '../../../pages/UserAlbumsPage';
import AlbumPhotosPage from '../../../pages/AlbumPhotosPage';
import UserTodosPage from '../../../pages/UserTodosPage';
import UserPostsPage from '../../../pages/UserPostsPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/users/:userId/albums" element={<UserAlbumsPage />} />
      <Route path="/users/:userId/albums/:albumId/photos" element={<AlbumPhotosPage />} />
      <Route path="/users/:userId/todos" element={<UserTodosPage />} />
      <Route path="/users/:userId/posts" element={<UserPostsPage />} />
    </Routes>
  );
}

export default AppRouter;