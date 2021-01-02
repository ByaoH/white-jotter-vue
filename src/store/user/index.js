export default {
  namespace: true,
  state: {
    username: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).username : ''
    // username: ''
  },
  getters: {
  },
  mutations: {
    login: (state, user) => {
      state.username = user.username
      // 存储本地
      sessionStorage.setItem('user', JSON.stringify(user))
    }
  },
  actions: {
  }
}
