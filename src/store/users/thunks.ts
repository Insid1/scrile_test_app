import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'api/api';
import axios from 'axios';
import { ApiRoutes } from 'consts/routes';
import { IUser } from 'types/user';

const fetchUsers = createAsyncThunk<
IUser[],
undefined,
{ rejectValue: string }
>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(ApiRoutes.Users);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message);
      }
      return rejectWithValue('unexpected error occurred! Unable to load users');
    }
  },
);

export { fetchUsers };
