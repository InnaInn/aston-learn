import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Album, Photo } from '../model/types'; 


const albumsApi = createApi({
  reducerPath: 'albumsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Albums', 'Photos'],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => 'albums',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
            { type: 'Albums', id: 'LIST' },
          ]
          : [{ type: 'Albums', id: 'LIST' }],
    }),
    getAlbumsByUser: builder.query<Album[], number>({
      query: (userId) => `albums?userId=${userId}`,
      providesTags: (result, error, userId) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Albums' as const, id })),
            { type: 'Albums', id: `USER-${userId}` },
          ]
          : [{ type: 'Albums', id: `USER-${userId}` }],
    }),
    getPhotosByAlbum: builder.query<Photo[], number>({
      query: (albumId) => `photos?albumId=${albumId}`,
      providesTags: (result, error, albumId) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
            { type: 'Photos', id: `ALBUM-${albumId}` },
          ]
          : [{ type: 'Photos', id: `ALBUM-${albumId}` }],
    }),
    addAlbum: builder.mutation<Album, Partial<Album>>({
      query: (body) => ({
        url: 'albums',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Albums', id: 'LIST' }],
    }),

    updateAlbum: builder.mutation<Album, Partial<Album>>({
      query: ({ id, ...patch }) => ({
        url: `albums/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Albums', id }],
    }),

    deleteAlbum: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `albums/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Albums', id }],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumsByUserQuery,
  useGetPhotosByAlbumQuery,
  useAddAlbumMutation,
  useUpdateAlbumMutation,
  useDeleteAlbumMutation,
} = albumsApi;

export { albumsApi };
