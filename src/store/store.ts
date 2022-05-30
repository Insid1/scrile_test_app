import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './quests/slice';
import interfaceSlice from './interface/slice';

enum ReducerName {
  UsersData = 'QuestsData',
  Interface = 'Interface',
}

const store = configureStore({
  reducer: {
    [ReducerName.UsersData]: usersSlice.reducer,
    [ReducerName.Interface]: interfaceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
