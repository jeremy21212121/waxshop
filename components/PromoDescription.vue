<template>
  <div class="description">
    <p
      v-for="(paragraph, i) in paragraphs"
      :key="'paragraph' + i"
    >
      {{ paragraph }}
    </p>
    <!-- <p>
      The Wax Shop specializes in women and men's waxing in Kelowna. That's all we do! We know how important it is to have a comfortable, clean and safe waxing experience. We use high quality wax specifically made for each area of the body.
    </p>
    <p>
      We welcome you into our Kelowna waxing studio - a clean, tranquil environment suited to both men and women in which you can relax and be sure you are receiving a superior waxing service every visit by certified wax technicians.
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
div {
  background-color: rgba(255, 255, 255, 0.15);
  padding: 1px 20px;
  margin-top: 20px;
  p {
    text-align: center;
    font-size: 1rem;
    margin: 10px auto;
  }
}
</style>
