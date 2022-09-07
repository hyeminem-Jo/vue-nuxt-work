<template>
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
</template>

<script>
import checkbox from '../components/checkbox.vue'
import checkboxAll from '../components/checkboxAll'
import radio from '../components/radio'

export default {
  data() {
    return {
      nameList: ['Jack','John','Mike'],
      // label 은 보통 한글로 쓰이기 때문에(그거야 한국이니까...)
      // 저렇게 문자열로만 적는 것이 아닌, 한글로 표기될 label 용 따로,
      // 서버로 실제로 옮겨지는 데이터 value 값용 따로 설정해서 배열의
      // 요소를 하나의 객체데이터로 만들어놓는 것이 좋다.
      // nameList: [
      //   {label: '잭', value: 'Jack'},
      //   {label: '존', value: 'John'},
      //   {label: '마이크', value: 'Mike'},
      // ],
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
