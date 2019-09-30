<template>
  <div class="description">
    <p
      v-for="(paragraph, i) in paragraphs"
      :key="'paragraph' + i"
    >
      {{ paragraph }}
    </p>
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
div {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 1px 20px;
  margin-top: 5%;
  margin-bottom: 20px;
  p {
    text-align: center;
    font-size: 3.9vw;
    margin: 10px auto;
  }
}
@media screen and (min-width: 740px) {
  div {
    margin-top: 20px;
    width: 100%;
    p {
      font-size: 28px;
    }
  }
}
</style>
