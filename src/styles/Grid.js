import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 1rem;

  @supports (width: min(250px, 100%)) {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  }
`;
