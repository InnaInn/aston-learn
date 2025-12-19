import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Todo } from '../model/types'; 

const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => 'todos',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
            { type: 'Todos', id: 'LIST' },
          ]
          : [{ type: 'Todos', id: 'LIST' }],
    }),

    getTodosByUser: builder.query<Todo[], number>({
      query: (userId) => `todos?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Todos' as const, id })),
            { type: 'Todos', id: `USER-${userId}` },
          ]
          : [{ type: 'Todos', id: `USER-${userId}` }],
    }),

    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    updateTodo: builder.mutation<Todo, Partial<Todo>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todos', id }],
    }),

    deleteTodo: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Todos', id }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodosByUserQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;

export { todosApi };
