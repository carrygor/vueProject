<template>
  <div class="blog-post-wrapper">
    <form action="http://localhost:3000/api/postBlog" method="post">
      <ul class="edit-list">
        <li class="edit-item">
          <label for="title">标题：</label>
          <input type="text" id="title" name="title">
        </li>
        <li class="edit-item">
          <v-editor
            :input-content="inputContent"
            :upload-url="uploadUrl"
            v-model="outputContent"></v-editor>
        </li>
        <li class="edit-item">
          <label for="category">分类：</label>
          <input type="text" id="category" name="category">
          <!--<select name="category" id="category">-->
          <!--<option value="技术">技术</option>-->
          <!--<option value="生活">生活</option>-->
          <!--</select>-->
          <a href="#" class="new-category">新建分类</a>
        </li>
        <li class="edit-item">
          <label for="customURL"> URL： /</label>
          <input type="text" id="customURL" name="customURL">
        </li>
        <li class="edit-item">
          <label for="tag">标签：</label>
          <input type="text" id="tag" name="tag">
        </li>
        <li class="edit-item">
          <label>设置：</label>
          <label><input name="setup" type="checkbox" value="禁止评论">禁止评论</label>
          <label><input name="setup" type="checkbox" value="草稿">草稿</label>
        </li>
        <li class="edit-item submit">
          <input type="submit" class="btn-submit" value="保存"/>
        </li>
      </ul>
    </form>
  </div>

</template>

<style>

  @import "../assets/css/wangEditor.min.css";
  @import "../assets/css/admin.css";

</style>

<script>

  import Editor from './editor'
  export default {
    data() {
      return {
        // input content to editor
        inputContent: '',
        // output content from editor
        outputContent: '',
        // set image upload api url
        uploadUrl: ''
      }
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
      submit() {
        console.log(this.outputContent)
      }
    },
    components: {
      'v-editor': Editor
    }
  }

</script>
