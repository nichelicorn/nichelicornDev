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

console.log("all data <>>>", data);

const mostRecent = data.allMdx.edges.sort((a, b) => {
  const aDate = a.node["frontmatter"].date;
  const bDate = b.node["frontmatter"].date;
  if (aDate > bDate) {
    // console.log("a node <>>>", a.node);
    return -1;
  } 
  else {
    // console.log("b node <>>>", b.node)
    return 1;
  }
});

// console.log("find most recent blog post <>>>", mostRecent[0]);
const postBody = mostRecent[0];
console.log("postBody <>>>", postBody);

console.log("id <>>>", postBody.node.id);

  return (
    <section className="homeWrapper">
        <title>Home | Nichele D</title>
        <div className="allHomeContent">
          <div className="mainContent">
            <h1 className="hOneStyles">Welcome to nichelicorn.dev‍</h1>
            <h2>👇 Most recent post 👇</h2>

            <article key={postBody.node.id}>
              {/* <h3>{postBody.node.frontmatter.title}</h3> */}
              <MDXRenderer>
                {postBody.node.body}
              </MDXRenderer>
            </article>


            {/* <p className="illuminated">🚧🏗</p><p>Portfolio page under construction! Check back soon for updates</p><p className="illuminated"> 👷‍♀️⚙️</p> */}
            <p className="funStyle">🥕 Click the links in the header to check out more on nichelicorn.dev! 🐇</p>
          </div>
          <SideContent />
        </div>
    </section>
  )
}

export default Home;
