// Imports
import React from "react";
import  { useStaticQuery, graphql } from "gatsby";
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
        }
      }
    }
  }
`);

// console.log("data.allMdx.edges.map(node => console.log(Object.values(node))) <>>>", data.allMdx.edges.map(node => console.log(Object.values(node))))

// want to return the most recent post by date in the array data.allMdx.edges
// how to do this?

// const mostRecent = data.allMdx.edges;

const mostRecent = data.allMdx.edges.sort((a, b) => {
  const aDate = a.node["frontmatter"].date;
  const bDate = b.node["frontmatter"].date;
  // const aDate = new Date(a.node["frontmatter"].date);
  // const bDate = new Date(b.node["frontmatter"].date);
  // console.log(aDate, bDate);
  // console.log("a node date <>>>", a.node["frontmatter"].date);
  // console.log("b node date <>>>", b.node["frontmatter"].date);
  if (aDate > bDate) {
    console.log("a node <>>>", a.node);
    return -1;
  } 
  else {
    console.log("b node <>>>", b.node)
    return 1;
  }
  // return aDate - bDate;
});

console.log("find most recent blog post <>>>", mostRecent[0]);




  return (
    <section className="homeWrapper">
        <title>Home | Nichele D</title>
        <div className="allHomeContent">
          <div className="mainContent">
            <h1 className="hOneStyles">Welcome to nichelicorn.dev‍</h1>
            <h3>👇 Most recent post 👇</h3>

            {/* {REPLACE WITH BLOG POST} */}

            {/* <p className="illuminated">🚧🏗</p><p>Portfolio page under construction! Check back soon for updates</p><p className="illuminated"> 👷‍♀️⚙️</p> */}
            <p className="funStyle">🥕 Click the links in the header to check out more on nichelicorn.dev! 🐇</p>
          </div>
          <SideContent />
        </div>
    </section>
  )
}

// export const query = graphql`
//   query {
//     allMdx {
//       edges {
//         node {
//           frontmatter {
//             date
//             title
//           }
//           slug
//         }
//       }
//     }
//   }
// `;

export default Home;
