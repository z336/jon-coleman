import * as React from 'react';
import { Link } from 'gatsby';
import Icon from '../assets/logo.svg';
import * as styles from './Nav.module.scss';

export default function Nav() {
  return (
    <header id="header">
      <nav className={styles.primaryNavigation}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" tabIndex="-1" aria-label="Jon Coleman">
              <Icon />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/" activeClassName={styles.active}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName={styles.active}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" activeClassName={styles.active}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/writing" activeClassName={styles.active}>
                Writing
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
