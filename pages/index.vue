<template>
  <div class="container">
    <!-- <Header /> -->
    <Masthead />
    <About />
    <Message />
    <!-- <Footer /> -->
    <!-- <Snackbar /> -->
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import About from '~/components/About.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    // Header,
    Masthead,
    About,
    Message
    // Footer,
    // Snackbar
  }
}
</script>
