<template>
  <div>
    <site-header />
    <nuxt />
    <site-footer />
    <snackbar />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
import Snackbar from '~/components/Snackbar.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    Snackbar

  }
}
</script>

<style>
@font-face {
    font-family: 'roboto_cb';
    src: url('~static/fonts/robotocondensed-bold-webfont.woff2') format('woff2'),
         url('~static/fonts/robotocondensed-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Roboto';
    src: url('~static/fonts/roboto-bold-webfont.woff2') format('woff2'),
         url('~static/fonts/roboto-bold-webfont.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Roboto';
    src: url('~static/fonts/roboto-regular-webfont.woff2') format('woff2'),
         url('~static/fonts/roboto-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Cinzel';
    src: url('~static/fonts/cinzel-regular-webfont.woff2') format('woff2'),
         url('~static/fonts/cinzel-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
html {
  min-width: 320px;
  background-color: black;
  /* color: #fff; */
  color: rgba(255,255,255,0.85);
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  /* border: 1px solid #c7993d; */
  /* border: 1px solid #ff4800; */
  /* color: #ffc800;
  color: rgba(255,200,0,0.9); */
  background-color: #ff4800;
  background-color: #bf3600;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  padding: 6px 20px;
  box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);
  /* margin-left: 15px; */
}

.button--green:hover {
  color: #ddd;
  /* background-color: rgb(128,36,0); */
  /* background-color: rgb(170,48,0); */
  background-color: #882400;
  /* border-color: #333; */
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  /* border: 1px solid #a6a6a6; */
  /* background-color: #00000030; */
  background-color: rgba(204,204,204,0.95294);
  color: #444;
  text-decoration: none;
  padding: 6px 20px;
  box-shadow: 0 0 2px rgba(0,0,0,.12),0 2px 2px rgba(0,0,0,.2);
  /* margin-left: 15px; */
}
.button--grey:hover {
  /* color: #fff; */
  background-color: #666;
  background-color: rgba(120,120,120,0.95);
}
.highlight-text {
  color: #ddc97c;
  color: #c6993d;
}
.caps {
  text-transform: uppercase;
}
</style>
