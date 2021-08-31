// Imports
import React from "react";
import Layout from "../components/Layout";

// Markup for the About page
const AboutPage = () => {
  return (
    <Layout>
      <title>About Nichele D.</title>
      <h1>About Me</h1>
      <p>🌊 I'm Nichele D, a technologist from Colorado. I love learning, and jumping into the world of JavaScript and front-end engineering has created plenty of avenues for exploration!</p>
      <div className="imgBar"><img src="https://avatars.githubusercontent.com/u/63027000?v=4" alt="Headshot of Nichele D, green-haired version"></img></div>
      <p>I got into tech because, like a lot of grown-ups, I just wanted more out of my work life, and I was fortunate to be in a position to take a risk, and in 2020 I enrolled in a software bootcamp. I learned a lot! And I learned that I have a lot to learn.</p>
      <p>Fortunately, learning is one of my favorite things! Somehow all the pain and challenge of growth and learning is super appealing to me, and has led me down many different paths already. I am an artist, massage therapist, accountant, aesthetician, general science enthusiast, and novice technologist.</p>
      <p>If you're interested in checking out more of my code, follow me on <a href="https://github.com/nichelicorn">GitHub!</a></p>
      <p>If that's not your thing, and you're more into birds, you can follow me on <a href="https://twitter.com/nichelicorn">Twitter!</a> (Warning, I don't post much here, and am trying to figure out how to get myself to do it!)</p>
      <p>I also have an Insta, but that's private, so keep an eye out for the public version.</p>
    </Layout>
  );
};

export default AboutPage;