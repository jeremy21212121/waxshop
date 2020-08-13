<template>
  <article
    @click="$router.push(`/posts/${post.slug}`)"
    aria-role="link"
  >
    <div v-if="doneLoading" class="wrapper">
      <img :src="imageUrl" :alt="post.image.alternativeText">
      <span>
        {{ dateString }}
      </span>
      <h2 class="subtitle">
        {{ post.title }}
      </h2>
      <p>
        {{ introSentence }}
      </p>
      <div class="read">
        <read-more />
      </div>
    </div>

    <loading-indicator
      v-else-if="!error && loading"
    />

    <error-indicator
      v-else-if="error"
    />

  </article>
</template>

<script>
import ReadMore from '@/components/ReadMore.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import ErrorIndicator from '@/components/ErrorIndicator.vue'

export default {
  name: 'BlogCard',
  components: {
    ReadMore,
    LoadingIndicator,
    ErrorIndicator
  },
  props: {
    post: {
      type: Object,
      default: () => (
        { id: 0, date: '', title: '', slug: '', image: {}, html: '', introText: '', fullText: '', updated_at: '' }
      ),
      required: true
    },
    baseUrl: {
      type: String,
      default: () => (''),
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false,
      require: true
    },
    error: {
      type: null || Object,
      default: () => false,
      require: true
    }
  },
  data() {
    return {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
  },
  computed: {
    imageUrl() {
      return this.baseUrl + this.post.image.formats.large.url
    },
    dateString() {
      if (!this.post || !this.post.date) { return }
      const [ yearString, monthString, dayString ] = this.post.date.split('-')
      const monthIndex = Number(monthString) - 1
      return `${this.months[monthIndex || 0]} ${dayString}, ${yearString}`
    },
    introSentence() {
      // find the first sentence-ending punctuation
      const rE = /[.!?]/
      const punctuationArray = this.post.introText.match(rE)
      const hasPunctuation = punctuationArray && Array.isArray(punctuationArray) && punctuationArray.length === 1 && punctuationArray.every(ch => rE.test(ch))
      const index = hasPunctuation ? this.post.introText.indexOf(punctuationArray[0]) + 1 : this.post.introText.length
      return this.post.introText.substring(0, index)
    },
    doneLoading() {
      return !this.loading && !this.error && this.post && this.post.id && this.post.id > 0
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/scss/mixins/boxShadows.scss';
@import '@/scss/vars/colours.scss';
@import '@/scss/animations/appear.scss';
@import '@/scss/vars/breakpoints.scss';

article {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: rgba(255,255,255,0.33);
  @include bs-white-3;
  margin: 6px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255,255,255,0.21);
  // opacity: 0;
  transition: color 150ms ease-in-out;
  // animation: appear 150ms ease-out;
  @include appear-animation;
  animation: shadow-out 150ms ease-in;
  img {
    width: 100%;
    max-height: 52vw;
    object-fit: cover;
    object-position: 0 10%;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  span {
    text-align: left;
    margin: 2px 10px;
    display: block;
    font-size: 0.8rem;
  }
  h2 {
    // letter-spacing: -1px;
    padding: 1% 3px;
    font-weight: bold;
    color: $white-text2;
    font-size: 1.2em;
    line-height: 1.1em;
    margin-bottom: 4px;
  }
  p {
    padding: 1% 3px;
  }
  div.read {
    display: flex;
    // justify-content: flex-end;
    margin-bottom: 3%;
    .readmore {
      margin-right: 9%;
      text-align: right;
      font-size: 0.8rem;
      transition: color, border-color 150ms ease-out;
    }
  }
}
article:hover, article:active {
  background-color: rgba(255,255,255,0.21);
  @include bs-white-2;
  color: $white-text3;
  animation: shadow-in 150ms ease-out;
  // transition: background-color, box-shadow, color 1000ms ease;
  img {
    opacity: 0.85;
  }
  span.readmore {
    color: $white-text3;
    border-color: $white-text3;
    transition: color, border-color 150ms ease-in;
  }
}

@media screen and (min-width: $break-l) {
  article {
    img {
      max-height: 388px;
    }
  }
}

@keyframes shadow-in {
  0% {
    background-color: rgba(255,255,255,0.33);
    @include bs-white-3;
  }
  100% {
    background-color: rgba(255,255,255,0.21);
    @include bs-white-2;
  }
}

@keyframes shadow-out {
  0% {
    background-color: rgba(255,255,255,0.21);
    @include bs-white-2;
  }
  100% {
    background-color: rgba(255,255,255,0.33);
    @include bs-white-3;
  }
}
</style>
