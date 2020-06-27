<template>
  <div class="wrapper">
    <img src="~/assets/error.jpg" alt="Error">
    <h1>Whoops...</h1>
    <p>
      We couldn't find that post.
    </p>
    <p class="error">
      Go to <nuxt-link to="/posts">Posts</nuxt-link> or <nuxt-link to="/">Home</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ErrorIndicator'
}
</script>

<style lang="scss" scoped>
@import '@/scss/shared/blog-post-shared.scss';

</style>
