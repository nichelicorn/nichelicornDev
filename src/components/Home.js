// Imports
import React from "react";
import SideContent from "./SideContent";

// Component to render
const Home = () => {
  return (
    <section className="homeWrapper">
        <h1 className="hOneStyles">Welcome to nichelicorn.dev‍</h1>
        <div className="allHomeContent">
          <div className="mainContent">
            <title>nichelicornDev</title>
            <p className="illuminated">🚧🏗</p><p>Portfolio page under construction! Check back soon for updates</p><p className="illuminated"> 👷‍♀️⚙️</p>
            <p className="funStyle">🥕 Click the links in the header to check out more on nichelicorn.dev! 🐇</p>
          </div>
          <SideContent />
        </div>
    </section>
  )
}

export default Home;
