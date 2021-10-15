// Imports
import React from "react";
import Layout from "../components/Layout";

// Markup for the About page
const AboutPage = () => {
  return (
    <Layout>
      <title>About Nichele D.</title>
        <h1 className="h-one-styles">About Me</h1>
        <section className="about-wrapper">
        <div className="img-bar">
          <img src="https://avatars.githubusercontent.com/u/63027000?v=4" alt="Headshot of Nichele D, green-haired version"></img>
        </div>
        <div className="about-ps">
          <p><span className="illuminated">🙋‍♀️ </span>Hi there! I'm Nichele D, a technologist from Colorado. I love learning, and lucky for me, JavaScript and front-end engineering lead to plenty of avenues for exploration!</p>
          <p><span className="illuminated">📚 </span>When I was in college, I would joke with my mom that I wanted to be a student forever. 🤓  It wasn't really a joke, but I also believed the stories that I was supposed to become an adult, so I got a job instead of going to grad school. 🤷‍♀️ (More on that below.)  Fortunately, I'm a software developer now! As a technologist, I bring my knowledge and experience as an artist, accountant, massage therapist, aesthetician, skeptic, science enthusiast, and everything that fits into the soft recesses of my life. If you're looking for a <code>web developer</code> / <code>front end engineer</code> / <code>insert job title here</code>, and I sound like a good fit, reach out! I'd love to chat about your projects!</p>
          <p><span className="illuminated">🐙 </span>I'm always working on a coding project! To check out what I'm working on now, follow me on <a href="https://github.com/nichelicorn">GitHub!</a></p>
          <p><span className="illuminated">🦉 </span>If you're more into birds, you can follow me on <a href="https://twitter.com/nichelicorn">Twitter!</a></p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;