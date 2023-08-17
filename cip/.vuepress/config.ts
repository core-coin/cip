import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import path from "path";

export default defineUserConfig({
  base: "/",

  dest: "./cip/.vuepress/dist",

  head: [
    ["link", { rel: "shortcut icon", type: "image/png", href: `/favicon.png` }],
    ["meta", { property: "ican:xcb", content: "cb57bbbb54cdf60fa666fd741be78f794d4608d67109" }],
    ["meta", { name: "description", content: "Core Improvement Proposals" }],
    ["meta", { property: "og:title", content: "CIP" }],
    ["meta", { property: "og:description", content: "Core Improvement Proposals" }],
    ["meta", { property: "og:type", content: "website" }],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "CIP",
      description: "Core Improvement Proposals",
    },
  },

  theme: hopeTheme({
    hostname: "https://cip.coreblockchain.net",

  	author: {
  		name: "Core Foundation",
  		url: "https://coreblockchain.net",
  	},

  	iconPrefix: "iconfont icon-",

  	logo: "/logo.svg",

  	repo: "https://github.com/core-coin",

  	repoDisplay: true,

  	navbarAutoHide: "always",

  	pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  	blog: {},

  	sidebar: false,

  	docsRepo: "https://github.com/core-coin/cip",

  	docsBranch: "master",

  	copyright: "Core Foundation // Copyright and related rights waived via CC0.",

  	locales: {
  		"/": {
  			// navbar
  			navbar: navbar.en,

  			footer:
  				"<a href='https://coreblockchain.net' target='_blank'>Core Web</a> &bull; <a href='https://dev.coreblockchain.net' target='_blank'>Dev Portal</a> &bull; <a href='https://coretalk.space' target='_blank'>Core ◆ Talk</a> &bull; <a href='https://blog.coreblockchain.net' target='_blank'>Core Blog</a> &bull; <a href='https://github.com/core-coin' target='_blank'>GitHub</a> &bull; <a href='https://x.com/corecoincc' target='_blank'>𝕏</a>",

  			displayFooter: true,
        blogLocales: {
          category: "Locale_En",
          tag: "en"
        },
  			blog: {
  				description: "Core Foundation",
  			},
  		},
  	},

  	encrypt: {
  		config: {},
  	},

  	plugins: {
  		blog: {
  			excerpt: true,
  		},

  		feed: {
  			json: true,
  			atom: true,
  			rss: true,
        channel: {
          ttl: 60,
          copyright: "CC0",
        },
  		},

  		mdEnhance: {
  			imgSize: true,
        katex: true,
        mermaid: true,
  		},
  	},
  }),
});
