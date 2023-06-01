<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    />
    <h1 class="title">{{ heading }}</h1>
    <!-- <img :src="headingImg" alt="Sparkle icon" aria-hidden="true"> -->
      <p
        v-for="(paragraph, index) in text"
        :key="`health-para${index}`"
      >
        {{ paragraph }}
      </p>
      <div class="boxes">
        <div
          v-for="(box, index) in boxes"
          :key="`hygienebox${index}`"
          class="healthbox"
        >
          <img :src="box.imagePath" :alt="box.alt" aria-hidden="true">
          <h2 class="">
            {{ box.title }}
          </h2>
          <p>
            {{ box.text }}
          </p>
        </div>
      </div>
      <p v-html="moreInfo" />
  </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import structuredData from "@/mixins/structuredData.js"

export default {
  name:'Hygiene',
  mixins: [
    structuredData
  ],
  components: {
    Breadcrumbs
  },
  data() {
    return {
      lastModified: '2020-08-13T00:21:10.844Z',
      headData: {
        title: 'New hygiene measures',
        description: 'Here are some of the changes we have made to help ensure the safety of our clients and staff.'
      },
      heading: `New hygiene measures`,
      // headingImg: require('~/assets/sm-sparkle.png'),
      text: [
        `Here are some of the changes we have made to help ensure the safety of our clients and staff`
      ],
      moreInfo: 'Please review the <a href="/health-and-safety/client-protocol">procedures for clients</a> before <a href="https://waxshopca.zenoti.com/webstoreNew" target="_blank" rel="noopener">booking an appointment.</a>',
      boxes: [
        {
          title: 'Personal protective equipment',
          imagePath: require('@/assets/mask256.png'),
          alt: 'Mask icon',
          text: 'Our waxers wear masks, gloves and face shields. Clients will be provided with a mask if they don\'t have one.'
        },
        {
          title: 'Enhanced sanitization protocol',
          imagePath: require('@/assets/spray256.png'),
          alt: 'Sterilize icon',
          text: 'We have removed unnecessary furniture from the treatment rooms to allow for a more thorough sanitization between clients.'
        },
        {
          title: 'Social distancing',
          imagePath: require('@/assets/distance256.png'),
          alt: 'Social distancing',
          text: 'The waiting room is closed and we are operating with minimal staff to maximize distance between people.'
        },
        {
          title: 'Minimal contact payments',
          imagePath: require('@/assets/card256.png'),
          alt: 'Contactless payment',
          text: 'We prefer not to accept cash. The card terminal supports contactless "tap" payment and is sanitized between clients.'
        },
        {
          title: 'Retail areas sealed off',
          imagePath: require('@/assets/product256.png'),
          alt: 'Contactless payment',
          text: 'The retail products are no longer self-serve, to prevent a potential contact transmission vector. Our staff will be happy to assist you with your selection.'
        },
        {
          title: 'Client washrooms closed',
          imagePath: require('@/assets/toilet256.png'),
          alt: 'Toilet icon',
          text: 'Washrooms are closed, except for emergencies. Clients can wash their hands in our treatment room sinks.'
        },
        {
          title: 'No walk-in appointments',
          imagePath: require('@/assets/walking256.png'),
          alt: 'Walking icon',
          text: 'Please schedule your appointment online or by phone starting Friday May 22.'
        },
      ]
    }
  },
  head() {
    return {
      script: [...this.generateHeadScripts()]
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
          title: 'Health & Safety',
          path: '/health-and-safety',
          current: false
        },
        {
          title: 'Hygiene Measures',
          path: '/hygiene',
          current: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins/boxShadows.scss";
@import '~/scss/mixins/borderRadius.scss';
@import '~/scss/vars/breakpoints.scss';

.container {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  @include bs-white-0b;
  margin-top: 25%;
  margin-bottom: 64px;
  padding: 6px;
  padding-bottom: 32px;
  h1 {
    // margin-bottom: 6px;
    margin-top: 12px;
  }
  img {
    width: 25%;
    max-width: 128px;
    margin-bottom: 6px;
  }
  p {
    margin-bottom: 16px;
    width: 100%;
  }
  .boxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    .healthbox {
      padding: 5px 2px;
      padding: 3% 1%;
      margin-top: 16px;
      width: 90%;
      // height: 30vw;
      // min-height: 130px;
      // max-height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      justify-content: space-around;
      background-color: #cccccc50;
      @include bs-white-1;
      border: 1px solid #00000000;
      @include border-radius-standard;
      color: rgba(255, 255, 255, 0.85);
      transform: scale(1);
      h2 {
        font-size: 1.3rem;
        text-transform: capitalize;
        margin-bottom: 1%;
      }
      img {
        width: 20%;
      }
      &:active {
        transform: scale(1.02);
        @include bs-white-2;
        span.arrow {
          transform: translateX(12px);
        }
      }
    }
  }
  p {
    margin-top: 32px;
  }
}
@media screen and (min-width: $break-l) {
  .container {
    margin-top: 32px;
    h1 {
      margin-top: 12px;
    }
    p {
      font-size: 1.2rem;
      padding: 0 2%;
    }
    .boxes {
      .healthbox {
        max-width: 600px;
        h2 {
          font-size: 1.4rem;
        }
        p {
          font-size: 1.3rem;
        }
      }
    }
  }
}
</style>
