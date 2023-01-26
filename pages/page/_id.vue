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
      // asyncData 는 created 이전에 실행되기 때문에 this 를 사용할 수 없음
      // (fetch 를 사용하면 created 이후에 실행되기 때문에 this 를 사용할 수 있음)
      const response = await $axios.get(`magazine/${params.id}`);
      const details = response.data.data;
      return { details }
    }
  }
</script>
