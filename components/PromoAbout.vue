<template>
  <section class="about">
    <div class="intro">
      <now-open />
      <promo-description
        :paragraphs="paragraphs"
      />
    </div>
    <promo-details />
  </section>
</template>
<script>
import NowOpen from '~/components/NowOpen.vue'
import PromoDescription from '~/components/PromoDescription.vue'
import PromoDetails from '~/components/PromoDetails.vue'

export default {
  components: {
    NowOpen,
    PromoDescription,
    PromoDetails
  },
  data () {
    return {
      paragraphs: [
        'The Wax Shop specializes in women and men\'s waxing in Kelowna. That\'s all we do! We know how important it is to have a comfortable, clean and safe waxing experience. We use high quality wax specifically made for each area of the body.',
        'We welcome you into our Kelowna waxing studio - a clean, tranquil environment suited to both men and women in which you can relax and be sure you are receiving a superior waxing service every visit by certified wax technicians.'
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
