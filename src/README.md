# 🌊 Hi! This is where I take notes about the things I've learned.

## Gatsby

### Querying for data with GraphQL
* [Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/)

GOALS
* Use GraophiQL to explore the data layer and build your own GraphQL queries
* Use the  `useStaticQuery` hook to pull data into a "building block" component
* Use the  `gatsby-source-filesystem` plug to pull data into your side from a local file system
* Create a page query to pull data into a page component

NOTES
* Source plugins allow access to various data management systems (local file system, CMS, private APIs, database, etc) to feed data into the GraphQL data layer
* The data layer can be accessed using GraphQL queries within components; allowing this data to be used within component pages
* GraphiQL is an in-browser tool for creating GraphQL queries; with the development server running, visit `http://localhost:8000/___graphql` to open this tool
* `useStaticQuery` - this is a pre-defined hook that adds GraphQL queries to components;
  * takes one parameter - a string that defines the query
  * can only have one instance of `useStaticQuery` per file - use GraphiQL to define queries for multiple search parameters in a single query
  * `slug` is the file name; allows a Link to be created to open the file
  * 📍 When working with components, use the `useStaticQuery` hook
* Use an `export const query` when working on a page