import * as React from 'react';
import { Link } from 'gatsby';
import HelmetTemplate from '../components/SEO';

export default function Index() {
  return (
    <>
      <HelmetTemplate title="Home" />
      <article className="home | padding-bottom">
        <div className="content | flow | padding-top | padding-left | padding-right">
          <h1>Hello, I'm Jon</h1>
          <p>
            I am a technical writer and web designer here at the internet. I'm
            interested in documentation and writing for the web, front-end web
            development, web design, and accessibility. I also like to collect
            punk records and get outside, preferably on a bike or a trail.{' '}
          </p>
          <p>
            If you're interested, you can read more{' '}
            <Link to="/about">about me</Link>, see some of my{' '}
            <Link to="/projects">projects</Link>, and read{' '}
            <Link to="/writing">my thoughts</Link> on all kinds of things.
          </p>
        </div>
      </article>
    </>
  );
}
