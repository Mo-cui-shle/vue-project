import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/tabbar/home.vue'
import Member from '../components/tabbar/member.vue'
import Shopcar from '../components/tabbar/shopcar.vue'
import Search from '../components/tabbar/search.vue'
import Newslist from '../components/news/newslist.vue'
import Newsinfo from '../components/news/newsinfo.vue'
import Photolist from '../components/photos/photolist.vue'
import Goodslist from '../components/goods/goodslist.vue'
import Goodsinfo from '../components/goods/goodsinfo.vue'
import Goodsdesc from '../components/goods/goodsdesc.vue'
import Goodscomment from '../components/goods/goodscomment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/member',
    component: Member
  },
  {
    path: '/shopcar',
    component: Shopcar
  },
  {
    path: '/search',
    compoment: Search
  },
  {
    path: '/home/newslist',
    component: Newslist
  },
  {
    path: '/home/newslist/newsinfo',
    component: Newsinfo
  },
  {
    path: '/home/photolist',
    component: Photolist
  },
  {
    path: '/home/goodslist',
    component: Goodslist
  },
  {
    path: '/home/goodslist/goodsinfo/:id',
    component: Goodsinfo
  },
  {
    path: '/home/goodsdesc',
    component: Goodsdesc
  },
  {
    path: '/home/goodscomment',
    component: Goodscomment
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'mui-active'
})

export default router
