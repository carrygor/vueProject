<template>

  <div class="blog-post-wrapper">
    <form action="http://carrygor.com/api/login" v-on:submit.prevent>
      <div class="login_box">
        <h2>管理员登录</h2>
        <div class="row">
          <label for="username">账户：</label>
          <input v-model="user.username" type="text" id="username" name="username">
        </div>
        <div class="row">
          <label for="password">密码：</label>
          <input v-model="user.password" type="password" id="password" name="password">
        </div>
        <input type="submit" class="btn-submit" value="登录" v-on:click="checkForm()">
      </div>
    </form>
  </div>

</template>

<style>

  @import "../assets/css/admin.css";

</style>

<script>

  import crypto from 'crypto'

  export default {

    data() {
      return {
        user: {
          username:"",
          password:"12"
        }
      }
    },
    mounted() {



    },
    methods: {

      checkForm() {
        var salt = 'carry'
        var md5 = crypto.createHash('md5')
        md5.update(this.user.password + salt)
        this.user.password = md5.digest('hex')
//        todo:校验表单
        if(true){
            this.submitForm()
        }
      },
      submitForm() {
        var Vm = this
        var formData = JSON.stringify(this.user)
        this.auth.login(this, formData, function (data) {
          if(data == 1){
              Vm.$router.push('/admin')
          }
        })
      }
    }

  }

</script>
