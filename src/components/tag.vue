<template>

  <div class="blog-post-wrapper">
    <div class="tag-list" >
      <a href="javascript:" v-for="tag in tagList" @click="clickTag(tag.name)">{{tag.name}}</a>
    </div>
  </div>

</template>

<style>


</style>

<script>

  export default {
    data() {
      return {
        tagList: []
      }
    },
    beforeMount: function () {
      var that = this
      this.auth.getTags(this, function (tags) {
        that.tagList = tags
      })
    },
    methods: {
      clickTag: function (tag) {
        this.auth.data.mode = 'tag'
        this.auth.data.key = tag
        this.$router.push('/')
      }
    }
  }

</script>
