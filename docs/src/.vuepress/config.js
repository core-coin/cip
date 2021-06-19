const { name, description } = require('../../package')

/** Feed **/
const feed_options = {
  canonical_base: 'https://cip.coreblockchain.cc',
  generator: 'cip',
  favicon: 'https://cip.coreblockchain.cc/favicon.ico',
  link: 'https://cip.coreblockchain.cc',
  copyright: 'CC0, CIP',
  posts_directories: ['/cip/'],
  rss: true,
  atom: true,
  json: true,
}

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: name.split('/')[1].toUpperCase(),
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#303030' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: '@vuepress/theme-blog',
  themeConfig: {
    logo: '/img/corelogo.svg',
    repo: 'https://github.com/core-coin/cip',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Propose changes',
    lastUpdated: true,
    dateFormat: 'YYYY-MM-DD',
    lengthPerPage: 10,
    nav: [
      { text: 'CIPs', link: '/' },
      { text: 'Docs', link: '/doc/cip' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/cat/' },
      { text: 'Open CIP draft', link: 'https://github.com/core-coin/cip/issues/new' },
      { text: 'CIP PR', link: 'https://github.com/core-coin/cip/compare' },
    ],
    footer: {
      contact: [
        { type: 'web', link: 'https://coreblockchain.cc' },
        { type: 'messenger', link: 'https://cip.coretalk.info' },
        { type: 'github', link: 'https://github.com/core-coin/cip' },
        { type: 'twitter', link: 'https://twitter.com/corecoincc' },
      ],
      copyright: [
        {
          text: 'CORE FOUNDATION',
          link: 'https://coreblockchain.cc',
        },
        {
          text: 'Copyright and related rights waived via CC0',
          link: 'https://creativecommons.org/publicdomain/zero/1.0/',
        },
      ],
    },
    directories: [
      {
        id: 'cips',
        dirname: 'cip',
        path: '/',
        title: 'CIPs',
        itemPermalink: '/cips/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
      {
        id: 'docs',
        dirname: 'doc/cip',
        path: '/doc/',
        title: 'Docs',
        itemPermalink: '/doc/:slug',
        pagination: {
          lengthPerPage: 10,
        },
      },
    ],
    frontmatters: [
      {
        id: 'cip',
        keys: ['cip'],
        path: '/cip/',
      },
      {
        id: 'tag',
        keys: ['tag', 'tags'],
        path: '/tag/',
      },
      {
        id: 'cat',
        keys: ['category', 'categories'],
        path: '/cat/',
      },
      {
        id: 'author',
        keys: ['author'],
        path: '/author/',
      },
      {
        id: 'requires',
        keys: ['requires'],
        path: '/requires/',
      },
      {
        id: 'replaces',
        keys: ['replaces'],
        path: '/replaces/',
      },
    ],
    'sitemap': {
      hostname: 'https://cip.coreblockchain.cc'
    },
    'feed': feed_options,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
