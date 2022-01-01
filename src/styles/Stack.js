import styled from 'styled-components';

export const StackDiv = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: 1rem;
  }
`;

export const StackList = styled.ul`
  display: flex;
  flex-direction: column;

  > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  > * + * {
    margin-top: 1rem;
  }
`;
