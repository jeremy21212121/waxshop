export const state = () => ({
  snackbar: {
    message: ''
  }
})

export const mutations = {
  setSnackbar (state, text) {
    state.snackbar.message = text
  }
}
