import logo from 'assets/img/Pera_logo.svg';
import * as S from './header.styled';

function Header() {
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.Logo>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.Logo>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
