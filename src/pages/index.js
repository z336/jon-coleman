import * as React from 'react';
import { Link } from 'gatsby';
import HelmetTemplate from '../components/SEO';

export default function Index() {
  return (
    <>
      <HelmetTemplate title="Home" />
      <article>
        <h1>Hello, I'm Jon</h1>
        <p>
          I am a technical writer and web designer here at the internet. I'm
          interested in documentation and writing for the web, front end
          development, web design, and accessibility. I also collect punk
          records and try to get outside, preferably on a bike or a trail, as
          often as I can.{' '}
        </p>
        <p>
          If you're interested, you can read more{' '}
          <Link to="/about">about me</Link>, see some of my projects{' '}
          <Link to="/projects">right here</Link>, and read{' '}
          <Link to="/writing">my thoughts</Link> on all kinds of things.
        </p>
      </article>
    </>
  );
}
