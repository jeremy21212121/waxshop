<template>
  <section class="masthead">
    <div class="mast">
      <img
        :srcset="getImageSrcset()"
        :src="image.src.url"
        :sizes="image.sizes"
        :alt="image.alt"
      >
      <div class="overlay">
        <h1>new clients</h1>
        <span class="highlight-text">25% off</span>
        <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--grey" rel="noreferrer noopener">Book now!</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      image: {
        src: {
          url: require('~/assets/landing_warm-804.jpg'),
          width: 804
        },
        src2x: {
          url: require('~/assets/landing_warm-1608.jpg'),
          width: 1608
        },
        sizes: '(min-width: 740px) 740px, 100vw',
        alt: 'Couple at the beach'
      }
    }
  },
  methods: {
    getImageSrcset () {
      return `${this.image.src.url} ${this.image.src.width}w, ${this.image.src2x.url} ${this.image.src2x.width}w`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/vars/breakpoints.scss';

section {
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-top: 10%;
  .mast {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: 77%;
      height: 80vw;
      max-height: 500px;
      z-index: -1;
      // border-bottom-left-radius: 2px;
      // border-bottom-right-radius: 2px;
    }
    .overlay {
      width: 100%;
      position: absolute;
      top: 23vw;
      h1 {
        text-transform: uppercase;
        font-family: 'roboto_cb';
        font-size: 3.5em;
        font-size: 15vw;
        text-shadow: 2px 2px 4px black;
        color: rgba(255,255,255,0.95);
      }
      span {
        display: block;
        position: relative;
        bottom: 3vw;
        font-family: "Cinzel", cursive;
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
@media screen and (min-width: $break-s) {
  section {
    .mast {
      div.overlay {
        top: 30%;
      }
    }
  }
}
@media screen and (min-width: $break-l) {
  section {
    margin-top: 0px;
    .mast {
      img {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
      }
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
