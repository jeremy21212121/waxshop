<template>
  <section class="masthead">
    <div class="mast">
      <img
        :srcset="imageArrayToSrcset(image.srcset)"
        :src="image.srcset[0].src"
        :sizes="image.sizes"
        :alt="image.alt"
      >
      <div class="overlay">
        <h1>Valentine's Special</h1>
        <span class="highlight-text">Buy a $100 gift card, get a $25 gift card </span>
        <span class="highlight-text caps">for free!</span>
        <!-- <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--grey" rel="noreferrer noopener">Book now!</a> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      image: {
        srcset: [
          {
            src: require('~/assets/valentine_804.jpg'),
            width: 804
          },
          {
            src: require('~/assets/valentine_1206.jpg'),
            width: 1206
          },
          {
            src: require('~/assets/valentine_1608.jpg'),
            width: 1608
          }
        ],
        sizes: '(min-width: 740px) 740px, 100vw',
        alt: 'Valentine on wood background'
      }
    }
  },
  methods: {
    imageArrayToSrcset (imageArray) {
      return imageArray.map(img => `${img.src} ${img.width}w`).join(', ')
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
    // display: flex;
    // flex-direction: column;
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
      top: 0;
      // flex-grow: 1;
      // height: stretch;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-between;
      h1 {
        // text-transform: uppercase;
        // font-family: 'roboto_cb';
        font-family: 'shortstack';
        // font-size: 3.5em;
        font-size: 10vw;
        // margin-bottom: 28vw;
        -webkit-text-stroke: 0.5px black;
        margin-bottom: 25%;
        padding: 10px 10%;
        padding-bottom: 0;
        text-shadow: 2px 2px 4px black;
        color: rgba(255,255,255,0.95);
      }
      span {
        display: block;
        position: relative;
        bottom: 3vw;
        // font-family: "Cinzel", cursive;
        font-family: 'shortstack';
        font-size: 3.3em;
        // line-height: 1.5;
        font-size: 8vw;
        text-shadow: 2px 2px 4px black;
        -webkit-text-stroke: 0.5px black;
        // padding: 0 1%;
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
        // top: 30%;
        h1 {
          // margin-bottom: 140px;
          font-size: 61px;
        }
        span {
          font-size: 49px;
        }
      }
    }
  }
}
@media screen and (min-width: $breaks-sm) {
  section {
    .mast {
      div.overlay {
        span {
          padding: 0 3.75%;
        }
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
      div.overlay {
        h1 {
          padding-top: 5px;
        }
      }
      // .overlay {
      //   top: 214px;
      //   h1 {
      //     font-size: 98px;
      //   }
      //   span {
      //     font-size: 100px;
      //     bottom: 28px;
      //   }
      // }
    }
  }
}
</style>
