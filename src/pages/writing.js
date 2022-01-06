import * as React from 'react';
import { Link, graphql } from 'gatsby';
import HelmetTemplate from '../components/SEO';
import * as styles from './writing.module.scss';

export default function Writing({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <>
      <HelmetTemplate title="Writing" />
      <article>
        <h1>Writing</h1>
        <p>
          I think about all kinds of things from web to records to life and back
          again. I'll try to capture some of those thoughts here.
        </p>
        <div className={styles.writing}>
          <ul>
            {posts.map(({ node: post }) => (
              <li key={post.id}>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>
                <small>{post.frontmatter.date}</small>
              </li>
            ))}
          </ul>
        </div>
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
