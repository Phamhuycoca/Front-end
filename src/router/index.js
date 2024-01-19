import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/index',
    name:'index',
    component:()=>import('@/views/Index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/components/Account/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue'),
    children:[
      {
        path:'sanpham',
        name:'sanpham',
        component:()=>import('@/components/Admin/Product/ProductView.vue')
      },
      {
        path:'user',
        name:'user',
        component:()=>import('@/components/Admin/User/UserView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
