<template>
  <label :for=fruit :class="{'active': isPicked}">
    <input
      :id="fruit"
      :checked="isPicked"
      name="favorate-fruit"
      type="radio"
      :value="fruit"
      @change="pickFruit"
    />
    <span>{{ fruit }}</span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  model: {
    prop: 'pickedFruit',
    event: 'changeForm'
  },
  props: {
    pickedFruit: {
      type: String
    },
    fruit: {
      type: String,
      required: true,
    }
  },
  computed: {
    isPicked() {
      return this.pickedFruit === this.fruit
    }
  },
  methods: {
    pickFruit(e) {
      this.$emit('changeForm', e.target.value)
    }
  }
}
</script>

<style>
  input[type='radio'] {
    display: inline-block;
  }
</style>
