import { createRouter, createWebHistory } from 'vue-router'
import Blog from '../views/Blog.vue'
import Slider from '../views/Slider.vue'
import BlogPost from '../views/BlogPost.vue'
import detailTought from '../views/detailTought.vue'

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
  {
    path: '/BlogPost',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/detailTought',
    name: 'detailTought',
    component: detailTought
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
