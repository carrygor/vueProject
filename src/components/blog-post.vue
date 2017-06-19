<template>

  <div class="blog-post-wrapper">
    <ul class="blog-post">
      <li v-for="blog in blogs" class="blog-item" >
        <div class="blog-header">
          <div class="title">
            <h2>{{blog.title}}</h2>
          </div>
          <div class="meta">
            <div class="post-time">
              <i class="fa fa-calendar-o"></i>
              <span>发表于{{blog.createTime.substr(0,10)}}</span>
              <span class="divider">|</span>
            </div>
            <div class="post-category">
              <i class="fa fa-folder-o"></i>
              <a href="javascript:" @click="clickCategory(blog.category)">{{blog.category}}</a>
              <span class="divider">|</span>
            </div>
            <div class="post-comment">
              <i class="fa fa-commenting-o"></i>
              <span>评论：{{blog.commented_counts}}</span>
              <span class="divider">|</span>
            </div>
            <div class="post-read">
              <i class="fa fa-eye"></i>
              <span>阅读：{{blog.accessed_times}}</span>
            </div>
          </div>
        </div>
        <div class="blog-content" v-html="blog.summary"></div>
        <div class="blog-footer">
          <router-link v-bind:to="'blog/' + blog.customURL" class="btn-read-all">
            阅读全文 »
          </router-link>
        </div>
      </li>
    </ul>
  </div>

</template>

<style>


</style>

<script>
  export default {
    name: 'blogPost',
    data () {
      return {
        blogs: []
      }
    },
    methods: {
      clickCategory: function (category) {
        this.auth.data.mode = 'category'
        this.auth.data.key = category
        var that = this
        this.auth.getBlogs(this, function (blogs) {
          that.blogs = blogs
        })
      }
    },
    beforeMount: function() {
//      this.$http.get('http://localhost:3000/api/getBlogs', [])
//        .then(function (res) {
//          this.blogs = res.data
//        },
//        function (res) {
//          console.log("error:")
//          console.log(res)
//        })
      var that = this
      this.auth.getBlogs(this, function (blogs) {
        that.blogs = blogs
      })
    }
  }

</script>
