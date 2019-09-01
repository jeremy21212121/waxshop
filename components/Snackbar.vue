<template>
  <div :class="{ show }">
    <span>
      {{ message }}
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.state.snackbar.message
    },
    show () {
      return this.message.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  visibility: hidden; /* Hidden by default. Visible on click */
  width: 100%;
  // min-width: 250px;
  // margin-left: -125px;
  // background-color: #333;
  // color: #fff;
  // text-align: center;
  // border-radius: 3px;
  // padding: 16px;
  position: fixed;
  z-index: 10;
  // left: 50%;
  bottom: 30px;
  // box-shadow: 0 0 4px rgba(0,0,0,.12),0 4px 4px rgba(0,0,0,.2);
  span {
    display: block;
    margin: 0 auto;
    min-width: 250px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 16px;
    box-shadow: 0 0 4px rgba(0,0,0,.12),0 4px 4px rgba(0,0,0,.2);
  }
  &.show {
    visibility: visible;
    animation: fadein 0.5s, fadeout 0.5s 4.5s;
  }
}
@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}
@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
