<template>
  <nav aria-label="breadcrumbs">
    <ol v-if="breadcrumbs && breadcrumbs.length">
      <!-- The last breadcrumb title will appear on its own line on mobile if it is too long -->
      <li
        v-for="(bc, bcIndex) in breadcrumbs"
        :key="`breadcrumbs-${bcIndex}`"
        :class="{ fullwidth: shouldBeFullWidth(bc.title.length, bcIndex, breadcrumbs.length) }"
      >
        <nuxt-link v-if="!bc.current" :to="bc.path">
          {{ bc.title }}
        </nuxt-link>
        <span v-else>
          {{ bc.title }}
        </span>
        <!-- no divider character after last breadcrumb -->
        <span v-if="!isLastInArray(bcIndex, breadcrumbs.length)" class="spacer" aria-hidden="true">
          &gt;
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadcrumbsNav',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      // breadcrumbs with longer title will be put on their own line
      maxTitleLength: 30
    }
  },
  methods: {
    isLastInArray(arrayIndex, arrayLength) {
      return arrayIndex === (arrayLength - 1)
    },
    shouldBeFullWidth(titleLength, arrayIndex, arrayLength) {
      // last item in array and over maxTitleLength
      return this.isLastInArray(arrayIndex, arrayLength) && (titleLength > this.maxTitleLength)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/vars/breakpoints.scss';
nav {
  width: 100%;
  ol {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style-type: none;
    padding: 0 6px;
    margin-bottom: 12px;
    li {
      // display: inline-block;
      font-size: 0.9rem;
      &.fullwidth {
        width: 100%;
      }
      a {
        text-align: center;
      }
      span.spacer {
        padding: 0 6px 0 4px;
        font-size: 0.8rem;
      }
    }
  }
}

@media screen and (min-width: $breaks-sm) {
  nav {
    ol {
      flex-wrap: nowrap;
      li {
        &.fullwidth {
          width: auto;
        }
      }
    }
  }
}
</style>