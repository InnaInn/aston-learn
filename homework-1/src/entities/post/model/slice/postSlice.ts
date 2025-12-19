import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';
import type { Post } from '../../../../entities/posts/model/types';

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany,
    updatePost: postsAdapter.updateOne,
    removePost: postsAdapter.removeOne,
  },
});

export const { addPost, addPosts, updatePost, removePost } = postSlice.actions;
export default postSlice.reducer;


export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors<RootState>((state) => state.posts);