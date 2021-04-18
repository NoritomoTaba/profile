<template>
  <section>
    <h3 class="font-bold text-3xl lg:text-4xl text-gray-700 px-3">
      Posts
    </h3>
    <article
      v-for="(post,key) in bloglist" :key="key"
      class="py-2 px-3 rounded-lg"
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
        <h4 class="text-xl font-normal text-purple-600 hover:underline">
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
  },
  props: {
    isPaginated: Boolean,
  }
};
</script>
