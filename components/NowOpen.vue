<template>
  <div>
    <h1 id="about">
      about the waxshop
    </h1>
    <p class="teaser">
      Kelowna's newest waxing studio
      <span class="none"> is</span>
      <span class="highlight-text caps">now open</span>
      <span class="none">in</span>
      Pandosy village!
    </p>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    max-height: 0px;
    min-width: 0px;
    overflow: hidden;
    margin: 10px 0;
  }
  p.teaser {
    width: 90%;
    margin: 0 auto;
    text-transform: capitalize;
    font-size: 6vw;
    span.caps {
      font-weight: bold;
    }
    span.none {
      text-transform: none;
    }
  }
@media screen and (min-width: 740px) {
  div {
    p.teaser {
      font-size: 3rem;
    }
  }
}
</style>
