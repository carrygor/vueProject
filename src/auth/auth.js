/**
 * Created by 724291943 on 2017/5/24.
 */

export default {

  data:{
    loading: false,
    isAuth : false,
    mode : 'all',
    key : ''
  },
  login(context, formData, callback) {
    this.data.loading = true
    var that = this

    context.$http.post('http://carrygor.com/api/login', formData, {credentials : true})
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
        that.data.loading = false
        //todo:登录

      },function (res) {
        console.log('登录错误: ' + res)
      })

  },
  getBlogs(context, callback) {

    var url = 'http://carrygor.com/api/getBlogs/' + this.data.mode
    if(this.data.key != ''){
      url += '/' + this.data.key
    }

    context.$http.get(url, [])
      .then(function (res) {
          callback(res.data)
        },
        function (res) {
          console.log("error:")
          console.log(res)
        })
  },
  getTags(context, callback) {
    context.$http.get('http://carrygor.com/api/getTags',[])
      .then(function (res) {
        callback(res.data)
      },
      function (res) {
        console.log('err: ' + res)
      })
  },
  getcategories(context, callback) {
    context.$http.get('http://carrygor.com/api/getcategories',[])
      .then(function (res) {
          callback(res.data)
        },
        function (res) {
          console.log('err: ' + res)
        })
  }

}
