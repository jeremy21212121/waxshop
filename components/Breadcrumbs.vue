<template>
  <nav aria-label="breadcrumbs">
    <ol>
      <li
        v-for="(bc, bcIndex) in breadcrumbs"
        :key="`breadcrumbs-${bcIndex}`"
      >
        <nuxt-link v-if="!bc.current" :to="bc.path">
          {{ bc.title }}
        </nuxt-link>
        <span v-else>
          {{ bc.title }}
        </span>
        <span v-if="bcIndex < (breadcrumbs.length - 1)" class="spacer">
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
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  ol {
    display: flex;
    width: 100%;
    list-style-type: none;
    padding: 0 6px;
    margin-bottom: 12px;
    li {
      // display: inline-block;
      font-size: 0.9rem;
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
</style>