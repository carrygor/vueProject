<template>
  <div class="editor-wrapper">
    <input id="content" type="text" name="content" hidden>
    <div id="editor" v-html="inputContent" @input="outputContent"></div>
  </div>
</template>

<style lang="css" scoped>
  #editor{
    height: 500px;
  }
  .wangEditor-container{
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid #CCC;
  }
</style>

<script>
  import WangEditor from 'wangeditor'
  export default {
    props: ['inputContent', 'uploadUrl'],
    data() {
      return {
        content: ''
      }
    },
    computed: {
    },
    mounted() {
      this.createEditor()
    },
    methods: {
      createEditor() {
        const self = this
        const editor = new WangEditor('editor')
        editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright',
          '|', 'link', 'unlink', 'table', 'img', 'video', 'insertcode', '|', 'undo', 'redo', 'fullscreen'
        ]
        editor.config.uploadImgUrl = this.uploadUrl
        editor.onchange = function () {
          document.getElementById("content").value = editor.$txt.html()
        }
//        editor.onchange = function() {
//          self.formatContent(this.$txt.html())
//        }
        editor.create()
      },
      formatContent(content) {
        // handle
        // ...
        this.content = content
        this.outputContent()
      },
      outputContent() {
        this.$emit('input', this.content)
      }
    },
    components: {}
  }

</script>
