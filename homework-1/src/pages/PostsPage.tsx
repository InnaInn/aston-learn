import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { useGetPostsQuery } from '../entities/posts/api/postsApi';
import PostList from '../widgets/PostList/PostList';
import withLoading from '../shared/lib/hoc/withLoading';
import PostLengthFilter from '../features/PostLengthFilter/ui/PostLengthFilter';
import type { Post } from '../entities/posts/model/types';

const PostListWithLoading = withLoading(PostList);

function PostsPage(): ReactElement {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (posts) {
      setFilteredPosts(posts);
    }
  }, [posts]);

  return (
    <div>
      {!isLoading && posts && (
        <PostLengthFilter
          posts={posts}
          onFilter={(filtered) => setFilteredPosts(filtered)}
        />
      )}

      <PostListWithLoading
        isLoading={isLoading}
        posts={filteredPosts}
      />
    </div>
  );
}

export default PostsPage;