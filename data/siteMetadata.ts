const siteMetadata = {
  title: "Title",
  name: "My project name",
  creator: "Gustavo422",
  headerTitle: "SiteName",
  keywords: ["My", "Key", "Words"],
  description: "Concise description to the site",
  theme: "system",
  siteUrl: "https://myurl.com.br",
  siteRepo: "https://github.com/Gustavo422/myrepo",
  siteLogo: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ""}/static/images/banner.png`,
  email: `adress@yoursite.com`,
  github: `https://github.com`,
  x: `https://x.com`,
  facebook: `https://facebook.com`,
  youtube: `https://youtube.com`,
  linkedin: `https://www.linkedin.com`,
  threads: `https://threads.com`,
  instagram: `https://instagram.com`,
  medium: `https://medium.com`,
  substack: `https://substack.com`,
  bluesky: `https://bluesky.com`,
  locale: "pt-BR",
  // set to false if you didn't want a navbar fixed to the top
  stickyNav: true,
  newsletter: {
    provider: "buttondown",
  },
  comments: {
    provider: "chooseAnProvider",
    providerConfig: {},
  },
  search: {
    provider: "algolia",
    algoliaConfig: {
      // The application ID provided by Algolia
      appId: "R2IYF7ETH7",
      // Public API key: it is safe to commit it
      apiKey: "599cec31baffa4868cae4e79f180729b",
      indexName: "docsearch",
    },
  },
};

export default siteMetadata;
