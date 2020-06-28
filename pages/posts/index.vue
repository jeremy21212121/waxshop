<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadCrumbs"
    />
    <h1 class="title">
      {{ title }}
    </h1>
    <blog-card
      v-for="(post, postIndex) in posts"
      :key="`post-${postIndex}`"
      :post="post"
      :baseUrl="api.baseUrl"
      :loading="$fetchState.pending"
      :error="$fetchState.error"
    >
    </blog-card>
  </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import BlogCard from '@/components/BlogCard.vue'

export default {
  name: 'BlogPosts',
  components: {
    Breadcrumbs,
    BlogCard
  },
  data() {
    return {
      headData: {
        title: 'Posts from The Wax Shop Kelowna',
        description: 'Get a feel for who we are by reading our blog posts',
      },
      api: {
        baseUrl: 'https://staff.waxshop.ca'
      },
      title: 'blog posts',
      posts: []
    }
  },
  head() {
    return {
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:title', property: 'og:title', content: this.headData.title },
        { hid: 'og:description', property: 'og:description', content: this.headData.description },
        { hid: 'og:url', property: 'og:url', content: 'https://waxshop.ca/posts' },
      ]
    }
  },
  async fetch() {
    const posts = await this.$axios.$get('https://staff.waxshop.ca/posts?published=true')
    if (posts && Array.isArray(posts) && posts.length > 0) {
      this.posts = posts
    }
  },
  computed: {
    breadCrumbs() {
      return [
        {
          title: 'Home',
          path: '/',
          current: false
        },
        {
          title: 'Posts',
          path: '/posts',
          current: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/vars/breakpoints.scss';

.container {
  margin-top: 25%;
  h1 {
    // margin-top: 3%;
    text-transform: capitalize;
  }
}

@media screen and (min-width: $break-l) {
  .container {
    margin-top: 32px;
  }
}
</style>