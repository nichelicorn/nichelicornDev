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
* 📍 Use an `export const query` page query when working on a page

## CSS

### CSS Extensions
* Browsers have specialized CSS extensions; these set styles specifically for the defined browser and do not work cross-browser
  * `-moz-` extensions are compatible with Mozilla browsers (Firefox and sisters)
  * `-ms-` extensions are compatible with Microsoft browsers (Edge, IE)
  * - `-webkit-` extensions are compatible with Safari and Chrome; most of these properties will also work with an `-apple-` prefix

### Refactoring CSS file
* Decide how to structure this file
  * Currently, have two files utilized
    * styles.css - this contains all standard page styles
    * queries.css - this contains all styles to be applied to certain media screen sizes
* Would like to utilize [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) using the docs as a guide

### CSS properties
* `overflow-y: scroll;` : `overflow-y` sets what a user sees when content overflow's an element's bottom edges; `scroll` allows a user to scroll through the content within the element's viewable area
* 