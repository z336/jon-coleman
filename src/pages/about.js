import * as React from 'react';
import HelmetTemplate from '../components/SEO';

export default function About() {
  return (
    <>
      <HelmetTemplate title="About" />
      <article className="padding-bottom">
        <div className="title | padding-left | padding-right">
          <h1>About</h1>
        </div>
        <article className="padding-left | padding-right | padding-top">
          <div className="content | flow">
            <p>
              I've worked in the technology industry for{' '}
              {new Date().getFullYear() - 2015} years, primarily in the
              nonprofit and nonprofit adjacent world. I've spent time in IT
              support and customer support, web development, and product
              documentation. I love simple, approachable, yet aesthetically
              interesting websites that load fast. RSS feeds are great.
            </p>
            <p>Below is a list of things I can work with:</p>
            <ul>
              <li>Semantic HTML & accessibility</li>
              <li>CSS &mdash; embrace the cascade</li>
              <li>JavaScript, React, and static site generators</li>
              <li>Technical writing, documentation, & Markdown</li>
              <li>Photoshop & Figma</li>
              <li>Modern web design & a11y</li>
              <li>Git, CLI, & tools like NPM</li>
            </ul>
            <p>
              My GitHub repository is located{' '}
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
          </div>
        </article>
      </article>
    </>
  );
}
