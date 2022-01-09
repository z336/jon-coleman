import * as React from 'react';
import * as styles from './Footer.module.scss';
import { ImRss } from 'react-icons/im';

export default function Footer() {
  return (
    <footer className={styles.footerStack}>
      <div className={styles.rss}>
        <a href="/rss.xml">
          <ImRss /> RSS
        </a>
      </div>
      <div>
        <a href="#header">↑ Back to the top</a>
      </div>
      <div>
        <small>© {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
}
