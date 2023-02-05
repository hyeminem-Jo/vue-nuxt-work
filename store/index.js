export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
}

export const actions = {
  nuxtServerInit({ commit , state }, { req }) {
    // cookie-universal-nuxt 로 cookies parse 하기
    const token = this.$cookies.get('refreshToken')

   // Check if Cookie user and token exists to set them in 'auth'
    if (token) {
      console.log('success',token);
      console.log('data', state.user);
      commit('setUser')
    }
    // if (token && state.user) {
    //   commit('auth/SET_TOKEN', token)
    //   commit('auth/SET_SESSION_TYPE', user)
    // }
  }
}


// export const actions = {
//   nuxtServerInit ({commit}, {req}) {
//     console.log(req)
//   },
//   async login ({commit}, {username, password}) {
//     try {
//       const data = this.$axios.$post('/login', {username, password})
//       commit('SET_USER', data)
//     } catch (err) {
//       throw err
//     }
//   },
//   async logout ({commit}) {
//     this.$axios.post('/logout')
//     commit('SET_USER', null)
//   }
// }