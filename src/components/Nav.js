import * as React from 'react';
import { Link } from 'gatsby';
import Icon from '../assets/logo.svg';
import styled from 'styled-components';
import { Grid } from '../styles/Grid';

const StyledNav = styled.nav`
  grid-area: nav;
  ul {
    place-self: center;
    border-left: 3px solid var(--white);
    list-style: none;
    li {
      padding-bottom: 0.5em;
      a {
        font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
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

const Brand = styled.div`
  place-self: center;
  max-width: 8rem;
  a {
    text-decoration: none;
    :hover {
      background-color: transparent;
      color: currentColor;
      outline: none;
    }
    :focus {
      outline: none;
    }
  }
`;

export default function Nav() {
  return (
    <header>
      <StyledNav>
        <Grid>
          <Brand>
            <Link to="/" tabIndex="-1" aria-label="Jon Coleman">
              <Icon />
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
    </header>
  );
}
