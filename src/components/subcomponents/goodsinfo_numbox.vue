<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged"
      ref="numbox"
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js'
export default {
  mounted () {
    mui('.mui-numbox').numbox()
    // console.log(this.max)
  },
  methods: {
    countChanged () {
      // console.log(this.$refs.numbox.value)
      this.$emit('getcount', parseInt(this.$refs.numbox.value))
    }
  },
  props: ['max']
}
</script>

<style>
</style>
