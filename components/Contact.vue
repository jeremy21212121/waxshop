<template>
  <section class="contact">
    <h1 id="contact" class="section-title">
      Contact us
    </h1>
    <promo-description
      :paragraphs="description"
    />
    <business-hours
      :opening-hours="openingHours"
    />
    <div class="wrapper">
      <h2 class="section-title">
        Phone
      </h2>
      <div class="img">
        <img src="~/assets/sm-phone.png" alt="phone icon" aria-hidden="true">
      </div>
      <div>
        <a id="tel" class="button--grey" href="tel:12507632394">Call us</a>
      </div>
      <span class="content">
        (250) 763-2394
      </span>
    </div>
    <div class="wrapper">
      <h2 class="section-title">
        Address
      </h2>
      <div class="img">
        <!-- <img src="~/assets/sm-map.png" alt="map icon" aria-hidden="true"> -->
        <tour-svg />
      </div>
      <span>
        <a class="button--grey" href="https://youriguide.com/100_2689_pandosy_st_kelowna_bc?nodetails=1&nomenu=1&mute=1&minfp=1" target="_blank" rel="noopener">
          3D Virtual Tour
        </a>
      </span>
      <span class="content">
        See our beautiful studio before you book
      </span>
    </div>
    <iframe style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJX33ybTGLfVMRLC4l1HzHwEc&key=AIzaSyASCfx46mSwtL11S20Lv3FpusELZKuXA3w" allowfullscreen />
  </section>
</template>

<script>
import PromoDescription from '~/components/PromoDescription.vue'
import BusinessHours from '~/components/BusinessHours.vue'
import TourSvg from '~/components/TourSVG.vue'

export default {
  components: {
    PromoDescription,
    BusinessHours,
    TourSvg
  },
  props: {
    openingHours: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      description: [
        // 'Note: Our phones are down today.',
        // 'Please <a href="#send-a-message">send a message</a> or <a href="mailto:hello@waxshop.ca">e-mail us</a>'
        'We\'d love to hear from you!',
        'Give us a call or <a href="#send-a-message">send a message</a>. We are located in the heart of Pandosy Village.'
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/borderRadius.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/vars/breakpoints.scss';

a#tel {
  text-decoration: none;
  // pointer-events: none;
  // background-color: #222222;
}
section.contact {
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(255,255,255,0.85);
  margin-bottom: 30px;
  h1 {
    width: 100%;
    // margin-top: 60px;
    margin-top: 12px;
    margin-bottom: 0;
    // margin: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    // max-width: 350px;
    // height: 220px;
    background-color: rgba(255,255,255,0.15);
    // border: 1px solid rgba(255,255,255,0.25);
    // border-radius: 2px;
    @include bs-white-1;
    @include border-radius-standard;
    margin: 10px auto;
    padding-bottom: 20px;
    .img {
      height: auto;
      max-height: 90px; // ie11 bug workaround
      img {
        width: 15%;
        padding-bottom: 10px;
      }
    }
    a {
      // max-width: 175px;
      margin-bottom: 20px;
    }
    a.button--grey {
      color: rgba(0,0,0,0.8)
    }
    h2 {
      font-size: 1.3rem;
      margin-bottom: 20px;
      max-height: 0px;
      overflow: hidden;
    }
    span.content {
      // margin-top: 20px;
      // opacity: 0.80;
      color: rgba(0,0,0,.8);
      color: rgba(255,255,255,0.85);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    // span.strike {
    //   text-decoration: line-through;
    // }
  }
  iframe {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 15px;
    width: 100%;
    height: 350px;
    border: none;
    @include bs-white-1;
    @include border-radius-standard;
  }
}
@media screen and (min-width: $break-s) {
  section.contact {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .wrapper {
      width: 48%;
      height: 210px;
      margin: 0px;
    }
    img.open-sign {
      max-width: 13%;
    }
    div.full-width {
      height: auto;
      padding-bottom: 10px;
      margin-bottom: 20px;
      .img {
        margin-bottom: 8px;
        img {
          max-width: 10%;
        }
      }
      .hours-container {
        width: 600px;
        margin: 10px auto;
      }
    }
  }

}
@media screen and (min-width: $break-l) {
  section.contact {
    // flex-direction: row;
    // flex-wrap: wrap;
    // justify-content: space-between;
    .wrapper {
      height: 230px;
      width: 359px;
      // margin: 0px;
    }
    img.open-sign {
      max-width: 105px;
    }
    h1 {
      margin-top: 20px;
    }
    iframe {
      // width: 75%;
      height: 450px;
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  img.open-sign {
    animation: none !important;
  }
}
</style>
