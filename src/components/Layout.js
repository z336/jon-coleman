import * as React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import '../styles/GlobalStyles.scss';
import * as styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.siteLayout}>
        <Nav className={styles.navArea} />
        <main className={styles.mainArea}>{children}</main>
        <Footer className={styles.footerArea} />
      </div>
    </>
  );
}
