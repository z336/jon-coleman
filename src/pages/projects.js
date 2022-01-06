import * as React from 'react';
import { Link, graphql } from 'gatsby';
import HelmetTemplate from '../components/SEO';
import * as styles from './projects.module.scss';

export default function Projects({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <>
      <HelmetTemplate title="Projects" />
      <article>
        <h1>Projects</h1>
        <p>Here are some of the projects I've been able to work on recently.</p>
        {posts.map(({ node: post }) => (
          <div className={styles.projects} key={post.id}>
            <h2>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h2>
            <p>{post.frontmatter.description}</p>
            <ul>
              {post.frontmatter.tags.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
          </div>
        ))}
      </article>
    </>
  );
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx(
      filter: { frontmatter: { category: { eq: "projects" } } }
      sort: { fields: frontmatter___order, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            category
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
