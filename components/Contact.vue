<template>
  <section class="contact">
    <h1 id="contact" class="section-title">
      Contact us
    </h1>
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
        <a class="button--grey" href="https://www.google.com/maps/place/100-2698+pandosy+st+kelowna+bc" target="_blank" noreferrer noopener>
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
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss" scoped>
a#tel {
  text-decoration: none;
}
section.contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h1 {
    width: 100%
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    width: 100%;
    max-width: 350px;
    height: 200px;
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
      opacity: 0.80;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
