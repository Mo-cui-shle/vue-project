<template>
<div class='comment'>
  <h1>发表评论</h1>
  <hr>
  <textarea placeholder='请输入要评论的内容，最多120字' maxlength='120'></textarea>
  <mt-button type='primary' size='large'>发表评论</mt-button>

  <div class='cmt-list'>
    <div class='cmt-item'>
      <div class='cmt-title'>
      <span>用户：匿名用户</span>
      <span>发表时间：2019-09-28</span>
      </div>
      <div class='cmt-body'>
      快到国庆节了...
      </div>
    </div>

     <div class='cmt-item'>
      <div class='cmt-title'>
      <span>用户：匿名用户</span>
      <span>发表时间：2019-09-28</span>
      </div>
      <div class='cmt-body'>
      快到国庆节了...
      </div>
    </div>

     <div class='cmt-item'>
      <div class='cmt-title'>
      <span>用户：匿名用户</span>
      <span>发表时间：2019-09-28</span>
      </div>
      <div class='cmt-body'>
      快到国庆节了...
      </div>
    </div>
  </div>
  <mt-button type='danger' size='large' plain>加载更多</mt-button>
</div>
</template>

<script>
</script>

<style scoped>
h1{
    font-size:18px;
}

textarea{
    font-size:14px;
    height:85px;
    margin:0;
}

.cmt-list{
    margin:10px 0;
}

.cmt-title{
    background-color:#ccc;
    line-height:30px;
    font-size:12px;
    display:flex;
    justify-content:space-between;
}

.cmt-body{
    line-height:35px;
    text-indent:2em;
    font-size:14px;
}
</style>
