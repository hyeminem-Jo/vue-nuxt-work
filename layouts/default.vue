<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import AppHeader from '../components/commons/app-header.vue'

export default {
  components: { AppHeader },
  created() {
    console.log('default')
  }
}
</script>

<style lang="scss">

</style>

<!-- nuxt-link, 공통 헤더 표시 https://nobang.tistory.com/entry/VueNuxt-layout-%EC%84%A4%EC%A0%95 -->