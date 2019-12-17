<template>
  <div>
    <a class="social-icons" title="Visit our Instagram" href="https://www.instagram.com/thewaxshopkelowna/" target="_blank" rel="noopener noreferrer">
      <instagramsvg />
    </a>
    <!-- eslint-disable-next-line -->
    <a class="social-icons" title="Visit our Facebook page" href="https://www.facebook.com/thewaxshopkelowna" target="_blank" rel="noopener noreferrer" :style="`margin-left: ${spacing}px`">
      <facebooksvg />
    </a>
  </div>
</template>
<script>
import instagramsvg from '@/components/InstagramSVG.vue'
import facebooksvg from '@/components/FacebookSVG.vue'

export default {
  components: {
    instagramsvg,
    facebooksvg
  },
  props: {
    spacing: {
      type: Number,
      default: 8
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  width: 30%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  a.social-icons {
    display: flex;
    &:last-of-type {
      padding-right: 4px;
      margin-left: 8px;
    }
  }
}
</style>
