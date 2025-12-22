import PostCard from '../../entities/post/ui/PostCard';
import styles from './PostList.module.css';

type PostListProps = {
  posts: {
    id: string;
    title: string;
    description: string;
  }[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.listCards}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;