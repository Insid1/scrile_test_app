import { RootState } from 'store/store';

const selectIsGetUsersActive = (state: RootState) => state.Interface.isGetUsersActive;

const selectUsernameFilterExclusion = (state: RootState) => state.Interface.usernameFilterExclusion;

export { selectIsGetUsersActive, selectUsernameFilterExclusion };
