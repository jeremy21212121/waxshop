<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
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
  border: 1px solid #ff4800;
  /* color: #ffc800;
  color: rgba(255,200,0,0.9); */
  color: #ff4800;
  text-decoration: none;
  font-weight: bold;
  padding: 6px 20px;
  /* margin-left: 15px; */
}

.button--green:hover {
  color: #fff;
  background-color: #666;
  border-color: #333;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #a6a6a6;
  color: #444;
  text-decoration: none;
  padding: 6px 20px;
  /* margin-left: 15px; */
}

.button--grey:hover {
  color: #fff;
  background-color: #666;
}
</style>
