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
import Masthead from "@/components/Masthead.vue";
import About from "@/components/About.vue";
import Message from "@/components/Message.vue";
import structuredData from "@/mixins/structuredData.js"

export default {
  name: "Home",
  mixins: [
    structuredData
  ],
  components: {
    // Header,
    Masthead,
    About,
    Message
    // Footer,
    // Snackbar
  },
  data() {
    return {
      lastModified: '2020-08-12T00:53:01.609Z',
      headData: {
        title: 'The Place for Waxing in Kelowna',
        description: 'A clean, tranquil environment suited to both men and women in which you can relax and be sure you are receiving a superior waxing service every visit by certified wax technicians.',
      },
      breadcrumbs: [
        {
          title: "Home",
          path: "/",
          current: true
        }
      ]
    };
  },
  head() {
    return {
      // meta: [
        // { hid: 'og:image', property: 'og:image', content: this.baseUrl + require('@/assets/landing_rectangle.jpg') }
      // ],
      script: [...this.generateHeadScripts()]
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 0px;
}
</style>
