import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { feedPlugin } from "vuepress-plugin-feed2";
import * as navbar from "./navbar";
import path from "path";

export default defineUserConfig({
  base: "/",

  dest: "./cip/.vuepress/dist",

  head: [
    ["link", { rel: "shortcut icon", type: "image/png", href: `/favicon.png` }],
    ["meta", { property: "wallet:xcb", content: "cb57bbbb54cdf60fa666fd741be78f794d4608d67109" }],
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

  alias: {
    "@img": path.resolve(__dirname, "../images"),
    "@aux": path.resolve(__dirname, "../auxiliaries"),
  },

  pure: true,

  theme: hopeTheme({
    hostname: "https://cip.coreblockchain.cc",

  	author: {
  		name: "Core Foundation",
  		url: "https://coreblockchain.cc",
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
  				"<a href='https://coreblockchain.cc' target='_blank'>Core web</a> &bull; <a href='https://dev.coreblockchain.cc' target='_blank'>Dev portal</a> &bull; <a href='https://coretalk.info' target='_blank'>Core ◆ Talk</a> &bull; <a href='https://blog.coreblockchain.cc' target='_blank'>Core Blog</a> &bull; <a href='https://github.com/core-coin' target='_blank'>GitHub</a> &bull; <a href='https://twitter.com/corecoincc' target='_blank'>Twitter</a>",

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
  			autoExcerpt: true,
  		},

  		comment: {
  			type: "giscus",
  			repo: "core-coin/cip",
        mapping: "title",
  			repoId: "MDEwOlJlcG9zaXRvcnkzNzg0MzIyODY=",
  			category: "CIP",
  			categoryId: "DIC_kwDOFo5rHs4CPWEt",
        inputPosition: "top",
        loading: "lazy",
  		},

  		feed: {
  			json: true,
  			atom: true,
  			rss: true,
        channel: {
          ttl: 60,
          author: "Core Foundation",
          copyright: "CC0",
        },
  		},

  		mdEnhance: {
  			enableAll: false,
  			presentation: {
  				plugins: ["highlight", "math", "search", "notes", "zoom"],
  			},
  		},
  	},

  	themeColor: {
  		blue: "#2196f3",
  		red: "#f26d6d",
  		green: "#46b549",
  		orange: "#fb9b5f",
  	},
  }),
});
