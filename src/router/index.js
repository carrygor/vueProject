import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

//自制插件
import auth from '@/auth/auth'

//Frame
import App from '@/App'

//index-components
import blogPost from '@/components/blog-post'
import singleBlog from '@/components/single-blog'

//admin-components
import admin from '@/components/admin'
import login from '@/components/login'

Vue.use(Router)
Vue.use(VueResource)
Vue.prototype.auth = auth

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogPost',
      component: blogPost
    },
    {
      path:'/admin',
      component: App,
      children: [
        {path: '/',component: admin},
        {path: 'login',component: login},
      ],
    },
    {
      path:'/blog/:customURL',
      component: singleBlog,
    }
  ]
})

