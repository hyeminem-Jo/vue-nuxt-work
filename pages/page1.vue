<template>
  <div>
    <!--    페이징 -->
    <div id="pagination">
      <h1>Pagination</h1>
      <ul class="page-list">
        <li v-for="list in showList" :key="list">
          <span>{{ list.name }}</span>
          <span>{{ list.universe }}</span>
        </li>
      </ul>
<!--      <pagination />-->
      <ul class="number-list" style="display: flex">
        <li><button class="first pager">&#171;</button></li>
        <li><button class="prev pager">&#60;</button></li>

        <li v-for="(list, index) in showList" :key="index">
          <button>{{ index + 1 }}</button>
        </li>

        <li><button class="next pager" @click="nextPage">&#62;</button></li>
        <li><button class="last pager">&#187;</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import pagination from '../components/pagination'

export default {
  data() {
    return {
      orderList: [
        { name: '01Wolverine', universe: 'Marvel'},
        { name: '02Batman', universe: 'DC' },
        { name: '03Beast', universe: 'Marvel'},
        { name: '04Superman', universe: 'DC' },
        { name: '05Wonder Woman', universe: 'DC' },
        { name: '06Iceman', universe: 'Marvel'},
        { name: '07Black Panther', universe: 'Marvel'},
        { name: '08Beast Boy', universe: 'DC' },
        { name: '09Captain America', universe: 'Marvel'},
        { name: '10Hawkgirl', universe: 'DC' },
        { name: '12Cyclops', universe: 'Marvel'},
        { name: '13Green Lantern', universe: 'DC' },
        { name: '14Thor', universe: 'Marvel'},
        { name: '15Flash', universe: 'DC' },
        { name: '16Spider-man', universe: 'Marvel'},
        { name: '17Martian Manhunter', universe: 'DC' },
        { name: '18Nightwing', universe: 'DC' },
        { name: '19Raven', universe: 'DC' },
        { name: '20Hulk', universe: 'Marvel'},
        { name: '21hehulk', universe: 'Marvel'},
        { name: '22heeseung', universe: 'DC'},
        { name: '23hyejin', universe: 'Marvel'},
      ],
      showList: [],
      limit: 5,
      num: 1
    }
  },
  component: {
    // pagination,
  },
  created() {
    this.showList = this.orderList.slice(0, 5)
  },
  methods: {
    nextPage() {
      this.showList = []
      this.num += 1
      this.showList = this.orderList.slice(0, (5 * this.num))
    }
  }
}
</script>
