import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/store';
import type { User } from '../../api/usersApi';

const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,
  },
});

export const { addUser, addUsers, updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
} = usersAdapter.getSelectors<RootState>((state) => state.users);