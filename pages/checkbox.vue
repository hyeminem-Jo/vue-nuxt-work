<template>
  <div>
    <!--    체크박스 / 라디오 -->
    <div id="checkbox">
      <h1>Checkbox</h1>
      <checkboxAll v-model="checkedNames" label="전체 선택" :name-list="nameList" />
      <ul id="checkbox">
        <li v-for="(name, index) in nameList" :key="name">
          <Checkbox
            v-model="checkedNames"
            label="체크박스"
            :name="name"
            :index="index" />
          <!--  v-model 을 통해 checkName() 이 실행되고 arr 변수가 checkedNames 에 들어감  -->
        </li>
      </ul>
      <span>{{ checkedNames }}</span>

      <h1>Radio</h1>
      <ul id="radio">
        <li v-for="fruit in fruitList" :key="fruit">
          <Radio
            v-model="pickedFruit"
            label="라디오"
            :fruit="fruit"
          />
        </li>
      </ul>
      <span style="display: inline-block; margin-top: 10px;">pickedFruit: {{ pickedFruit }}</span>
    </div>
    <!--    페이징 -->
    <!-- <div id="pagination" style="display: none;">
      <h1>Pagination</h1>
      <orderList />
    </div> -->
  </div>
</template>

<script>
import checkbox from '../components/checkbox.vue'
import checkboxAll from '../components/checkboxAll'
import radio from '../components/radio'

export default {
  data() {
    return {
      nameList: ['Jack','John','Mike'],
      checkedNames: [],
      fruitList: ['apple', 'banana', 'cherry'],
      pickedFruit: '',
    }
  },
  component: {
    checkbox,
    checkboxAll,
    radio,
  }
}
</script>
