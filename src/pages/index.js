import * as React from "react"
import Layout from "../components/Layout";
import "../styles/typography.css";
import "../styles/layout.css";
import "../styles/header.css";
import "../styles/footer.css";

// Styles
const headingStyles = {
  margin: 33,
  // marginBottom: 64,
  textAlign: "center",
  // maxWidth: 320,
}

// Component to render
const IndexPage = () => {
  return (
    <Layout>
      <title>nichelicornDev</title>
      <h1 style={headingStyles}>
      🌊 Welcome to nichelicorn.dev 👩‍💻
        <br />
      </h1>
    </Layout>
  )
}

export default IndexPage;

