<template>
  <div class="flex flex-col min-h-screen mx-8">
    <NavBar />
    <div class="lg:px-0 flex-grow lg:container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';
import SiteFooter from '~/components/SiteFooter';

export default {
  components:{
    NavBar,
    SiteFooter
  }
}
</script>
