<template>
  <section class="masthead">
    <div class="mast">
      <img src="~/assets/bw_landing1.jpg" alt="Couple at the beach" aria-hidden="true">
      <div class="overlay">
        <h1>new clients</h1>
        <span class="highlight-text">25% off</span>
        <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--grey" rel="noreferrer noopener">Book now!</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-top: 12%;
  .mast {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: 77%;
      height: 80vw;
      max-height: 500px;
      z-index: 0;
    }
    .overlay {
      width: 100%;
      position: absolute;
      top: 25vw;
      h1 {
        text-transform: uppercase;
        font-family: 'roboto_cb';
        font-size: 3.5em;
        font-size: 15vw;
        text-shadow: 2px 2px 4px black;
      }
      span {
        display: block;
        position: relative;
        bottom: 3vw;
        font-family: "Cinzel";
        // font-weight: bold;
        font-size: 3.3em;
        font-size: 15vw;
        text-shadow: 2px 2px 4px black;
      }
      a {
        border: 1px solid rgba(0,0,0,0.4);
        padding: 5px 30px;
        font-size: 1.7rem;
        text-transform: uppercase;
        color: black;
      }
    }
  }
}
@media screen and (min-width: 620px) {
  section {
    .mast {
      div.overlay {
        top: 30%;
      }
    }
  }
}
@media screen and (min-width: 740px) {
  section {
    margin-top: 0px;
    .mast {
      .overlay {
        top: 214px;
        h1 {
          font-size: 98px;
        }
        span {
          font-size: 100px;
          bottom: 28px;
        }
      }
    }
  }
}
</style>
