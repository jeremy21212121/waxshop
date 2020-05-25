<template>
  <div class="description">
    <p
      v-for="(paragraph, i) in paragraphs"
      :key="'paragraph' + i"
      v-html="paragraph"
    />
      <!-- {{ paragraph }}
    </p> -->
  </div>
</template>
<script>
export default {
  props: {
    paragraphs: {
      type: Array,
      default: () => { return ['', ''] }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/scss/vars/breakpoints.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/mixins/borderRadius.scss';

div {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 1px 20px;
  margin-top: 5%;
  margin-bottom: 20px;
  // box-shadow: 0 1px 3px rgba(255,255,255,0.12), 0 1px 3px rgba(255,255,255,0.18);
  @include bs-white-1;
  // border-radius: 2px;
  @include border-radius-standard;
  p {
    text-align: center;
    font-size: 3.9vw;
    margin: 10px auto;
  }
}
@media screen and (min-width: $break-s) {
  div {
    p {
      font-size: 26px;
    }
  }
}
@media screen and (min-width: $break-l) {
  div {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
