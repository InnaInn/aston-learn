import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Comment } from '../model/types'; 

const commentsApi = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => 'comments',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Comments' as const, id })),
            { type: 'Comments', id: 'LIST' },
          ]
          : [{ type: 'Comments', id: 'LIST' }],
    }),

    getCommentsByPost: builder.query<Comment[], number>({
      query: (postId) => `comments?postId=${postId}`,
      providesTags: (result, error, postId) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Comments' as const, id })),
            { type: 'Comments', id: `POST-${postId}` },
          ]
          : [{ type: 'Comments', id: `POST-${postId}` }],
    }),

    addComment: builder.mutation<Comment, Partial<Comment>>({
      query: (body) => ({
        url: 'comments',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Comments', id: 'LIST' }],
    }),

    updateComment: builder.mutation<Comment, Partial<Comment>>({
      query: ({ id, ...patch }) => ({
        url: `comments/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Comments', id }],
    }),

    deleteComment: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `comments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Comments', id }],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetCommentsByPostQuery,
  useAddCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentsApi;

export { commentsApi };
