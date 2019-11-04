<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max='max'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      :value="initcount"
      @change="countChanged"
      ref="numbox"
      readonly
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from '../../assets/mui/js/mui.js'
export default {
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChanged () {
    //   console.log(this.$refs.numbox.value)
    // 每当数量改变，更新商品count值
      this.$store.commit('updateGoodsInfo', {
        id: this.goodsid,
        count: this.$refs.numbox.value
      })
    }
  },
  props: ['initcount', 'max', 'goodsid']
}
</script>

<style scoped>
.mui-numbox{
    height:25px;
}
</style>
