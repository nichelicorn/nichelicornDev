// Imports
import React, { useState, useEffect } from "react";

// Components
import Layout from "../components/Layout";
import Home from "../components/Home";
import SEO from "../components/seo";

// Styles
import "@fontsource/beth-ellen";
import "../styles/layout.css";
// import "../styles/header.css";
// import "../styles/home.css";
// import "../styles/sideContent.css";
// import "../styles/about.css";
// import "../styles/footer.css";
// import "../styles/pickles.css";
// import "../styles/posts.css";
// import "../styles/queries.css";

// Index Page to render
const IndexPage = () => {

  // // Build time data fetching
  // const gatsbyRepoData = useStaticQuery(graphql`
  //   query {
  //     github {
  //       repository(name: "gatsby", owner: "gatsbyjs") {
  //         id
  //         nameWithOwner
  //         url
  //       }
  //     }
  //   }
  // `)
  // Runtime data fetching
  // this seems to run continuously... only need this to happen one time, at pageload; not sure this is the correct tool to be using for this one
  // const [nichelicornGH, setNichelicornGH] = useState(0)
  //   useEffect(() => {
  //     // get data from GitHub api
  //     fetch("https://api.github.com/users/nichelicorn")
  //       .then(response => response.json())
  //       .then(data => {
  //         setNichelicornGH(data)

  //         console.log("nichelicornGH <>>>", nichelicornGH)
  //         // console.log("data =>", data)
  //       })
  //   }, [nichelicornGH])

  return (
    <Layout>
      <SEO title="nichelicorn.dev - a place for code things" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
