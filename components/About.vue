<template>
  <section class="about">
    <h1 id="about" class="section-title">
      What makes us different?
    </h1>
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
          title: 'Strictest hygiene standards',
          message: 'We never cut corners on cleanliness.',
          imagePath: require('~/assets/sparkle.png'),
          active: false
        },
        {
          title: 'Certified wax technicians',
          message: 'You are in good hands with our well-trained, experienced waxers.',
          imagePath: require('~/assets/cert.png'),
          active: false
        },
        {
          title: 'Top quality products',
          message: 'Tough on hair but gentle on your skin.',
          imagePath: require('~/assets/wax.png'),
          active: false
        },
        {
          title: 'Prompt and efficient',
          message: 'We\'ll get you in and out quickly without feeling rushed.',
          imagePath: require('~/assets/fast.png'),
          active: false
        },
        {
          title: 'Unbeatable value',
          message: 'Seamless service at very reasonable rates.',
          imagePath: require('~/assets/dollar2.png'),
          active: false
        },
        {
          title: 'Inclusive',
          message: 'Whether you\'re a waxing veteran or a newbie, everyone is welcome.',
          imagePath: require('~/assets/heart.png'),
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
  .boxes {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
}
@media screen and (min-width: 740px) {
  section.about {
    div.boxes {
      justify-content: space-between;
    }
  }
}
</style>
