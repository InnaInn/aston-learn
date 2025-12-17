import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const photosApi = createApi({
  reducerPath: 'photosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Photos'],
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], void>({
      query: () => 'photos',
      transformResponse: (response: Photo[]) =>
        response.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://placehold.co/150/54176f/png?text=Photo+${photo.id}`,
          url: `https://placehold.co/600x400/54176f/png?text=Photo+${photo.id}`,
        })),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
              { type: 'Photos', id: 'LIST' },
            ]
          : [{ type: 'Photos', id: 'LIST' }],
    }),

    getPhotosByAlbum: builder.query<Photo[], number>({
      query: (albumId) => `albums/${albumId}/photos`,
      transformResponse: (response: Photo[]) =>
        response.map((photo) => ({
          ...photo,
          thumbnailUrl: `https://placehold.co/150/54176f/png?text=Photo+${photo.id}`,
          url: `https://placehold.co/600x400/54176f/png?text=Photo+${photo.id}`,
        })),
      providesTags: (result, error, albumId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Photos' as const, id })),
              { type: 'Photos', id: `ALBUM-${albumId}` },
            ]
          : [{ type: 'Photos', id: `ALBUM-${albumId}` }],
    }),

    getPhotoById: builder.query<Photo, number>({
      query: (id) => `photos/${id}`,
      transformResponse: (photo: Photo) => ({
        ...photo,
        thumbnailUrl: `https://placehold.co/150/54176f/png?text=Photo+${photo.id}`,
        url: `https://placehold.co/600x400/54176f/png?text=Photo+${photo.id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Photos', id }],
    }),

    addPhoto: builder.mutation<Photo, Partial<Photo>>({
      query: (body) => ({
        url: 'photos',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Photos', id: 'LIST' }],
    }),

    updatePhoto: builder.mutation<Photo, Partial<Photo>>({
      query: ({ id, ...patch }) => ({
        url: `photos/${id}`,
        method: 'PUT',
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Photos', id }],
    }),

    deletePhoto: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => ({
        url: `photos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Photos', id }],
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotosByAlbumQuery,
  useGetPhotoByIdQuery,
  useAddPhotoMutation,
  useUpdatePhotoMutation,
  useDeletePhotoMutation,
} = photosApi;

export { photosApi };