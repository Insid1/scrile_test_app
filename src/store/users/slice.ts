import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'types/user';
import { fetchUsers } from './thunks';

interface IInitialState {
  users: IUser[],
  isUsersFetching: boolean,
  isUsersLoaded: boolean,
  errorMessage: string | null;
}

const initialState: IInitialState = {
  users: [],
  isUsersFetching: false,
  isUsersLoaded: false,
  errorMessage: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isUsersLoaded = true;
        state.isUsersFetching = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isUsersFetching = true;
        state.isUsersLoaded = false;
        state.errorMessage = null;
        state.users = [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isUsersFetching = false;
        state.errorMessage = action.payload as string;
      });
  },
});

export default usersSlice;
