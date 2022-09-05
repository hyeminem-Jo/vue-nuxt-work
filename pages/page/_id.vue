<template>
  <div>
<!--    <h1>동적라우터 Param: {{ param }}</h1>-->
    <h2>
      {{ details.id }}.
      {{ details.magazineTitle }}
    </h2>
    <p>
      {{ details.magazineContents }}
    </p>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    async asyncData({ $axios, params }) {
      const response = await $axios.get(`magazine/${params.id}`);
      const details = response.data.data;
      return { details }
    }
  }
</script>
