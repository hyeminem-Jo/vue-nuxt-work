<template>
  <div>
    <div v-if="!userData.id">
      <h1>로그인</h1>
      <login /> 
    </div>
    <div v-else>
      로그인된 상태입니다.
    </div>
  </div>
</template>

<script>
import Login from '../components/login-form.vue'

export default {
  name: 'Home',
  // middleware: ['authenticated'],
  components: { Login },
  data() {
    return {
      userData: this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>
