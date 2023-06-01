<template>
  <section class="about">
    <h2 id="about" class="section-title">
      What makes us different?
    </h2>
    <div class="boxes">
      <Box
        v-for="(box, i) in boxes"
        :key="'box'+i"
        :box="box"
        :index="i"
        @boxclick="boxClickHandler"
      />
    </div>
  </section>
</template>
<script>
import Box from '~/components/Box.vue'

export default {
  components: {
    Box
  },
  data () {
    return {
      boxes: [
        {
          title: 'Strict hygiene',
          message: 'We never cut corners on cleanliness.',
          imagePath: require('~/assets/sm-sparkle.png'),
          alt: 'Sparkling clean',
          active: false
        },
        {
          title: 'Certified wax technicians',
          message: 'You are in good hands with our well-trained, experienced waxers.',
          imagePath: require('~/assets/sm-cert.png'),
          alt: 'Certificate',
          active: false
        },
        {
          title: 'Top quality products',
          message: 'Tough on hair but gentle on your skin.',
          imagePath: require('~/assets/sm-wax.png'),
          alt: 'wax pot and applicator',
          active: false
        },
        {
          title: 'Prompt and efficient',
          message: 'We\'ll get you in and out quickly without feeling rushed.',
          imagePath: require('~/assets/sm-fast.png'),
          alt: 'Quick',
          active: false
        },
        {
          title: 'Unbeatable value',
          message: 'Seamless service at very <a href="https://waxshopca.zenoti.com/webstoreNew" target="_blank" rel="noopener">reasonable rates.</a>',
          imagePath: require('~/assets/sm-dollar2.png'),
          alt: 'Dollar sign',
          active: false
        },
        {
          title: 'Inclusive',
          message: 'Whether you\'re a waxing veteran or a newbie, everyone is welcome.',
          imagePath: require('~/assets/sm-heart.png'),
          alt: 'Heart',
          active: false
        }
      ]
    }
  },
  methods: {
    boxClickHandler (val) {
      this.boxes = this.boxes.map((box, i) => {
        if (i === val && box.active === false) {
          box.active = true
        } else {
          box.active = false
        }
        return box
      })
    }
  }
}
</script>
<style lang="scss" scoped>
// h1 {
//   font-weight: 300;
//   margin: 28px 0px 22px 0px;
// }
.about {
  padding: 18px 0px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  h1 {
    margin-top: 0px;
    font-size: 6vw;
  }
  .boxes {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
}
@media screen and (min-width: 740px) {
  section.about {
    h1 {
      font-size: 2.3rem;
    }
    div.boxes {
      justify-content: space-between;
    }
  }
}
</style>
