<template>
  <footer>
    <div class="info">
      <div>
        <span>P</span>
        <span class="hidden">hone</span>
        <span class="colon">: </span>
        <a id="tel-anchor" href="tel:12368372100">236.837.2100</a>
      </div>
      <div>
        <span>A</span>
        <span class="hidden">ddress</span>
        <span class="colon">: </span>
        <span>100 - 2689 Pandosy Street, Kelowna, BC V1Y 9V9</span>
      </div>
      <div>
        <span>E</span>
        <span class="hidden">-mail</span>
        <span class="colon">: </span>
        <a href="mailto:hello@waxshop.ca">hello@waxshop.ca</a>
      </div>
    </div>
    <div class="copy">
      &copy; 2019 <a href="https://waxshop.ca">The Wax Shop</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // margin-top: 30px;
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  // height: 75px;
  // background-color: #cccccc50;
  background-color: black;
  div.info {
    font-size: 0.8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    // flex-direction: column;
    // align-items: flex-start;
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.75);
    a#tel-anchor {
      text-decoration: none;
      color: inherit;
    }
    div {
      display: flex;
      span.colon {
        padding-right: 5px;
      }
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
  div.copy {
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
