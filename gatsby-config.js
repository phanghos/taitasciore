module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My personal dev blog',
  },
  plugins: [
    {
      resolve: 'gatsby-source-medium-feed',
      options: {
        userName: '@taitasciore', // Medium user name
        name: 'MediumFeed', // GraphQL query AllMediumFeed
      },
    },
  ],
};
