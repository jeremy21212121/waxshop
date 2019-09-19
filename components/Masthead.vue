<template>
  <section class="masthead">
    <div class="mast">
      <img src="~/assets/bw_landing1b.jpg" alt="Couple at the beach" aria-hidden="true">
      <div class="overlay">
        <h1>new clients</h1>
        <span class="highlight-text">25% off</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-top: 12%;
  .mast {
    position: relative;
    width: 100%;
    img {
      width: 100%;
      object-fit: cover;
      object-position: 60% 30%;
      height: 300px;
      height: 80%;
      z-index: 0;
    }
    .overlay {
      width: 100%;
      position: absolute;
      top: 25vw;
      h1 {
        text-transform: uppercase;
        font-family: 'roboto_cb';
        font-size: 3.5em;
        font-size: 15vw;
        text-shadow: 2px 2px 4px black;
      }
      span {
        display: block;
        position: relative;
        bottom: 3vw;
        font-family: "Cinzel";
        // font-weight: bold;
        font-size: 3.3em;
        font-size: 15vw;
        text-shadow: 2px 2px 4px black;
      }
    }
  }

  // h2 {
  //   font-family: 'Raleway', sans-serif;
  //   text-transform: capitalize;
  //   // text-shadow: #000 0px 0px 1px;
  //   -webkit-text-stroke: 1.0px #00000020;
  //   font-weight: 800;
  //   font-size: 2.2em;
  //   color: #cca449;
  //   word-spacing: 5px;
  //   padding-bottom: 15px;
  // }
}
@media screen and (min-width: 620px) {
  div.overlay {
    // top: 25%;
  }
}
@media screen and (min-width: 740px) {
  section {
    margin-top: 0px;
    .mast {
      .overlay {
        top: 214px;
        h1 {
          font-size: 98px;
        }
        span {
          font-size: 100px;
          bottom: 28px;
        }
      }
    }
  }
//   div.applicator {
//     img {
//       width: 90%;
//     }
//   }
//   div.overlay {
//     top: 33%;
//     h1 {
//       // margin-bottom: 40px;
//       font-size: 1.8rem;
//       span {
//         font-size: 1.5rem;
//       }
//     }
//     h2 {
//       // margin-top: 70px;
//       font-size: 2.4rem;
//     }
//   }
}
</style>
