<template>
  <div class="flex flex-col text-gray-700 min-h-screen max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto">
    <NavBar />
    <div class="lg:px-0 flex-grow lg:container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar';

export default {
  components:{
    NavBar,
  }
}
</script>
