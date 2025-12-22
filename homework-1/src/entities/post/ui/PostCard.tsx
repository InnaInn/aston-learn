import styles from './PostCard.module.css';

type PostCardProps = {
  post: {
    id: string;
    title: string;
    description: string;
  };
};

function PostCard({ post }: PostCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{post.title}</h3>
      <p className={styles.cardDescription}>{post.description}</p>
    </div>

  );
}

export default PostCard;