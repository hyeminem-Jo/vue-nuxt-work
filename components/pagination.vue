<template>
  <div>
    {{ pageCount }}
    <div>Total: {{ btnLength }}p</div>
    <div style="margin-bottom: 20px">current: {{ pageNum + 1 }}p</div>
    <ul class="page-list">
      <li v-for="(list, index) in showPage" :key="index">
        <span>{{ list.name }}</span> /
        <span>{{ list.universe }}</span>
      </li>
    </ul>
    <!--    <pagination />-->
    <ul class="number-list" style="display: flex">
      <li><button class="first pager">&#171;</button></li>
      <li><button @click="prevPage" class="prev pager">&#60;</button></li>

      <li v-for="list in pageCount" :key="list">
        <button @click="movePage" :class="{ active: list === pageNum }">{{ list + 1 }}</button>
      </li>
      <li><button @click="nextPage" class="next pager">&#62;</button></li>
      <li><button class="last pager">&#187;</button></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'pagination',
  data() {
    return {
      btnLength: 0, // 총 버튼 수
      btnLimitLength: 3, // 화면에 보일 버튼 수
      pageNum: 0, // 현재 페이지 번호
    }
  },
  props: {
    orderList: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: false,
      default: 5
    }
  },
  created() { // 초기 데이터 설정
    const listLength = this.orderList.length
    const listSize = this.pageSize
    this.btnLength = Math.floor(listLength / listSize)
    if (listLength % listSize > 0) this.btnLength += 1
  },
  computed: {
    pageCount() { // 화면에 보이는 버튼 숫자 출력
      // pageCount 는 length 가 5인 배열이 되어야함
      // 현재 페이지가 마지막 버튼(5의 배수)이라면
      // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
      const numList = Array(this.btnLength).fill().map((item, index) => {
        return index
      })

      let num = numList.slice().splice(0, this.btnLimitLength)
      // numList = [0, 1, 2, 3, 4, 5, 6, 7]
      // 페이지 버튼이 맨 끝일 때 = pageNum 이 5의 배수일 때
      // 그 다음 페이지는 배수 + 1 이기 때문에 나머지가 1 이다.
      if ((this.pageNum + 1) % this.btnLimitLength === 1) {
        num = numList.slice().splice(this.pageNum, this.btnLimitLength)
      }

      return num // 5
    },
    showPage() { // 현재 페이지 데이터 화면에 출력
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...]
      return this.orderList.slice(start, end)
    }
  },
  methods: {
    nextPage() { // 다음 버튼
      // 버튼 수는 총 페이지 버튼 수보다 많아질 수 없음
      if (this.pageNum < this.btnLength - 1) this.pageNum += 1
    },
    prevPage() { // 이전 버튼
      if (this.pageNum > 0) this.pageNum -= 1
    },
    movePage(e) { // 숫자 버튼
      this.pageNum = Number(e.target.textContent) - 1
    }
  }
}
</script>

<style>
  button {
    cursor: pointer
  }
  .active {
    background-color: black;
    color: #fff;
  }
  .page-list {
    width: 300px;
    min-height: 100px;
    background-color: #ddd;
    margin-bottom: 20px;
    padding: 10px;
  }
</style>
