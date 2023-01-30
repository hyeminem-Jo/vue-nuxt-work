<template>
  <ul class="nav">
    <li>
      <nuxt-link to="/">홈</nuxt-link>
    </li>
    <li @click="auth">
      <nuxt-link to="/my-page">마이페이지</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/notice">공지사항</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    auth() {
      if (!this.$store.state.user.accessToken) {
        alert('로그인 후 이용 가능합니다.')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss">
.nav {
  border: 1px solid ;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    a {
      display: inline-block;
      padding: 20px 40px;
      text-decoration: none;
      color: inherit;
      font-size: 20px;
      font-weight: 500;
      &:hover {
        color: white;
        background-color: black;
      }
    }
  }
}
</style>