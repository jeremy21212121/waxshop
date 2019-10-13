<template>
  <section class="contact">
    <h1 id="contact" class="section-title">
      Contact us
    </h1>
    <promo-description
      :paragraphs="description"
    />
    <div
      v-if="simplifiedHours.length"
      class="wrapper full-width"
    >
      <h2>
        Hours of operation
      </h2>
      <img
        v-show="openingHours.open_now"
        class="open-sign"
        src="~/assets/open_sign_fw.png"
        alt="open sign"
        aria-hidden="true"
      >
      <div class="img">
        <img src="~/assets/sm-clock.png" alt="clock icon" aria-hidden="true">
      </div>
      <div class="hours-container">
        <div
          v-for="(hours, i) in simplifiedHours"
          :key="'sh' + i"
          class="hrow"
        >
          <div class="day-wrap">
            <span class="start">
              {{ hours.start_day }}
            </span>
            <span
              v-if="hours.start_day !== hours.end_day"
            >
              {{ ' - ' + hours.end_day }}
            </span>
          </div>
          <span>
            {{ hours.hours }}
          </span>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <h2 class="section-title">
        Phone
      </h2>
      <div class="img">
        <img src="~/assets/sm-phone.png" alt="phone icon" aria-hidden="true">
      </div>
      <div>
        <a id="tel" class="button--grey" href="tel:12368372100">Call us</a>
      </div>
      <span class="content">
        (236) 837-2100
      </span>
    </div>
    <div class="wrapper">
      <h2 class="section-title">
        Address
      </h2>
      <div class="img">
        <img src="~/assets/sm-map.png" alt="map icon" aria-hidden="true">
      </div>
      <span>
        <a class="button--grey" href="https://www.google.com/maps/place/The+Wax+Shop+-+Kelowna+Mission/@49.8665247,-119.4932158,17z/data=!3m1!4b1!4m5!3m4!1s0x537d8b316df27d5f:0x47c0c77cd4252e2c!8m2!3d49.8665247!4d-119.4910271" target="_blank" rel="noreferrer noopener">
          View map
        </a>
      </span>
      <span class="content">
        2689 Pandosy St
      </span>
      <span class="content">
        Suite 100
      </span>
      <span class="content">
        Kelowna, BC V1Y 9V9
      </span>
    </div>
    <iframe style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJX33ybTGLfVMRLC4l1HzHwEc&key=AIzaSyASCfx46mSwtL11S20Lv3FpusELZKuXA3w" allowfullscreen />
  </section>
</template>

<script>
// import Message from '~/components/Message.vue'
import PromoDescription from '~/components/PromoDescription.vue'

export default {
  components: {
    PromoDescription
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
        'We\'d love to hear from you!',
        'Call, send a message or come see us in the heart of Pandosy Village.'
      ]
    }
  },
  computed: {
    parsedWeekdayText () {
    // converts array of strings into array of structured objects
      let result = []
      if (this.openingHours.weekday_text.length) {
        result = this.openingHours.weekday_text.map((timeString) => {
          const hour = timeString.split(': ')
          return {
            start_day: hour[0],
            end_day: hour[0],
            hours: hour[1]
          }
        })
      }
      return result
    },
    simplifiedHours () {
    // groups consecutive days with the same hours
      let result = this.parsedWeekdayText
      if (result.length) {
        result.forEach((obj, i, arr) => {
          if (i > 0) {
            if (obj.hours === arr[i - 1].hours) {
              obj.start_day = arr[i - 1].start_day
              arr[i - 1].flag = true
            }
          }
        })
        result = result.filter(obj => !obj.flag)
      }
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/borderRadius.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/vars/breakpoints.scss';

@keyframes swing {
  0% {
    transform: rotate(2deg);
  }
  50% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(2deg);
  }
}
a#tel {
  text-decoration: none;
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
    margin-top: 60px;
    margin-top: 12%;
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
      img {
        width: 15%;
        padding-bottom: 10px;
      }
    }
    a {
      // max-width: 175px;
      margin-bottom: 20px;
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
  }
  img.open-sign {
    margin-right: auto;
    margin-top: 5px;
    margin-left: 18px;
    position: absolute;
    max-width: 18%;
    // transform-origin: 33px 22px;
    transform-origin: top center;
    transform: rotate(0deg);
    // transition: transform 200ms ease;
    animation: swing 2000ms ease-in-out infinite reverse both running;
    // top: 0;
  }
  div.full-width {
    width: 100%;
    margin-bottom: 10px;
    .img {
      display: flex;
      justify-content: center;
      img {
        width: 15%;
        height: 100%;
        object-fit: contain;
        // justify-self: center;
        // margin: 0 auto;
      }
    }
    .hours-container {
      // max-width: 600px;
      // justify-self: center;
      // margin: 0 auto;
      .hrow {
        display: flex;
        margin-bottom: 8px;
        // justify-content: space-around;
        .day-wrap {
          text-align: left;
          margin-left: auto;
        }
        div {
          width: 45%
        }
        span {
          width: 45%;
          margin-right: auto;
        }
      }
    }

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
