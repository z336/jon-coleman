import * as React from 'react';
import '../styles/global.scss';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="border-top | border-bottom">{children}</main>
        <Footer />
      </div>
    </>
  );
}
