<template>

  <div class="blog-post-wrapper">
    <h2 class="title">共计{{categoryList.length}}个分类</h2>
    <ul class="category-list">
      <li v-for="category in categoryList" class="category-item">
        <a href="javascript:" @click="clickCategory(category.name)">{{category.name}}</a>
        <span>({{category.times}})</span>
      </li>
    </ul>
  </div>

</template>

<style>


</style>

<script>
  export default {
    data() {
      return {
        categoryList: []
      }
    },
    beforeMount: function () {
      var that = this
      this.auth.getcategories(this, function (categories) {
        that.categoryList = categories
      })
    },
    methods: {
      clickCategory: function (category) {
        this.auth.data.mode = 'category'
        this.auth.data.key = category
        this.$router.push('/')
      }
    }
  }

</script>
