import { selectUsernameFilterExclusion } from 'store/interface/selectors';
import { RootState } from 'store/store';
import createCachedSelector from 're-reselect';
import { filterByUserNameExclude } from 'utils/filter/user';

const selectUsers = (state: RootState) => state.QuestsData.users;

const selectIsUsersLoaded = (state: RootState) => state.QuestsData.isUsersLoaded;

const selectErrorMessage = (state: RootState) => state.QuestsData.errorMessage;

const selectIsUsersFetching = (state: RootState) => state.QuestsData.isUsersFetching;

const selectFilteredUsers = createCachedSelector(
  [selectUsers, selectUsernameFilterExclusion],
  (users, usernameFilter) => filterByUserNameExclude(users, usernameFilter),
)(
  (state) => state.Interface.usernameFilterExclusion,
);

export {
  selectUsers, selectIsUsersLoaded,
  selectErrorMessage, selectFilteredUsers, selectIsUsersFetching,
};
