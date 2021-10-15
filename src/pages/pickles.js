// Imports
// import React from "react";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const PicklePage = () => {

  const [ nichelicornRepoObj, setNichelicornRepoObj ] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch("https://api.github.com/users/nichelicorn/repos")
      .then(response => response.json()) // parse JSON data from request
      .then(resultData => {
        setNichelicornRepoObj(resultData) // sets repo data
      })
  }, []);

  const onlyRepos = Object.values(nichelicornRepoObj);

  console.log("onlyRepos <>>>", onlyRepos);

  return (
  <Layout>
    <h2 className="h-one-styles">Portfolio</h2>
    <section className="card-container">
      {
        onlyRepos.map(repo => {
          {/* if (repo.language) { */}
            return (
              <article className="pickle-card">
                <h3 className="h-one-styles">{repo.name}</h3>
                <h4>{repo.description}</h4>
                <Link to={repo.html_url}>{repo.name} on GitHub</Link>
                <p>Most recent update : {repo.updated_at}</p>
                <p>Language: {repo.language}</p>
              </article>
            );
          {/* } */}
        })
      };
    </section>
  </Layout>
  );
};

export default PicklePage;


