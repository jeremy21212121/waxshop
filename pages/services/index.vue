<template>
  <section class="container">
    <div class="main-title-row">
      <h1 class="section-title">
        {{ pageHeading }}
      </h1>
      <img src="~/assets/sm-wax-icon.png" aria-hidden="true">
    </div>
    <div
      v-for="(group, i) in services"
      :key="'servicegroup' + i"
      class="service-wrapper"
    >
      <div class="title-row">
        <h2>
          {{ group.title }}
        </h2>
        <img :src="group.icon" aria-hidden="true">
      </div>
      <ul class="group-wrapper">
        <li
          v-for="(service, j) in group.services"
          :key="'service-' + i + '-' + j"
          class="row-wrapper"
        >
          <span class="service-title">
            {{ service.title }}
            <span
              v-if="service.info"
            >
              *
            </span>
          </span>
          <span
            v-if="service.price > 0"
            class="service-price"
          >
            ${{ service.price }}
            <span
              v-if="service.info"
              class="service-info"
            >
              {{ service.info }}
            </span>
          </span>
          <span
            v-else
            class="service-options"
          >
            <span
              v-for="(option, k) in service.options"
              :key="'option-' + i + '-' + j + '-' + k"
              class="service-option"
            >
              <span class="service-option-title">
                {{ option.title }}
              </span>
              <span class="service-option-price">
                ${{ option.price }}
              </span>
              <span
                v-if="k < (service.options.length -1)"
                class="service-option-separator"
              >
                /
              </span>
            </span>
          </span>
        </li>
      </ul>
      <span class="disclaimer">
        * requires deposit
      </span>
    </div>
    <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--green" rel="noreferrer noopener">Book Now!</a>
    <p>
      Don’t see the service you were looking for? Check out our <a href="https://go.booker.com/location/TheWaxShop" target="_blank" rel="noreferrer noopener">full services list</a> or we can customize our services to your needs.
    </p>
  </section>
</template>
<script>
export default {
  data () {
    return {
      pageHeading: 'Popular services',
      services: require('~/static/data/services.json')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  .main-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1 {
      text-transform: capitalize;
    }
    img {
      width: 48px;
      height: 48px;
    }
  }
  margin-top: 15%;
  .service-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 20px auto;
    padding: 8px 6px;
    background-color: rgba(255, 255, 255, 0.15);
    .title-row {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 24px;
      // flex-direction: column;
      h2 {
        text-transform: capitalize;
        margin-right: 12px;
      }
      img {
        width: 32px;
      }
    }
    .group-wrapper {
      padding-left: 0;
      .row-wrapper {
        display: flex;
        align-items: baseline;
        text-transform: capitalize;
        border-bottom: 1px solid rgba(255,255,255,0.03);
        text-align: left;
        span.service-title {
          font-size: 1.2rem;
          padding-left: 7px;
          // text-transform: capitalize;
          // text-align: left;
          width: 33%;
        }
        span.service-price {
          display: flex;
          flex-grow: 1;
          align-items: baseline;
          .service-info {
            text-transform: none;
            text-align: center;
            font-size: 0.9rem;
            opacity: 0.8;
            flex-grow: 1;
          }
        }
        .service-options {
          .service-option-title {
            // opacity: .80;
          }
          .service-option-price {
            opacity: .80;
          }
        }
      }

      }
    }
  .disclaimer {
    justify-self: flex-end;
    align-self: flex-end;
    display: block;
    margin-left: 8px;
    margin-top: 6px;
    font-size: 0.8rem;
    width: 100%;
    text-align: left;
    text-transform: capitalize;
  }
  a.button--green {
    // align-self: center;
    margin: 0 auto;
  }
  p {
    margin: 10px auto;
    margin-bottom: 30px;
    padding: 6px 12px;
    font-size: 1.2rem;
    a {
      color: rgba(255, 255, 255, 0.85);
    }
  }
}
@media screen and (min-width: 740px) {
  .container {
    margin-top: 30px;
    justify-content: space-between;
    .service-wrapper {
      width: 49%;
      height: 420px;
      .group-wrapper {
        .row-wrapper {
          span.service-options {
            font-size: 0.9rem;
          }
          span.service-title {
            width: 34%;
          }
        }
      }
      .disclaimer {
        margin-top: auto;
      }
    }
    p {
      align-self: baseline;
      font-size: 1.3rem;
      margin: 20px auto;
      margin-bottom: 40px;
    }
  }

}
</style>
