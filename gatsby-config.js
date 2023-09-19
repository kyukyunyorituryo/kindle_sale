/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
pathPrefix: "/kindle_sale",
  siteMetadata: {
    title: `kindleセールチェック`,
    author: {
      name: `99`,
      summary: `電子書籍に関するものを公開しています。キンドルで電子書籍を出してます。`,
    },
    description: `kindleのセール本を各出版社ごとに並べています。アマゾン以外が主催の対抗してセールになっている商品も見つけられます。`,
    siteUrl: `https://kyukyunyorituryo.github.io/kindle_sale/`,
    social: {
      twitter: `99nyorituryo`,
    },
    icon: `https://kyukyunyorituryo.github.io/i/densho512.png`,
  },
  plugins: [
      `gatsby-plugin-sitemap`,
      {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-J8FW91ELEL'],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/json/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,/*
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.edges.map(node => {
                return Object.assign({}, node.childJson, {
                  date: node.childJson.Date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                })
              })
            },
            query: `{
             allFile(filter: {extension: {eq: "json"}}, sort: {childrenJson: {Date: DESC}}) {
               edges {
                 node {
                   fields {
                     slug
                   }
                   childJson {
                     Date
                     Saletitle
                   }
                 }
               }
             }
            }`,
            output: "/rss.xml",
            title: "kindleセールチェック RSS Feed",
          },
        ],
      },
    },*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kindleセールチェック`,
        short_name: `kindleセール`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/densho512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
