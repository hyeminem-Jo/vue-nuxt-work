<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <nuxt-link :to="{name: 'page-id', params:{id: item.id}}">
          {{ item.id }}.
          {{ item.magazineTitle }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  // async asyncData({ $axios }) {
  //   const response = await $axios.get(`magazine?page=0&size=20`);
  //   const list = response.data.data.content;
  //   // console.log('baseURL: '+ process.env.BASE_URL)
  //   return { list }
  // },
  data() {
    return {
      list: []
    }
  },
  async fetch() {
    const response = await this.$axios.get(`magazine?page=0&size=20`);
    this.list = response.data.data.content
  }
}
</script>

<style>
  a {
    display: block;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
