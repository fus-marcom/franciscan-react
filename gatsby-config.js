module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        pathToTheme: `src/misc/fusTheme`
      }
    }
  ]
};
