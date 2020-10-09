<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    />
    <h1 class="title">
      {{ title }}
    </h1>
    <blog-card
      v-for="(post, postIndex) in posts"
      :key="`post-${postIndex}`"
      :post="post"
      :apiBaseUrl="api.baseUrl"
      :loading="$fetchState.pending"
      :error="$fetchState.error"
    >
    </blog-card>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import BlogCard from '@/components/BlogCard.vue'
import structuredData from "@/mixins/structuredData.js"

export default {
  name: 'BlogPosts',
  mixins: [
    structuredData
  ],
  components: {
    Breadcrumbs,
    BlogCard
  },
  data() {
    return {
      lastModified: '2020-08-12T23:34:35.463Z',
      headData: {
        title: 'Posts from The Wax Shop Kelowna',
        description: 'Get a feel for who we are by reading our blog posts',
      },
      api: {
        baseUrl: 'https://staff.waxshop.ca'
        // baseUrl: 'http://localhost:1337'
      },
      title: 'blog posts',
      // posts: []
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
        { hid: 'og:image', property: 'og:image', content: this.baseUrl + require('@/assets/landing_rectangle.jpg') },
      ],
      script: [...this.generateHeadScripts(this.completeBlogStructuredData)]
    }
  },
  async fetch() {
    const posts = await this.$axios.$get(this.api.baseUrl + '/posts')
    if (posts && Array.isArray(posts) && posts.length > 0) {
      this.setPosts(posts)
    }
  },
  methods: {
    ...mapActions({
      setPosts: 'posts/setPosts',
      addPost: 'posts/addPost'
    })
  },
  computed: {
    ...mapState('posts',['posts']),
    noPostsFound() {
      return !this.$fetchState.pending &&
        !this.$fetchState.error &&
        (!Array.isArray(this.posts) || this.posts.length === 0)
    },
    breadcrumbs() {
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