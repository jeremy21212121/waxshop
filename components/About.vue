<template>
  <section class="about">
    <div class="intro">
      <now-open />
      <photo-row />
      <promo-description
        :paragraphs="paragraphs"
      />
    </div>
    <about-boxes />
  </section>
</template>
<script>
import NowOpen from '~/components/NowOpen.vue'
import PromoDescription from '~/components/PromoDescription.vue'
import AboutBoxes from '~/components/AboutBoxes.vue'
import PhotoRow from '~/components/PhotoRow.vue'

export default {
  components: {
    NowOpen,
    PromoDescription,
    AboutBoxes,
    PhotoRow
  },
  data () {
    return {
      paragraphs: [
        'The Wax Shop specializes in men\'s and women\'s waxing. That\'s all we do! We know how important it is to have a comfortable, clean and safe waxing experience.',
        'We welcome you into our Kelowna waxing studio - a clean, tranquil environment in which you can relax and be sure you are receiving a superior waxing service by certified wax technicians.'
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
  }
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
