<template>
  <header>
    <covid-banner />
    <div class="logo">
      <a
        id="menu-mobile"
        :class="{ active }"
        :aria-expanded="active.toString()"
        @click.prevent="() => { active = !active }"
        href="#"
        title="Menu button"
      >
        <svg
          id="burgericon"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="#fff"
        >
          <g class="icon">
            <rect
              class="frstbar"
              x="2"
              y="8"
              width="28"
              height="3"
              rx="2"
              ry="2"
            />
            <rect
              class="scndbar"
              x="2"
              y="16"
              width="28"
              height="3"
              rx="2"
              ry="2"
            />
            <rect
              class="thrdbar"
              x="2"
              y="24"
              width="28"
              height="3"
              rx="2"
              ry="2"
            />
          </g>
        </svg>
        <span class="hidden">
          Toggle navigation menu
        </span>
      </a>
      <nuxt-link id="home-link" to="/">
        <img id="logo-img" src="~/assets/logo.png" alt="The Waxshop logo">
      </nuxt-link>
      <social-icons />
    </div>
    <nav
      :class="{ active }"
    >
      <ul>
        <li
          v-for="(link, i) in filteredNav"
          :key="'nav' + i"
          @click="() => { active = !active }"
        >
          <nuxt-link
            v-if="link.isNuxt"
            :to="link.path"
            class="button--grey"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
        <li @click="() => { active = !active }">
          <a href="https://waxshopca.zenoti.com/webstoreNew" target="_blank" class="button--green" rel="noopener">Book Now!</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue'
import CovidBanner from '@/components/covidBanner.vue'

export default {
  components: {
    SocialIcons,
    CovidBanner
  },
  data () {
    return {
      active: false,
      nav: [
        {
          title: 'Home',
          path: '/',
          isNuxt: true
        },
        {
          title: 'Services',
          path: '/services',
          isNuxt: true
        },
        {
          title: 'Contact',
          path: '/contact',
          isNuxt: true
        }
      ]
    }
  },
  computed: {
    filteredNav () {
      // filters current page from nav menu array
      return this.nav.filter(link => link.path !== this.$route.path)
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/vars/breakpoints.scss';

header {
  width: 100%;
  min-width: 320px;
  max-width: $break-l;
  margin: 0 auto;
  position: fixed;
  top: 0;
  z-index: 995;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  .logo {
    display: flex;
    width: 100%;
    align-items: center;
    background-color: black;
    padding: 4px 0px;
    box-shadow: 0 8px 6px -6px rgba(0,0,0,0.4);
    // z-index: 999;
    a {
      padding-left: 4%;
      svg {
        .icon {
          width: 100%;
          height: 100%;
          .frstbar {
            transform-origin: 12% 51%;
            transform-origin: 4px 15px;
            transition: transform 250ms;
          }
          .scndbar {
            opacity: 1;
            transition: opacity 250ms;
          }
          .thrdbar {
            transform-origin: 28% 67%;
            transform-origin: 10px 22px;
            transition: transform 250ms;
          }
        }
      }
      &.active {
        svg {
          .icon {
            .frstbar {
              transform: rotate(45deg);
            }
            .scndbar {
              opacity: 0;
            }
            .thrdbar {
              transform: rotate(-45deg);
            }
          }
        }
      }
      span.hidden {
        position: absolute;
        display: inline-block;
        max-width: 0;
        max-height: 0;
        overflow: hidden;
        font-size: 1px;
      }
    }
    a#home-link {
      width: 65%;
      img#logo-img {
        width: 100%;
        padding-left: 5%;
        object-fit: contain;
        vertical-align: middle;
      }
    }
  }
  nav {
    background-color: rgba(204,204,204,.65);
    background-color: rgba(0,0,0,0.75);
    position: relative;
    bottom: 40px;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    max-height: 0px;
    transition: all 200ms ease-out;
    // display: none;
    &.active {
      // display: block;
      max-height: 64px;
      bottom: 0;
      opacity: 1;
      visibility: visible;
      transition: all 300ms ease-in;
      box-shadow: 0 8px 6px -6px rgba(0,0,0,0.4);
    }
    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      padding: 0;
      padding-top: 6px;
      padding-bottom: 6px;
      li {
        a.button--grey {
          padding: 5px 14px;
          color: rgba(0,0,0,0.75);
        }
        a.button--green {
          padding: 5px 14px;
          color: rgba(255,255,255,0.95)
        }
      }
    }
  }
}
@media screen and (min-width: $break-l) {
  header {
    position: initial;
    max-width: $break-l;
    .logo {
      justify-content: center;
      box-shadow: none;
      a.nuxt-link-active {
        display: flex;
        justify-content: center;
      }
      img#logo-img {
         padding-left: 0;
       }
      a#menu-mobile {
        display: none;
      }
    }
    nav {
      max-height: 45px;
      opacity: 1;
      visibility: visible;
      transition: all 300ms ease-in;
      bottom: 0;
      box-shadow: 0 8px 6px -6px rgba(0,0,0,0.4);
      ul {
        background-color: rgba(255,255,255,0.15);
      }
    }
  }
}
</style>
