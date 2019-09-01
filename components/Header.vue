<template>
  <header>
    <div class="logo">
      <a
        href="#"
        title="Menu button"
        :class="{ active }"
        @click.prevent="() => { active = !active }"
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
        <!-- <img src="~/assets/menu.png" alt=""> -->
      </a>
      <img id="logo-img" src="~/assets/logo.png" alt="The Waxshop logo">
    </div>
    <nav
      :class="{ active }"
    >
      <ul>
        <li @click="() => { active = !active }">
          <a href="#about" class="button--grey">About</a>
        </li>
        <li @click="() => { active = !active }">
          <a href="#contact" class="button--grey">Contact</a>
        </li>
        <li @click="() => { active = !active }">
          <a href="https://go.booker.com/location/TheWaxShop" target="_blank" class="button--green" noreferrer noopener>Book</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  }
}
</script>

<style lang="scss">
header {
  // box-shadow: 0 2px 5px rgba(0,0,0,.26);
  width: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  .logo {
    display: flex;
    // justify-content: space-around;
    align-items: center;
    background-color: black;
    padding: 4px 0px;
    a {
      padding-left: 4%;
      svg {
        .icon {
          width: 100%;
          height: 100%;
          .frstbar {
            transform-origin: 12% 51%;
            transition: transform 250ms;
          }
          .scndbar {
            opacity: 1;
            transition: opacity 250ms;
          }
          .thrdbar {
            transform-origin: 28% 67%;
            transition: transform 300ms;
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
      // img {
      //   max-width: 24px;
      //   opacity: 0.85;
      // }
    }
    img#logo-img {
      max-width: 75%;
      padding-left: 5%;
    }
  }
  nav {
    background-color: #ccccccf3;
    max-height: 0px;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transition: all 200ms ease-out;
    &.active {
      max-height: 45px;
      opacity: 1;
      visibility: visible;
      transition: all 300ms ease-in;
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      list-style-type: none;
      padding: 0;
      padding-top: 6px;
      padding-bottom: 6px;
    }
  }
}
@media screen and (min-width: 740px) {
  header {
    position: initial;
    .logo {
      justify-content: center;
       img#logo-img {
         padding-left: 0;
       }
      a {
        display: none;
      }
    }
    nav {
      max-height: 45px;
      opacity: 1;
      visibility: visible;
      transition: all 300ms ease-in;
      ul {
        justify-content: center;
        li {
          width: 15%;
        }
      }
    }
  }
}
</style>
