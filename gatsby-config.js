module.exports = {
  siteMetadata: {
    siteUrl: `https://joncoleman.me`,
    title: `Jon Coleman`,
    description: `I am a technical writer and web designer here at the internet. I'm interested in documentation and writing for the web, front-end web development, web design, and accessibility.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/`,
      },
    },

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
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.body,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
                {
                  allMdx(
                    filter: {frontmatter: {category: {eq: "writing"}}}
                    sort: {fields: frontmatter___date, order: DESC}
                  ) {
                    edges {
                      node {
                        id
                        frontmatter {
                          title
                          date(formatString: "MMMM Do, YYYY")
                        }
                        fields {
                          slug
                        }
                        body
                      }
                    }
                  }
                }
              `,
            output: '/rss.xml',
            title: 'Jon Coleman',
          },
        ],
      },
    },
  ],
};
