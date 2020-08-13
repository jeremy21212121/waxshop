<template>
  <main class="container">
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    />
    <h1 class="title">{{ heading }}</h1>
      <p
        v-for="(paragraph, index) in text"
        :key="`health-para${index}`"
      >
        {{ paragraph }}
      </p>
      <div class="boxes">
        <div
          v-for="(box, index) in boxes"
          :key="`healthbox${index}`"
          @click="$router.push(box.targetPath)"
          class="healthbox"
        >
          <img :src="box.imagePath" :alt="box.alt" aria-hidden="true">
          <h2 class="">
            {{ box.title }}
          </h2>
          <span class="arrow" aria-hidden="true">
            >
          </span>
        </div>
      </div>
  </main>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import structuredData from "@/mixins/structuredData.js"

export default {
  name:'HealthSafetyProcedures',
  mixins: [
    structuredData
  ],
  components: {
    Breadcrumbs
  },
  data() {
    return {
      lastModified: '2020-08-12T01:53:01.555Z',
      headData: {
        title: 'Health and safety protocols',
        description: 'The global COVID-19 pandemic has forced us to re-imagine every aspect of how we operate.'
      },
      heading: `Health and safety protocols`,
      text: [
        `The global COVID-19 pandemic has forced us to re-imagine every aspect of how we operate.`,
        `We'd like to show you the measures we've taken in order to operate safely, as well as what will be expected of you as a client.`
      ],
      boxes: [
        {
          title: 'New hygiene measures',
          imagePath: require('~/assets/sm-sparkle.png'),
          alt: 'Hygiene icon',
          targetPath: '/health-and-safety/hygiene'
        },
        {
          title: 'What is expected from clients?',
          imagePath: require('~/assets/sm-how.png'),
          alt: 'Question icon',
          targetPath: '/health-and-safety/client-protocol'
        }
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
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 16px;
  }
  .boxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    .healthbox {
      cursor: pointer;
      padding: 5px 2px;
      margin-top: 16px;
      width: 90%;
      height: 30vw;
      min-height: 130px;
      max-height: 200px;
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
        font-weight: 400;
        text-transform: capitalize;
      }
      img {
        width: 10%;
      }
      span.arrow {
        font-size: 1.6rem;
        transition: transform 100ms linear;
        transform: translateX(0px);
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
}
@media screen and (min-width: $break-l) {
  .container {
    margin-top: 32px;
  }
}
</style>
