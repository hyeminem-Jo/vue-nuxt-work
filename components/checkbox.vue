<template>
  <label :for="name">
    <input
      :id="name"
      :class="{'active': isChecked}"
      :checked="isChecked"
      type="checkbox"
      :value="name"
      @change="checkName" />
<!--    change 이벤트: input 요소에 변화가 있을 때마다 이벤트가 실행 (type="text" 는 제외) -->
<!--    checked: 1. true 나 false 를 반환해서 class 유무로 디자인된 input 체크욈을 표현/
                 2. 데이터의 상태와 실제 checked 상태를 연결-->
<!--    <em></em>{{ checkedNames.some(e => e === name) }}-->
<!--    checkedNames.some(e => e === name) : boolean 반환, class 유무가 정해짐-->
    <em></em>
    <span>{{ label }}</span>
    <span>{{ index + 1 }}</span>
    <span>{{ name }}</span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  // v-model 은 value 값을 받는다
  model: {
    prop: 'checkedNames',
    event: 'changeForm'
  },
  props: {
    checkedNames: {
      type: Array,
      // default: [],
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    }
  },
  computed: {
    isChecked() {
      return this.checkedNames.includes(this.name)
      // 데이터 상태와 실제 checked 상태를 연결
      // (checkedNames 배열에 Jack 이 사라지면 checked 도 false 가 됨)
    }
  },
  methods: {
    checkName(e) {
      let arr = [...this.checkedNames]
      // 자식 컴포넌트에서 데이터를 함부로 직접 바꾸면 안되기 때문에 전개연산자로
      // 얕은 복사를 해 변수에 담고 해당 데이터를 가공한 뒤 다시 $emit 으로 전달
      // (데이터를 직접 바꿔버리면 오류가 발생할 수 있음)
      if (arr.includes(e.target.value)) {
        arr = arr.filter(name => name !== e.target.value)
      } else {
        arr.push(e.target.value)
      }
      // 가공된 데이터 다시 전달
      this.$emit('changeForm', arr)
    }
  }
}
</script>

<style>
input {
  display: none;
}

em {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid gray;
  border-radius: 2px;
}

input:checked + em {
  background: url("../images/check-icon.png") no-repeat top 2px left 1px;
  background-size: 9px;
}

ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
