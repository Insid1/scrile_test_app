import {
  Alert,
  Button, Container, Loader, MainLayout,
} from 'components/common/common';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { selectIsGetUsersActive } from 'store/interface/selectors';
import { selectIsUsersFetching, selectIsUsersLoaded, selectUsersGetErrorMessage } from 'store/users/selectors';
import { fetchUsers } from 'store/users/thunks';
import UserList from './user-list/user-list';

function MainPage() {
  const isGetUsersActive = useAppSelector(selectIsGetUsersActive);
  const isFetching = useAppSelector(selectIsUsersFetching);
  const isUsersLoaded = useAppSelector(selectIsUsersLoaded);
  const errorMessage = useAppSelector(selectUsersGetErrorMessage);

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
      </Container>
      <Container>
        {(isUsersLoaded && <UserList />)}
        {isFetching && !isUsersLoaded ? <Loader />
          : (errorMessage && <Alert isError>{errorMessage}</Alert>)
            || (<Alert>Empty List</Alert>)}
      </Container>
    </MainLayout>
  );
}

export default MainPage;
