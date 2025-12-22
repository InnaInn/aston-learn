import React from 'react';
import PostCard from '../../entities/post/ui/PostCard';

type Comment = {
  id: number;
  text: string;
};

type Post = {
  id: string;
  title: string;
  description: string;
  comments: Comment[];
};

type PostItemProps = {
  post: Post;
  onClick: (id: string) => void;
};

function PostItem({ post, onClick }: PostItemProps) {
  return (
    <div onClick={() => onClick(post.id)}>
      <PostCard post={post} />
    </div>
  );
}

export default React.memo(PostItem);
