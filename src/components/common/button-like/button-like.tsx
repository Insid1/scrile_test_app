import * as S from './button-like.styled';

interface ButtonLikeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $isActive?: boolean
}

function ButtonLike({ $isActive, ...rest }:ButtonLikeProps) {
  return (
    <S.Button {...rest}>
      <S.Icon $isActive={$isActive} />
    </S.Button>
  );
}

export default ButtonLike;
