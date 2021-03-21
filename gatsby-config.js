module.exports = {
  siteMetadata: {
    siteTitle: 'Imron Rosyadi',
    siteDescription: 'Associate Professor at Jenderal Soedirman University',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://irosyadi-lp2.netlify.app/projects',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Imron Rosyadi', // for example - 'Ivan Ganev'
    authorDescription: 'Jenderal Soedirman University', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: 'irosyadi', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:imron.rosyadi@unsoed.ac.id`,
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/irosyadi`,
      },
      {
        icon: `github`,
        url: `https://github.com/irosyadi`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-185820309-1',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        // replace "chronoblog-1" with your own disqus shortname
        shortname: ``,
      },
    },
  ],
};
