<template>
  <section class="masthead">
    <div class="mast">
      <img
        :srcset="imageArrayToSrcset(image.srcset)"
        :src="image.srcset[0].src"
        :sizes="image.sizes"
        :alt="image.alt"
      >
      <!-- <div class="overlay"> -->
        <!-- <h1>The place for Waxing in Kelowna</h1> -->
        <!-- <span class="highlight-text">Buy a $100 gift card, get a $25 gift card </span>
        <span class="highlight-text caps">for free!</span> -->
        <!-- <a href="https://waxshopca.zenoti.com/webstoreNew" target="_blank" class="button--grey" rel="noopener">Book now!</a> -->
      <!-- </div> -->
      <a href="https://waxshopca.zenoti.com/webstoreNew" target="_blank" class="button--grey" rel="noopener">Book now!</a>
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
            // src: require('@/assets/landing_cool-804.jpg'),
            src: require('@/assets/waxshop_h804.jpg'),
            width: 804
          },
          {
            // src: require('@/assets/landing_cool-1206.jpg'),
            src: require('@/assets/waxshop_h1206.jpg'),
            width: 1206
          },
          {
            // src: require('@/assets/landing_cool-1608.jpg'),
            src: require('@/assets/waxshop_h1608.jpg'),
            width: 1608
          }
        ],
        sizes: '(min-width: 740px) 740px, 100vw',
        alt: 'Brazilian waxes for $45'
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
  margin-top: 18%;
  .mast {
    position: relative;
    width: 100%;
    // display: flex;
    // flex-direction: column;
    img {
      width: 100%;
      // object-fit: cover;
      // object-position: 77%;
      height: 80vw;
      max-height: 500px;
      z-index: -1;
      // border-bottom-left-radius: 2px;
      // border-bottom-right-radius: 2px;
    }
    a {
      // margin-top: 10px;
      width: 225px;
      border: 1px solid rgba(0,0,0,0.5);
      background-color: #ccc;
      padding: 5px 30px;
      font-size: 1.7rem;
      text-transform: uppercase;
      color: black;
      position: relative;
      bottom: 70px;
    }
    .overlay {
      width: 100%;
      height: 75vw;
      max-height: 485px;
      position: absolute;
      top: 40%;
      // flex-grow: 1;
      // height: stretch;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      h1 {
        width: 100%;
        text-transform: capitalize;
        font-family: 'roboto_cb';
        font-weight: normal;
        // font-family: 'shortstack';
        font-size: 14vw;
        // font-size: 10vw;
        // margin-bottom: 28vw;
        -webkit-text-stroke: 0.5px rgba(0,0,0,0.50);
        // margin-bottom: 25%;
        // margin-top: 10px;
        // padding: 10px 10%;
        // padding-bottom: 0;
        text-shadow: 1px 1px 0px rgba(0,0,0,0.23);
        // color: rgba(255,255,255,0.0);
        color: #c6993d;
        background: linear-gradient(270deg,rgba(198, 153, 61,0.99), rgba(233, 222, 143,0.99));
        background-clip: text;
        -webkit-text-fill-color: rgba(198, 153, 61, 0.0);
      }
      span {
        // display: block;
        // position: relative;
        // bottom: 3vw;
        // // font-family: "Cinzel", cursive;
        // font-family: 'shortstack';
        // font-size: 3.3em;
        // // line-height: 1.5;
        // font-size: 8vw;
        // text-shadow: 2px 2px 4px black;
        // -webkit-text-stroke: 0.5px black;
        text-transform: capitalize;
        padding: 0;
        margin: 0;
      }
      // a {
      //   // margin-top: 10px;
      //   width: 225px;
      //   border: 1px solid rgba(0,0,0,0.5);
      //   background-color: #ccc;
      //   padding: 5px 30px;
      //   font-size: 1.7rem;
      //   text-transform: uppercase;
      //   color: black;
      // }
    }
  }
}
@media screen and (min-width: $breaks-sm) {
  section {
    margin-top: 15%;
    .mast {
      div.overlay {
        h1 {
          font-size: 89px;
        }
        // span {
        //   // padding: 0 3.75%;
        // }
      }
    }
  }
}
@media screen and (min-width: $breaks-m) {
  section {
    margin-top: 13%;
    .mast {
      div.overlay {
        max-height: 450px;
        h1 {
          // flex-grow: 1;
          // display: flex;
          // flex-direction: column;
          // justify-content: space-between;
          padding-bottom: 90px;

        }
        // top: 30%;
        // h1 {
        //   // margin-bottom: 140px;
        //   // font-size: 61px;
        // }
        // span {
        //   font-size: 49px;
        // }
      }
    }
  }
}
@media screen and (min-width: $break-l) {
  section {
    margin-top: 0px;
    .mast {
      div.overlay {
        top: 110px;
        max-height: 350px;
        h1 {
          padding-bottom: 25px;
        }
      }
      img {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
      }
      // div.overlay {
      //   h1 {
      //     text
      //     // font-size: 89px;
      //     // line-height: 150px;
      //   }
      // }
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
@media all and (-ms-high-contrast:none) {
  section {
    div.mast {
      div.overlay {
        h1 {
          background: none;
          color: #c6993d;
          -webkit-text-fill-color: #c6993d;
        }
      }
    }
  }
}
</style>
