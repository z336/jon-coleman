import * as React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';
import '@fontsource/poppins/700.css';

const SiteLayout = styled.div`
  min-height: 100vh;
  margin: 0 auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'nav'
    'main'
    'footer';
`;

const Main = styled.main`
  grid-area: main;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <SiteLayout>
        <Nav />
        <Main>{children}</Main>
        <Footer />
      </SiteLayout>
    </>
  );
}
