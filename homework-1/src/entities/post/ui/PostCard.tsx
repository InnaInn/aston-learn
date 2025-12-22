import styles from './PostCard.module.css';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

type Comment = {
  id: number;
  text: string;
};

type PostCardProps = {
  post: {
    id: string;
    title: string;
    description: string;
    comments: Comment[];
  };
};

function PostCard({ post }: PostCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{post.title}</h3>
      <p className={styles.cardDescription}>{post.description}</p>
      {post.comments && <CommentList comments={post.comments} />}
    </div>

  );
}

export default PostCard;