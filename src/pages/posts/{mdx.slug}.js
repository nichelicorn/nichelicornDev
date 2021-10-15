import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

const Post = ({ data }) => {

  console.log("post data <>>>", data);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/* <p>Content will *eventually* be displayed here.</p> */}
      {/* <p>{data.mdx.frontmatter.date}</p> */}
      <article className="post-wrapper">
        <section  className="post-styles">
          <MDXRenderer>
              {data.mdx.body}
          </MDXRenderer>
        </section>
      </article>  
    </Layout>
  )
};

export default Post;

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;