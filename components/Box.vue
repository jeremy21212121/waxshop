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
      aria-hidden="true"
    >
    <span
      :class="{ active: box.active }"
    >
      {{ box.message }}
    </span>
    <span
      :class="{ active: !box.active }"
      aria-hidden="true"
    >
      <img src="~/assets/caret.png" alt="">
    </span>
  </div>
</template>

<script>
export default {
  props: {
    box: {
      type: Object,
      default: () => Object.assign({}, {
        title: '',
        message: '',
        imagePath: ''
      })
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

<style lang="scss" scoped>
  .box {
    padding: 5px 2px;
    margin-top: 16px;
    width: 90%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #cccccc50;
    box-shadow: 0px 1px 3px 0px #00000000;
    border: 1px solid #00000000;
    border-radius: 10px;
    transition: all ease 200ms;
    &.active {
      box-shadow: 0px 1px 3px 0px #00000090;
      border: 1px solid #00000020;
    }
    &:hover {
      cursor: pointer;
    }
    h2 {
      font-family: 'Raleway';
      text-transform: capitalize;
      font-weight: bold;
      font-size: 1.2rem;
    }
    img {
      width: 20%;
      // padding: 10px 0;
    }
    span {
      overflow: hidden;
      // display: none;
      max-width: 95%;
      max-height: 0px;
      visibility: hidden;
      opacity: 0;
      transition: all ease-out 200ms;
      img {
        // max-width: 14px;
      }
    }
    span.active {
      // display: block;
      visibility: visible;
      opacity: 1;
      max-height: 48px;
      transition: all ease-in 250ms;
    }
  }
  @media screen and (min-width: 640px) {
  div.box {
    max-width: 47%;
  }
}
  @media screen and (min-width: 740px) {
  div.box {
    max-width: 49%;
  }
}
</style>
