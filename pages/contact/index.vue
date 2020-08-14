<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    />
    <contact
      :opening-hours="result.opening_hours"
    />
    <message />
  </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Contact from '@/components/Contact.vue'
import Message from '@/components/Message.vue'
import structuredData from "@/mixins/structuredData.js"

export default {
  name: 'ContactPage',
  components: {
    Breadcrumbs,
    Message,
    Contact
  },
  mixins: [
    structuredData
  ],
  data () {
    return {
      lastModified: '2020-08-12T00:53:01.609Z',
      headData: {
        title: 'Contact The Wax Shop Kelowna',
        description: 'Send us a message, get directions, call us, see our business hours or take a virtual tour of our beautiful waxing studio',
      },
      result: {
        // include default hours in case API call does not succeed
        opening_hours: JSON.parse("{\"open_now\":false,\"periods\":[{\"close\":{\"day\":1,\"time\":\"1800\"},\"open\":{\"day\":1,\"time\":\"1000\"}},{\"close\":{\"day\":2,\"time\":\"1800\"},\"open\":{\"day\":2,\"time\":\"1000\"}},{\"close\":{\"day\":3,\"time\":\"1800\"},\"open\":{\"day\":3,\"time\":\"1000\"}},{\"close\":{\"day\":4,\"time\":\"1800\"},\"open\":{\"day\":4,\"time\":\"1000\"}},{\"close\":{\"day\":5,\"time\":\"1800\"},\"open\":{\"day\":5,\"time\":\"1000\"}}],\"weekday_text\":[\"Monday: 10:00 AM – 6:00 PM\",\"Tuesday: 10:00 AM – 6:00 PM\",\"Wednesday: 10:00 AM – 6:00 PM\",\"Thursday: 10:00 AM – 6:00 PM\",\"Friday: 10:00 AM – 6:00 PM\",\"Saturday: Closed\",\"Sunday: Closed\"]}")
      },
      status: 'OK',
      error: null
    }
  },
  head() {
    return {
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:title', property: 'og:title', content: this.headData.title },
        { hid: 'og:description', property: 'og:description', content: this.headData.description },
        { hid: 'og:url', property: 'og:url', content: this.baseUrl + '/contact' },
      ],
      script: [...this.generateHeadScripts()]
    }
  },
  async fetch() {
    const openingHours = await this.$axios.$get('https://waxshop.ca/hours')
    if (openingHours && openingHours.result && openingHours.result.opening_hours && openingHours.status) {
      this.result.opening_hours = openingHours.result.opening_hours
      this.status = openingHours.status
    } else {
      this.error = new Error('Request to Hours API failed')
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          title: 'Home',
          path: '/',
          current: false
        },
        {
          title: 'Contact',
          path: '/contact',
          current: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/vars/breakpoints.scss';
.container {
  min-height: auto;
  margin-top: 25%;
}
@media screen and (min-width: $break-l) {
  .container {
    margin-top: 0px;
  }
}
</style>
