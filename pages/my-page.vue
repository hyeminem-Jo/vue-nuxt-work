<template>
  <div>
    <h2>마이페이지</h2>
    <ul>
      <li>id: {{ user?.id }}</li>
      <li>email: {{ user?.email }}</li>
      <li>memberSeq: {{ user?.memberSeq }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MyPage',
  // middelware: 페이지를 렌더링(생성)하기 전에 실행 
  // created 으로 하면 페이지가 생성된 후 실행
  middleware({ store, redirect }) {
    // 유저가 인증 받지 못한 경우 로그인 페이지로 이동
    if (!store.state.user?.accessToken) {
      // 서버에서는 alert가 없기 때문에 undefined 가 뜨기 때문에 조건문으로 감싸기
      if (typeof window !== 'undefined') { 
          alert('로그인 후 이용 가능합니다.') 
      }
      console.log('mypage-midd')
      return redirect("/");
    }
  },
  // middleware: ['auth-user'],
  computed: {
    ...mapState(['user'])
  },
}
</script>

<style>

</style>