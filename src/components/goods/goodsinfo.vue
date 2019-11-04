<template>
  <div class="goodsinfo">
    <!-- 加入购物车的小球动画 -->
    <!-- <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref="ball"></div>
    </transition> -->

    <!-- 轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card" v-for='(item,index) in arr' :key='index'>
      <div class="mui-card-header">{{item.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            <span>
              <del>原价:￥{{ item.old_price }}</del>
            </span>
            <span class="now_price">销售价:￥{{ item.sell_price }}</span>
          </div>
          <p>
            购买数量：
            <numbox @getcount="getSelectedCount" :max='arr2.have'></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;&nbsp;
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品详情区域 -->
    <div class="mui-card" v-for='(item,index) in arr' :key='index+1'>
      <div class="mui-card-header">{{ item.con }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ item.bianhao }}</p>
          <p>库存情况：{{ item.have }}</p>
          <p>上架时间：{{ item.time }}</p>
        </div>
      </div>
      <div class="mui-card-footer" v-for='(item,index) in arr' :key='index+1'>
        <mt-button type="primary" size="large" plain @click="goDesc">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment">商品评价</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
  data () {
    return {
      ballflag: false, // 控制小球隐藏和显示
      selectedCount: 1, // 保存用户选中的商品数量
      goodsinfo: [
        // 这里是自己设置的假数据，
        { id: 1, title: '华为', sell_price: 4699, old_price: 4999, have: 30, con: '华为手机大屏', time: '2019/10/1', bianhao: '111111' },
        { id: 2, title: '苹果', sell_price: 8699, old_price: 8999, have: 100, con: '苹果手机大屏', time: '2019/10/2', bianhao: '222222' },
        { id: 3, title: '小米', sell_price: 999, old_price: 1099, have: 50, con: '小米手机大屏', time: '2019/10/3', bianhao: '333333' },
        { id: 4, title: '三星', sell_price: 1999, old_price: 2099, have: 60, con: '三星手机大屏', time: '2019/10/4', bianhao: '444444' },
        { id: 5, title: 'oppo', sell_price: 2399, old_price: 2599, have: 70, con: 'oppo手机大屏', time: '2019/10/5', bianhao: '555555' }
      ],
      id2: this.$route.params.id - 1, // 获得url中传过来的id，从而获取到具体的商品信息
      arr: [], // 为了根据访问时url传来的id的具体的信息
      arr2: '' // 为了获取一个单纯的对象，从而得到对象中商品剩余的数量，而设置购买时添加的最大值
    }
  },
  components: {
    swiper,
    numbox
  },
  methods: {
    goDesc () {
      // 点击使用编程时导航 跳转到图文介绍页面
      this.$router.push('/home/goodsdesc')
    },
    goComment () {
      this.$router.push('/home/goodscomment')
    },
    addToShopCar () {
      // 添加购物车
      // this.ballflag = !this.ballflag
      // 拼接出一个要保存到 store 中car数组中的数据
      let goodsinfo = { id: this.arr2.id, title: this.arr2.title, count: this.selectedCount, price: this.arr2.sell_price, selected: true }
      // console.log(this.arr2.id + ',' + this.selectedCount + ',' + this.arr2.sell_price)
      // console.log(goodsinfo.id + ',' + this.selectedCount + ',' + goodsinfo.price)
      this.$store.commit('addToCar', goodsinfo)
      // console.log('shuliangshi :' + this.selectedCount)
    },
    getSelectedCount (count) {
      this.selectedCount = count
      // console.log('父组件拿到的值为 :' + this.selectedCount)
    },
    // beforeEnter (el) {
    //   el.style.transform = 'translate(0,0)'
    // },
    // enter (el, done) {
    //   el.offsetWidth  不行 为啥?
    //   // 小球动画位移不能写死
    //   // 获取小球在页面中的位置
    //   let ballPosition = this.$refs.ball.getBoundingClientRect()
    //   // 获取徽标在页面中的位置 此处使用的是直接利用dom元素获取，没有使用父组件向子组件传值的方法
    //   let bandgePosition = document
    //     .getElementById('bandge')
    //     .getBoundingClientRect()
    //   let xDist = bandgePosition.left - ballPosition.left
    //   let yDist = bandgePosition.top - ballPosition.top
    //   el.style.transform = `translate(${xDist}px,${yDist}px)`
    //   // el.style.transform = 'translate(290px,300px)'
    //   el.style.transition = 'all 1s ease'
    //   done()
    // },
    // afterEnter (el) {
    //   this.ballflag = !this.ballflag
    // }
    pushArr () {
      // 把this.$route.parmas中的id获取之后，把具体的单条信息传给arr数组
      this.arr.push(this.goodsinfo[this.id2])
      // arr2 是为了处理购买时最大值的问题，使arr2是arr中去掉数组，得到的是一个单纯的对象
      this.arr2 = this.arr[0]
    }
  },
  created () {
    // created() 时就执行pushArr()函数，初始化
    this.pushArr()
    // console.log(typeof (this.arr2.have))
    // console.log(this.arr2.have)
  }
}
</script>

<style scoped>
.goodsinfo {
  background-color: #eee;
  overflow: hidden;
  padding-bottom: 40px;
}

.price {
  display: flex;
  justify-content: space-between;
}

.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.mui-card-footer {
  display: block;
}

button {
  margin: 15px 0;
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 380px;
  left: 146px;
}
</style>
