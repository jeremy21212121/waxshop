export default {
  methods: {
    imageArrayToSrcset (imageArray) {
      return imageArray.map(img => `${img.src} ${img.width}w`).join(', ')
    }
  }
}
