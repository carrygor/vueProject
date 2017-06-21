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
        <div class="blog-content" v-html="blog.content"></div>
        <div class="blog-footer">
        </div>
      </li>
    </ul>

    <ul class="comment_list">
      <li class="comment" v-for="reply in replies">
        <p class="name">{{reply.replyer}}</p>
        <div class="content" v-html="reply.content"></div>
        <p class="date">评论于{{reply.replyTime.substr(0,10)}}</p>
      </li>
    </ul>

    <div class="reply_box">
      <h4>发表回复</h4>
      <label>昵称：<input type="text" v-model="newReply.replyer" ></label>
      <label>邮箱：<input type="text" v-model="newReply.replyerEmail"></label>
      <comment-editor v-model="newReply.content" @input="inputReply"></comment-editor>
      <button type="button" @click="postReply">发表</button>
    </div>
  </div>

</template>

<style>


</style>

<script>
  import commentEditor from './comment-editor'

  export default {
    name: 'single-blog',
    data () {
      return {
        blog: {},
        replies: [],
        newReply: {
          articleId: '',
          replyer: '',
          replyerEmail: '',
          content: ''
        }
      }
    },
    beforeMount: function() {
      this.refresh()
    },
    methods: {
      clickCategory: function (category) {
        this.auth.data.mode = 'category'
        this.auth.data.key = category
        var that = this
        this.auth.getBlogs(this, function (blogs) {
          that.blogs = blogs
        })
      },
      refresh: function () {
        var url = 'http://localhost:3000/api/getBlog/' + this.$route.params.customURL
        var vm = this
        this.$http.get(url, [])
          .then(function (res) {
              vm.blog  = res.data.blog
              vm.blog.createTime = vm.blog.createTime.substr(0,10)
              vm.replies = res.data.replies
              vm.newReply.articleId = res.data.blog._id
            },
            function (res) {
              console.log("error:")
              console.log(res)
            })
      },
      inputReply: function (content) {
        this.newReply.content = content
      },
      postReply: function () {
        const vm = this
        this.$http.post('http://localhost:3000/api/postReply', vm.newReply)
          .then(function (res) {
            vm.newReply.replyer = ''
            vm.newReply.replyerEmail = ''
            vm.newReply.content = ''
            vm.$children[0].clearEditor()
            vm.refresh()
          })
      }
    },
    components : {
      'comment-editor' : commentEditor
    }
  }


</script>
