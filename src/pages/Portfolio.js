import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import SideContent from "../components/SideContent";

// Component to render on the Portfolio page
const PortfolioPage = () => {
  return (
    <Layout>
      <section className="portfolioWrapper">
      <h1 className="hOneStyles">Thanks for visiting my portfolio!</h1>
        <section className="portfolioDisplay">
          <div className="cardHolder">
            <h3>🚧 Portfolio will be presented here 💼</h3>
            <p>👩‍💻 visit nichelicorn on <Link to="https://github.com/nichelicorn">GitHub</Link> 🐙😸</p>
          </div>
          <SideContent />
        </section>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
