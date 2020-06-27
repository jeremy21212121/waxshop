<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadCrumbs"
    />
    <blog-post
      :post="post"
      :baseUrl="'https://staff.waxshop.ca'"
      :html="html"
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

export default {
  name: 'SinglePostPage',
  components: {
    Breadcrumbs,
    BlogPost
  },
  head () {
    return {
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:type', name: 'og:type', content: 'article' },
        { hid: 'article:published_time', name: 'article:published_time', content: this.ogPublished },
        { hid: 'article:modified', name: 'article:modified', content: this.ogUpdated },
        { hid: 'og:title', name: 'og:title', content: this.headData.title },
        { hid: 'og:description', name: 'og:description', content: this.headData.description },
        { hid: 'og:image', name: 'og:image', content: this.ogImageUrl },
        { hid: 'og:image:alt', name: 'og:image:alt', content: this.ogAltText },
        { hid: 'og:url', name: 'og:url', content: `https://waxshop.ca/posts/${this.$route.params.id}` },
      ]
    }
  },
  data() {
    return {
      post: { id: 0, title: '', body: '' },
      html: ''
    }
  },
  async fetch() {
    const postId = this.$route.params.id ? this.$route.params.id : ''
    if (postId && postId.length && postId.length > 0) {
      const postArray = await this.$axios.$get('https://staff.waxshop.ca/posts?id=' + postId )
      const post = postArray[0]
      if (post && post.id && post.date && post.published && post.title && post.body) {
        this.post = post
        this.html = await this.processMarkdown(post.body)
      }
    }
  },
  methods: {
    processMarkdown(mdString) {
      return new Promise(resolve => {
        Remark()
          .use(RemarkHtml)
          .process(mdString, (err, file) => {
            let output = ''
            if (!err) {
              output = String(file)
            }
            resolve(output)
          })
      })
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
          current: false
        },
        {
          title: `Post #${this.post.id || 0}`,
          path: this.$route.path,
          current: true
        }
      ]
    },
    hasImage() {
      return (!this.$fetchState.pending && !this.$fetchState.error && this.post && this.post.image && this.post.image.hasOwnProperty('formats'))
    },
    ogImageUrl() {
      const base = this.hasImage ? 'https://staff.waxshop.ca' : 'https://waxshop.ca/'
      const path = this.hasImage ? this.post.image.formats.large.url : '/_nuxt/assets/landing_rectangle.jpg'
      return base + path
    },
    ogAltText() {
      return this.hasImage
        ? this.post.image.alternateText
        : 'The Wax Shop Kelowna'
    },
    ogPublished() {
      return this.post && this.post.date
        ? this.post.date
        : ''
    },
    ogUpdated() {
      return this.post && this.post.updated_at
        ? this.post.updated_at
        : ''
    },
    bodyPreview() {
      return this.html
        .replace(/[\n]?<\/.+?>[\n]?/g, '') // removes closing html tags
        .replace(/[\n]?<.+?>[\n]?/g, '') // removes opening and self-closing html tags
    },
    ogDescription() {
      // returns the first sentence of the article
      return this.bodyPreview.split('.')[0].split('?')[0].split('!')[0]
    },
    headData() {
      return {
        title: (!this.$fetchState.pending && this.post) ? this.post.title : 'A post from The Wax Shop Kelowna',
        description: this.ogDescription
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