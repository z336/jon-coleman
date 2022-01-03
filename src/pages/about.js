import * as React from 'react';
import HelmetTemplate from '../components/SEO';

export default function About() {
  return (
    <>
      <HelmetTemplate title="About" />
      <article>
        <h1>About</h1>
        <p>
          I've worked in the technology industry for{' '}
          {new Date().getFullYear() - 2015} years, primarily in the nonprofit
          and nonprofit adjacent world. I've spent time in IT support and
          customer support, web development, and product documentation. I love
          simple, approachable, yet aesthetically quirky websites that load fast
          and don't drain my data when I'm out and about. RSS feeds are
          wonderful.
        </p>
        <p>Below is a simple list of things I am skilled with:</p>
        <ul>
          <li>Semantic HTML & accessibility</li>
          <li>CSS &mdash; embrace the cascade</li>
          <li>JavaScript, React, and static site generators like Gatsby</li>
          <li>Technical writing, documentation, & Markdown</li>
          <li>Photoshop & Figma</li>
          <li>Modern web design & a11y</li>
          <li>Git, CLI, & tools like NPM</li>
        </ul>
        <p>
          My personal GitHub repository is located{' '}
          <a
            href="https://github.com/z336"
            traget="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .{' '}
        </p>
        <p>
          Feel free to get in touch via{' '}
          <a href="mailto:jcoleman1388@gmail.com">email</a>.
        </p>
      </article>
    </>
  );
}
