import styles from './PostCard.module.css';
import type { Post } from '../../../entities/posts/model/types';
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../users/model/slice/userSlice';
import { useGetUserByIdQuery } from '../../users/api/usersApi';
import type { RootState } from '../../../app/providers/store/store';

type PostCardProps = {
  post: Post;
};

function PostCard({ post }: PostCardProps) {
  const userFromStore = useSelector((state: RootState) =>
    selectUserById(state, post.userId)
  );
  const { data: userApi, isLoading } = useGetUserByIdQuery(post.userId);

  const user = userFromStore ?? userApi;

  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
        <p>
          Автор:{' '}
          {isLoading && !user ? (
            'Загрузка...'
          ) : user ? (
            <Link to={`/users/${post.userId}/posts`}>
              {user.name} ({user.username})
            </Link>
          ) : (
            post.userId
          )}
        </p>
      </h3>
      <p className={styles.cardDescription}>{post.body}</p>
      <CommentList postId={post.id} />
    </div>
  );
}

export default PostCard