// Imports
import React from "react";
import SideContent from "./SideContent";

// Component to render
const Home = () => {
  return (
    <section className="homeContent">
      <div className="mainContent">
        <title>nichelicornDev</title>
        <h1 className="homeHdr">Welcome to nichelicorn.dev‍</h1>
        <p className="funStyle">🐰 Click the links in the header to check out more on nichelicorn.dev! 🥕</p>
      </div>
      <SideContent />
    </section>
  )
}

export default Home;
