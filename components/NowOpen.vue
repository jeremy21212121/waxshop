<template>
  <div>
    <h1 id="about-wax-shop">About the wax shop</h1>
    <p class="teaser">
      Kelowna's newest waxing studio
      <span class="none"> is</span>
      <span class="highlight-text caps">open</span>
      <span class="none">in</span>
      Pandosy village!
    </p>
    <p class="teaser">
      Check out the
      <nuxt-link :to="'/health-and-safety'">
       health &amp; safety protocols 
      </nuxt-link>
      we have implemented to serve you safely.
    </p>
    <!-- <h2>
      {{ subheading }}
    </h2>
    <p class="teaser">Buy $100, Get $25 <span class="highlight-text caps">Bonus</span> Card</p>
    <p class="teaser lowc">
      Give it all as a holiday gift, or save the bonus just for you &mdash;
    </p>
    <p class="teaser lowc">
      Because you deserve a smoother you too!
    </p> -->
    <!-- <p
      v-for="(p, pIndex) in paragraphs"
      :key="`no-p-${pindex}`"
      class="teaser"
    >
      {{p}}
    </p> -->
  </div>
</template>
<script>
export default {
  name: "NowOpen",
  data() {
    return {
      // subheading: "December Gift Card Special Offer",
      // paragraphs: [
      //   "Buy $100, Get $25 Bonus Card",
      //   "Give it all as a holiday gift, or save the bonus just for you -",
      //   "because you deserve a smoother you too!",
      // ],
    };
  },
};
</script>
<style lang="scss" scoped>
div {
  width: 100%;
  h1 {
    max-height: 0px;
    min-width: 0px;
    overflow: hidden;
    margin: 10px 0;
  }
  p.teaser {
    width: 90%;
    margin: 15px auto;
    text-transform: capitalize;
    font-size: 6vw;
    &.lowc {
      text-transform:none;
    }
    span.caps {
      font-weight: bold;
    }
    span.none {
      text-transform: none;
    }
  }
}
@media screen and (min-width: 740px) {
  div {
    p.teaser {
      font-size: 2.8rem;
    }
  }
}
</style>
