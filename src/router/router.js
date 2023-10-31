import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import SearchPage from '../components/SearchPage.vue'
import AppHome from '../components/AppHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppHome
    },
    {
      name: 'homepage',
      path: '/home',
      component: HomePage,
      meta: {
        title: "Deliveboo"
      }
    },
    {
      name: 'search',
      path: '/search',
      component: SearchPage,
      meta: {
        title: "Search"
      }
    }
  ]
})

export default router
