<template>
  <nuxt-link :to="'/covid-19'" class="covid">
    <img src="~/assets/info.png" alt="Info" aria-hidden="true">
    <span class="banner">
      Now open Monday - Friday with extensive safety measures in place
    </span>
    <read-more />
  </nuxt-link>
</template>
<script>
import ReadMore from '@/components/ReadMore.vue'

export default {
  name: 'CovidBanner',
  components: {
    ReadMore
  }
}
</script>
<style lang="scss" scoped>
.covid {
  background-color: #355992;
  width: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  font-weight: bold;
  text-decoration: none;
  color: rgba(255,255,255,0.85);
  font-size: 0.8rem;
  img {
    width: 28px;
    margin: 2px;
    margin-right: 4px;
  }
  span.banner {
    text-align: center;
    text-transform: capitalize;
  }
}
@media screen and (min-width: 500px) {
  .covid {
    font-size: 0.9rem;
    img {
      margin-right: 8px;
    }
    .readmore {
      // margin-left: 8px;
      font-size: 0.6rem;
    }
  }
}
@media screen and (min-width: 750px) {
  .covid {
    font-size: 1rem;
    img {
      margin-right: 16px;
    }
    .readmore {
      font-size: 0.7rem;
      margin-left: 16px;
    }
  }
}
</style>
