<template>
  <div>
    <h2>마이페이지</h2>
    <ul>
      <li>id: {{ userData?.id }}</li>
      <li>email: {{ userData?.email }}</li>
      <li>memberSeq: {{ userData?.memberSeq }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  middleware({ store, redirect }) {
    // 만약 유저가 인증 받지 못한 경우 로그인 페이지로 이동합니다.
    if (!store.state.user.accessToken) {
      return redirect("/login");
    }
  },
  // middleware: ['auth-user'],
  data() {
    return {
      userData: this?.$store?.state?.user
    }
  },
  created() {
    console.log('ddd')
    if(!this.userData?.id) {
      alert('로그인 후 이용 가능합니다.')
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>