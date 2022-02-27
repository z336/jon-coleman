import * as React from 'react';
import { Link, graphql } from 'gatsby';
import HelmetTemplate from '../components/SEO';

export default function Writing({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <>
      <HelmetTemplate title="Writing" />
      <article className="padding-bottom">
        <div className="title | padding-left | padding-right">
          <h1>Writing</h1>
        </div>
        <article className="flow | padding-left | padding-right">
          <div className="padding-top | padding-bottom">
            <p>
              Subscribe with <a href="/rss.xml">RSS</a>.
            </p>
          </div>
          <ul className="words | flow">
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </li>
            ))}
          </ul>
        </article>
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query writingIndex {
    allMdx(
      filter: { frontmatter: { category: { eq: "writing" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
