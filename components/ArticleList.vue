<template>
  <section>
    <h3 class="text-gray-800 font-bold text-3xl lg:text-4xl">
      Posts
    </h3>
    <article
      v-for="(post,key) in bloglist" :key="key"
      class="py-2 rounded-lg"
      :class="key == bloglist.length -1 ? '' : 'mb-1'"
    >
      <nuxt-link :to="`/blog/${post.slug}`">
        <div v-if="post.cover_image">
            <figure>
              <img
                :src="require(`~/assets/images/articles/${post.cover_image}?size=640`)"
                :alt="post.cover_image_cp"
                loading="lazy"
              >
            </figure>
        </div>
        <div>
          <h4 class="font-mono text-xl hover:text-blue-500 underline">
            {{ post.title }}
          </h4>
          <p class="mt-1 text-sm text-gray-600">Published on {{ post.ctime }}</p>
        </div>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
export default {
  computed: {
    bloglist() {
      return this.$store.state.bloglist;
    },
  }
};
</script>
