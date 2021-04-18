//const pkg = require("./package");
const glob = require("glob");
const path = require("path");
let files = glob.sync("**/*.md", { cwd: "articles" });

function getSlugs(post, _) {
  let slug = post.substr(0, post.lastIndexOf("."));
  return `/blog/${slug}`;
}

module.exports = {
  mode: "universal",
  head: {
    title: "cat2koban.dev",
    titleTemplate: "%s - cat2koban.dev",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "cat2koban's site respect by https://nirebu.com"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "ruby, rails, golang, vuejs, nuxt, docker, tailwindcss"
      },
      { name: "robots", hid: "robots" , content: "index, follow" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@cat2koban" },
      { name: "twitter:url", content: "https://cat2koban.dev" },
      { name: "twitter:description", content: "cat2koban's site respect by https://nirebu.com" },

      { name: "og:url", content: "https://cat2koban.dev" },
      { name: "og:locale", content: "en_GB" },
      { name: "og:description", content: "I'm a sysadmin and a email deliverability tech. In my spare time I contribute to open source projects and develop apps to scratch my proverbial itches." },
      { name: "og:title", content: "cat2koban.dev" },
      { name: "og:type", content: "website" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "~/static/favicon.ico" }],
    htmlAttrs: {
      lang: "ja-JP"
    }
  },
  loading: false,
  server: {
    host: "0.0.0.0",
    port: 3000
  },
  css: ["~assets/tailwind.scss"],
  plugins: [],
  modules: [
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/,
        use: ["raw-loader"]
      });
    }
  },
  generate: {
    fallback: true,
    routes: function() {
      return files.map(getSlugs);
    }
  },
  router: {
    base: '/',
  },
};
