<template>
  <div>
    <img src="~/assets/lobby2c.jpg" alt="the lobby of the wax shop">
    <img src="~/assets/prod_crop.jpg" alt="waxing products">
    <img src="~/assets/entry.jpg" alt="the entry of the wax shop">
  </div>
</template>

<style lang="scss" scoped>
div {
  margin-top: 20px;
  margin-bottom: 20px;
  margin: 10px auto;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  // justify-content: space-evenly;
  &:before,
  &:after {
    // ungodly hack to work around edge/safari's terrible flexbox implementation. Specifically, justify-content: space-evenly.
    // see https://stackoverflow.com/questions/47534216/how-to-make-css-justify-contentspace-evenly-fallback-to-space-between-on-safari
    content: "";
    display: block;
  }
  justify-content: space-between;
  img {
    width: 30%;
    height: 100%;
    // height: auto;
  }
}
@media screen and (min-width: 740px) {
  div {
    height: 100%;
    justify-content: space-between;
    &:before,
    &:after {
      // ungodly hack to work around other ungodly hack to work around edge/safari's terrible flexbox implementation
      display: none;
    }
    img {
      width: 32%;
    }
  }
}
</style>
