<template>
  <header>
    <div class="logo">
      <a
        href="#"
        title="Menu button"
        :class="{ active }"
        @click.prevent="() => { active = !active }"
      >
        <img src="~/assets/menu.png" alt="">
      </a>
      <img id="logo-img" src="~/assets/logo.png" alt="The Waxshop logo">
    </div>
    <nav
      :class="{ active }"
    >
      <ul>
        <li>
          <a href="#about" class="button--grey">About</a>
        </li>
        <li>
          <a href="#contact" class="button--grey">Contact</a>
        </li>
        <li>
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
  .logo {
    display: flex;
    // justify-content: space-around;
    align-items: center;
    background-color: black;
    padding: 4px 0px;
    a {
      padding-left: 4%;
      img {
        max-width: 24px;
        opacity: 0.85;
      }
    }
    img#logo-img {
      max-width: 75%;
      padding-left: 5%;
    }
  }
  nav {
    background-color: #cccccc50;
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
