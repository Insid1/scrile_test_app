import { RootState } from 'store/store';

const selectIsGetUsersActive = (state: RootState) => state.Interface.isGetUsersActive;

const selectUsernameFilterExclusion = (state: RootState) => state.Interface.usernameFilterExclusion;

const selectMyId = (state: RootState) => state.Interface.myId;

export { selectIsGetUsersActive, selectUsernameFilterExclusion, selectMyId };
