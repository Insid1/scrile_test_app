import styled from 'styled-components';
import { ReactComponent as LikeIconFill } from 'assets/img/heart-fill.svg';

interface IconProps {
  $isActive?: boolean;
}

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }

`;

const Icon = styled(LikeIconFill)<IconProps>`
  transition: fill 0.25s;
  width: 30px;
  height: 30px;

  pointer-events: ${({ $isActive }) => ($isActive ? 'none' : 'all')};

  :hover {
    path {
    fill: ${({ theme }) => theme.color.pink};
    opacity: 0.5;
  } 
  }

  path {
    transition: all 0.1s ease-in-out;
    fill: ${({ theme, $isActive }) => ($isActive ? theme.color.pink : theme.color.gray)};
  } 

  
`;

export { Icon, Button };
