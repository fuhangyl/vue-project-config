import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/layout-rem',
    name: 'LayoutRem',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/layout-rem')
  },
  {
    path: '/swiper-preview',
    name: 'SwiperPreview',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/swiper-preview')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
