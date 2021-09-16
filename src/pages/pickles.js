// Imports
import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import repos from "../data/repos.js";

const PicklePage = () => {
  // console.log("repos <>>>", repos);
  return (
  <Layout>
    {console.log("repos??", repos)}
    {/* {console.log(repos.map(repo => repo.name))} */}
    {console.log(repos[0].languages)}
    {
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
    }

  </Layout>
  );
};

export default PicklePage;
