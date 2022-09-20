<template>
  <div>
    <div id="pagination">
      <h1>Pagination</h1>
      <pagination :orderList="orderList" />
    </div>
  </div>
</template>

<script>
import pagination from '../components/pagination'

export default {
  data() {
    return {
      orderList: [
        { name: '01-Wolverine', universe: 'Marvel'},
        { name: '02-Batman', universe: 'DC' },
        { name: '03-Beast', universe: 'Marvel'},
        { name: '04-Superman', universe: 'DC' },
        { name: '05-Wonder Woman', universe: 'DC' },
        { name: '06-Iceman', universe: 'Marvel'},
        { name: '07-Black Panther', universe: 'Marvel'},
        { name: '08-Beast Boy', universe: 'DC' },
        { name: '09-Captain America', universe: 'Marvel'},
        { name: '10-Hawk girl', universe: 'DC' },
        { name: '11-Flash', universe: 'DC' },
        { name: '12-Cyclops', universe: 'Marvel'},
        { name: '13-Green Lantern', universe: 'DC' },
        { name: '14-Thor', universe: 'Marvel'},
        { name: '15-Flash', universe: 'DC' },
        { name: '16-Spider-man', universe: 'Marvel'},
        { name: '17-Martian Manhunter', universe: 'DC' },
        { name: '18-Nightwing', universe: 'DC' },
        { name: '19-Raven', universe: 'DC' },
        { name: '20-Hulk', universe: 'Marvel'},
        { name: '21-hehulk', universe: 'Marvel'},
        { name: '22-heeseung', universe: 'DC'},
        { name: '23-hyejin', universe: 'Marvel'},
        { name: '24-Black Panther', universe: 'Marvel'},
        { name: '25-Beast Boy', universe: 'DC' },
        { name: '26-Captain America', universe: 'Marvel'},
        { name: '27-Hawk girl', universe: 'DC' },
        { name: '28-hehulk', universe: 'Marvel'},
        { name: '29-heeseung', universe: 'DC'},
        { name: '30-hyejin', universe: 'Marvel'},
        { name: '31-Black Panther', universe: 'Marvel'},
        { name: '32-Beast Boy', universe: 'DC' },
        { name: '34-Captain America', universe: 'Marvel'},
        { name: '35-Hawk girl', universe: 'DC' },
        { name: '36-Black Panther', universe: 'DC' },
        { name: '37-Raven', universe: 'DC' },
        { name: '38-hehulk', universe: 'DC' },
      ],
      limitOrderList: [],
      showList: [],
      limit: 5,
      num: 0
    }
  },
  component: {
    pagination,
  },
}
</script>
