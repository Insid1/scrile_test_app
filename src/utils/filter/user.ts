import { IUser } from 'types/user';

const filterByUserNameExclude = (
  users: IUser[],
  userNameFilter: string,
): IUser[] => users.filter(({ username }) => username !== userNameFilter);

export { filterByUserNameExclude };
