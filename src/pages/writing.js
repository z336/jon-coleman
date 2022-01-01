import * as React from 'react';
import { Link, graphql } from 'gatsby';

export default function Writing({ data }) {
  const { edges: posts } = data.allMdx;
  return (
    <article>
      <h2>Writing</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aut
        exercitationem, soluta perferendis quas repellat magni expedita
        consequatur placeat officia debitis sint animi eos quos natus ullam.
        Voluptate, odio totam.
      </p>
      <ul>
        {posts.map(({ node: post }) => (
          <li>
            <h3>
              <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            </h3>
            <small>{post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </article>
  );
}

export const pageQuery = graphql`
  query writingIndex {
    allMdx(
      filter: { frontmatter: { category: { eq: "writing" } } }
      sort: { fields: frontmatter___order, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            alt
            date
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
