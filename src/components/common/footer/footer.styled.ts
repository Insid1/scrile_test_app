import styled from 'styled-components';
import { ReactComponent as GitHubIcon } from 'assets/img/mark-github.svg';

const StyledFooter = styled.footer`
  z-index: 5;
  background: rgb(197,202,233);
  background: linear-gradient(0deg, rgba(197,202,233,1) 30%, rgba(238,238,238,1) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

const styledGitHubIcon = styled(GitHubIcon)`
  path {
    fill: ${({ theme }) => theme.color.primary};
  }
  
  &:hover {
    path {
      fill: ${({ theme }) => theme.color.black};
    }
  }
`;

const HiddenText = styled.span.attrs({ className: 'visually-hidden' })``;

export {
  StyledFooter,
  styledGitHubIcon,
  HiddenText,
};
