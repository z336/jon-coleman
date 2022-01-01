import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StackDiv } from '../styles/Stack';
import styled from 'styled-components';

const ProjectStack = styled(StackDiv)`
  padding: 1rem;
  border: 2px solid var(--white);
`;

export default function Projects({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <article>
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        architecto ad eum, repellendus veritatis dolor reiciendis illo ea fuga
        omnis culpa perferendis enim distinctio itaque eaque sed cumque
        excepturi nam?
      </p>
      {posts.map(({ node: post }) => (
        <ProjectStack key={post.id}>
          <h3>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </h3>
          <p>{post.frontmatter.description}</p>
        </ProjectStack>
      ))}
    </article>
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
            alt
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
