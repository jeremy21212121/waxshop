<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    />
    <blog-post
      :post="currentPost"
      :baseUrl="'https://staff.waxshop.ca'"
      :loading="$fetchState.pending"
      :error="$fetchState.error"
    />
  </main>
</template>

<script>
import Remark from 'remark';
import RemarkHtml from 'remark-html';

import Breadcrumbs from '@/components/Breadcrumbs.vue'
import BlogPost from '@/components/BlogPost.vue'
import structuredData from "@/mixins/structuredData.js"

import { mapState, mapActions } from 'vuex'

export default {
  name: 'SinglePostPage',
  mixins: [
    structuredData
  ],
  components: {
    Breadcrumbs,
    BlogPost
  },
  head () {
    return {
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'article:published_time', name: 'article:published_time', content: this.ogPublished },
        { hid: 'article:modified', name: 'article:modified', content: this.ogUpdated },
        { hid: 'og:title', property: 'og:title', content: this.headData.title },
        { hid: 'og:description', property: 'og:description', content: this.headData.description },
        { hid: 'og:image', property: 'og:image', content: this.ogImageUrl },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.ogAltText },
        { hid: 'og:url', property: 'og:url', content: `https://waxshop.ca/posts/${this.$route.params.slug}` },
      ],
      script: [...this.generateHeadScripts(this.completeBlogPostingStructuredData)]
    }
  },
  data() {
    return {
      defaultImage: {
        path: require('@/assets/landing_rectangle.jpg')
      }
    }
  },
  async fetch() {
    const postSlug = this.$route.params.slug ? this.$route.params.slug : ''
    if (!this.currentPost && postSlug && postSlug.length) {
      // Valid slug but post is not in store. Fetch from API
      const postArray = await this.$axios.$get('https://staff.waxshop.ca/posts?slug=' + postSlug )
      const validResponse = Array.isArray(postArray) && postArray.length === 1
      if (validResponse) {
        this.addPost(postArray[0])
      }
    }

    // const postId = this.$route.params.id ? this.$route.params.id : ''
    // if (postId && postId.length && postId.length > 0) {
    //   const postArray = await this.$axios.$get('https://staff.waxshop.ca/posts?id=' + postId )
    //   const post = postArray[0]
    //   if (post && post.id && post.date && post.published && post.title && post.body) {
    //     this.post = post
    //     this.html = await this.processMarkdown(post.body)
    //   }
    // }
  },
  methods: {
    ...mapActions({
      addPost: 'posts/addPost' 
    })
  },
  computed: {
    ...mapState('posts',['posts']),
    currentPost() {
      return Array.isArray(this.posts) && this.posts.find(postObj => postObj.slug === this.$route.params.slug)
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
          current: false
        },
        {
          title: this.headData.title,
          path: this.$route.path,
          current: true
        }
      ]
    },
    hasImage() {
      return (!this.$fetchState.pending && !this.$fetchState.error && this.currentPost && this.currentPost.image && this.currentPost.image.hasOwnProperty('formats'))
    },
    ogImageUrl() {
      // supplies a default image url if hasImage === false
      let output = ''
      if (this.hasImage) {
        output = 'https://staff.waxshop.ca' + this.currentPost.image.formats.large.url
      } else {
        output = this.baseUrl + this.defaultImage.path
      }
      return output
      // const base = this.hasImage ? 'https://staff.waxshop.ca' : 'https://waxshop.ca/'
      // const path = this.hasImage ? this.currentPost.image.formats.large.url : '/_nuxt/assets/landing_rectangle.jpg'
      // return base + path
    },
    ogAltText() {
      return this.hasImage ? this.currentPost.image.alternativeText: 'The Wax Shop Kelowna';
    },
    ogPublished() {
      return (this.currentPost && this.currentPost.date
        ? this.currentPost.date
        : '')
    },
    ogUpdated() {
      return this.currentPost && this.currentPost.updated_at
        ? this.currentPost.updated_at
        : ''
    },
    // bodyPreview() {
    //   return this.html
    //     .replace(/[\n]?<\/.+?>[\n]?/g, '') // removes closing html tags
    //     .replace(/[\n]?<.+?>[\n]?/g, '') // removes opening and self-closing html tags
    // },
    ogDescription() {
      // returns the first sentence of the article
      // return this.bodyPreview.split('.')[0].split('?')[0].split('!')[0]
      return this.currentPost ? this.currentPost.introText : 'A blog post from The Wax Shop Kelowna'
    },
    introSentence() {
      let output = ''
      const postObj = this.currentPost
      if (postObj) {
        // find the first sentence-ending punctuation
        const rE = /[.!?]/
        const punctuationArray = postObj.introText.match(rE)
        const hasPunctuation = Array.isArray(punctuationArray) && (punctuationArray.length === 1)
        // position of the first punctuation or the original length if no punctuation found
        const index = hasPunctuation ? postObj.introText.indexOf(punctuationArray[0]) + 1 : postObj.introText.length
        output = postObj.introText.substring(0, index)
      }
      return output
    },
    headData() {
      return {
        title: this.currentPost ? this.currentPost.title : 'A post from The Wax Shop Kelowna',
        description: this.introSentence
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/vars/breakpoints.scss';

.container {
  margin-top: 25%;
}

@media screen and (min-width: $break-l) {
  .container {
    margin-top: 32px;
  }
}
</style>