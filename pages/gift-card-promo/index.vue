<template>
  <div class="container">
    <div class="masthead">
      <img :src="images.masthead[0].src" :alt="images.masthead[0].alt" :srcset="images.masthead[0].srcset" :sizes="images.masthead[0].sizes">
    </div>
    <!-- <masthead /> -->
    <section class="text">
      <h1 v-html="heading"></h1>
      <p
        v-for="(para, paraIndex) in textBody"
        :key="`para${paraIndex}`"
      >{{ para }}</p>
      <!-- <p>
        Purchase a $100 Gift Card valid on any of our services and products &amp; receive a <span class="caps">$25 bonus gift card</span> for yourself!
      </p>
      <h2>
        Because you deserve a smoother you, too!
      </h2>
      <p class="small">
        We welcome you into our Kelowna waxing studio- a clean, tranquil environment suited to both men and women in which you can relax and be sure you are receiving a superior waxing service every visit by certified wax technicians.
      </p> -->
    </section>
    <div class="row-wrapper">
      <birthday-form />
      <!-- <photo-row
        :images="images.row"
      /> -->
    </div>
    <!-- <promo-details /> -->
    <div class="spacer" />
    <div id="promo-details" class="row-wrapper promo">
      <h2>Promotion details</h2>
      <p>
        {{ disclaimer }}
      </p>
    </div>
    <div class="spacer" />
  </div>
</template>

<script>
// import Masthead from '~/components/Masthead.vue'
// import PhotoRow from '~/components/PhotoRow.vue'
// import PromoDetails from '~/components/PromoDetails.vue'
import BirthdayForm from '~/components/BirthdayForm.vue'
import imageArrayToSrcset from '@/mixins/imagesToSrcset.js'
// import structuredData from "@/mixins/structuredData.js"

export default {
  components: {
    // Masthead,
    // PhotoRow,
    // PromoDetails,
    BirthdayForm
  },
  mixins: [
    imageArrayToSrcset,
    // structuredData
  ],
  head () {
    return {
      title: 'Birthday promotion - The Wax Shop',
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:title', property: 'og:title', content: this.headData.title },
        { hid: 'og:description', property: 'og:description', content: this.headData.description },
        { hid: 'og:url', property: 'og:url', content: this.baseUrl + this.$route.path },
      ],
      // script: [...this.generateHeadScripts()]
    }
  },
  data () {
    return {
      lastModified: '2020-08-12T00:53:01.609Z',
      headData: {
        title: 'Birthday promotion - The Wax Shop',
        description: 'Treat yourself with a $25 Birthday Gift Card this year from The Wax Shop'
      },
      heading: "It's almost your birthday! Treat yourself with a $25 Gift Card from The Wax Shop for a <span class=\"underline\">smooth</span> celebration. ",
      textBody: [
        "Fill out the below form so we know when and where to send your gift!"
      ],
      disclaimer: "$25 Gift Card will be sent annually a week prior to the birthdate you submitted through the above form for as long as you remain on our mailing list. This offer must be used within 30 days of the birthdate we have on file. If no other paid services are booked within 6 months of your first appointment, we may remove the birthday offer from your file.",
      form: {
        fields: [
          { name: 'First name', type: 'text', required: true },
          { name: 'Last name', type: 'text', required: true },
          { name: 'E-mail address', type: 'email', required: true },
          { name: 'Phone number', type: 'phone', required: false },
          { name: 'Consent for contact', type: 'checkbox', required: true, details: 'I give the Wax Shop Kelowna permission to e-mail me about promotions.' }
        ]
      },
      baseUrl: process.env.BASE_URL || 'https://waxshop.ca',
      breadcrumbs: [
        {
          title: "Home",
          path: "/",
          current: false
        },
        {
          title: "Gift Card Promo",
          path: "/gift-card-promo",
          current: false
        }
      ],
      images: {
        masthead: [
          {
            src: require('@/assets/bday_banner1080.jpg'),
            srcset: require('@/assets/bday_banner1200.jpg') + ' 1200w, ' + require('@/assets/bday_banner1080.jpg') + ' 1080w, ' + require('@/assets/bday_banner720.jpg') + ' 720w',
            sizes: '(min-width: 740px) 740px, 100vw',
            alt: 'Happy birthday from The Wax Shop'
          }
        ],
        // row: [
        //   {
        //     title: '',
        //     url: require('assets/reception-740.jpg'),
        //     srcset: require('assets/reception-1480.jpg') + ' 1480w, ' + require('assets/reception-1125.jpg') + ' 1125w, ' + require('assets/reception-740.jpg') + ' 740w',
        //     alt: 'stylish reception area',
        //     sizes: '100vw',
        //     thumb: {
        //       src: require('assets/reception_thumb-238.jpg'),
        //       srcset: require('assets/reception_thumb-714.jpg') + ' 3x, ' + require('assets/reception_thumb-476.jpg') + ' 2x, ' + require('assets/reception_thumb-238.jpg') + ' 1x'
        //     }
        //   },
        // ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/vars/colours.scss';

.container {
  margin-top: 19%;
}
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
    font-size: 1.6rem;
  }
  p {
    color: $white-text;
    padding: 4px 8px;
    font-size: 1.2rem;
  }
}
.row-wrapper {
  display: flex;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(255,255,255,0.1);
  border-radius: 4px;
  &.promo {
    flex-direction: column;
    h2 {
      color: $white-text;
    }
    p {
      color: $white-text;
      padding: 2px 8px;
    }
  }
}
@media screen and (min-width: 740px) {
  .container {
    margin-top: 32px;
  }
}
</style>
