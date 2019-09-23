<template>
  <section class="contact">
    <h1 id="contact" class="section-title">
      Contact us
    </h1>
    <promo-description
      :paragraphs="description"
    />
    <div class="wrapper">
      <h2 class="section-title">
        Phone
      </h2>
      <div class="img">
        <img src="~/assets/sm-phone.png" aria-hidden="true">
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
        <img src="~/assets/sm-map.png" aria-hidden="true">
      </div>
      <span>
        <a class="button--grey" href="https://www.google.com/maps/place/100-2698+pandosy+st+kelowna+bc" target="_blank" rel="noreferrer noopener">
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
    <iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJX33ybTGLfVMRLC4l1HzHwEc&key=AIzaSyASCfx46mSwtL11S20Lv3FpusELZKuXA3w" allowfullscreen />
  </section>
</template>

<script>
// import Message from '~/components/Message.vue'
import PromoDescription from '~/components/PromoDescription.vue'
export default {
  components: {
    PromoDescription
  },
  data () {
    return {
      description: [
        'We\'d love to hear from you!',
        'Call, send a message or come see us in the heart of Pandosy Village.'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
    margin-bottom: 0;
    // margin: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    max-width: 350px;
    // height: 220px;
    background-color: rgba(255,255,255,0.15);
    // border: 1px solid rgba(255,255,255,0.25);
    border-radius: 4px;
    margin: 10px 0;
    padding-bottom: 20px;
    .img {
      img {
        max-width: 15%;
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
  iframe {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 15px;
    width: 90%;
    height: 350px;
  }
}
@media screen and (min-width: 740px) {
  section.contact {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .wrapper {
      height: 230px;
    }
    h1 {
      margin-top: 20px;
    }
    iframe {
      width: 75%;
      height: 450px;
    }
  }
}
</style>
