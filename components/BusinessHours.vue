<template>
  <div
    v-if="simplifiedHours.length"
    class="full-width"
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
        :class="{ today: hours.today }"
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
    <div class="info">
      <span
        v-if="upcomingHolidays && upcomingHolidays.length"
        class="next-holiday"
      >
        {{ upcomingHolidays[0].title }} is coming up!
      </span>
      <a href="https://www.google.com/maps/place/The+Wax+Shop+-+Kelowna+Mission/@49.8665247,-119.4932158,17z/data=!3m1!4b1!4m5!3m4!1s0x537d8b316df27d5f:0x47c0c77cd4252e2c!8m2!3d49.8665247!4d-119.4910271" target="_blank" rel="noopener noreferrer">
        <span>
          <img src="~/assets/info.png" alt="info" aria-hidden="true">
          Holiday hours
        </span>
      </a>
    </div>
  </div>
</template>

<script>
import statHolidaysBC from '~/mixins/statHolidaysBC.js'

export default {
  mixins: [
    statHolidaysBC
  ],
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
      holidays: this.currentAndNextYearsHolidays()
    }
  },
  computed: {
    parsedWeekdayText () {
    // converts array of strings into array of structured objects
      let result = []
      const currentDate = new Date()
      // in javascript land, sunday === 0. But the google places api returns "weekday_text" which starts with monday (monday === 0)
      // so we subtract 1 from the js day to get the index for the api results.
      let currentDay = currentDate.getDay() - 1
      if (currentDay === -1) {
        // handles sunday
        currentDay = 6
      }
      // used for adding .today = true in simplifiedHours
      if (this.openingHours.weekday_text.length) {
        result = this.openingHours.weekday_text.map((timeString, i) => {
          const hour = timeString.split(': ')
          return {
            start_day: hour[0],
            end_day: hour[0],
            hours: hour[1],
            today: i === currentDay
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
              if (arr[i - 1].today) {
                obj.today = true
              }
            }
          }
        })
        result = result.filter(obj => !obj.flag)
      }
      return result
    },
    upcomingHolidays () {
      const now = Date.now()
      const maxDiff = 1000 * 60 * 60 * 24 * 14 * 2 // two weeks in milliseconds
      const holidayDiffs = this.holidays.map((holiday) => {
        return {
          title: holiday.title,
          diff: holiday.date.getTime() - now
        }
      })
      return holidayDiffs.filter(holiday => (holiday.diff > 0 && holiday.diff < maxDiff))
    }
  },
  methods: {
    currentAndNextYearsHolidays () {
      const currentYear = new Date().getFullYear()
      const results = this.BCStatHolidays(currentYear)
      // add next years' holidays to handle, for example, december 27th
      results.push(...this.BCStatHolidays(currentYear + 1))
      return results
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/scss/mixins/borderRadius.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/vars/breakpoints.scss';
@import '~/scss/roboto-italic.scss';

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

div.full-width {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(255,255,255,0.15);
  @include bs-white-1;
  @include border-radius-standard;
  margin: 10px auto;
  padding-bottom: 20px;
  width: 100%;
  margin-bottom: 10px;
  padding-bottom: 10px;
  h2 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  max-height: 0px;
  overflow: hidden;
  }
  .img {
    display: flex;
    justify-content: center;
    img {
      width: 15%;
      height: 100%;
      object-fit: contain;
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
      &.today {
        background-color: rgba(255,255,255,0.1);
        padding: 4px 0px;
        @include border-radius-standard;
      }
      .day-wrap {
        text-align: left;
        margin-left: auto;
      }
      div {
        width: 45%
      }
      span {
        width: 45%;
        // margin-right: auto;
      }
    }
  }
  .info {
    display: flex;
    // display: block;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    span.next-holiday {
      color: rgba(255,255,255,0.75);
      font-size: 0.9rem;
      font-style: italic;
    }
    a {
      color: rgba(255,255,255,0.65);
      font-size: 12px;
      // background-color: rgba(255,255,255,0.05);
      width: 140px;
      margin-bottom: 0px;
      // margin-top: 20px;
      // margin-left: auto;
      display: flex;
      justify-content: flex-end;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 30%;
        margin-right: 10%;
        padding: 3px 5px;
        padding-right: 10px;
        background-color: rgba(255,255,255,0.08);
        @include border-radius-standard;
        @include bs-white-0b;
        // vertical-align: baseline;
        img {
          width: 18px;
          margin-right: 5px;
          // padding: 5px;
          // background-color: rgba(255,255,255,0.05);
        }
      }
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
}
@media screen and (min-width: $break-s) {

  div.full-width {
    // width: 48%;
    // height: 210px;
    margin: 0px;
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
  img.open-sign {
    max-width: 13%;
  }
}
@media screen and (min-width: $break-l) {
  div.full-width {
    // height: 230px;
    // width: 359px;
    img.open-sign {
      max-width: 105px;
    }
  }

}

@media (prefers-reduced-motion: reduce) {
  div.full-width {
    img.open-sign {
      animation: none !important;
    }
  }
}
</style>
