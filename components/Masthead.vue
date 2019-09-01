<template>
  <section class="masthead">
    <!-- <img src="~/assets/ppl2.jpg" alt="People in the sun" aria-hidden="true"> -->
    <div class="applicator">
      <!-- <img src="~/assets/wax-golder.svg" aria-hidden="true"> -->
    </div>
    <div class="overlay">
      <!-- <h1>w<span class="smaller">elcome</span> t<span class="smaller">o</span> t<span class="smaller">he</span> w<span class="smaller">ax</span> s<span class="smaller">hop</span></h1> -->
      <!-- <img src="~/assets/wax-gold.svg" alt="Wax applicator" /> -->
      <h2>Kelowna's premier waxing studio</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // margin-top: 10px;
  .applicator {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    // box-shadow: 0 2px 5px rgba(0,0,0,.26);
    // border: 3px solid black;
    border-radius: 100%;
    // padding: 10px 30px;
    img {

      // max-width: 60%;
      width: 60%;
      margin-bottom: 10px;
      margin-top: 20px;
    }

  }

  .overlay {
    // position: absolute;
    h1,h2 {
      // position: relative;
      // top: 36vw;
    }
  }
  h1 {
    margin-bottom: 40px;
    text-transform: uppercase;
    // font-variant: small-caps;
    font-weight: bold;
    font-size: 1.3rem;
    color: #222;
    color: rgb(32,32,32);
    // color: #ffe480;
    // color: rgb(255,228,128);
    // color: rgb(144,130,80);
    letter-spacing: 1px;
    .smaller {
      font-size: 1.1rem;
    }
  }
  h2 {
    font-family: 'Raleway', sans-serif;
    text-transform: capitalize;
    // text-shadow: #000 0px 0px 1px;
    -webkit-text-stroke: 1.0px #00000020;
    font-weight: 800;
    font-size: 2.2em;
    color: #111111e0;
    color: rgb(144,130,80);
    color: rgb(36,33,20);
    color: #ffc800;
    color: #ffffff00;
    color: #4971CC;
    color: #ead989;
    color: #cca449;
    // color: #cc6449;
    // background: linear-gradient(90deg, rgba(255,200,0,1) 10%, rgba(255,200,0,0.4878151089537377) 75%);
    // background: rgb(199,154,60);
    // background: linear-gradient(90deg, rgba(199,154,60,1) 16%, rgba(234,220,143,1) 79%);
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
@media screen and (min-width: 620px) {
  div.overlay {
    top: 25%;
  }
}
@media screen and (min-width: 740px) {
  div.applicator {
    img {
      width: 90%;
    }
  }
  div.overlay {
    top: 33%;
    h1 {
      // margin-bottom: 40px;
      font-size: 1.8rem;
      span {
        font-size: 1.5rem;
      }
    }
    h2 {
      // margin-top: 70px;
      font-size: 2.4rem;
    }
  }
}
</style>
