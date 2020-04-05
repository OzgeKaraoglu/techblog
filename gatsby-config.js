module.exports = {
  siteMetadata: {
    title: 'Tech Blog',
    author: 'Ozge Karaoglu'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:  `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`
  ]
}
