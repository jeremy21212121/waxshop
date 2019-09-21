<template>
  <div>
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
  </div>
</template>
<script>
export default {
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
  }
}
</script>
<style lang="scss" scoped>
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
</style>
