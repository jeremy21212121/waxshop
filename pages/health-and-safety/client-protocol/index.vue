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
      <a href="https://waxshopca.zenoti.com/webstoreNew" target="_blank" class="button--green" rel="noopener">Book Now!</a>
  </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import structuredData from "@/mixins/structuredData.js"

export default {
  name:'ClientProtocol',
  mixins: [
    structuredData
  ],
  components: {
    Breadcrumbs
  },
  data() {
    return {
      lastModified: '2020-08-13T00:41:40.484Z',
      headData: {
        title: 'Client safety protocol',
        description: 'Every client will be expected to follow this protocol as a condition of service.'
      },
      heading: `Client safety protocol`,
      // headingImg: require('~/assets/sm-sparkle.png'),
      text: [
        `Every client will be expected to follow this protocol as a condition of service.`
      ],
      moreInfo: 'Please review the procedures for clients before coming in',
      boxes: [
        {
          title: 'Personal health questionnaire',
          imagePath: require('@/assets/firstaid256.png'),
          alt: 'Health icon',
          text: 'Please do not come in if you are feeling sick or have a fever. We will ask some questions about your recent health to ensure we can safely serve you.'
        },
        {
          title: `Wait to enter until your scheduled appointment time`,
          imagePath: require('@/assets/time256.png'),
          alt: 'Time icon',
          text: 'We ask that you wait in your vehicle or outside until it is time for your appointment.'
        },
        {
          title: 'Hand sanitizer',
          imagePath: require('@/assets/handsan256.png'),
          alt: 'Hand sanitizer',
          text: 'You will be asked to use hand sanitizer before approaching the front desk.'
        },
        {
          title: 'Face mask',
          imagePath: require('@/assets/mask256.png'),
          alt: 'Mask icon',
          text: `If you don't already have a mask, one will be provided.`
        },
        {
          title: 'Removed chairs from waiting room',
          imagePath: require('@/assets/chair256.png'),
          alt: 'Chair icon',
          text: `Chairs have been removed from the waiting room, so you will be shown directly to your treatment room.`
        },
        {
          title: 'Sinks for handwashing',
          imagePath: require('@/assets/sink256.png'),
          alt: 'Sink icon',
          text: `Sinks are available in the treatment rooms for hand washing before and after your service.`
        },
        {
          title: 'Client washrooms closed',
          imagePath: require('@/assets/toilet256.png'),
          alt: 'Toilet icon',
          text: 'Washrooms are closed, except for emergencies. Clients can wash their hands in our treatment room sinks.'
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
          title: 'Client Protocol',
          path: '/client-protocol',
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
    margin-bottom: 6px;
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
  a.button--green {
    display: block;
    max-width: 150px;
    margin: 0 auto;
    margin-top: 64px;
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
