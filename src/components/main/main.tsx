import {
  Button, Container, Loader, MainLayout,
} from 'components/common/common';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { selectIsGetUsersActive } from 'store/interface/selectors';
import { selectIsUsersFetching, selectIsUsersLoaded, selectUsers } from 'store/users/selectors';
import { fetchUsers } from 'store/users/thunks';
import UserList from './user-list/user-list';

function MainPage() {
  const isGetUsersActive = useAppSelector(selectIsGetUsersActive);
  const isFetching = useAppSelector(selectIsUsersFetching);
  const isUsersLoaded = useAppSelector(selectIsUsersLoaded);

  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(fetchUsers());
  };

  return (
    <MainLayout>
      <Container>
        <Button onClick={handleClick} disabled={!isGetUsersActive}>
          get users
        </Button>
        {
        (isUsersLoaded && <UserList />)
        || (isFetching && <Loader />)
        }
      </Container>
    </MainLayout>
  );
}

export default MainPage;
