<template>
  <div>
    <h2>마이페이지</h2>
    <ul>
      <li>{{ userData.id }} 님, 환영합니다.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  data() {
    return {
      userData: this.$store.state.user
    }
  },
  created() {
    if(!this.userData.id) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>