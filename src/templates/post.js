import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import HelmetTemplate from '../components/SEO';

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  const body = mdx.body;

  return (
    <>
      <HelmetTemplate title={title} />
      <article>
        <MDXProvider components={shortcodes}>
          <h1>{title}</h1>
          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
        </MDXProvider>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query postQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`;
