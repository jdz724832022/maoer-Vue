// 配置路由
import VueRouter from 'vue-router'
import Vue from 'vue'

// 1.通过vue.use使用插件
Vue.use(VueRouter)

// 2.创建vue.router对象
const router = new VueRouter({
  // 配置映射关系
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/albums',
      component: () => import('../views/albums.vue')
    },
    {
      path: '/catalogs',
      component: () => import('../views/catalogs.vue')
    },
    {
      path: '/recommend',
      component: () => import('../views/recommend.vue')
    },
    {
      path: '/detail/:albumid',
      name: 'detail',
      component: () => import('../views/detail/detail.vue')
    },
    {
      path: '/catalogs/:cataId',
      name: 'catalog',
      component: () => import('../components/catalogs/cataItem.vue')
    },
    {
      path: '/sound',
      component: () => import('../views/sound.vue'),
      children: [
        {
          path: '/',
          redirect: '/soundIndru/:id'
        },
        {
          path: '/soundIndru/:id',
          component: () => import('../components/sound/soundIndru.vue')
        },
        {
          path: '/soundTalk/:id',
          component: () => import('../components/sound/soundTalk.vue')
        },
        {
          path: '/soundPic/:id',
          component: () => import('../components/sound/soundPic.vue')
        }
      ]
    }
  ],
  linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
export default router
