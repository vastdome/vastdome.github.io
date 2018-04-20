module.exports = {
  siteMetadata: {
    title: 'Nuclear Chain',
    slogan: 'The next generation cloud.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#226dc2',
        showSpinner: false,
      },
    },
  ],
};