import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import fediverseUser from "remark-fediverse-user";
import remarkCorepass from "remark-corepass";
import remarkCorebc from "remark-corebc";

const config: Config = {
  title: process.env.title || 'CIP',
  tagline: process.env.tagline || 'Core Improvement Proposals',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: process.env.url || 'https://cip.coreblockchain.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  customFields: {
    ican: 'cb57bbbb54cdf60fa666fd741be78f794d4608d67109',
  },

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.org || 'Core Foundation',
  projectName: 'cip', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'de-DE', 'ja-JP', 'es-ES', 'pt-BR', 'zh-CN', 'sk-SK'],
    localeConfigs: {
      'en-US': {
        label: 'English (US)',
      },
      'de-DE': {
        label: 'Deutsch',
      },
      'ja-JP': {
        label: '日本語',
      },
      'es-ES': {
        label: 'Español',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
      },
      'zh-CN': {
        label: '简体中文',
      },
      'sk-SK': {
        label: 'Slovenčina',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/core-coin/cip/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/core-coin/cip/tree/master/',
          path: 'cip',
          routeBasePath: 'cip',
          blogSidebarCount: 0,
          blogTitle: 'CIP Register',
          postsPerPage: 6,
          feedOptions: {
            type: 'all',
            copyright: `${process.env.org || 'Core Foundation'} ⛬ Copyright and related rights waived via CC0`,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          remarkPlugins: [
            fediverseUser,
            remarkCorepass,
            remarkCorebc,
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    metadata: [
      { name: 'description', content: 'Core Improvement Proposals' },
      { property: 'og:title', content: 'CIP' },
      { property: 'og:description', content: 'Core Improvement Proposals' },
      { property: 'og:type', content: 'website' },
      {
        name: "keywords",
        content: "author, categories, champion, cip, cips, consensus, core, design, document, each, editor, editors, encompassing, features, flow, fork, github, have, improvement, improvements, information, intended, key, mechanisms, members, new, offers, platform, primary, proposal, proposing, protocol, rationale, require, responsibilities, serve, sets, six, specifications, stakeholders, standards, stands, team, we, what, work, you",
      },
      { property: 'ican:xcb', content: 'cb57bbbb54cdf60fa666fd741be78f794d4608d67109' },
      { name: "theme-color", content: "#3b9a3e"},
      { name: "apple-mobile-web-app-capable", content: "yes"},
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent"},
    ],
    headTags: [
      {
        tagName: "link",
        attributes: {
          rel: "manifest",
          href: "/manifest.json",
        },
      },
      {
        tagName: "meta",
        attributes: {
          name: "generator",
          content: "CoreWeb Generator",
        },
      },
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Organization',
          name: 'CORE FOUNDATION',
          url: 'https://coreblockchain.net',
          logo: 'https://cip.coreblockchain.net/img/logo.svg',
        }),
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
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
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'localeDropdown',
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
            {
              label: 'Tags',
              to: '/cip/tags',
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
            {
              label: 'Blockindex',
              href: 'https://blockindex.net',
            },
            {
              label: 'Payto',
              href: 'https://payto.money',
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
              label: 'Discord',
              href: 'https://discord.com/invite/SCxmFr5Pwp',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/CoreCoinCC',
            },
            {
              label: '𝕏',
              href: 'https://x.com/corecoincc',
            },
          ],
        },
      ],
      copyright: `${process.env.org || 'Core Foundation'} ⛬ Copyright and related rights waived via CC0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: '6BNEFFU7K3',
      apiKey: 'c149ac2035f0b47db92d69b9bfa4f227',
      indexName: 'cip-coreblockchain-net',
      contextualSearch: true,
      searchPagePath: 'search',
      searchParameters: {
        facetFilters: ['language:en'],
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
