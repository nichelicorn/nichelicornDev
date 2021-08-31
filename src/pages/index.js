import * as React from "react"
import Layout from "../components/Layout";
import "../styles/typography.css";
import "../styles/layout.css";
import "../styles/header.css";
import "../styles/footer.css";

// Styles
// const headingStyles = {
//   margin: 33,
//   // marginBottom: 64,
//   textAlign: "center",
//   // maxWidth: 320,
// }

// Component to render
const IndexPage = () => {
  return (
    <Layout>
      <title>nichelicornDev</title>
      <h1>🌊Welcome to nichelicorn.dev👩‍💻</h1>
      <p>This is where I share code and writings about technology, make random observations about life, and detail the exploits of my lively fish!</p>
      <aside>The exploits of the fish mainly involve pooping and eating...</aside>
      <p>Anywhoo, this will all be coming along incrementally as I work on my developer skills and practice JavaScript, HTML, CSS, and dive into learning more technologies!</p>
      <p>Currently, I am working on 👩‍💻 this website, nichelicorn.dev, a hotel management app with an API, and learning how to rollerskate.</p>
    </Layout>
  )
}

export default IndexPage;

