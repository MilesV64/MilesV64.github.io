/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Andante • Music Practice Journal",
    description:
      "Achieve calm, focused music practice with the help of a minimal but effect digital practice journal. Download free for iPhone!",
    url: "https://www.getthepracticeapp.com",
    image: "/favicon.ico" 
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layout/layout.js'),
      },
    },
  ],
}
