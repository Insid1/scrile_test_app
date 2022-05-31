import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  padding: 0.5em 0;
  display: flex;
  flex-wrap: nowrap;
`;

const Label = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.gray};
  padding-right: 0.3em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.mini};
`;

const Title = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.black};
`;

export { Wrapper, Label, Title };
