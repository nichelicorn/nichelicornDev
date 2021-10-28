// Imports
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
// import { Link } from "gatsby";

const PicklePage = () => {

  const [ nichelicornRepoObj, setNichelicornRepoObj ] = useState(0)
  useEffect(() => {
    // get data from GitHub api
    fetch("https://api.github.com/users/nichelicorn/repos")
      .then(response => response.json()) // parse JSON data from request
      .then(resultData => {
        setNichelicornRepoObj(resultData) // sets repo data
      })
      .catch(err => console.log("👻 Error!", err))
  }, []);

  const onlyRepos = Object.values(nichelicornRepoObj) || [];

  // const filteredRepos = onlyRepos.filter(repo => {
  //   if (repo.description) return repo;
  // });
  // const filteredRepos = onlyRepos.filter(repo => repo.description);

  // const displayRepos = filteredRepos.sort((a, b) => {
  //   return (a.updated_at > b.updated_at) ? -1 : 1;
  // });

  const displayRepos = onlyRepos.filter(repo => repo.description).sort((a, b) => (a.updated_at > b.updated_at) ? -1 : 1);

  console.log("👻 displayRepos <>>>", displayRepos);

  console.log("????", displayRepos.length === 0);

  if (displayRepos.length === 0) {
    return (
      <Layout>
        <section className="card-container">
          <h2 className="h-one-styles">Portfolio</h2>
          <article key="error" className="pickle-card">
            <h3 className="h-one-styles">👻 Error!</h3>
            <h4>Portfolio information not currently available.</h4>
            <p>Please visit <a href="https://github.com/nichelicorn">GitHub</a> to see my latest projects!</p>
          </article>
        </section>
      </Layout>
    );
  };

  return (
  <Layout>
    <h2 className="h-one-styles">Portfolio</h2>
    <section className="card-container">
      {
        displayRepos.map(repo => {
          return (
            <article key={repo.id} className="pickle-card">
              <h3 className="h-one-styles">{repo.name}</h3>
              <h4>{repo.description}</h4>
              {/* <Link to={repo.html_url}>{repo.name} on GitHub</Link> */}
              <p>See<a href={repo.html_url}> {repo.name} </a> on GitHub!</p>
              <p>Most recent update : {repo.updated_at}</p>
              <p>Primary language: {repo.language}</p>
            </article>
          );        
        })
      }
    </section>
  </Layout>
  );
};

export default PicklePage;