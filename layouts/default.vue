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