import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SideContent from "../components/SideContent";

// Component to render on the Portfolio page
const PortfolioPage = () => {
  // console.log("PortfolioPage allMdx <>>>", allMdx);
  // don't want to use allMdx - this is pulling all mdx files (the blog posts)
  // need to figure out how to deploy projects and link them here as cards?
  // perhaps I could simply style a card layout, build a trading card for each app in the portfolio and link to the GH deployments from the card?
  return (
    <Layout>
      <div className="portfolioWrapper">
        <section>
          <h3>🚧 Portfolio will be presented here 💼</h3>
          <p>👩‍💻 visit nichelicorn on <Link to="https://github.com/nichelicorn">GitHub</Link> 🐙😸</p>
        </section>
        <SideContent />
      </div>
    </Layout>
  );
};

export default PortfolioPage;

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
