<template>

  <div class="blog-post-wrapper">
    <ul class="blog-post">
      <li class="blog-item" >
        <div class="blog-header">
          <div class="title">
            <h2>{{blog.title}}</h2>
          </div>
          <div class="meta">
            <div class="post-time">
              <i class="fa fa-calendar-o"></i>
              <span>发表于{{blog.createTime}}</span>
              <span class="divider">|</span>
            </div>
            <div class="post-category">
              <i class="fa fa-folder-o"></i>
              <a href="javascript:">{{blog.category}}</a>
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
        <div class="blog-content" v-html="blog.content"></div>
        <div class="blog-footer">
        </div>
      </li>
    </ul>
  </div>

</template>

<style>


</style>

<script>
  export default {
    name: 'single-blog',
    data () {
      return {
        blog: []
      }
    },
    mounted: function() {
      var url = 'http://localhost:3000/api/getBlogs/' + this.$route.params.customURL
      this.$http.get(url, [])
        .then(function (res) {
            this.blog  = res.data
          },
          function (res) {
            console.log("error:")
            console.log(res)
          })
    }
  }


</script>
