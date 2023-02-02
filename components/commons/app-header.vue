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
    <li v-if="user?.id">
      <span>{{ user?.id }} 님</span>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'AppHeader',
  computed: {
    ...mapState(['user'])
    // userData() {
      // return this.$store.state.user
    // }
  },
}
</script>

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
        margin-left: 15px;
      }
    }
  }
}
</style>