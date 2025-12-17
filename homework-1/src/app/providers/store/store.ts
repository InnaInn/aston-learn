import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postsApi } from '../../../entities/posts/api/postsApi';
import { commentsApi } from '../../../entities/comments/api/commentsApi';
import { albumsApi } from '../../../entities/albums/api/albumsApi';
import { todosApi } from '../../../entities/todos/api/todosApi';
import { usersApi } from '../../../entities/users/api/usersApi';
import { photosApi } from '../../../entities/photos/api/photosApi';
import postReducer from '../../../entities/post/model/slice/postSlice';
import userReducer from '../../../entities/users/model/slice/userSlice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,

   
    [postsApi.reducerPath]: postsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      postsApi.middleware,
      commentsApi.middleware,
      albumsApi.middleware,
      todosApi.middleware,
      usersApi.middleware,
      photosApi.middleware,
    ]),
});


setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch