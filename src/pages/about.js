// Imports
import React from "react";
import Layout from "../components/Layout";

// Markup for the About page
const AboutPage = () => {
  return (
    <Layout>
      <title>About Nichele D.</title>
      <section className="aboutWrapper">
        <h1 className="hOneStyles">About Me</h1>
        <p><span className="illuminated">🙋‍♀️ </span>I'm Nichele D, a technologist from Colorado. I love learning, and lucky for me, JavaScript and front-end engineering lead to plenty of avenues for exploration!</p>
        <div className="imgBar"><img src="https://avatars.githubusercontent.com/u/63027000?v=4" alt="Headshot of Nichele D, green-haired version"></img></div>
        <p><span className="illuminated">🌊 </span>I started out in tech hoping to build beautiful things, practice being creative, and contribute to something meaningful. Mostly I was looking for work that would challenge me to grow. So in 2020, after much thought, and in the middle of the COVID-19 pandemic, I enrolled in a software engineering bootcamp. I learned a lot! And I was happy to discover that I have so much more to learn.</p>
        <p><span className="illuminated">📚 </span>The challenge and reward of growth and development is appealing, and has led me down many different paths already. I am an artist, massage therapist, accountant, aesthetician, and general science enthusiast. I bring all of that curiosity and experience into my work as a technologist, and the search for my first career as a <code>web developer</code> / <code>front end engineer</code> / <code>insert job title here</code>.</p>
        <p><span className="illuminated">🐙 </span>If you're interested in checking out more of my code, follow me on <a href="https://github.com/nichelicorn">GitHub!</a></p>
        <p><span className="illuminated">🦉 </span>If that's not your thing, and you're more into birds, you can follow me on <a href="https://twitter.com/nichelicorn">Twitter!</a> (Warning, I don't post much here, and am accepting pointers on getting into using it 🤷‍♀️)</p>
        {/* <p><span className="illuminated">📸 </span>I also have an Insta, but that's private, so keep an eye out for the public version.</p> */}
      </section>
    </Layout>
  );
};

export default AboutPage;