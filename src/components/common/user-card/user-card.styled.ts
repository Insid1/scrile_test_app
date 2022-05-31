import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 0.7em;
  max-width: 900px;
  margin: 10px auto;
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
  flex: 1 0 40%;
  flex-direction: column;
  justify-content: center;
  margin: 5px;

  &:first-child {
    flex: 0 1 10%;
  }

  &:last-child {
    flex: 0 1 10%;
    align-items: flex-end;
  }
`;

export { Field, Wrapper };
