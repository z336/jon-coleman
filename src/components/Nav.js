import * as React from 'react';
import { Link } from 'gatsby';
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
      }
    }
  }
`;

const Brand = styled.p`
  place-self: center;
  font-family: 'Poppins';
  font-size: var(--font-size-big);
  text-transform: uppercase;
  a {
    text-decoration: none;
    :hover {
      background-color: transparent;
      color: currentColor;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Grid>
        <Brand>
          <Link to="/" tabIndex="-1">
            Jon Coleman
          </Link>
        </Brand>
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
