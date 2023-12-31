import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RestaurantShow from '../views/RestaurantShow.vue'
import AppHome from '../views/AppHome.vue'
import payment from '../views/payment.vue'

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
      name: 'RestaurantShow',
      path: '/restaurants/:slug',
      component: RestaurantShow,
      meta: {
        title: "RestaurantShow"
      }
    },
    {
      name: 'payment',
      path: '/payment/:finalCart*/:TotalPrice',
      component: payment,
      meta: {
        title: "payment"
      }
    }
  ]
})

export default router

