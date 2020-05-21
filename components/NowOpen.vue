<template>
  <div>
    <h1 id="about-wax-shop">
      About the wax shop
    </h1>
    <p class="teaser">
      Kelowna's newest waxing studio
      <span class="none"> has</span>
      <span class="highlight-text caps">re-opened</span>
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
  </div>
</template>

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
