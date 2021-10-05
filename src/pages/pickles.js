// Imports
// import React from "react";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
// import { Link, useStaticQuery, graphql } from "gatsby";
import repos from "../data/repos.js";
// import pickleData from "../data/pickleData.js";

const PicklePage = () => {
  // console.log("repos <>>>", repos);

  // const [ starsCount, setStarsCount ] = useState(0)
  // useEffect(() => {
  //   // get data from GitHub api
  //   fetch("https://api.github.com/repos/gatsbyjs/gatsby")
  //     .then(response => response.json()) // parse JSON data from request
  //     .then(resultData => {
  //       setStarsCount(resultData.stargazers_count) // set data for the number of stars
  //     })
  // }, [])

  //   const [ starsCount, setStarsCount ] = useState(0)
  // useEffect(() => {
  //   // get data from GitHub api
  //   fetch("https://api.github.com/repos/gatsbyjs/gatsby")
  //     .then(response => response.json()) // parse JSON data from request
  //     .then(resultData => {
  //       setStarsCount(resultData.stargazers_count) // set data for the number of stars
  //     })
  // }, [])

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

  // should be using useStaticQuery - this is a page component
  // const data = useStaticQuery(graphql`
    
  // `)

  return (
  <Layout>
    {/* {console.log("repos??", repos)} */}
    {/* {console.log(repos.map(repo => repo.name))} */}
    
    {/* {console.log("starsCount <>>>", starsCount)} */}

    {/* {console.log("nichelicornRepoObj <>>>", nichelicornRepoObj)} */}
    {console.log("onlyRepos <>>>", onlyRepos)}

    {/* {
      repos.map(repo => {
        return (
          <article className="rCard">
            <h2 className="rName">{repo.name}</h2>
            <p>{repo.description}</p>
            <Link to="{repo.repoUrl}">See the code on GitHub</Link>
            <Link to={repo.deployUrl}>Visit the project live!</Link>
            <p>Languages used : {repo.languages}</p>
          </article>
        )
      })
    } */}

    <h2 className="hOneStyles">Portfolio</h2>
    <section className="pickle-jar">
      {
        onlyRepos.map(repo => {
          if (repo.language) {
            return (
              <article className="pickle-card">
                <h3 className="hOneStyles">{repo.name}</h3>
                <h4>{repo.description}</h4>
                <Link to={repo.html_url}>{repo.name} on GitHub</Link>
                <p>Most recent update : {repo.updated_at}</p>
                <p>Language: {repo.language}</p>
              </article>
            )

          }
        })
      }
    </section>



  </Layout>
  );
};

export default PicklePage;


