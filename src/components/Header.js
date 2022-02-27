import * as React from 'react';
import { Link } from 'gatsby';
import Icon from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="grid | header | padding-left | padding-right">
      <div className="brand">
        <Link to="/" tabIndex="-1" aria-label="Jon Coleman">
          <Icon />
        </Link>
      </div>
      <nav className="primary-navigation">
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
      </nav>
    </header>
  );
}
