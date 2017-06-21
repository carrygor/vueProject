<template>
  <div class="editor-wrapper">
    <input id="content" type="text" name="content" hidden>
    <div id="editor" v-html="inputContent" @input="outputContent"></div>
  </div>
</template>

<style lang="css" scoped>
  #editor{
    height: 100px;
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
        content: '',
        newReply: {
          content: ''
        }
      }
    },
    computed: {
    },
    mounted() {
      this.createEditor()
    },
    methods: {
      createEditor() {
        const vm = this
        var editor = new WangEditor('editor')
        editor.config.menus = []
        editor.config.uploadImgUrl = this.uploadUrl
        editor.create()
        editor.onchange = function () {
          document.getElementById("content").value = editor.$txt.html()
          vm.formatContent(editor.$txt.html())
        }
      },
      formatContent(content) {
        // handle
        // ...
        this.content = content
        this.outputContent()
      },
      clearEditor() {
        document.getElementById('editor').innerHTML = '<p><br></p>'
      },
      outputContent() {
        this.$emit('input', this.content)
      }
    },
    components: {}
  }

</script>
