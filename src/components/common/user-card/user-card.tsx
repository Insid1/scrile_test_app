import { ButtonLike, InfoField } from 'components/common/common';
import { useState } from 'react';
import { IUser } from 'types/user';

import * as S from './user-card.styled';

interface UserCardProps extends IUser {}

function UserCard({
  id, username, email, phone,
}: UserCardProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const handleClickLike: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsLiked(!isLiked);
  };

  return (
    <S.Wrapper>
      <InfoField label="id:" title={id} />
      <S.Field>
        <InfoField label="username:" title={username} />
        <InfoField label="email:" title={email} />
      </S.Field>
      <InfoField label="phone:" title={phone} />
      <ButtonLike onClick={handleClickLike} $isActive={isLiked} />
    </S.Wrapper>
  );
}

export default UserCard;
