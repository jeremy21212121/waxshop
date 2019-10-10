<template>
  <div>
    <img src="~/assets/lobby2c.jpg" alt="the lobby of the wax shop">
    <img src="~/assets/prod_crop.jpg" alt="waxing products">
    <img src="~/assets/entry.jpg" alt="the entry of the wax shop">
  </div>
</template>

<style lang="scss" scoped>
@import '~/scss/mixins/spaceEvenlyHack.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/mixins/borderRadius.scss';

div {
  margin-top: 20px;
  margin-bottom: 20px;
  margin: 10px auto;
  max-width: 100%;
  display: flex;
  // justify-content: space-evenly old iOS safari support via mixin
  @include space-evenly-hack;
  img {
    width: 30%;
    height: 100%;
    @include bs-white-1;
    // border-radius: 2px;
    @include border-radius-standard;
  }
}
@media screen and (min-width: 740px) {
  div {
    // height: 100%;
    @include undo-space-evenly-hack;
    img {
      width: 32%;
    }
  }
}
</style>
