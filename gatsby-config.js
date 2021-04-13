/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Web Developer in Hobart, Tasmania, Australia`,
    author: `Adrian Hewitt`,
    description: `Adrian Hewitt is a web developer in Hobart, Tasmania.  Contact him here for help with WordPress, MailChimp &amp; more.`,
    siteUrl: `https://adrianhewitt.com`,
    social: {
      twitter: `adrianhewitt`,
    },
    // defaultSocialImage: "social_share.png",
    // postPrefix : '/blog',
    pagePrefix: '',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151968485-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "adrianhewitt.com",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://cms.adrianhewitt.com/graphql`,
        schema: {
          requestConcurrency: 1,
          timeout: 90000,
          queryDepth: 25,
          circularQueryLimit: 10,
        },
        type: {
          BlockEditorContentNode: { exclude: true },
          MediaItem: {
            localFile: {
              requestConcurrency: 1,
            },
          },
        },
      }
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        // whitelist: ['pt-36'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'adrianhewitt.com', // if 'www' is set to 'false', be sure to also remove it here!
        // ErrorDocument: `
        //   ErrorDocument 401 /error_pages/401.html
        //   ErrorDocument 404 /error_pages/404.html
        //   ErrorDocument 500 /error_pages/500.html
        // `,
        // redirect: [
        //   'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
        //   {
        //     from: 'my-domain.com',
        //     to: 'mydomain.com',
        //   },
        //   {
        //     from: 'my-other-domain.com',
        //     to: 'mydomain.com',
        //   },
        // ],
        custom: `
        <IfModule mod_headers.c>
          Header set Content-Language "en-US"
        </IfModule>
        `,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "qtm8wxq",
        },
      },
    },
  ],
}
