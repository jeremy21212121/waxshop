<template>
  <div class="container">
    <breadcrumbs
      :breadcrumbs="breadCrumbs"
    />
    <main>
      <img :src="require('@/assets/covid256.png')" alt="SARS-CoV-2" aria-hidden="true">
      <h1 class="title">
        <!-- Announcing temporary closure due to risk posed by COVID-19 -->
        {{ heading }}
      </h1>
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="`para${index}`"
        v-html="paragraph"
      />
      <p class="indent first">
        Sincerely,
      </p>
      <p class="indent">
        The Wax Shop Staff
      </p>
      <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--green" rel="noreferrer noopener">Book Now!</a>
      <div>
        <img src="@/assets/info.png" alt="info">
        <p>
          Please see the <a href="http://www.bccdc.ca/health-info/diseases-conditions/covid-19" target="_blank" rel="noopener noreferrer">BC Centre for Disease Control </a>website for a reliable source of information about COVID-19
        </p>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/mixins/boxShadows.scss";
@import "@/scss/vars/breakpoints.scss";

.container {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  @include bs-white-0b;
  margin-top: 25%;
}
main {
  // margin-top: 18%;
  margin-bottom: 64px;
  padding: 6px;
  padding-bottom: 32px;
  div {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    margin-top: 64px;
    padding: 4px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      margin: 4px;
      margin-right: 8px;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      font-weight: normal;
      text-align: center;
    }
  }
  h1 {
    margin: 32px 8px;
    margin-top: 0px;
    font-size: 1.8rem;
    text-transform: capitalize;
  }
  img {
    width: 50%;
    max-width: 128px;
  }
  p {
    font-size: 1.2rem;
    text-align: left;
    margin: 16px 8px;
    a {
      color: rgba(180, 180, 255, 0.9);
      text-decoration: none;
    }
  }
  a.button--green {
    display: block;
    max-width: 150px;
    margin: 0 auto;
    margin-top: 64px;
  }
  p.first.indent {
    margin-top: 32px;
    font-style: normal;
  }
  p.indent {
    margin-left: 32px;
    font-style: italic;
  }
}
@media screen and (min-width: $break-l){
  main {
    margin-top: 10px;
    div {
      margin-top: 96px;
      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
<style>
p a {
  color: rgba(180, 180, 255, 0.9);
  text-decoration: none;
}
</style>
<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
  name: 'CovidPage',
  components: {
    Breadcrumbs
  },
  head () {
    return {
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:title', property: 'og:title', content: this.headData.title },
        { hid: 'og:description', property: 'og:description', content: this.headData.description },
        { hid: 'og:url', property: 'og:url', content: 'https://waxshop.ca/covid-19' },
      ]
    }
  },
  data() {
    return {
      headData: {
        title: 'COVID-19 Announcement - The Wax Shop Kelowna',
        description: 'We have officially re-opened, with extensive safety measures in place!',
      },
      heading: 'Re-opening Friday May 22 with extensive safety measures in place',
      paragraphs: [
        `We are very excited to be welcoming you back starting Friday, May 22!`,
        `We have been hard at work re-designing every aspect of our business to be as safe as possible. This process has required significant changes to both the services we offer and how we offer them.`,
        `Please see our <a href="/health-and-safety">Health & Safety page</a> for a detailed list of <a href="/health-and-safety/hygiene">the measures we are taking</a> to protect our clients and staff, as well as <a href="/health-and-safety/client-protocol">what will be expected of you as a client</a>.`,
        `Some of these measures may seem extreme at first glance. We believe that we cannot be too careful in these uncertain times. The health of our clients, staff and community is our highest priority.`,
        `We ask that clients familiarize themselves with our safety protocools <i>before</i> scheduling an appointment.`,
        `We look forward to seeing you again soon!`
      ]
    }
  },
  computed: {
    breadCrumbs() {
      return [
        {
          title: 'Home',
          path: '/',
          current: false
        },
        {
          title: 'COVID-19',
          path: '/covid-19',
          current: true
        }
      ]
    }
  }
}
</script>
