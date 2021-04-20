<template>
  <section :key="$route.params.post">
      <header class="mt-6">
        <h3 class="text-gray-800 font-bold text-4xl">{{ attributes.title }}</h3>
        <p class="text-sm mb-5">
          Published on <time>{{require('moment')(attributes.ctime).format('YYYY/MM/DD')}}</time>
        </p>
      </header>
      <article class="markdown">
        <div class="mt-2" v-html="content"></div>
      </article>
    </div>
  </section>
</template>

<script>
const fm = require("front-matter");
const md = require("markdown-it")({
  injected: true,
  html: true,
  linkify: true,
  typography: true
}).use(require("markdown-it-highlightjs"), { auto: true });

export default {
  async asyncData({ params }) {
    const fileContent = await import(`~/articles/${params.post}.md`);
    let res = fm(fileContent.default);
    return {
      attributes: res.attributes,
      content: md.render(res.body)
    };
  },
  head() {
    return {
      title: this.attributes.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.attributes.description
        }
      ]
    };
  }
};
</script>

<style lang='scss'>
.markdown {
  a {
    color: #4299e1
  }
  a:hover {
      text-decoration: underline
  }
}
</style>
