import * as React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import styled from 'styled-components';
import { Grid } from '../styles/Grid';

const StyledNav = styled.nav`
  grid-area: nav;
  ul {
    place-self: center;
    border-left: 2px solid var(--white);
    list-style: none;
    li {
      padding-bottom: 0.5em;
      a {
        font-family: 'Poppins';
        text-transform: uppercase;
        text-decoration: none;
      }
      .active {
        background-color: var(--white);
        color: var(--black);
        padding: 0.15em;
        margin: -0.15em;
      }
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Grid>
        <Logo />
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" activeClassName="active">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/writing" activeClassName="active">
              Writing
            </Link>
          </li>
        </ul>
      </Grid>
    </StyledNav>
  );
}
