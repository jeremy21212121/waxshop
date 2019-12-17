<template>
  <footer>
    <div class="info">
      <div>
        <span class="abbrev">P</span>
        <span class="hidden">hone</span>
        <span class="colon">: </span>
        <a id="tel-anchor" href="tel:12368372100">236.837.2100</a>
      </div>
      <div>
        <span class="abbrev">A</span>
        <span class="hidden">ddress</span>
        <span class="colon">: </span>
        <span class="address">100 - 2689 Pandosy Street, Kelowna, BC V1Y 9V9</span>
      </div>
      <div>
        <span class="abbrev">E</span>
        <span class="hidden">-mail</span>
        <span class="colon">: </span>
        <a href="mailto:hello@waxshop.ca">hello@waxshop.ca</a>
      </div>
    </div>
    <nav>
      <ul>
        <li
          v-for="(link, i) in nav"
          :key="link.title.toLowerCase() + i"
        >
          <nuxt-link
            :to="link.path"
          >
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="social-wrapper">
      <social-icons
        :spacing="24"
      />
    </div>
    <div class="copy">
      &copy; 2019 <a href="https://waxshop.ca">The Wax Shop</a>
    </div>
  </footer>
</template>

<script>
import SocialIcons from '@/components/SocialIcons.vue'

export default {
  components: {
    SocialIcons
  },
  data () {
    return {
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
        },
        {
          title: 'Promotion',
          path: '/gift-card-promo',
          isNuxt: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/spaceEvenlyHack.scss';
@import '~/scss/vars/colours.scss';

footer {
  display: flex;
  flex-direction: column;
  // justify-content: space-evenly;
  @include space-evenly-hack;
  width: 100%;
  max-width: 740px;
  min-height: 120px;
  margin: 0 auto;
  background-color: black;
  div.info {
    font-size: 0.9rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    // margin-bottom: 10px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.75);
    div {
      padding: 2px 5px;
    }
    a#tel-anchor {
      text-decoration: none;
      color: inherit;
    }
    div {
      display: flex;
      // align-items: center;
      span.abbrev,
      span.colon {
        font-size: 10px;
        // line-height: inherit;
        align-self: center;
      }
      span.address {
        font-size: inherit;
        align-self: baseline;
      }
      span.colon {
        padding-right: 5px;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    .hidden {
      display: inline-block;
      max-width: 0px;
      max-height: 0px;
      overflow: hidden;
    }
  }
  div.social-wrapper {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  nav {
    ul {
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 10px;
      margin-top: 20px;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      li {
        a {
          color: rgba(255, 255, 255, 0.75);
          &:visited {
            color: rgba(220, 220, 255, 0.75);
          }
        }
      }
    }
  }
  div.copy {
    color: rgba(255, 255, 255, 0.75);
    padding-bottom: 6px;
    margin-top: 10px;
    margin-bottom: 7px;
    font-size: 0.8rem;
    text-align: center;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
