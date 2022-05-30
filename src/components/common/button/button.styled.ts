import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  outline: none;
  color: ${({ theme }) => theme.color.white};
  text-transform: capitalize;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background-color: ${({ theme }) => theme.color.primary};
  opacity: 70%;
  border: none;
  transition: all 0.1s ease-in-out;
  
  &:hover {
    opacity: 1;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`;

export { Button };
