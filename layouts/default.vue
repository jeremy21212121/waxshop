<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
@font-face {
    font-family: 'Montserrat';
    src: url('~static/fonts/montserrat-bold-webfont.woff2') format('woff2'),
         url('~static/fonts/montserrat-bold-webfont.woff') format('woff');
    font-display: swap;
    font-weight: bold;
    font-style: normal;

}

@font-face {
    font-family: 'Raleway';
    src: url('~static/fonts/raleway-extrabold-webfont.woff2') format('woff2'),
         url('~static/fonts/raleway-extrabold-webfont.woff') format('woff');
    font-display: swap;
    font-weight: 800;
    font-style: normal;
}
html {
  min-width: 320px;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
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
  border: 1px solid #c7993d;
  /* border: 1px solid #ff4800; */
  /* color: #ffc800;
  color: rgba(255,200,0,0.9); */
  background-color: #ff4800;
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
  background-color: rgb(170,48,0);
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
  background-color: rgba(175, 175, 175, 0.95294);
}
</style>
