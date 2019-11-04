<template>
  <div class="home">
    <!-- 轮播图 -->
    <swiper></swiper>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <span class="mui-icon mui-icon-image"></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">视屏专区</div>
        </a>
      </li>

      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import swiper from '../subcomponents/swiper.vue'
export default {
  components: {
    swiper
  }
}
</script>

<style scoped>
.mui-grid-view.mui-grid-9 {
  border: none;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
}
</style>
