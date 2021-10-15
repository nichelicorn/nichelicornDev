// Imports
import React from "react";
import  { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SideContent from "./SideContent";

// Component to render
const Home = () => {

  const data = useStaticQuery(graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            date
            title
          }
          slug
          body
          id
        }
      }
    }
  }
`);

console.log("🌊 Welcome to nichelicorn.dev! ⛅️");

const mostRecent = data.allMdx.edges.sort((a, b) => {
  const aDate = a.node["frontmatter"].date;
  const bDate = b.node["frontmatter"].date;
  // if (aDate > bDate) {
  //   return -1;
  // } 
  // else {
  //   return 1;
  // };
  return (aDate > bDate) ? -1 : 1;
});

const postBody = mostRecent[0];

return (
  <section className="home-wrapper">
      <title>Home | Nichele D</title>
      <div className="all-home-content">
        <div className="main-content">
          <h1 className="h-one-styles">Welcome to nichelicorn.dev‍</h1>
          <p>Below, you will find a recent post. 🏕</p>
          <article key={postBody.node.id} className="new-post">
            <section  className="post-wrapper">
              <MDXRenderer>
                {postBody.node.body}
              </MDXRenderer>
            </section>
          </article>
          {/* <p className="fun-style">🥕 Click the links in the header to check out more on nichelicorn.dev! 🐇</p> */}
        </div>
        <SideContent />
      </div>
    </section>
  )
};

export default Home;
