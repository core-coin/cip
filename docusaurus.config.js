// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CIP',
  tagline: 'Core Imporvement Proposal',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://cip.coreblockchain.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Core Foundation', // Usually your GitHub org/user name.
  projectName: 'cip', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/core-coin/cip/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/core-coin/cip/tree/master/cip/',
          path: 'cip',
          routeBasePath: 'cip',
          blogSidebarCount: 0,
          blogTitle: 'CIP Register',
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Core Foundation ⛬ Copyright and related rights waived via CC0`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      metadata: [
        { name: 'description', content: 'Core Improvement Proposals' },
        { property: 'og:title', content: 'CIP' },
        { property: 'og:description', content: 'Core Improvement Proposals' },
        { property: 'og:type', content: 'website' },
        {
          "name": "keywords",
          "content": "author, categories, champion, cip, cips, consensus, core, design, document, each, editor, editors, encompassing, features, flow, fork, github, have, improvement, improvements, information, intended, key, mechanisms, members, new, offers, platform, primary, proposal, proposing, protocol, rationale, require, responsibilities, serve, sets, six, specifications, stakeholders, standards, stands, team, we, what, work, you",
        },
        { property: 'ican:xcb', content: 'cb57bbbb54cdf60fa666fd741be78f794d4608d67109' },
      ],
      navbar: {
        title: 'CIP',
        logo: {
          alt: 'CIP',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/cip', label: 'CIPs', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/core-coin',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'CIPs',
                to: '/cip',
              },
              {
                label: 'Tutorial',
                to: '/docs/cip',
              },
            ],
          },
          {
            title: 'Ecosystem',
            items: [
              {
                label: 'Core Website',
                href: 'https://coreblockchain.net',
              },
              {
                label: 'Core Blog',
                href: 'https://blog.coreblockchain.net',
              },
              {
                label: 'Dev Portal',
                href: 'https://dev.coreblockchain.net',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Core ◆ Talk',
                href: 'https://coretalk.space',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/core-coin',
              },
              {
                label: '𝕏',
                href: 'https://x.com/corecoincc',
              },
            ],
          },
        ],
        copyright: `Core Foundation ⛬ Copyright and related rights waived via CC0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '6BNEFFU7K3',
        apiKey: 'c149ac2035f0b47db92d69b9bfa4f227',
        indexName: 'cip-coreblockchain-net',
        searchParameters: {
          facetFilters: ['tags:en'],
        },
      },
    }),
};

module.exports = config;
