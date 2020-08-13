export const state = () => ({
  posts: []
});

export const mutations = {
  SET_POSTS(state, postArray) {
    // ensure array is sorted in descending order by date
    state.posts = postArray.sort((a, b) => {
      // the following two lines convert a YYYY-MM-DD date string into an integer. ie. '2020-08-03' -> 20200803
      // an alternative approach would be to use `const first = new Date(a.date + 'T12:00Z').getTime()` to get a unix-style timestamp. That might be more robust than treating YYYYMMDD as an integer.
      const first = Number(a.date.replace(/-/g,''))
      const second = Number(b.date.replace(/-/g,''))
      return second - first
    });
  },
  ADD_POST(state, postObject) {
    // first make sure we don't already have this post in posts array
    const shouldStorePost = state.posts.every(
      storedPostObject => storedPostObject.id !== postObject.id
    );
    if (shouldStorePost) {
      state.posts.push(postObject);
    }
  }
};

export const actions = {
  setPosts({ commit }, postArray) {
    commit("SET_POSTS", postArray);
  },
  addPost({ commit }, postObject) {
    commit("ADD_POST", postObject);
  }
};
