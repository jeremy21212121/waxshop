<template>
  <footer>
    <span class="info">
      <span>P<span class="hidden">hone</span>: <a href="tel:12368372100">236.837.2100</a></span>
      <span>A<span class="hidden">ddress</span>: 100-2689 Pandosy Street, Kelowna, BC V1Y 9V9</span>
      <span>E<span class="hidden">-mail</span>: <a href="mailto:hellow@waxshop.ca">hello@waxshop.ca</a></span>
    </span>
    <span class="copy">
      &copy; 2019 <a href="https://waxshop.ca">The Wax Shop</a>
    </span>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // margin-top: 30px;
  width: 100%;
  // height: 75px;
  // background-color: #cccccc50;
  background-color: black;
  span.info {
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // flex-direction: column;
    // align-items: flex-start;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.75);
    span {
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    .hidden {
      display: inline-block;
      max-width: 0px;
      max-height: 0px;
      overflow: hidden;
    }
  }
  span.copy {
    color: rgba(255, 255, 255, 0.75);
    padding-bottom: 6px;
    font-size: 0.8rem;
    text-align: center;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
