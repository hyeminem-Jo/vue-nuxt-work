export const state = () => ({
  user: null
})

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
}

export const actions = {
  // nuxtServerInit 의 params: (Store Context, Nuxt Context)
  // Store Context: 정보에 접근할 수 있는 객체
  // Nuxt Context: 정보가 담긴 객체
  nuxtServerInit(Store, nuxtContext) {
    console.log('Store',Store, '<<<<nuxtContext>>>>', nuxtContext.req.headers)
  }
  // nuxtServerInit(_, { req }) {
  //   console.log('req.headers.cookie',typeof req.headers.cookie)
  // }
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