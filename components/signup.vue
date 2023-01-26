<template>
  <div>
    <h2>회원가입</h2>
    <form @submit.prevent="submitForm">
      <div class="feild">
        <label for="username">id: </label>
        <input id="username"  v-model="username" type="text" />
      </div>
      <div class="feild">
        <label for="password">password: </label>
        <input id="password" v-model="password" type="text" />
      </div>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm() {
      console.log('회원가입');
      this.initForm();
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
