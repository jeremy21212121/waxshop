<template>
  <div class="lds-ripple">
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/mixins/loadingRipple.scss";
// set size of ripple, multiples of 80px
@include ripple(1.5);
</style>
