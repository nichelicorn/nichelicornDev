import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";

const PostsPage = ({ data: { allMdx } }) => {
  // console.log("PostsPage allMdx <>>>", allMdx);
  return (
    <Layout>
      <h2 className="h-one-styles">Posts</h2>
      <section className="pickle-jar">
        {allMdx.edges.map(({ node }) => {
          return (
            <article key={node.id} className="pickle-card">
            <h3>
              <Link to={`/posts/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h3>
              {/* <h2>{node.frontmatter.title}</h2> */}
              <p>{node.excerpt}</p>
              {/* <Link to={`/${node.slug}`}>View Post</Link> */}
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export default PostsPage;

export const pageQuery = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          id
          slug
          excerpt
        }
      }
    }
  }
`;