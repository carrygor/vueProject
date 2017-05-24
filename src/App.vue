<template>
  <div id="app" class="container">
    <site-bar></site-bar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {}
  },
  beforeCreate(){
    this.auth.login(this, '', function (data) {
    })

  },
}
</script>

<style scoped>

  @import "assets/css/global.css";
  @import "assets/fonts/font-awesome.min.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
