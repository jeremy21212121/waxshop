<template>
  <div class="container">
    <Header />
    <Masthead />
    <About />
    <Contact />
    <Footer />
    <Snackbar />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Masthead from '~/components/Masthead.vue'
import About from '~/components/About.vue'
import Contact from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'
import Snackbar from '~/components/Snackbar.vue'

export default {
  components: {
    Header,
    Masthead,
    About,
    Contact,
    Footer,
    Snackbar
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
</style>
