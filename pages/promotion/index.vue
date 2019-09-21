<template>
  <div class="container">
    <Masthead />
    <promo-about />
    <Message />
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import PromoAbout from '~/components/PromoAbout.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    Masthead,
    PromoAbout,
    Message
  }
}
</script>

<style>
h1.section-title {
  font-weight: 300;
  margin: 28px 0px 22px 0px;
}
h2.section-title {
  font-weight: 400;
}
.container {
  max-width: 740px;
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  /* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  display: block;
  font-weight: 300;
  font-size: 2em;
  color: #999;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.4em;
  color: #999;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
@media screen and (min-width: 620px) {
  h1.section-title {
    font-size: 1.7rem;
  }
}
@media screen and (min-width: 740px) {
  h1.section-title {
    font-size: 1.9rem;
  }
}
</style>
