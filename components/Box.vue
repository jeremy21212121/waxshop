<template>
  <div
    class="box"
    :class="{ active: box.active }"
    @click="clickHandler"
  >
    <h2>
      {{ box.title }}
    </h2>
    <img
      :src="box.imagePath"
      :alt="box.alt"
      class="about-icons"
      aria-hidden="true"
    >
    <span
      :class="{ active: box.active }"
      v-html="box.message"
    />
    <span
      :class="{ active: !box.active }"
      class="caret-wrapper"
      aria-hidden="true"
    >
      <img src="~/assets/caret.png" alt="caret icon" aria-hidden="true">
    </span>
  </div>
</template>

<script>
export default {
  props: {
    box: {
      type: Object,
      default: () => {
        return {
          title: '',
          message: '',
          imagePath: ''
        }
      }
    },
    index: {
      type: Number,
      default: () => 0
    }
  },
  data () {
    return {
    }
  },
  methods: {
    clickHandler () {
      this.active = !this.active
      this.$emit('boxclick', this.index)
    }
  }
}
</script>

<style lang="scss">
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/mixins/borderRadius.scss';

@keyframes down {
  from {
    transform: scale(1.0);
    @include bs-white-1;
  }
  to {
    transform: scale(0.999);
    @include bs-white-0;
    }
}
@keyframes up {
  from {
    transform: scale(0.99);
    @include bs-white-0;
    }
  to {
    transform: scale(1.02);
    @include bs-white-2;
    }
}
@keyframes down2 {
  from {
    transform: scale(1.02);
    @include bs-white-2;
    }
  to {
    transform: scale(0.999);
    @include bs-white-0;
    }
}
@keyframes up2 {
  from {
    transform: scale(0.999);
    @include bs-white-0;
    }
  to {
    transform: scale(1.0);
    @include bs-white-1;
    }
}

  .box {
    padding: 5px 2px;
    margin-top: 16px;
    width: 90%;
    height: 40vw;
    min-height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    justify-content: space-around;
    background-color: #cccccc50;
    // box-shadow: 0px 1px 3px 0px #00000000;
    // box-shadow: 0 1px 3px rgba(255,255,255,0.16), 0 1px 3px rgba(255,255,255,0.23);
    @include bs-white-1;
    border: 1px solid #00000000;
    // border-radius: 2px;
    @include border-radius-standard;
    color: rgba(255, 255, 255, 0.85);
    transform: scale(1);
    animation: down2 200ms, up2 100ms, 0ms;
    // transition: box-shadow cubic-bezier(0.25,0.8,0.25,1) 350ms;
    &.active {
      // box-shadow: 0px 1px 3px 0px rgba(255,255,255,0.5);
      // box-shadow: 2px 2px 2px rgba(255,255,255,.24),2px 2px 2px rgba(255,255,255,.36);
      // box-shadow: 0 14px 28px rgba(255,255,255,0.25), 0 10px 10px rgba(255,255,255,0.22);
      // box-shadow: 0 3px 6px rgba(255,255,255,0.16), 0 3px 6px rgba(255,255,255,0.23);
      transform: scale(1.02);
      animation: down 100ms, up 200ms, 50ms;
      @include bs-white-2;
      // transform: translate(-2px,-2px);
      // transform: translate(0px, -1px);
      // transition: box-shadow cubic-bezier(0.25,0.8,0.25,1) 350ms;
    }
    &:hover {
      cursor: pointer;
    }
    h2 {
      // font-family: 'Montserrat', sans-serif;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1.2rem;
      font-size: 3.8vw;
      max-width: 95%;
    }
    img {
      width: 20%;
      // padding: 10px 0;
      // opacity: 0.9;
    }
    span {
      display: block;
      // transform: scale(0.5);
      overflow: hidden;
      // display: none;
      position: absolute;
      max-width: 0px;
      max-height: 24px;
      visibility: hidden;
      opacity: 0;
      transition-property: transform,max-height,opacity,visibility,font-size;
      transition-timing-function: ease-out;
      transition-duration: 200ms;
      a {
        color: rgba(220,220,255,0.8);
      }
    }
    span.active {
      position:inherit;
      max-width: 95%;
      width: 95%;
      font-size: 3.4vw;
      font-size: 15px;
      // transform: scale(1.0);
      // display:inline-block;
      visibility: visible;
      opacity: 1;
      max-height: 48px;
      // transition: transform,max-height,opacity,visibility ease-in 250ms;
      transition-property: transform,max-height,opacity,visibility,font-size;
      transition-timing-function: ease-in;
      transition-duration: 200ms;
    }
    span.caret-wrapper {
      width: auto;
      img {
        width: 30%;
      }
    }
  }
  @media screen and (min-width: 640px) {
  div.box {
    width: 47%;
    height: 200px;
    h2 {
      font-size: 22px;
    }
    span.active {
      font-size: 16px;
    }
  }
}
  @media screen and (min-width: 740px) {
  div.box {
    img.about-icons {
      width: 72px;
      height: 72px;
    }
    width: 49%;
  }
}
</style>
