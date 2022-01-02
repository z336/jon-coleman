import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <small>definitely not © {new Date().getFullYear()}</small>
      </div>
    </StyledFooter>
  );
}
