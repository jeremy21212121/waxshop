<template>
  <div class="container">
    <contact
      :opening-hours="result.opening_hours"
    />
    <message />
  </div>
</template>

<script>
// import axios from 'axios'
import Contact from '~/components/Contact.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    Message,
    Contact
  },
  head () {
    return {
      title: 'Contact Us - The Wax Shop',
      meta: [
        { hid: 'description', name: 'description', content: 'Hours of operation and contact information for the Wax Shop in Kelowna. Send us a message, take a virtual tour of our lovely studio, or give us a call.' }
      ]
    }
  },
  data () {
    return {
      result: {
        opening_hours: JSON.parse('{"open_now":false,"periods":[{"close":{"day":0,"time":"1700"},"open":{"day":0,"time":"1100"}},{"close":{"day":1,"time":"1800"},"open":{"day":1,"time":"1000"}},{"close":{"day":2,"time":"1800"},"open":{"day":2,"time":"1000"}},{"close":{"day":3,"time":"1800"},"open":{"day":3,"time":"1000"}},{"close":{"day":4,"time":"1900"},"open":{"day":4,"time":"1000"}},{"close":{"day":5,"time":"1900"},"open":{"day":5,"time":"1000"}},{"close":{"day":6,"time":"1800"},"open":{"day":6,"time":"1000"}}],"weekday_text":["Monday: 10:00 AM – 6:00 PM","Tuesday: 10:00 AM – 6:00 PM","Wednesday: 10:00 AM – 6:00 PM","Thursday: 10:00 AM – 7:00 PM","Friday: 10:00 AM – 7:00 PM","Saturday: 10:00 AM – 6:00 PM","Sunday: 11:00 AM – 5:00 PM"]}')
      },
      status: 'OK'
    }
  },
  asyncData () {
    return fetch('https://dev.waxshop.ca/hours').then(res => res.json())
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: auto;
  // margin-top: 50px;
}
</style>
