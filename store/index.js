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
      commit('setUser', {
        accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZXRhRnJvbnRUb2tlbiBhY2Nlc3NUb2tlbiIsImV4cCI6MTY3NTY0Mjc3MCwidG9rZW5JbmZvIjoiUk5BdzRZYXlPcTdxNEtHYXQ2SmNtVGpHS3llbkR2TEpaNko2TFNVd0szZkMreldMWEdINzdETHk5Q3BMRW81dzkwT0lOL2pueTBpVU1BR2NDQXhUVlNVQStML21lSEU5WkwzTThYOC9JblIrZlhqK0RNb1Eyd1Y5d1BuTDlLMEFGZDRBeVFGQ1gzMVplaDF5bGtwalpHQmdTNTlxdnRqZ01wUmVvSlR6RkdOK0hIbGtyYWFQL3pjKzVRNGV4RVp2In0.xNcSrSncTgfeaor2ugmgnoFC553YzDnnrICLy_TUQv5njc5X2g3fge8f0l-UizxF_Td_tZJ-7F47YRNJEwoRkA",
        accessTokenExpiredDt:"2023-02-06 09:19:30.247",
        email:"hyoungwook@emotion.co.kr",
        id:"fdev1",
        memberSeq:100000014,
        passwordExpiredYn:false,
      })
    }
    // if (token && state.user) {
    //   commit('auth/SET_TOKEN', token)
    //   commit('auth/SET_SESSION_TYPE', user)
    // }
  }
}