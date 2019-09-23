<template>
  <div class="container">
    <contact />
    <message />
  </div>
</template>

<script>
import Contact from '~/components/Contact.vue'
import Message from '~/components/Message.vue'

export default {
  components: {
    Message,
    Contact
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: auto;
  // margin-top: 50px;
}
</style>
