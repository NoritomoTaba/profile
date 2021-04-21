<template>
  <div>
    <SiteHero/>
    <ArticleList :isPaginated="false" :postsPerPage="4"/>
  </div>
</template>

<script>
import SiteHero from "~/components/SiteHero";
import ArticleList from "~/components/ArticleList";

export default {
  components: {
    SiteHero,
    ArticleList,
  },
  head() {
    return {
      title: "Home",
    };
  }
};
</script>


<style>
</style>
