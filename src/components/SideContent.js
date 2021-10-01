// Imports
import React from "react";

// Component to render
const SideContent = () => {
  return (
    <div className="sideContent">
      <h2 className="sideHeader">🦄</h2>
      <article className="tweet-stream">
        <a className="twitter-timeline" data-dnt="true" data-theme="dark" href="https://twitter.com/nichelicorn?ref_src=twsrc%5Etfw">Tweets by nichelicorn</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
      </article>
      {/* <p>This is where I share code and write about technology, random observations, and the exploits of my lively fish!</p>
      <aside>The exploits of the fish mainly involve pooping and eating...🐟💩</aside>
      <p>Anywhoo, this will all be coming along incrementally as I work on my developer skills and practice JavaScript, HTML, CSS, and dive into learning more technologies!</p>
      <p>Currently, I am working on 👩‍💻 this website, nichelicorn.dev, a hotel management 🏨 app with an API, and learning how to rollerskate. 🛼 Unfortunately for the app, rollerskating and working on this website is a little more fun. 🤷‍♀️ </p> */}
    </div>
  );
};

export default SideContent;
