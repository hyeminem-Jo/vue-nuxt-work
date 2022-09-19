<template>
  <div>
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

      <li v-for="(list, index) in pageCount" :key="index">
        <button>{{ index + 1 }}</button>
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
      btnLimitLength: 5,
      pageNum: 0,
      btnLength: 0,
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
  created() {
    const listLength = this.orderList.length
    const listSize = this.pageSize
    this.btnLength = Math.floor(listLength / listSize)
    if (listLength % listSize > 0) this.btnLength += 1
  },
  computed: {
    pageCount() {
      const page = this.btnLength
      let limit = this.btnLimitLength

      if (page < limit) limit = page

      return limit
    },
    showPage() {
      const start = this.pageNum * this.pageSize
      const end = start + this.pageSize
        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ...]
      return this.orderList.slice(start, end)
    }
  },
  methods: {
    nextPage() {
      if (this.pageNum < this.btnLength - 1) this.pageNum += 1
    },
    prevPage() {
      if (this.pageNum > 0) this.pageNum -= 1
    }
  }
}
</script>
