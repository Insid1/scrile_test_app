import { RootState } from 'store/store';

const selectQuestTypeFilter = (state: RootState) => state.Interface.isGetUsersActive;

const selectUsernameFilterExclusion = (state: RootState) => state.Interface.usernameFilterExclusion;

export { selectQuestTypeFilter, selectUsernameFilterExclusion };
