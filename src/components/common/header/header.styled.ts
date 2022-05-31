import styled from 'styled-components';
import { Container } from 'components/common/common';

const StyledHeader = styled.header`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 50%;
  width: 100vw;

  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.color.primary};
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 74px;
  padding: 10px 30px;
`;

const Logo = styled.a`
  width: 35px;
  margin-right: auto;
`;

const Image = styled.img``;

export {
  StyledHeader,
  HeaderWrapper,
  Logo,
  Image,
};
