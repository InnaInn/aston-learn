import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'posts',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts', id: 'LIST' },
          ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),

    getPostById: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),

    getPostsByUser: builder.query<Post[], number>({
      query: (userId) => `posts?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Posts' as const, id })),
            { type: 'Posts', id: `USER-${userId}` },
          ]
          : [{ type: 'Posts', id: `USER-${userId}` }],
    }),

    addPost: builder.mutation<Post, Partial<Post>>({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),

    updatePost: builder.mutation<Post, Partial<Post>>({
      query: ({ id, ...patch }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
    }),

    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Posts', id }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;

export { postsApi };