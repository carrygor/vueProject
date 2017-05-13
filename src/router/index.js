import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from  '@/components/Test'
import blogPost from '@/components/blog-post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'blogPost',
      component: blogPost
    },
    {
      path:'/test',
      name:'Test',
      component:Test,
    }
  ]
})
