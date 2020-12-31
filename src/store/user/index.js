export default {
  namespace: true,
  state: {
    username: localStorage.getItem('user') || ''
  },
  getters: {
    getUser: (state) => state.user
  },
  mutations: {
    login: (state, user) => {
      state.user = user
      // 存储本地
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  },
  actions: {
  }
}
