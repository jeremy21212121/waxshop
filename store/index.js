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

export const actions = {
  activateSnackbar (context, message) {
    context.commit('setSnackbar', message)
    // clear snackbar after delay determined by animation in Snackbar.vue
    setTimeout(() => {
      context.commit('setSnackbar', '')
    }, 5000)
  }
}
