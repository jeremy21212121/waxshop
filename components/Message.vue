<template>
  <section class="message">
    <div class="img">
      <img
        :srcset="imageArrayToSrcset(image.srcset)"
        :src="image.srcset[0].src"
        :sizes="image.sizes"
        :alt="image.alt"
        aria-hidden="true"
      >
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
  },
  data () {
    return {
      image: {
        srcset: [
          {
            src: require('~/assets/legs_bw-740.jpg'),
            width: 740
          },
          {
            src: require('~/assets/legs_bw-1110.jpg'),
            width: 1110
          },
          {
            src: require('~/assets/legs_bw-1480.jpg'),
            width: 1480
          },
          {
            src: require('~/assets/legs_bw-1608.jpg'),
            width: 1608
          }
        ],
        sizes: '(min-width: 740px) 740px, 100vw',
        alt: 'A woman with smooth legs'
      }
    }
  },
  methods: {
    imageArrayToSrcset (imageArray) {
      return imageArray.map(img => `${img.src} ${img.width}w`).join(', ')
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  .img {
    position: relative;
    display: flex;
    // justify-content: center;
    img {
      position: absolute;
      width: 100%;
      // height: 100vw;
      // min-height: 396px;
      // max-height: 403px;
      height: 403px;
      object-fit: cover;
      z-index: -1;
    }
    .msg-wrapper {
      display: flex;
      align-items: center;
      height: 403px;
      width: 100%;
      margin: 0 auto;
      // position: absolute;
      // bottom: 25px;
    }
  }
}
@media screen and (min-width: 740px) {
  .message {
    .img {
      img {
        border-radius: 2px;
      }
    }
  }

}
</style>
