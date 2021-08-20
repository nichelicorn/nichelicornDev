import React from "react";
import { graphql, Link } from "gatsby";

const PostsPage = ({ data: { allMdx } }) => {
  console.log(allMdx);
  return (
    <div>
      {allMdx.edges.map(({ node }) => {
        return (
          <article key={node.slug}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
            <Link to={`/${node.slug}`}>View Post</Link>
          </article>
        );
      })}
    </div>
  );
};

export default PostsPage;

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
          slug
          excerpt
        }
      }
    }
  }
`;