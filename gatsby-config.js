module.exports = {
  siteMetadata: {
    title: '<CodeWithMe />',
    author: 'Özge Karaoğlu'
  },
  plugins: [// In your gatsby-config.js
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-transformer-remark`,
              options: {
                plugins: [
                  {
                    resolve: `gatsby-remark-highlight-code`
                  },
                ],
              },
            },
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: false,
                noInlineHighlight: false,
                languageExtensions: [
                  {
                    language: "superscript",
                    extend: "javascript",
                    definition: {
                      superscript_types: /(SuperType)/,
                    },
                    insertBefore: {
                      function: {
                        superscript_keywords: /(superif|superelse)/,
                      },
                    },
                  },
                ],
                prompt: {
                  user: "root",
                  host: "localhost",
                  global: false,
                },
                escapeEntities: {},
              },
            },
          ],
        },
      },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none"
      }
    }
    ,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.PUBLISHER_ID || "none"
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path:  `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesTooOriginal: false
            }
          }
        ]
      }
    }
  ]
}
