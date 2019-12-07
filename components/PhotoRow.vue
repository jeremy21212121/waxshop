<template>
  <div>
    <client-only>
      <light-gallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </client-only>
    <ul>
      <li
        v-for="(image, thumbIndex) in images"
        :key="'thumb' + thumbIndex"
        @click="index = thumbIndex"
      >
        <img
          :src="image.thumb.src"
          :srcset="image.thumb.srcset || ''"
          :alt="image.alt || ''"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { LightGallery } from '../modules/vue-light-gallery'

export default {
  components: {
    LightGallery
  },
  props: {
    images: {
      type: Array,
      default: () => {
        return [
          {
            title: 'Our lovely lobby',
            url: require('assets/entryway-740.jpg'),
            srcset: require('assets/entryway-1480.jpg') + ' 2x, ' + require('assets/entryway-740.jpg') + ' 1x',
            alt: 'entryway',
            thumb: {
              src: require('assets/entryway_thumb-238.jpg'),
              srcset: require('assets/entryway_thumb-476.jpg') + ' 2x, ' + require('assets/entryway_thumb-238.jpg') + ' 1x'
            }
          },
          {
            title: 'Premium products',
            url: require('assets/products-740.jpg'),
            srcset: require('assets/products-1480.jpg') + ' 2x, ' + require('assets/products-740.jpg') + ' 1x',
            alt: 'premium products',
            thumb: {
              src: require('assets/products_thumb-238.jpg'),
              srcset: require('assets/products_thumb-476.jpg') + ' 2x, ' + require('assets/products_thumb-238.jpg') + ' 1x'
            }
          },
          {
            title: 'Tidy treatment rooms',
            url: require('assets/room-740.jpg'),
            srcset: require('assets/room-1480.jpg') + ' 2x, ' + require('assets/room-740.jpg') + ' 1x',
            alt: 'tidy treatment room',
            thumb: {
              src: require('assets/room_thumb-238.jpg'),
              srcset: require('assets/room_thumb-476.jpg') + ' 2x, ' + require('assets/room_thumb-238.jpg') + ' 1x'
            }
          }
        ]
      }
    }
  },
  data () {
    return {
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/mixins/spaceEvenlyHack.scss';
@import '~/scss/mixins/boxShadows.scss';
@import '~/scss/mixins/borderRadius.scss';
@import '~/scss/vars/breakpoints.scss';

div {
  width: 100%;
  margin-top: 20px;
  ul {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    justify-content: space-between;
    li {
      img {
        width: 98%;
        height: 100%;
        @include bs-white-1;
        // border-radius: 2px;
        @include border-radius-standard;
      }
    }
  }
}

</style>
