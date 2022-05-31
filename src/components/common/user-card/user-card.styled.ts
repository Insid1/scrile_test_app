import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 0 0.7em;
  margin: 10px 0;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border 0.1s ease-in-out;
  
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.teal};
  }
`;

const Field = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  margin: 5px;
`;

export { Field, Wrapper };
