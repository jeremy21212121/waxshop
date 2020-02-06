<template>
  <div class="container">
    <!-- <div class="masthead">
      <img :src="images.masthead[0].src" :alt="images.masthead[0].alt" :srcset="images.masthead[0].srcset" :sizes="images.masthead[0].sizes">
    </div> -->
    <masthead />
    <section class="text">
      <h1>
        There are a Brazilian reasons to give the gift of waxing!
      </h1>
      <p>
        Purchase a $100 Gift Card valid on any of our services and products &amp; receive a <span class="caps">$25 bonus gift card</span> for yourself!
      </p>
      <h2>
        Because you deserve a smoother you, too!
      </h2>
      <p class="small">
        We welcome you into our Kelowna waxing studio- a clean, tranquil environment suited to both men and women in which you can relax and be sure you are receiving a superior waxing service every visit by certified wax technicians.
      </p>
    </section>
    <div class="row-wrapper">
      <photo-row
        :images="images.row"
      />
    </div>
    <promo-details />
    <div class="spacer" />
    <message />
    <div class="spacer" />
  </div>
</template>

<script>
import Masthead from '~/components/Masthead.vue'
import PhotoRow from '~/components/PhotoRow.vue'
import PromoDetails from '~/components/PromoDetails.vue'
import Message from '~/components/Message.vue'
import imageArrayToSrcset from '@/mixins/imagesToSrcset.js'

export default {
  components: {
    Masthead,
    PhotoRow,
    PromoDetails,
    Message
  },
  mixins: [
    imageArrayToSrcset
  ],
  head () {
    return {
      title: 'Gift Card Promo - The Wax Shop',
      meta: [
        { hid: 'description', name: 'description', content: 'Gift card promotion for the Wax Shop Kelowna. A clean, tranquil environment for both men and women. Receive a superior waxing service every visit by certified wax technicians.' }
      ]
    }
  },
  data () {
    return {
      images: {
        masthead: [
          {
            src: require('~/assets/abstract-740.jpg'),
            srcset: require('assets/abstract-1480.jpg') + ' 1480w, ' + require('assets/abstract-1125.jpg') + ' 1125w, ' + require('assets/abstract-740.jpg') + ' 740w',
            sizes: '(min-width: 740px) 740px, 100vw',
            alt: 'Festive wax shop logo'
          }
        ],
        row: [
          {
            title: '',
            url: require('assets/reception-740.jpg'),
            srcset: require('assets/reception-1480.jpg') + ' 1480w, ' + require('assets/reception-1125.jpg') + ' 1125w, ' + require('assets/reception-740.jpg') + ' 740w',
            alt: 'stylish reception area',
            sizes: '100vw',
            thumb: {
              src: require('assets/reception_thumb-238.jpg'),
              srcset: require('assets/reception_thumb-714.jpg') + ' 3x, ' + require('assets/reception_thumb-476.jpg') + ' 2x, ' + require('assets/reception_thumb-238.jpg') + ' 1x'
            }
          },
          {
            title: '',
            url: require('assets/giftbag-740.jpg'),
            srcset: require('assets/giftbag-1480.jpg') + ' 1480w, ' + require('assets/giftbag-1125.jpg') + ' 1125w, ' + require('assets/giftbag-740.jpg') + ' 740w',
            alt: 'gift card surrounded by gold and black decorations',
            sizes: '100vw',
            thumb: {
              src: require('assets/giftbag_thumb-238.jpg'),
              srcset: require('assets/giftbag_thumb-714.jpg') + ' 3x, ' + require('assets/giftbag_thumb-476.jpg') + ' 2x, ' + require('assets/giftbag_thumb-238.jpg') + ' 1x'
            }
          },
          {
            title: '',
            url: require('assets/serene-740.jpg'),
            srcset: require('assets/serene-1480.jpg') + ' 1480w, ' + require('assets/serene-1125.jpg') + ' 1125w, ' + require('assets/serene-740.jpg') + ' 740w',
            alt: 'serene and tidy treatment room',
            sizes: '100vw',
            thumb: {
              src: require('assets/serene_thumb-238.jpg'),
              srcset: require('assets/serene_thumb-714.jpg') + ' 3x, ' + require('assets/serene_thumb-476.jpg') + ' 2x, ' + require('assets/serene_thumb-238.jpg') + ' 1x'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/vars/colours.scss';

.masthead img {
  width: 100%;
}
div.spacer {
  margin-top: 20px;
}
.caps {
  text-transform: uppercase;
  font-weight: bold;
}
.small {
  font-size: 0.9rem;
}
section.text {
  // display: none;
  h1, h2 {
    margin-top: 10px;
    color: $gold;
    padding: 4px 8px;
    text-transform: uppercase;
  }
  h1 {
    font-size: 1.9rem;
  }
  p {
    color: $white-text;
    padding: 4px 8px;
  }
}
.row-wrapper {
  display: flex;
  margin-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(255,255,255,0.1);
}
</style>
