<template>
  <ul class="nav">
    <li>
      <nuxt-link to="/">홈</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/my-page">마이페이지</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/notice">공지사항</nuxt-link>
    </li>
    <li>
      <button>
        <nuxt-link to="/login">로그인</nuxt-link>
      </button>
      <button type="button">로그아웃</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      // userData: this.$store.state.user
    }
  },
  created() {
    // console.log('app-header', this.$store.state.user)
  },
}
</script>

'_ga=GA1.1.1267205767.1667178356; _ga_JH4MPMHKXG=GS1.1.1669871581.2.1.1669871623.0.0.0; _ga_0G4PEML5S7=GS1.1.1669871624.4.1.1669874538.0.0.0; _ga_BK1GQ1XDFQ=GS1.1.1674086692.80.0.1674086696.0.0.0; SCOUTER=x4qu2rqgtadof8'

<style lang="scss">
a {
  text-decoration: none;
  color: inherit;
}
.nav {
  border: 1px solid ;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    &:not(:nth-child(4)) {
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

    &:nth-child(4) {
      flex: 2;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 30px;

      button {
        height: 30px;
        margin-right: 15px;
      }
    }
  }
}
</style>