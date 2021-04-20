<template>
  <div>
    <SiteHero/>
    <ArticleList :isPaginated="false" :postsPerPage="4"/>
  </div>
</template>

<script>
import SiteHero from "~/components/SiteHero";
import ArticleList from "~/components/ArticleList";
import Projects from "~/components/Projects";

export default {
  components: {
    SiteHero,
    ArticleList,
    Projects,
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
