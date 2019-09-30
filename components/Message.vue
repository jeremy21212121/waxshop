<template>
  <section class="message">
    <div class="img">
      <img src="~/assets/bw_landing2.jpg" alt="A woman with smooth legs" aria-hidden="true">
      <div class="msg-wrapper">
        <contact-form />
      </div>
    </div>
  </section>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
.message {
  .img {
    position: relative;
    img {
      width: 100%;
      height: 100vw;
      min-height: 396px;
      max-height: 403px;
      object-fit: cover;
    }
    .msg-wrapper {
      display: block;
      width: 100%;
      margin: 0 auto;
      position: absolute;
      bottom: 25px;
    }
  }
}
</style>
