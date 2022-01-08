import * as React from 'react';
import * as styles from './Footer.module.scss';
import { ImRss } from 'react-icons/im';

export default function Footer() {
  return (
    <footer>
      <div className={styles.rss}>
        <a href="/rss.xml">
          <ImRss /> RSS
        </a>
      </div>
      <div>
        <small>Jon Coleman made all this stuff.</small>
      </div>
    </footer>
  );
}
