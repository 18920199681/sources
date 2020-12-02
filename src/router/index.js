import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueQr from '@/components/VueQr'
import VueSwiper from '@/components/VueSwiper'
import MySwiper from '@/components/MySwiper'
import AMap from '@/components/AMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vue-qr',
      name: 'VueQr',
      component: VueQr
    },
    {
      path: '/vue-swiper',
      name: 'VueSwiper',
      component: VueSwiper
    },
    {
      path: '/my-swiper',
      name: 'MySwiper',
      component: MySwiper
    },
    {
      path: '/a-map',
      name: 'AMap',
      component: AMap
    }
  ]
})
