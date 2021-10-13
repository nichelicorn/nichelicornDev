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
      {/* <p>This is where I share code and write about technology, random observations, and the exploits of my lively fish!</p> */}
    </div>
  );
};

export default SideContent;
