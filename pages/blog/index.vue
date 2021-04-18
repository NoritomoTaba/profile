<template>
  <ArticleList class="mt-6" :isPaginated="true" />
</template>

<script>
import ArticleList from "~/components/ArticleList";

export default {
  components: {
    ArticleList
  }
};
</script>
