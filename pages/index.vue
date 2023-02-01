<template>
  <div>
    <h1>HOME</h1>
    <div v-if="!userData?.id">
      <h2>로그인</h2>
      <login /> 
    </div>
    <div v-else>
      {{ userData?.id }} 님, 환영합니다.
      <button class="logout" type="button" @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script>
import Login from '../components/login-form.vue'

export default {
  name: 'Home',
  components: { Login },
  // middleware: ['auth-user'],
  data() {
    return {
      userData: this.$store.state.user
    }
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.commit('setUser')
      // this.$router.push('/notice')
    }
  }
}
</script>

<style scoped>

</style>
