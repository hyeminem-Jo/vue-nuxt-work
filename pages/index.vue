<template>
  <div>
    <h1>HOME</h1>
    <div v-if="!user?.id">
      <h2>로그인</h2>
      <login /> 
    </div>
    <div v-else>
      {{ user?.id }} 님, 환영합니다.
      <button class="logout" type="button" @click="logout">로그아웃</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Login from '../components/login-form.vue';

export default {
  name: 'Home',
  components: { Login },
  // middleware: ['auth-user'],
  computed: {
    ...mapState(['user'])
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.commit('setUser', null)
      this.$nuxt.$cookies.remove('refreshToken')
    }
  }
}
</script>

<style scoped>

</style>
