<template>
  <div>
    <h2>로그인</h2>
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
      response: {}, // test
      success: { // test
        code: "SUC001",
        message: "처리가 완료되었습니다.",
        data: {
          accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtZXRhRnJvbnRUb2tlbiBhY2Nlc3NUb2tlbiIsImV4cCI6MTY3NDgxMjg0OSwidG9rZW5JbmZvIjoiUk5BdzRZYXlPcTdxNEtHYXQ2SmNtVGpHS3llbkR2TEpaNko2TFNVd0szZkMreldMWEdINzdETHk5Q3BMRW81dzkwT0lOL2pueTBpVU1BR2NDQXhUVlNVQStML21lSEU5WkwzTThYOC9JblIrZlhqK0RNb1Eyd1Y5d1BuTDlLMEFFT0pNeCtQK0syZjdXdSsyYW9OK0d5cXdlV01OVy9BeEFLSy8xZldXS3UxRjFwdEFFS1ZvYzZmc3JFd3FVdE9WIn0.F5OtWcaGO3VYJOtPqVMVY2gMnDh9mdhXTXwTc8_ib20sq_DBjgIsGk0d5FhtuvVOOxBsb0c-8iFgBlUG71t35w",
          accessTokenExpiredDt: "2023-01-27 18:47:29.342",
          memberSeq: 100000014,
          id: "fdev1",
          email: "hyoungwook@emotion.co.kr",
          passwordExpiredYn: false
        }
      }, 
      failure: {
        "code": "ERR_LOGIN_001",
        "message": "일치하는 회원 정보가 없는 경우",
        "data": null
      }
    }
  },
  methods: {
    errorTest () {

    },
    async submitForm() {
      try {
        // 서버 요청 에러 때문에 잠시 setTimeout 으로 비동기를 구현하여 더미테스트를 진행. (이때 setTimeout 은 Promise 를 반환하지 않기 때문에 async await 를 써도 동기적으로 굴러가지 않아 임의로 Promise 를 반환하게 해주었다.)
        // const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay))
        // await wait(1000)
        // const response = this.success
        // // const response = this.failure
        // if (response.code === "SUC001") {
        //   this.response = response
        //   this.$store.commit('setUser', response.data)
        //   this.$router.push('/my-page')
        //   console.log(this.$store.state.user)
        //   console.log('폼 제출 성공')
        // } else if ( response.code === 'ERR_LOGIN_001') {
        //   alert('회원정보가 일치하지 않습니다')
        // }

        // 백엔드에서 허용해준 로컬 호스트 포트번호 8080 으로 바꿈으로써 403 에러 해결
        const headers = { // post 요청할 때 인자로 header 를 안넣어서 503 에러 발생
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
          // withCredentials: 다른 도메인(Cross Origin)에 요청을 보낼 때 요청에 인증(credential) 정보를 담아서 보낼 지를 결정하는 항목
          headers
        })
        if (response.code === "SUC001") {
          this.$store.commit('setUser', response.data)
          this.$router.push('/my-page')
          console.log(response)
          console.log(this.$store.state.user)
          console.log('폼 제출 성공')
        } else if ( response.code === 'ERR_LOGIN_001') {
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
