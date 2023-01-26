<template>
  <div>
    <h2>로그인</h2>
    <form @submit.prevent="submitForm">
      <div class="feild">
        <label for="username">id: </label>
        <input id="username"  v-model="username" type="text" />
      </div>
      <div class="feild">
        <label for="password">password: </label>
        <input id="password" v-model="password" type="text" />
      </div>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async submitForm() {
      try {
        await this.$axios.post('', {

        }) 
        console.log('폼 제출')
      } catch (e) {
        console.log(e)
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  }
}
</script>

<style scoped>
.feild {
  margin-bottom: 10px;
}
form {
  margin-bottom: 50px;
}
</style>
