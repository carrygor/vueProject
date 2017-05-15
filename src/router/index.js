import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

//components
import blogPost from '@/components/blog-post'
import Admin from '@/components/admin'
import singleBlog from '@/components/single-blog'


Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogPost',
      component: blogPost
    },
    {
      path:'/admin',
      name:'admin',
      component:Admin,
    },
    {
      path:'/blog/:customURL',
      component: singleBlog,
    }
  ]
})

