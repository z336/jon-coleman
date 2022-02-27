import * as React from 'react';
import { Link, graphql } from 'gatsby';
import HelmetTemplate from '../components/SEO';

export default function Projects({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <>
      <HelmetTemplate title="Projects" />
      <article className="padding-bottom">
        <div className="title | padding-left | padding-right">
          <h1>Projects</h1>
        </div>
        <article className="flow | padding-left | padding-right">
          <div className="padding-top | padding-bottom">
            <p>
              Here are some of the projects I've been able to work on recently.
            </p>
          </div>
          <div className="grid">
            {posts.map(({ node: post }) => (
              <div className="box | flow | border" key={post.id}>
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
          </div>
        </article>
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
