import { api } from 'api/api';
import { ButtonLike, InfoField } from 'components/common/common';
import { ApiRoutes } from 'consts/routes';
import { useState } from 'react';
import { useAppSelector } from 'store/hooks/hooks';
import { selectMyId } from 'store/interface/selectors';
import { IUser } from 'types/user';

import * as S from './user-card.styled';

interface UserCardProps extends IUser {}

function UserCard({
  id, username, email, phone,
}: UserCardProps) {
  const myId = useAppSelector(selectMyId);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleClickLike: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsFetching(true);
    setIsLiked((prevState) => !prevState);

    const currentTime = new Date().toISOString();

    const sendingData = {
      id, username, email, phone, userId: myId, currentTime,
    };
    api.put(`${ApiRoutes.Users}${id}`, sendingData)
      .then(({ data }) => {
        console.log(data);
      })
      .finally(() => {
        setIsFetching(false);
      })
      .catch(() => {
        setIsLiked((prevState) => !prevState);
      });
  };

  return (
    <S.Wrapper>
      <S.Field>
        <InfoField label="id:" title={id} />
      </S.Field>
      <S.Field>
        <InfoField label="username:" title={username} />
        <InfoField label="email:" title={email} />
      </S.Field>
      <S.Field>
        <InfoField label="phone:" title={phone} />
      </S.Field>
      <S.Field>
        <ButtonLike
          disabled={isFetching}
          onClick={handleClickLike}
          $isActive={isLiked}
        />
      </S.Field>

    </S.Wrapper>
  );
}

export default UserCard;
