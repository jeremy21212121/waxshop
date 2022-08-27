<template>
  <section class="container">
    <breadcrumbs
      :breadcrumbs="breadcrumbs"
    />
    <div class="main-title-row">
      <h1 class="section-title section-title-alt">
        {{ newServices.heading }}
      </h1>
    </div>
    <div class="service-wrapper alt">
      <div class="title-row">
        <h2>
          {{ newServices.title }}
        </h2>
        <!-- <img :src="newServices.icon" :alt="getImageAltText(newServices.title)" aria-hidden="true"> -->
        <new-services-SVG />
      </div>
      <ul class="group-wrapper">
        <li
          v-for="(service, nI) in [...newServices.services, ...newServices.specials]"
          :key="'new-service' + nI"
          class="row-wrapper"
        >
          <span class="service-title" >
            {{ service.title }}
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
              :key="'ns-option-' + nI + k"
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
    </div>
    <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--green" rel="noreferrer noopener">Book Now!</a>
    <div class="main-title-row">
      <h1 class="section-title">
        {{ pageHeading }}
      </h1>
      <!-- <img src="~/assets/sm-wax-icon.png" alt="wax applicator icon" aria-hidden="true"> -->
    </div>
    <div
      v-for="(group, i) in services"
      :key="'servicegroup' + i"
      :class="'service-wrapper ' + group.title"
    >
      <div class="title-row">
        <h2>
          {{ group.title }}
        </h2>
        <img :src="group.icon" :alt="getImageAltText(group.title)" aria-hidden="true">
      </div>
      <ul class="group-wrapper">
        <li
          v-for="(service, j) in group.services"
          :key="'service-' + i + '-' + j"
          class="row-wrapper"
          :title="service.requiresDeposit ? 'Requires deposit' : ''"
        >
          <span class="service-title" >
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
    </div>
    <span class="disclaimer">
      * requires deposit
    </span>
    <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--green" rel="noreferrer noopener">Book Now!</a>
    <p>
      Don’t see the service you were looking for? Check out our <a href="https://go.booker.com/location/TheWaxShop" target="_blank" rel="noreferrer noopener">full services list</a> or we can customize our services to your needs.
    </p>
  </section>
</template>
<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import NewServicesSVG from '@/components/NewServicesSvg.vue'
import servicesData from '@/static/data/services.js'
import structuredData from "@/mixins/structuredData.js"

export default {
  name: 'ServicesPage',
  mixins: [
    structuredData
  ],
  components: {
    NewServicesSVG,
    Breadcrumbs
  },
  head () {
    return {
      lastModified: '2020-08-12T00:53:01.609Z',
      title: this.headData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.headData.description },
        { hid: 'og:title', property: 'og:title', content: this.headData.title },
        { hid: 'og:description', property: 'og:description', content: this.headData.description },
        { hid: 'og:url', property: 'og:url', content: this.baseUrl + this.$route.path },
        { hid: 'og:image', property: 'og:image', content: this.baseUrl + require('@/assets/landing_rectangle.jpg') }
      ],
      script: [...this.generateHeadScripts()]
    }
  },
  data () {
    return {
      headData: {
        title: 'Services - The Wax Shop Kelowna',
        description: 'Check out the various waxing services we offer, or book an appointment.',
      },
      pageHeading: 'Popular services',
      services: servicesData,
      cancelledTitles: [
        'Lash lift',
        'Just lashes',
        'lip or chin'
      ],
      newServices: {
        heading: 'New services',
        title: 'brows & lashes',
        icon: '/static_img/brow-lash.svg',
        services: [
          {
            title: 'Brow tint',
            price: 20,
            info: null
          },
          {
            title: 'Lash tint',
            price: 25,
            info: null
          },
// service discontinued due to covid-19
          // {
          //   title: 'Lash lift',
          //   price: 65,
          //   info: null
          // }
        ],
        specials: [
          {
            title: 'Just brows',
            price: 0,
            // info: 'Brow wax & tint',
            options: [
              {
                title: 'Brow wax & tint',
                price: 35
              }
            ]
          },
          // {
          //   title: 'Just lashes',
          //   price: 0,
          //   // info: 'Lash lift & tint',
          //   options: [
          //     {
          //       title: 'Lash lift & tint',
          //       price: 80
          //     }
          //   ]
          // }
        ]
      }
    }
  },
  methods: {
    getImageAltText (title) {
      let output = ''
      switch (title) {
        case 'his':
          output = 'Male symbol'
          break
        case 'hers':
          output = 'Female symbol'
          break
        case 'brows & lashes':
          output = 'Eyelash and eyebrow icon'
          break
        default:
          break
      }
      return output
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          title: 'Home',
          path: '/',
          current: false
        },
        {
          title: 'Services',
          path: '/services',
          current: true
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/scss/mixins/borderRadius.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/vars/breakpoints.scss';

.container {
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  margin-top: 25%;
  .strike {
    text-decoration-line: line-through;
  }
  .main-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    h1 {
      text-transform: capitalize;
      margin-bottom: 10px;
    }
    img {
      width: 48px;
      height: 48px;
    }
    h1.section-title-alt {
      margin-top: 0px;
      font-weight: 300;
    }
  }
  .service-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    margin: 13px auto;
    padding: 8px 6px;
    background-color: rgba(255, 255, 255, 0.15);
    @include bs-white-1;
    @include border-radius-standard;
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
        font-size: 1.0rem;
        span.service-title {
          padding-left: 7px;
          // text-transform: capitalize;
          // text-align: left;
          width: 33%;
        }
        span.service-price {
          display: flex;
          flex-grow: 1;
          align-items: baseline;
          font-size: 0.9rem;
          .service-info {
            text-transform: none;
            text-align: center;
            font-size: 0.9rem;
            opacity: 0.8;
            flex-grow: 1;
          }
        }
        .service-options {
          font-size: 0.8rem;
          // .service-option-title {

          // }
          .service-option-price {
            // opacity: .80;
            font-size: 0.9rem;
            color: rgba(255,255,255,0.64);
          }
        }
      }

      }
    }
  div.service-wrapper.alt {
    padding-bottom: 30px;
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
    @include bs-white-1;
    color: rgba(255,255,255,0.86);
  }
  p {
    margin: 10px auto;
    margin-bottom: 30px;
    padding: 6px 12px;
    font-size: 1.2rem;
    // a {
    //   // color: rgba(255, 255, 255, 0.85);
    // }
  }
}
@media screen and (min-width: $break-s) {
  .container {
    .service-wrapper {
      width: 90%;
      .row-wrapper {
        padding: 1px 0;
      }
    }
  }
}
@media screen and (min-width: $break-l) {
  .container {
    margin-top: 30px;
    justify-content: space-between;
    .service-wrapper {
      margin-left: 0;
      margin-right: 0;
      width: 49%;
      height: 520px;
      .group-wrapper {
        .row-wrapper {
          padding: 2px 0;
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
      &.his {
        .group-wrapper {
          .row-wrapper {
            padding: 4px 0;
          }
        }
      }
    }
    div.service-wrapper.alt {
      // display: none;
      width: 100%;
      height: 160px;
      margin: 15px auto;
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
