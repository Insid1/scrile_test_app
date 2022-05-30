import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from 'store/users/thunks';

const defaultUsernameExclusion = 'Delphine';

interface IInitialState {
  isGetUsersActive: boolean;
  usernameFilterExclusion: string;
}

const initialState: IInitialState = {
  isGetUsersActive: true,
  usernameFilterExclusion: defaultUsernameExclusion,
};

const interfaceSlice = createSlice({
  name: 'interface',
  initialState,
  reducers: {
    setIsGetUsersActive(state, action: PayloadAction<boolean>) {
      state.isGetUsersActive = action.payload;
    },
    setUserNameFilterExclusion(state, action: PayloadAction<string>) {
      state.usernameFilterExclusion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state) => {
      state.isGetUsersActive = false;
    });
  },
});

export const {
  setIsGetUsersActive,
} = interfaceSlice.actions;
export default interfaceSlice;
