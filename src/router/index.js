import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Slider from '../views/Slider.vue'

const routes = [
  {
    path: '/',
    name: 'BLog',
    component: Blog
  },
  {
    path: '/Slider',
    name: 'Slider',
    component: Slider
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
