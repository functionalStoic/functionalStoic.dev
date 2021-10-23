require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    siteTitle: `𝑓(Stoic)`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `About`,
            slug: `/about`
          },
          {
            title: `Blog`,
            slug: `/blog`
          },
          {
            title: `Uses`,
            slug: `/uses`
          }
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://www.github.com/functionalStoic/`
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `𝑓(Stoic)`,
        short_name: `𝑓(Stoic)`,
        description: `My Thoughts + Digital Garden`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `black`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    process.env.ANALYSE_BUNDLE && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false
      }
    }
  ].filter(Boolean)
};
