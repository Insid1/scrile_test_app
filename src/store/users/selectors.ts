import { selectUsernameFilterExclusion } from 'store/interface/selectors';
import { RootState } from 'store/store';
import createCachedSelector from 're-reselect';
import { filterByUserNameExclude } from 'utils/filter/user';

const selectUsers = (state: RootState) => state.UsersData.users;

const selectIsUsersLoaded = (state: RootState) => state.UsersData.isUsersLoaded;

const selectUsersGetErrorMessage = (state: RootState) => state.UsersData.errorMessage;

const selectIsUsersFetching = (state: RootState) => state.UsersData.isUsersFetching;

const selectFilteredUsers = createCachedSelector(
  [selectUsers, selectUsernameFilterExclusion],
  (users, usernameFilter) => filterByUserNameExclude(users, usernameFilter),
)(
  (state) => state.Interface.usernameFilterExclusion,
);

export {
  selectUsers, selectIsUsersLoaded,
  selectUsersGetErrorMessage, selectFilteredUsers, selectIsUsersFetching,
};
