/**
 * Created by 724291943 on 2017/5/24.
 */

export default {

  data:{
    isAuth : false
  },
  login(context, formData, callback) {
    var that = this

    context.$http.post('http://localhost:3000/api/login', formData, {credentials : true})
      .then(function (res) {

        // console.log(res.data)
        if (res.data.login == 1){
          that.data.isAuth = true
          console.log('登陆成功')
          callback('1')
        } else {
          that.data.isAuth = false
          callback('0')
        }
        //todo:登录

      },function (res) {
        console.log('登录错误: ' + res)
      })

  }

}
