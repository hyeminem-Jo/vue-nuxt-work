<template>
  <label :for=fruit>
    <input
      :id="fruit"
      :class="{'active': isPicked}"
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
    isPicked(e) {
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
