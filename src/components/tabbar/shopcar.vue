<template>
  <div class="shopcar">
    <!-- 商品列表区域 -->
    <div class="mui-card" v-for='(item, i) in goodslist' :key='item.id'>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model='$store.getters.getGoodsSelected[item.id]' @change='selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])'></mt-switch>
          <img src="" alt="图片">
          <div class="info">
            <h1>{{ i }}</h1>
            <p>
              <span class='price'>￥{{ item.price }}</span>
              <numbox :initcount='item.count' :goodsid='item.id'></numbox>
              <a href="#" @click.prevent='remove(item.id)'>删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品 <span class='red'>{{ $store.getters.getCountAndAmount.count }}</span> 件,总价 ￥<span class="red">{{ $store.getters.getCountAndAmount.amount }}</span></p>
          </div>
          <mt-button type='danger'>去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
  data () {
    return {
      goodslist: [],
      goodslist2: ''
    }
  },
  created () {
    this.getGoodslist()
    // console.log(this.goodslist)
  },
  methods: {
    getGoodslist () {
      let idArr = []
      this.$store.state.car.forEach(item => {
        idArr.push(item)
      })
      this.goodslist = idArr
    },
    remove (id, index) {
      // 删除goodsinfo中的数据
      // this.goodsinfo.splice(0, 1)
      this.$store.commit('removeFromCar', id)
      window.location.reload()
    },
    selectedChanged (id, val) {
      this.$store.commit('updateGoodsSelected', { id: id, selected: val })
    }
  },
  components: {
    numbox
  }
}
</script>

<style scoped>
.shopcar{
  background-color: #eee;
  overflow: hidden;
}

.mui-card-content-inner{
  display:flex;
  align-items: center;
}

img{
  width: 60px;
  height: 60px;
}

h1{
  font-size: 13px;
  margin-bottom: 15px;
}

.price{
  color:red;
  font-weight: bold;
}

.mui-card-content-inner{
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.red{
  color:red;
  font-weight: bold;
}
</style>
