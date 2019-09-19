<template>
  <section class="about">
    <div class="intro">
      <h1 id="about" class="section-title">
        about the waxshop
      </h1>
      <p class="teaser">
        Kelowna's newest waxing studio is
        <span class="highlight-text caps">
          now open
        </span>
        <span class="none">
          in
        </span>
        Pandosy!
      </p>
      <div class="description">
        <p>
          The Wax Shop specializes in women and men's waxing in Kelowna. That's all we do!
          We know how important it is to have a comfortable, clean and safe waxing experience. We
          use high quality wax specifically made for each area of the body.
        </p>
        <p>
          We welcome you into our Kelowna waxing studio - a clean, tranquil environment suited to
          both men and women in which you can relax and be sure you are receiving a superior
          waxing service every visit by certified wax technicians.
        </p>
      </div>
    </div>
    <div class="promo">
      <p>
        For a limited time, all new clients receive
        <span class="highlight-text caps">
          25% off
        </span>
        their first wax.
      </p>
    </div>
    <img id="flourish" src="~/assets/flourish.png" aria-hidden="true">
    <div class="service-grid">
      <div
        v-for="(row,i) in parts"
        :key="'row' + i"
        class="row"
      >
        <span
          v-for="(area,index) in row"
          :key="'area' + index"
        >
          {{ area }}
        </span>
      </div>
    </div>
  </section>
</template>
<script>
// import Box from '~/components/Box.vue'

export default {
  components: {
    // Box
  },
  data () {
    return {
      parts: [
        [
          'Arms', 'Eyebrows', 'Lower legs', 'Stomach', 'Toes'
        ],
        [
          'Back', 'Face', 'Full legs', 'Chest', 'Fingers'
        ],
        [
          'Bikini', 'Lip/chin', 'Thighs', 'Shoulders', 'Under arms'
        ]
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.about {
  // padding: 18px 0px;
  color: rgba(255,255,255,0.85);
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      max-height: 0px;
      overflow: hidden;
      margin: 10px 0;
    }
    p.teaser {
      width: 90%;
      text-transform: capitalize;
      font-size: 1.8rem;
      span.caps {
        font-weight: bold;
      }
      span.none {
        text-transform: none;
      }
    }
    .description {
      background-color: rgba(255,255,255,0.15);
      padding: 1px 20px;
      margin-top: 20px;
      p {
        text-align: center;
        font-size: 1.0rem;
        margin: 10px auto;
      }
    }
  }
  div.promo {
    margin-top: 20px;
    p {
      font-size: 1.5rem;
      span.caps {
        text-transform: uppercase;
        // font-weight: bold;
      }
    }
  }
  img#flourish {
    width: 50%;
    margin-top: 10px;;
  }
  .service-grid {
    margin: 10px 0;
    .row {
      display: flex;
      justify-content: center;
      span {
        width: 18%;
        min-width: 75px;
        font-size: 0.8rem;
        text-align: left;
      }
    }
  }
  // .boxes {
  //   display: flex;
  //   // flex-direction: column;
  //   flex-wrap: wrap;
  //   align-items: center;
  //   justify-content: space-evenly;
  // }
}
@media screen and (min-width: 740px) {
  section.about {
    h1 {
      font-size: 1.9rem;
    }
    div.boxes {
      justify-content: space-between;
    }
  }
}
</style>
