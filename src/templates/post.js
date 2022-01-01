import * as React from 'react';
import { graphql, Link } from 'gatsby';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const shortcodes = { Link };

export default function PostTemplate({ data: { mdx } }) {
  const title = mdx.frontmatter.title;
  //   const image = mdx.frontmatter.img.childImageSharp.gatsbyImageData;
  //   const alt = mdx.frontmatter.alt;
  const body = mdx.body;
  //   const category = mdx.frontmatter.category;

  return (
    <article>
      <MDXProvider components={shortcodes}>
        <h2>{title}</h2>
        <article>
          <MDXRenderer>{body}</MDXRenderer>
          <p>
            <button onClick={() => window.history.back()} aria-label="Go back">
              &larr; Back
            </button>
          </p>
        </article>
      </MDXProvider>
    </article>
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
        alt
        category
        tags
      }
    }
  }
`;
