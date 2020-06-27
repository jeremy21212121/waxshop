<template>
  <div class="wrapper loading">
    <loading />
    <h1>Loading...</h1>
    <p class="error">Thanks for your patience</p>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'

export default {
  name: 'LoadingIndicator',
  components: {
    Loading
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/shared/blog-post-shared.scss';

</style>
