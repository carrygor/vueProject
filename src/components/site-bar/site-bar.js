/**
 * Created by 724291943 on 2017/5/10.
 */
import siteBarComponent from './site-bar.vue';

const siteBar ={
  install:function (Vue) {
    Vue.component('site-bar',siteBarComponent)
  }
}

export default siteBar
