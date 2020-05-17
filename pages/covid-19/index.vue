<template>
  <div class="container">
    <main>
      <h1 class="title">
        <!-- Announcing temporary closure due to risk posed by COVID-19 -->
        {{ heading }}
      </h1>
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="`para${index}`"
        v-html="paragraph"
      >
        <!-- To help protect our clients, staff and community from the spread of COVID-19, we will be closed from March 19, 2020 until further notice. -->
        <!-- {{ paragraph }} -->
      </p>
      <!-- <p>
        Due to the uncertainty of this situation, we don't know when it will be safe to re-open. Follow us on <a title="Visit our Facebook page" href="https://www.facebook.com/thewaxshopkelowna" target="_blank" rel="noopener noreferrer">Facebook</a> to receive future updates about our status.
      </p>
      <p>
        Please stay safe and look out for each other during these difficult times. We look forward to serving you again in the future.
      </p> -->
      <p class="indent first">
        Sincerely,
      </p>
      <p class="indent">
        The Wax Shop Staff
      </p>
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

.container {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  @include bs-white-0b;
}
main {
  margin-top: 18%;
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
    font-size: 1.8rem;
    text-transform: capitalize;
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
  p.first.indent {
    margin-top: 32px;
    font-style: normal;
  }
  p.indent {
    margin-left: 32px;
    font-style: italic;
  }
}
@media screen and (min-width: 740px){
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
// import Masthead from '~/components/Masthead.vue'
// import SiteFooter from '~/components/SiteFooter.vue'
// import Message from '~/components/Message.vue'

export default {
  name: 'CovidPage',
  data() {
    return {
      heading: 'Re-Opening Soon With Extensive Safety Measures in Place',
      paragraphs: [
        `On May 6, 2020, Premier John Horgan announced <a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/bc-restart-plan" target="_blank" rel="noopener noreferrer">BC’s Restart Plan</a> which outlines four phases.`,
        `Phase 2 of the restart plan will allow us to re-open, under enhanced safety protocols, in the near future.`,
        `We are currently in the process of developing extensive safety protocols and acquiring the necessary protective equipment.`,
        `The health and safety of our clients, staff and community is our biggest concern. We look forward to being able to welcome you back in the very near future.`,
        `Stay tuned for more updates!`
      ]
    }
  }
}
</script>
