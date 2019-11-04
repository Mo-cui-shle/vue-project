<template>
  <div class="goodslist">
    <!-- <router-link class="goods-item" to="/home/goodslist/goodsinfo" tag='div'>
      <img src alt="图片">
      <h1 class="title">华为手机 256G</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥4699</span>
          <span class="old">￥4999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩30部</span>
        </p>
      </div>
    </router-link> -->
    <router-link class="goods-item" :to="'/home/goodslist/goodsinfo/'+item.id" tag='div' v-for='item in goodslist' :key='item.id'>
      <img :src='item.src' alt="图片">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.old_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.have }}部</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodslist: [
        { id: 1, title: '华为', sell_price: 4699, old_price: 4999, have: 30, src: 'http://img2.zol.com.cn/product/190_500x375/902/cee1PflmqGzIw.jpg' },
        { id: 2, title: '苹果', sell_price: 8699, old_price: 8999, have: 100, src: 'http://img11.360buyimg.com/n1/s450x450_jfs/t1/4427/28/16274/603387/5be17879Ecc961720/53481d3108ee8fa4.png' },
        { id: 3, title: '小米', sell_price: 999, old_price: 1099, have: 50, src: 'http://p0.ifengimg.com/pmop/2018/0613/6627FC83B9F8C9B4E5C87E4D07300010276FA67C_size61_w700_h516.jpeg' },
        { id: 4, title: '三星', sell_price: 1999, old_price: 2099, have: 60, src: 'https://p3.ssl.qhimgs1.com/sdr/400__/t014d1e544a27238889.jpg' },
        { id: 5, title: 'oppo', sell_price: 2399, old_price: 2599, have: 70, src: 'http://bpic.588ku.com/element_origin_min_pic/16/12/15/0e4620f19be8cf96fb397eec5bb01a4d.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}

.goods-item {
  width: 49%;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  margin: 4px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 293px;
}

img {
  width: 100%;
  height:200px;
}

.title {
  font-size: 14px;
}

.info {
  background-color: #eee;
}

.info p {
  margin: 0;
  padding: 5px;
}

.now {
  color: red;
  font-weight: bold;
  font-size: 16px;
}

.old {
  text-decoration: line-through;
  font-size: 12px;
  margin-left: 10px;
}

.info .sell {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
</style>
