<template>

  <div class="site-bar-wrapper">
    <div class="site-bar">
      <div class="site-header">
        <h3>Carry's Blog</h3>
        <p>note anything i want</p>
      </div>
      <nav class="site-nav">
        <ul class="menu">
          <li class="menu-item active">
            <a href="/">
              <i class="fa fa-home"></i>
              首页
            </a>
          </li>
          <li class="menu-item">
            <a href="/">
              <i class="fa fa-archive"></i>
              归档
            </a>
          </li>
          <li class="menu-item">
            <router-link v-bind:to="'tag'">
              <i class="fa fa-tags"></i>
              标签
            </router-link>
          </li>
          <li class="menu-item">
            <a href="/">
              <i class="fa fa-search"></i>
              搜索
            </a>
          </li>
        </ul>
      </nav>
      <div class="site-profile">
        <div class="site-author">
          <img class="auth-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493300317163&di=03f1f5553529545a07e84ae791efb4bd&imgtype=0&src=http%3A%2F%2Fpic.weifengke.com%2Fcms%2Fdiscuss%2F2014%2F03%2F01%2F93fdbeb70e98d36dc2394b016e8b6946.jpg" alt="profile">
          <h4 class="auth-name">何文浩</h4>
          <p class="auth-desc">个人博客测试版</p>
        </div>
        <div class="site-state">
          <div class="site-state-item">
            <a href="/">
              <span class="count">{{blogNum}}</span>
              <span class="name">日志</span>
            </a>
          </div>
          <div class="site-state-item">
            <router-link v-bind:to="'category'">
              <span class="count">{{classificationNum}}</span>
              <span class="name">分类</span>
            </router-link>
          </div>
          <div class="site-state-item">
            <router-link v-bind:to="'tag'">
              <span class="count">{{tagNum}}</span>
              <span class="name">标签</span>
            </router-link>
          </div>
        </div>
        <div class="site-link">
          <a href="/" class="link-item">
            <i class="fa fa-github"></i>
            GitHub
          </a>
          <a href="/" class="link-item">
            <i class="fa fa-wechat"></i>
            微信
          </a>
          <a href="/" class="link-item">
            <i class="fa fa-globe"></i>
            知乎
          </a>
          <a href="/" class="link-item">
            <i class="fa fa-globe"></i>
            豆瓣
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<style>


</style>

<script>

  export default {
    data() {
      return {
        blogNum: '0',
        tagNum: '0',
        classificationNum: '0',
      }
    },
    beforeCreate(){
      this.$http.get('http://localhost:3000/api/getSiteBar')
        .then(function (res) {

          this.blogNum = res.data.blogNum
          this.tagNum = res.data.tagNum
          this.classificationNum = res.data.classificationNum

        })
    }
  }

</script>
