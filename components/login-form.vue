<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="feild">
        <label for="username">id: </label>
        <input id="username"  v-model="username" type="text" />
      </div>
      <div class="feild">
        <label for="password">password: </label>
        <input id="password" v-model="password" type="text" />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      response: {},
    }
  },
  methods: {
    async submitForm() {
      try {
        // 백엔드에서 허용해준 로컬 호스트 포트번호 8080 으로 바꿈 => 403 에러 해결
        const headers = { // post 요청할 때 인자로 header 를 넣지 않아 503 에러 발생
        'Client-App-Version': '1.1.0'
        }
        const response = await this.$axios.$post('/login', 
        {
          deviceInfo: {
            appPushValue: "app push key data",
            appVersion: "1.0.0",
            deviceMarketingNo: "app marketing unique number",
            modelName: "SM-N981N",
            osSectionCd: "iOS",
            osVersion: 11
          },
          id: this.username,
          password: this.password,
          dormancyResetYn: false
        }, {
          withCredentials: true,
          // withCredentials: 다른 도메인(Cross Origin)에 요청을 보낼 때 요청에 인증(credential) 정보를 담아서 보낼지 결정하는 항목
          headers
        })
        if (response.code === "SUC001") {
          this.$store.commit('setUser', response.data)
          this.$router.push('/my-page')
          
          // document.cookie = `refreshToken = ${response.data.accessToken}`
          this.$cookies.set('refreshToken', response.data.accessToken)

          console.log(response)
          console.log('폼 제출 성공')
        } else if ( response.code === 'ERR_LOGIN_001') { // 안됨
          console.log('회원정보 불일치',response)
          alert('가입되지 않은 아이디입니다.')
        }
      } catch (e) {
        console.log('폼 제출 실패', e)
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  }
}
</script>

<style scoped>
.feild {
  margin-bottom: 10px;
}
form {
  margin-bottom: 50px;
}
</style>
