// import React from "react";
// import { graphql, Link } from "Gatsby";
// import Layout from "../components/Layout";

// const PortfolioPage = ({ data: { allMdx } }) => {
//   console.log("PortfolioPage allMdx <>>>", allMdx);
//   return (
//     <Layout>
//       {allMdx.edges.map(({ node }) => {
//         return (
//           <article key={node.slug}>
//             <h3>{node.frontmatter.title}</h3>
//             <p>{node.excerpt}</p>
//             <Link to={`/${node.slug}`}>View Project</Link>
//           </article>
//         );
//       })}
//     </Layout>
//   );
// };

// export default PortfolioPage;

// export const pageQuery = graphql`
//   query {
//     allMdx {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//           slug
//           excerpt
//         }
//       }
//     }
//   }
// `;