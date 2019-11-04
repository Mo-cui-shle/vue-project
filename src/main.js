import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'

import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

import 'mint-ui/lib/style.css'
import { Header, Swipe, SwipeItem, Button, Switch } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)
Vue.use(Vuex)

Vue.config.productionTip = false

// 每次进入网站的时候，都会先执行main.js文件，这个时候，先从本地存储中读取购物车的数据放到 store 中
let car = JSON.parse(localStorage.getItem('car') || '[]')
let store = new Vuex.Store({
  state: {// this.$store.state.***
    car: car// 将购物车中商品数据存储到该数组中
    // {id:商品id,title:商品名称,count:购买的数量,price:单价,selected:true}
  },
  mutations: {// this.$store.commit()
    addToCar (state, goodsinfo) {
      // 添加标识符，标志位没有找到商品
      let flag = false
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          // 如果商品列表中有这个商品，则直接加上数量就可以了
          item.count += parseInt(goodsinfo.count)
          // 标识找到了这个商品
          flag = true
          return true
        }
      })
      // 如果循环完毕得到的flag还是false，即商品列表中没有这个商品，则把商品数据push到car中
      if (!flag) {
        state.car.push(goodsinfo)
      }
      // 当car更新以后，把数组存储到本地localStorage中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo (state, goodsinfo) {
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 修改完购物车的数量，再次把数据保存到localStorage中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar (state, id) {
      // 根据id，删除store中购物出的数据
      state.car.some((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1)
          return true
        }
      })
      // 将删除购物车后的数据保存到本地存储
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected (state, info) {
      state.car.some(item => {
        if (item.id === info.id) {
          item.selected = info.selected// 改变selected的值
        }
      })
      // 存储购物车数据到本地存储，主要是为了改变selected的值
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {// this.$store.getters.***
    getAllCount (state) {
      let c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsSelected (state) {
      // 拿到形如{ id: selected } 的值
      let o = []
      state.car.some(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getCountAndAmount (state) {
      let o = {
        count: 0,
        amount: 0
      }
      state.car.some(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
