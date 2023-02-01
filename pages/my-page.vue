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
    console.log('ddd')
    if(!this.userData.id) {
      alert('로그인 후 이용 가능합니다.')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>