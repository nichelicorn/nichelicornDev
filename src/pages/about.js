// Imports
import React from "react";
import Layout from "../components/Layout";

// Markup for the About page
const AboutPage = () => {
  return (
    <Layout>
      <title>About Nichele D.</title>
        <h1 className="hOneStyles">About Me</h1>
        <section className="aboutWrapper">
        <div className="imgBar">
          <img src="https://avatars.githubusercontent.com/u/63027000?v=4" alt="Headshot of Nichele D, green-haired version"></img>
        </div>
        <div className="aboutPs">
          <p><span className="illuminated">🙋‍♀️ </span>Hi there! I'm Nichele D, a technologist from Colorado. I love learning, and lucky for me, JavaScript and front-end engineering lead to plenty of avenues for exploration!</p>
          <p><span className="illuminated">🌊 </span>Becoming a software developer is a career pivot for me. I spent most of my professional life in accounting: doing payroll, working on the general ledgers, and preparing financial statements for publicly traded and private capital automotive companies. I learned a lot about analysis, creative problem solving, and working on teams. I love the car business, but the work / life balance isn't the best. Looking for something more creative, I became a licensed massage therapist and esthetician. I find that working one on one with a client to achieve a skin- or body-care goal can be very rewarding. I love building long-term relationships with my guests, and found that each meeting was an opportunity to deepen my understanding of the body and how to navigate complex work relationships. Eventually, I found that I couldn't get what I needed out of accounting or spa work, and so when the COVID-19 pandemic began in 2020, I started seriously considering my options. Hoping to combine my interests in art, the future, and learning, I found my way into a front-end engineering bootcamp.</p>
          {/* I started out in tech hoping to build beautiful things, practice being creative, and contribute to something meaningful. Mostly I was looking for work that would challenge me to grow. So in 2020, after much thought, and in the middle of the COVID-19 pandemic, I enrolled in a software engineering bootcamp. I learned a lot! And I was happy to discover that I have so much more to learn. */}
          {/* Becoming a techie is a career pivot for me. I have spent most of my professional life in accounting: doing payroll, working on the GL, and preparing financial statements for publicly traded and private capital automotive companies. I learned a lot about analysis, creative problem solving, and working on teams. I love the car business, but the work / life balance isn't the best. Looking for something more creative, I became a licensed massage therapist and esthetician. I find that working one on one with a client to achieve a skin- or body-care goal is very rewarding. I loved building long-term relationships with my guests, and found that each meeting was an opportunity to deepen my understanding of the body and how to navigate complex work relationships. Eventually, I found that I couldn't get what I needed out of accounting or spa work, and so when the COVID-19 pandemic began in 2020, I started seriously considering a career change, and found my way into a front-end engineering bootcamp. */}
          <p><span className="illuminated">📚 </span>When I was in college, I would joke with my mom that I wanted to be a student forever. 🤓  It wasn't really a joke, but I also believed the stories that I was supposed to become an adult, so I got a job instead of going to grad school. 🤷‍♀️  Fortunately, it's possible to learn so much now, thanks to the Internet! As I move into my future as a technologist, I bring my knowledge and experience as an artist, accountant, massage therapist, aesthetician, skeptic, science enthusiast, and everything else that fits into the soft recesses of that experience. If you're looking for a <code>web developer</code> / <code>front end engineer</code> / <code>insert job title here</code>, and I sound like a good fit, reach out! I'd love to chat about your projects!</p>
          {/* The challenge and reward of growth and development is appealing, and has led me down many different paths already. I am an artist, massage therapist, accountant, aesthetician, and general science enthusiast. I bring all of that curiosity and experience into my work as a technologist, and the search for my first career as a <code>web developer</code> / <code>front end engineer</code> / <code>insert job title here</code>. */}
          {/* When I was in college, I would joke with my mom that I wanted to be a student forever. 🤓  It wasn't really a joke, but I also believed the stories that I was supposed to become an adult, so I got a job instead of going to grad school. 🤷‍♀️  Fortunately, it's possible to learn so much now, thanks to the Internet! As I move into my future as a technologist, I bring my knowledge and experience as an artist, accountant, massage therapist, aesthetician, skeptic, science enthusiast, and everything else that fits into the soft recesses of that experience. If you're looking for a <code>web developer</code> / <code>front end engineer</code> / <code>insert job title here</code>, and I sound like a good fit, reach out! I'd love to chat about your projects! */}
          <p><span className="illuminated">🐙 </span>If you're interested in checking out more of my code, follow me on <a href="https://github.com/nichelicorn">GitHub!</a></p>
          <p><span className="illuminated">🦉 </span>If that's not your thing, and you're more into birds, you can follow me on <a href="https://twitter.com/nichelicorn">Twitter!</a> (Warning, I don't post much here, and am accepting pointers on getting into using it 🤷‍♀️)</p>
          {/* <p><span className="illuminated">📸 </span>I also have an Insta, but that's private, so keep an eye out for the public version.</p> */}
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;